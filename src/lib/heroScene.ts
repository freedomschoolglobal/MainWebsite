import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

// A living pastel "dreamscape": faceted glass crystals drifting in a soft
// periwinkle→blush→cream sky, with floating light particles. Eases in on load,
// drifts with the mouse, and the camera glides forward as you scroll.
// Falls back silently (static hero image) on reduced-motion or no WebGL.

function gradientTexture() {
  const c = document.createElement('canvas');
  c.width = 4; c.height = 256;
  const ctx = c.getContext('2d')!;
  const g = ctx.createLinearGradient(0, 0, 0, 256);
  g.addColorStop(0.0, '#c4cdd2'); // soft dusty blue-grey
  g.addColorStop(0.4, '#dcd2c6'); // warm taupe
  g.addColorStop(0.72, '#eddcc9'); // soft sand
  g.addColorStop(1.0, '#f7efe2'); // warm cream
  ctx.fillStyle = g; ctx.fillRect(0, 0, 4, 256);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function particleTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const ctx = c.getContext('2d')!;
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.35, 'rgba(255,255,255,0.65)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g; ctx.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}

// A crystalline dahlia: layered rings of pointed petals fanning out, upright in
// the centre — built once and reused (merged into a single geometry per bloom).
function dahliaGeometry() {
  const base = new THREE.OctahedronGeometry(1, 0);
  const parts: THREE.BufferGeometry[] = [];
  const rings = [
    { count: 13, sx: 0.16, sy: 0.95, sz: 0.09, tilt: 1.38, y: -0.05 },
    { count: 11, sx: 0.15, sy: 0.78, sz: 0.08, tilt: 1.05, y: 0.06 },
    { count: 9, sx: 0.13, sy: 0.6, sz: 0.07, tilt: 0.75, y: 0.16 },
    { count: 7, sx: 0.11, sy: 0.42, sz: 0.06, tilt: 0.45, y: 0.24 },
    { count: 5, sx: 0.09, sy: 0.26, sz: 0.05, tilt: 0.2, y: 0.3 },
  ];
  const qx = new THREE.Quaternion();
  const qy = new THREE.Quaternion();
  const xAxis = new THREE.Vector3(1, 0, 0);
  const yAxis = new THREE.Vector3(0, 1, 0);
  const o = new THREE.Object3D();
  rings.forEach((r, ri) => {
    for (let i = 0; i < r.count; i++) {
      const g = base.clone();
      g.scale(r.sx, r.sy, r.sz);
      g.translate(0, r.sy, 0); // base near origin, tip along +Y
      const ang = (i / r.count) * Math.PI * 2 + ri * 0.5;
      qx.setFromAxisAngle(xAxis, r.tilt); // tilt petal outward
      qy.setFromAxisAngle(yAxis, ang); // revolve around the bloom
      o.quaternion.copy(qy).multiply(qx);
      o.position.set(0, r.y, 0);
      o.updateMatrix();
      g.applyMatrix4(o.matrix);
      parts.push(g);
    }
  });
  base.dispose();
  const merged = mergeGeometries(parts, false)!;
  parts.forEach((p) => p.dispose());
  merged.computeVertexNormals();
  return merged;
}

export function initHeroScene(canvas: HTMLCanvasElement) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const host = (canvas.closest('.hero') as HTMLElement) || canvas.parentElement!;
  const hero = canvas.closest('.hero') as HTMLElement | null;

  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'high-performance' });
  } catch {
    return; // no WebGL → static image stays
  }

  const isMobile = Math.min(window.innerWidth, window.innerHeight) < 700;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
  renderer.setSize(host.clientWidth, host.clientHeight, false);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;

  const scene = new THREE.Scene();
  scene.background = gradientTexture();
  scene.fog = new THREE.Fog(0xece0d2, 13, 30);

  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  pmrem.dispose();

  const camera = new THREE.PerspectiveCamera(45, host.clientWidth / host.clientHeight, 0.1, 100);
  camera.position.set(0, 0, 9);

  scene.add(new THREE.HemisphereLight(0xcdd8f7, 0xf7e9da, 0.7));
  const key = new THREE.DirectionalLight(0xffe9d6, 1.1); key.position.set(4, 6, 6); scene.add(key);
  const fill = new THREE.DirectionalLight(0xbcd0ff, 0.55); fill.position.set(-6, -2, 3); scene.add(fill);

  // Crystals
  const group = new THREE.Group();
  scene.add(group);
  const palette = [0xd0875c, 0xd69885, 0xc2a86a, 0x93b082, 0xdaa06a, 0xcf8f9f];
  const dahliaGeo = dahliaGeometry();
  const count = isMobile ? 4 : 7;
  type Crystal = { mesh: THREE.Mesh; baseY: number; rx: number; ry: number; rz: number; bob: number; phase: number; scale: number };
  const crystals: Crystal[] = [];
  for (let i = 0; i < count; i++) {
    const color = palette[i % palette.length];
    const mat = new THREE.MeshPhysicalMaterial({
      color, metalness: 0, roughness: 0.1, clearcoat: 1, clearcoatRoughness: 0.25,
      transparent: true, opacity: 0.7, side: THREE.DoubleSide,
      flatShading: true, envMapIntensity: 1.05, emissive: color, emissiveIntensity: 0.16,
    });
    const m = new THREE.Mesh(dahliaGeo, mat);
    const a = Math.random() * Math.PI * 2;
    const r = 1.9 + Math.random() * 2.3;
    m.position.set(Math.cos(a) * r, (Math.random() - 0.5) * 4, Math.sin(a) * r - 1.5);
    m.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
    const scale = 0.6 + Math.random() * 0.95;
    m.scale.setScalar(0.001);
    group.add(m);
    crystals.push({
      mesh: m, baseY: m.position.y, scale, phase: Math.random() * Math.PI * 2, bob: 0.4 + Math.random() * 0.5,
      rx: (Math.random() - 0.5) * 0.16, ry: (Math.random() - 0.5) * 0.24, rz: (Math.random() - 0.5) * 0.12,
    });
  }

  // Particles
  const pCount = isMobile ? 350 : 850;
  const pGeo = new THREE.BufferGeometry();
  const pos = new Float32Array(pCount * 3);
  const vel = new Float32Array(pCount);
  for (let i = 0; i < pCount; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 18;
    pos[i * 3 + 1] = (Math.random() - 0.5) * 13;
    pos[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;
    vel[i] = 0.08 + Math.random() * 0.22;
  }
  pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const points = new THREE.Points(pGeo, new THREE.PointsMaterial({
    size: isMobile ? 0.09 : 0.075, map: particleTexture(), transparent: true, opacity: 0.85,
    depthWrite: false, blending: THREE.AdditiveBlending, color: 0xffffff, sizeAttenuation: true,
  }));
  scene.add(points);

  // Interaction
  const mouse = { x: 0, y: 0 };
  let scrollT = 0;
  const cur = { rotX: 0, rotY: 0, camZ: 9 };

  window.addEventListener('pointermove', (e) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
  }, { passive: true });
  const onScroll = () => {
    const hH = host.offsetHeight || window.innerHeight;
    scrollT = Math.min(Math.max(window.scrollY / hH, 0), 1);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  window.addEventListener('resize', () => {
    camera.aspect = host.clientWidth / host.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(host.clientWidth, host.clientHeight, false);
  });

  const clock = new THREE.Clock();
  let t = 0;
  let running = false;
  let raf = 0;
  const posAttr = pGeo.attributes.position as THREE.BufferAttribute;

  function frame() {
    if (!running) return;
    raf = requestAnimationFrame(frame);
    const dt = Math.min(clock.getDelta(), 0.05);
    t += dt;

    const intro = Math.min(t / 1.6, 1);
    const introE = 1 - Math.pow(1 - intro, 3); // easeOutCubic

    const tRotY = mouse.x * 0.18;
    const tRotX = -mouse.y * 0.12;
    const tCamZ = (9 - introE * 2) - scrollT * 4.5;
    cur.rotX += (tRotX - cur.rotX) * 0.05;
    cur.rotY += (tRotY - cur.rotY) * 0.05;
    cur.camZ += (tCamZ - cur.camZ) * 0.06;

    group.rotation.x = cur.rotX + scrollT * 0.2;
    group.rotation.y = cur.rotY + t * 0.03;
    camera.position.z = cur.camZ;
    camera.position.y = scrollT * 1.2;
    camera.lookAt(0, scrollT * 0.6, -1);

    for (const c of crystals) {
      c.mesh.rotation.x += c.rx * dt;
      c.mesh.rotation.y += c.ry * dt;
      c.mesh.rotation.z += c.rz * dt;
      c.mesh.position.y = c.baseY + Math.sin(t * c.bob + c.phase) * 0.18;
      c.mesh.scale.setScalar(c.scale * introE);
    }

    for (let i = 0; i < pCount; i++) {
      let y = posAttr.getY(i) + vel[i] * dt;
      if (y > 6.5) y = -6.5;
      posAttr.setY(i, y);
    }
    posAttr.needsUpdate = true;
    points.rotation.y = t * 0.02;

    renderer.render(scene, camera);
  }

  function setRunning(on: boolean) {
    if (on && !running) { running = true; clock.start(); frame(); }
    else if (!on && running) { running = false; cancelAnimationFrame(raf); clock.stop(); }
  }

  document.addEventListener('visibilitychange', () => setRunning(!document.hidden));
  if (hero && 'IntersectionObserver' in window) {
    new IntersectionObserver((entries) => setRunning(entries[0].isIntersecting), { threshold: 0 }).observe(hero);
  } else {
    setRunning(true);
  }
  setRunning(true);
  canvas.classList.add('is-ready'); // CSS crossfades the scene in over the image
}
