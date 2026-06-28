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

/* ---- The four learning modes ---- */
// Learning happens in four modes, not a timetable of periods.
export const learningModes: Card[] = [
  {
    title: 'Studios',
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
    body: 'A consistent mentor who knows your child, coaches their learning, and helps them choose well.',
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
  { title: '15+ relevant, skills-based subjects', body: 'From financial literacy to philosophy, science to artificial intelligence — the things teens really need.', icon: 'spark' },
  { title: 'Mentoring built in', body: 'Every student is supported by mentors for college, career and emotional growth.', icon: 'compass' },
  { title: 'A weekly act of creation', body: 'Each week ends with something made — building confidence through action, not just assessment.', icon: 'heart' },
];

/* ---- Stats ---- */
export const stats: { value: string; label: string }[] = [
  { value: '15+', label: 'relevant, skills-based subjects' },
  { value: '5', label: 'connected learning areas' },
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
    price: '$900',
    period: 'per month',
    note: 'Flexible, no long-term commitment',
    features: ['All 15+ subjects', 'Live small-group classes', 'College & emotional mentoring', 'Global student community'],
  },
  {
    name: 'Quarterly',
    price: '$2,280',
    period: 'per quarter',
    note: 'Save 5% vs monthly',
    features: ['Everything in Monthly', 'One simple payment each term', 'Priority onboarding support'],
  },
  {
    name: 'Annual',
    price: '$6,480',
    period: 'per year',
    note: 'Best value — save 10%',
    featured: true,
    features: ['Everything in Quarterly', 'Best price for the full year', 'A guaranteed place for the school year'],
  },
];

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
    a: 'In four modes, not a timetable of periods: Studios (hands-on sessions that build the foundation), Quests (interest-driven projects your teen chooses), Seminars (real discussion and debate), and Advisory (a consistent mentor who knows your teen and coaches their learning).',
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
    a: 'Plans start at $900/month, with savings on quarterly and annual options.',
  },
  {
    q: 'When can we start?',
    a: 'Our first full school year runs from September 2027. Ahead of that, college mentoring, mindfulness mentoring and tutoring are already opening — book a call to be part of the first cohort.',
  },
];

/* ---- Founder note ---- */
export const founderNote = {
  quote:
    'I built The Freedom School because every young person deserves an education that helps them think for themselves, follow their curiosity, and become who they’re meant to be — not who a system tells them to be. We replace stress and conformity with purpose and joy, and every single week, our students create something of their own.',
  name: 'The Freedom School',
  role: 'Founder & Lead Educator',
};
