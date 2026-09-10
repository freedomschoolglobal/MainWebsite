// Site-wide content. Written from the school's own messaging + vision docs and
// the current site. Plain, human copy — edit freely as the school grows.

export interface Card {
  title: string;
  body: string;
  coral?: number;
  icon?: string;
}

/* ---- Home: why choose ---- */
export const whyChoose: Card[] = [
  {
    title: 'Student-centered learning',
    body: 'We start with your teen — their curiosity, their pace, their goals. Learning is shaped around the person, not squeezed into a one-size-fits-all timetable.',
    coral: 1,
  },
  {
    title: 'Project-based, every week',
    body: 'Students don’t just take notes. Every week they make something real — a business plan, a film, an experiment, an essay worth reading — and share it with others.',
    coral: 4,
  },
  {
    title: 'Collaborative & dialogue-rich',
    body: 'Small live classes where teens talk, question and think out loud together. Ideas get challenged. Voices get heard. Nobody hides at the back.',
    coral: 6,
  },
];

/* ---- Home: how we're different ---- */
export const differences: { traditional: string; freedom: string }[] = [
  { traditional: 'Memorize facts for the test', freedom: 'Learn how to think for yourself' },
  { traditional: 'One pace for thirty students', freedom: 'A path shaped around each learner' },
  { traditional: 'Stress, ranking and pressure', freedom: 'Purpose, calm and real motivation' },
  { traditional: 'Sit still and listen', freedom: 'Create, build and collaborate' },
  { traditional: 'Subjects in separate boxes', freedom: 'Skills connected to real life' },
  { traditional: 'Learning stops at the school gate', freedom: 'The whole world is the campus' },
];

/* ---- Freedom within structure: the foundation we guarantee ---- */
// The handful of capacities that, if a young person lacks them, take options
// off the table for life. We guarantee these; everything above them is free.
export const foundation: string[] = [
  'Reading and writing well',
  'Real-world numeracy',
  'Clear, independent thinking',
  'The ability to learn anything',
  'Understanding how money and the world work',
];

/* ---- The five learning modes ---- */
// Learning happens in five modes, not a timetable of periods.
export const learningModes: Card[] = [
  {
    title: 'Sunrise',
    body: 'The morning block — mindfulness, a relaxed nervous system, and mental preparation for a day of learning, exploring and collaboration.',
    icon: 'sun',
  },
  {
    title: 'Foundations',
    body: 'Small, hands-on sessions that build the foundational capacities every young person needs.',
    icon: 'spark',
  },
  {
    title: 'Quests',
    body: 'Interest-driven, project-based deep-dives where your child chases what they love — and the academics come along for the ride.',
    icon: 'compass',
  },
  {
    title: 'Seminars',
    body: 'Real discussion and argument, where independent thinking gets sharpened against other minds.',
    icon: 'quote',
  },
  {
    title: 'Advisory',
    body: 'A consistent mentor who knows your child — guiding their college & career path, and supporting them emotionally throughout their time here.',
    icon: 'heart',
  },
];

/* ---- The Graduate: who a young person becomes after four years ---- */
// Organized around the three domains of a free and capable life: Self, Tools,
// World. Read as a portrait of a real person, not a list of boxes to tick.
export interface GraduateDomain {
  name: string;
  tagline: string;
  intro: string;
  traits: { title: string; body: string }[];
}

export const graduateDomains: GraduateDomain[] = [
  {
    name: 'Self',
    tagline: 'the inner life',
    intro: 'Who they are when no one is watching — and how they handle themselves when things get hard.',
    traits: [
      {
        title: 'They know themselves',
        body: 'They can name what they’re feeling and why, regulate it rather than be ruled by it, and recognize their own patterns — what energises them, what derails them, when they’re avoiding something hard.',
      },
      {
        title: 'They can fail without falling apart',
        body: 'They’ve failed enough, in a place safe enough, that setback reads as information rather than verdict. They try, miss, diagnose, and go again.',
      },
      {
        title: 'They manage their own attention',
        body: 'In a world engineered to fragment it, they can decide what deserves their focus and protect it. This is rarer than any academic skill, and more valuable.',
      },
      {
        title: 'They can learn anything',
        body: 'The one we’d keep if we could keep only one. They know how to set a goal, find the resources, get unstuck, seek feedback, and build a real skill from nothing. They don’t need us anymore — that’s the point.',
      },
    ],
  },
  {
    name: 'Tools',
    tagline: 'thinking and making',
    intro: 'How they reason, how hard they are to fool, and what they can bring into being.',
    traits: [
      {
        title: 'They think clearly under pressure',
        body: 'They can take a claim apart — what would make it true, what evidence stands behind it, who benefits from belief — and apply that same scrutiny to their own reasoning, not just to other people’s.',
      },
      {
        title: 'They’re hard to fool',
        body: 'They notice manipulation, whether it comes from a headline, an algorithm, a salesperson, or their own bias. They hold positions provisionally and update when the evidence does.',
      },
      {
        title: 'They use AI as a tool, not a crutch',
        body: 'They know what these systems are good and bad at, when to trust them, how to verify them — and, crucially, when not to outsource their own judgment.',
      },
      {
        title: 'They can make themselves understood',
        body: 'In writing and in speech, to a peer or an expert or a sceptic, they can take a thought and land it clearly in another person’s mind.',
      },
      {
        title: 'They can build',
        body: 'They’ve taken at least one thing from idea to finished reality — designed it, made it, shipped it — and they know in their body what that takes.',
      },
    ],
  },
  {
    name: 'World',
    tagline: 'acting in it',
    intro: 'How they work with others, understand how the world runs, and act when the stakes are real.',
    traits: [
      {
        title: 'They work well with people who aren’t like them',
        body: 'They collaborate, disagree productively, and handle conflict without either steamrolling or collapsing — knowing sharp thinking is forged against other minds, not in isolation from them.',
      },
      {
        title: 'They understand money and how the world runs',
        body: 'They can manage their own finances, read the economic forces around them, spot a scam, and evaluate an opportunity with clear eyes. They are no one’s easy mark.',
      },
      {
        title: 'They’ve done real things with real stakes',
        body: 'Not simulations — actual projects in the actual world, with consequences that mattered. They know what it feels like to be responsible for an outcome.',
      },
      {
        title: 'They have a working sense of what’s worth doing',
        body: 'They’ve wrestled with questions of ethics and meaning enough to have a compass — not a fixed set of answers, but the habit of asking what a good life and a good action require.',
      },
    ],
  },
];

export const graduateSentence =
  'A young person who can think for themselves, learn anything, work with anyone, and act in the world with judgment and integrity — free, capable, and good.';

/* ---- The Four-Year Arc ---- */
// A developmental arc, not four identical years. Autonomy is grown, not granted.
export const arcPrinciples: { title: string; body: string }[] = [
  {
    title: 'Autonomy is grown, not granted',
    body: 'We don’t hand a new student full self-direction on day one — they haven’t built the muscles for it yet. Freedom expands year over year as the capacity to use it well expands.',
  },
  {
    title: 'Exposure comes before specialization',
    body: 'You can’t pursue an interest in a field you’ve never met. The early years are wide on purpose; the later years go deep.',
  },
  {
    title: 'The floor gets cleared early so the freedom can open late',
    body: 'We front-load the foundational capacities so that the back half of school can increasingly be the student’s own.',
  },
  {
    title: 'The stakes get realer every year',
    body: 'Projects move from low-stakes and scaffolded toward real consequences in the actual world.',
  },
];

export interface ArcYear {
  year: string;
  age: string;
  theme: string;
  center: string;
  floor: string;
  autonomy: string;
  scaffolding: string;
  modeBalance: string;
  stakes: string;
  body: string;
  outcome: string;
}

export const arcYears: ArcYear[] = [
  {
    year: 'Year 1',
    age: '~14',
    theme: 'The Wide Door',
    center: 'Exposure & foundations',
    floor: 'Diagnose & begin clearing',
    autonomy: 'Guided',
    scaffolding: 'Heavy',
    modeBalance: 'Core foundations + broad quests',
    stakes: 'Safe, internal',
    body: 'The first year is wide on purpose. A new student samples the major domains of human endeavor — not to master them, but to discover that they exist, so that later choices are informed rather than a retreat into the already-familiar. This is the “touch everything once” phase. Underneath the breadth, we diagnose each student’s actual standing on the five floor capacities and begin clearing them — meeting each student exactly where they are, without shame. Autonomy is real but guided: the student is learning how to direct themselves before being asked to do it alone.',
    outcome: 'The student has met the landscape, knows roughly where their curiosity pulls, has a clear-eyed map of their own floor gaps, and has begun the habits of self-direction.',
  },
  {
    year: 'Year 2',
    age: '~15',
    theme: 'Finding the Thread',
    center: 'Exploration & choice',
    floor: 'Clear the bulk',
    autonomy: 'Widening',
    scaffolding: 'Moderate',
    modeBalance: 'Quests rising, foundations falling',
    stakes: 'Sharing with peers',
    body: 'Now the student starts following threads. Having seen the landscape, they pursue what pulled at them — going deeper in some directions, dropping others. The floor work intensifies and the bulk of it gets cleared, much of it now through the quests themselves rather than in separate foundations — numeracy inside a real budget, clear thinking inside real research. The balance tips: quests rise, core foundations recede, and projects begin to face outward.',
    outcome: 'The student has cleared most of the floor, has found one or two threads worth pulling hard, and is directing meaningfully more of their own learning.',
  },
  {
    year: 'Year 3',
    age: '~16',
    theme: 'Going Deep',
    center: 'Specialization & mastery',
    floor: 'Mostly cleared',
    autonomy: 'High',
    scaffolding: 'Light',
    modeBalance: 'Deep quests + seminars',
    stakes: 'Real audiences',
    body: 'The student commits. With the floor largely behind them and real interests identified, this is the year to go deep — to build genuine, demonstrable skill in a chosen direction rather than dabbling across many. Quests become deep and sustained, and seminars matter more than ever: this is where discernment sharpens against other minds, where the student learns to defend and revise a position under real intellectual pressure. Projects face real audiences with real standards — the work has to actually be good, not just complete.',
    outcome: 'The student has demonstrable depth in at least one area, can run their own learning with little scaffolding, and has produced work that met a real external bar.',
  },
  {
    year: 'Year 4',
    age: '~17–18',
    theme: 'Into the World',
    center: 'Contribution & launch',
    floor: 'Cleared; applied',
    autonomy: 'Near-full',
    scaffolding: 'Coaching only',
    modeBalance: 'Apprenticeship & capstone',
    stakes: 'Real-world consequences',
    body: 'The final year points outward. Having built real capability, the student now uses it — through apprenticeships, community projects, ventures, or a major capstone with consequences that genuinely matter. School begins to dissolve into the world it was preparing them for. This is also the legitimacy year — when the student assembles the portfolio, the capstone, the demonstrated body of work that translates this education into something colleges, employers, and the wider world recognize.',
    outcome: 'The student walks out as the graduate — able to think for themselves, learn anything, work with anyone, and act in the world with judgment. They don’t need the school anymore. That was always the goal.',
  },
];

/* ---- Mission & Values ---- */
export const values: Card[] = [
  { title: 'Individuality & authenticity', body: 'Every learner is honored as their own person. We help teens know themselves and express who they really are.' },
  { title: 'Creativity & joy', body: 'Learning should feel alive. We protect the joy of discovery and make space to create, not just consume.' },
  { title: 'Purpose & meaning', body: 'We connect what students learn to why it matters — to their lives, their communities and the world.' },
  { title: 'Real-world learning', body: 'Knowledge is meant to be used. Students apply what they learn to projects, problems and people beyond the screen.' },
  { title: 'Curiosity over conformity', body: 'We reward good questions, not just right answers. Wondering, exploring and rethinking are the whole point.' },
  { title: 'Community & connection', body: 'Students learn alongside peers and mentors from around the world, building real friendships and belonging.' },
  { title: 'Freedom & responsibility', body: 'Real freedom comes with ownership. Students lead their own learning and grow into people the future needs.' },
];

/* ---- How We Learn: approach pillars ---- */
export const approachPillars: Card[] = [
  { title: 'Created with purpose', body: 'Every course exists because it helps young people live and work well — not because it has always been on the syllabus.' },
  { title: 'Active, not passive', body: 'Less lecturing, more doing. Students discuss, build, test and reflect in every session.' },
  { title: 'Project-based learning', body: 'Real projects with real outcomes give learning a reason and make it stick.' },
  { title: 'Collaborative & dialogue-rich', body: 'Small groups and open conversation turn classmates into thinking partners.' },
];

/* ---- How We Learn: four pillars of the experience ---- */
export const experiencePillars: Card[] = [
  { title: 'An engaging curriculum', body: '15+ relevant, skills-based subjects that teens actually want to show up for.', icon: 'spark' },
  { title: 'A day in the life', body: 'A calm, flexible rhythm with live classes, breaks and time to create.', icon: 'calendar' },
  { title: 'College & career prep', body: 'One-to-one mentoring to help students find their path after school.', icon: 'compass' },
  { title: 'Emotional mentorship', body: 'Caring mentors who support the whole young person, not just their grades.', icon: 'heart' },
];

/* ---- A day in the life ---- */
export const daySchedule: { time: string; title: string; body: string }[] = [
  { time: '10:00', title: 'School starts gently', body: 'A later, kinder start. The day opens with a short gathering to set intentions and connect as a group.' },
  { time: 'Morning', title: 'Flexible live classes', body: 'Small, interactive sessions where students discuss ideas and learn by doing — never just by listening.' },
  { time: 'Midday', title: 'Recharging breaks', body: 'Real downtime to move, eat, step outside and let ideas settle. Wellbeing is built into the timetable.' },
  { time: 'Afternoon', title: 'Real-life projects', body: 'Students work on something of their own — solo or together — turning ideas into things they can show the world.' },
];

/* ---- Program features ---- */
export const programFeatures: Card[] = [
  { title: '100% online, genuinely global', body: 'Learn from home, on the road, or anywhere with wifi — alongside students from around the world.', icon: 'globe' },
  { title: 'A guaranteed foundation, then free choice', body: 'The skills no one should leave school without — then quests your teen drives themselves, from finance to philosophy to AI.', icon: 'spark' },
  { title: 'Mentoring built in', body: 'Every student is supported by mentors for college, career and emotional growth.', icon: 'compass' },
  { title: 'A weekly act of creation', body: 'Each week ends with something made — building confidence through action, not just assessment.', icon: 'heart' },
];

/* ---- Stats ---- */
export const stats: { value: string; label: string }[] = [
  { value: '3', label: 'tiers, from guaranteed to freely chosen' },
  { value: 'Guaranteed', label: 'foundation no student leaves without' },
  { value: '100%', label: 'online, global community' },
  { value: 'Ages 14–18', label: 'high-school years, reimagined' },
];

/* ---- Pricing ---- */
export interface Plan {
  name: string;
  price: string;
  period: string;
  note?: string;
  featured?: boolean;
  features: string[];
}
export const plans: Plan[] = [
  {
    name: 'Monthly',
    price: '$1,000',
    period: 'per month, Sept–June',
    note: '$10,000/year — flexible, no long-term commitment',
    features: ['The full three-tier curriculum', 'Live small-group classes', 'College & emotional mentoring', 'Global student community'],
  },
  {
    name: 'Quarterly',
    price: '$2,375',
    period: 'per quarter',
    note: '5% off — $9,500/year',
    features: ['Everything in Monthly', 'One simple payment each term', 'Priority onboarding support'],
  },
  {
    name: 'Annual',
    price: '$9,000',
    period: 'per year',
    note: 'Best value — 10% off',
    featured: true,
    features: ['Everything in Quarterly', 'Best price for the full year', 'A guaranteed place for the school year'],
  },
];

/* One-time discount for the very first cohort of families, Year 1 only */
export const foundingCohortDiscount = {
  label: 'Founding cohort discount',
  detail: 'An extra 12.5% off any plan, Year 1 only — for our very first cohort of families.',
};

/* ---- FAQ ---- */
export interface FaqItem {
  q: string;
  a: string;
}
export const faqs: FaqItem[] = [
  {
    q: 'Who is The Freedom School for?',
    a: 'High-school-age teens (roughly ages 14–18) anywhere in the world. We’re a natural fit for homeschooling and worldschooling families who want something modern, warm and genuinely useful.',
  },
  {
    q: 'How does online learning actually work?',
    a: 'Students join small, live classes led by experienced educators, with flexible time around them to work on projects. It’s interactive and social — closer to a great seminar than a video playlist.',
  },
  {
    q: 'What will my teen actually learn?',
    a: 'We guarantee a small, essential foundation — reading and writing well, real-world numeracy, clear thinking, the ability to learn anything, and understanding how money and the world work. Everything above that, your teen drives: what they study, how deep they go, and what they build.',
  },
  {
    q: 'How does learning actually happen?',
    a: 'In five modes, not a timetable of periods: Sunrise (a morning block for mindfulness and mental preparation), Foundations (hands-on sessions that build the foundation), Quests (interest-driven projects your teen chooses), Seminars (real discussion and debate), and Advisory (a consistent mentor who knows your teen, coaching their college & career path and supporting them emotionally throughout).',
  },
  {
    q: 'Who walks out at eighteen?',
    a: 'A young person who can think for themselves, learn anything, work with anyone, and act in the world with judgment and integrity — free, capable, and good, and ready to thrive without us. See The Graduate for the full portrait.',
  },
  {
    q: 'What about college and the future?',
    a: 'Every student has access to one-to-one college and career mentoring — from choosing a path to application essays and interviews. Book a call and we’ll talk through transcripts and your family’s specific goals.',
  },
  {
    q: 'How much does it cost?',
    a: 'Plans start at $1,000/month, charged only for the 10 months school is in session (Sept–June) — $10,000/year — with savings on quarterly and annual options, plus an extra one-time discount for our founding cohort of families.',
  },
  {
    q: 'When can we start?',
    a: 'Our first full school year runs from September 2027. Ahead of that, tutoring is already opening — book a call to be part of the first cohort.',
  },
];

/* ---- Founder ---- */
// Photos live in /public/founder/ — drop in founder-home.jpg and
// founder-about.jpg and they appear automatically (see homeImage/aboutImage).
export const founder = {
  name: 'Dahlia',
  role: 'Co-Founder & COO',
  credential: 'Former public school educator',
  // Image paths (served from /public). Until the real photos are added, the
  // pages fall back to an on-brand monogram.
  homeImage: '/founder/founder-home.jpg',
  aboutImage: '/founder/founder-about.jpg',
  // Short, personal note for the homepage founder moment (low on the page).
  homeNote:
    'I spent years as a public school teacher, and I left because I took education too seriously to keep teaching that way. So I built the school I couldn’t find.',
  // Full bio for the About page — the deepest trust work.
  bio: [
    'I spent years as a public school teacher, and I left because I took education too seriously to keep teaching that way.',
    'Every day I watched curious, capable, wildly different kids get handed the same material, at the same pace, measured by the same tests — and asked to prove their worth on questions most of them would never use again. When students asked me “when will we ever need this?”, I usually didn’t have an honest answer. I saw the system slowly dim the very thing school is supposed to protect: their interest in learning, and their belief in themselves.',
    'So I built the school I couldn’t find. The Freedom School gives teens a guaranteed foundation — the real skills no one should leave without — and then the freedom to direct their own learning on top of it. Not memorization. Not one-size-fits-all. An education designed to set young minds free.',
    'Today, alongside my Co-Founder & CEO, Dr. Alina Vehuni, I lead operations, curriculum delivery, and the day-to-day execution that turns our shared vision into a working school.',
  ],
};
