import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

// A living pastel scene of glossy, translucent "jelly-glass" symbols — rounded
// stars, chunky rings and plump plus signs — drifting in a soft warm light with
// floating sparkles. A glassy material (transmission + clearcoat + a touch of
// iridescence) gives each shape real depth, wet gloss and bright reflected
// highlights. Eases in on load, drifts with the mouse, and the camera glides
// forward as you scroll. Falls back silently (static hero image) on
// reduced-motion or no WebGL.

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

// Build a closed 2D outline from points with EVERY corner rounded — works for
// convex tips and concave "armpits" alike (used for the star and the plus).
function roundedShape(pts: number[][], radius: number) {
  const shape = new THREE.Shape();
  const n = pts.length;
  const v = new THREE.Vector2();
  const w = new THREE.Vector2();
  for (let i = 0; i < n; i++) {
    const prev = pts[(i - 1 + n) % n];
    const curr = pts[i];
    const next = pts[(i + 1) % n];
    v.set(curr[0] - prev[0], curr[1] - prev[1]);
    w.set(next[0] - curr[0], next[1] - curr[1]);
    const lv = v.length() || 1;
    const lw = w.length() || 1;
    const r = Math.min(radius, lv / 2, lw / 2);
    const ax = curr[0] - (v.x / lv) * r;
    const ay = curr[1] - (v.y / lv) * r;
    const bx = curr[0] + (w.x / lw) * r;
    const by = curr[1] + (w.y / lw) * r;
    if (i === 0) shape.moveTo(ax, ay);
    else shape.lineTo(ax, ay);
    shape.quadraticCurveTo(curr[0], curr[1], bx, by);
  }
  shape.closePath();
  return shape;
}

const EXTRUDE: THREE.ExtrudeGeometryOptions = {
  depth: 0.5, bevelEnabled: true, bevelThickness: 0.18,
  bevelSize: 0.16, bevelSegments: 6, steps: 1, curveSegments: 20,
};

// A friendly 6-point star with softly rounded points (no spikes).
function starGeometry() {
  const points: number[][] = [];
  const spikes = 6;
  const outer = 1.0;
  const inner = 0.54;
  for (let i = 0; i < spikes * 2; i++) {
    const rad = i % 2 === 0 ? outer : inner;
    const a = (i / (spikes * 2)) * Math.PI * 2 + Math.PI / 2;
    points.push([Math.cos(a) * rad, Math.sin(a) * rad]);
  }
  const geo = new THREE.ExtrudeGeometry(roundedShape(points, 0.17), EXTRUDE);
  geo.center();
  geo.computeVertexNormals();
  return geo;
}

// A plump plus / cross sign with rounded corners.
function plusGeometry() {
  const t = 0.34, L = 1.02;
  const points = [
    [t, L], [-t, L], [-t, t], [-L, t], [-L, -t], [-t, -t],
    [-t, -L], [t, -L], [t, -t], [L, -t], [L, t], [t, t],
  ];
  const geo = new THREE.ExtrudeGeometry(roundedShape(points, 0.16), EXTRUDE);
  geo.center();
  geo.computeVertexNormals();
  return geo;
}

// A chunky ring (a circle / donut).
function ringGeometry() {
  return new THREE.TorusGeometry(0.66, 0.28, 28, 80);
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
  renderer.toneMappingExposure = 1.1;

  const scene = new THREE.Scene();
  scene.background = gradientTexture();
  scene.fog = new THREE.Fog(0xece0d2, 13, 30);

  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  pmrem.dispose();

  const camera = new THREE.PerspectiveCamera(45, host.clientWidth / host.clientHeight, 0.1, 100);
  camera.position.set(0, 0, 9);

  scene.add(new THREE.HemisphereLight(0xcdd8f7, 0xf7e9da, 0.7));
  const key = new THREE.DirectionalLight(0xffe9d6, 1.15); key.position.set(4, 6, 6); scene.add(key);
  const fill = new THREE.DirectionalLight(0xbcd0ff, 0.55); fill.position.set(-6, -2, 3); scene.add(fill);
  const rim = new THREE.DirectionalLight(0xffffff, 0.9); rim.position.set(-2, 1, -6); scene.add(rim); // backlight → glowing translucent edges

  // Glossy translucent symbols: stars, rings and plus signs
  const group = new THREE.Group();
  scene.add(group);
  const palette = [0xff7d45, 0xffab3d, 0x43c894, 0x7fe0b3, 0x76b4ff, 0xd07ad6];
  const shapeGeos = [starGeometry(), ringGeometry(), plusGeometry()];
  // A curated layout frames the headline with balanced shapes on every side and
  // a clearer centre — so the composition reads well on every load (only the
  // tumble, bob and a little jitter are random). g = shape, c = palette index.
  const layout = [
    { x: -3.8, y: 2.0, z: 0.2, s: 1.6, g: 0, c: 0 },    // star — coral (top-left)
    { x: 3.9, y: 2.2, z: -0.3, s: 1.5, g: 1, c: 2 },    // ring — jade (top-right)
    { x: 4.1, y: 0.1, z: 0.1, s: 1.6, g: 2, c: 1 },     // plus — amber (right)
    { x: 3.1, y: -2.2, z: 0.3, s: 1.5, g: 0, c: 5 },    // star — orchid (bottom-right)
    { x: -3.6, y: -2.0, z: -0.2, s: 1.7, g: 1, c: 4 },  // ring — sky blue (bottom-left)
    { x: -4.6, y: 0.5, z: 0.1, s: 1.4, g: 2, c: 3 },    // plus — mint (left)
    { x: 1.0, y: 2.8, z: -1.2, s: 1.0, g: 1, c: 5 },    // ring — orchid (high & deep)
    { x: -0.8, y: -2.8, z: -1.2, s: 0.95, g: 0, c: 2 }, // star — jade (low & deep)
  ];
  const xMul = isMobile ? 0.6 : 1; // pull shapes inward on narrow screens
  const sMul = isMobile ? 0.82 : 1;
  const slots = isMobile ? layout.slice(0, 5) : layout;
  type Shape = { mesh: THREE.Mesh; baseY: number; rx: number; ry: number; rz: number; bob: number; phase: number; scale: number };
  const shapes: Shape[] = [];
  slots.forEach((L) => {
    const color = palette[L.c];
    const mat = new THREE.MeshPhysicalMaterial({
      color,
      metalness: 0,
      roughness: 0.12,
      clearcoat: 1,
      clearcoatRoughness: 0.06,
      transmission: isMobile ? 0.12 : 0.16,
      thickness: 1.1,
      ior: 1.34,
      attenuationColor: new THREE.Color(color),
      attenuationDistance: 1.3,
      iridescence: 0.45,
      iridescenceIOR: 1.3,
      transparent: true,
      opacity: 1,
      envMapIntensity: 2.1,
      emissive: color,
      emissiveIntensity: 0.18,
    });
    const m = new THREE.Mesh(shapeGeos[L.g], mat);
    m.position.set(L.x * xMul + (Math.random() - 0.5) * 0.5, L.y + (Math.random() - 0.5) * 0.5, L.z);
    m.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
    const scale = L.s * sMul;
    m.scale.setScalar(0.001);
    group.add(m);
    shapes.push({
      mesh: m, baseY: m.position.y, scale, phase: Math.random() * Math.PI * 2, bob: 0.4 + Math.random() * 0.5,
      rx: (Math.random() - 0.5) * 0.18, ry: (Math.random() - 0.5) * 0.26, rz: (Math.random() - 0.5) * 0.14,
    });
  });

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

    for (const c of shapes) {
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
