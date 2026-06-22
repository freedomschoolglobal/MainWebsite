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
    title: 'Student-centred learning',
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
  { traditional: 'Memorise facts for the test', freedom: 'Learn how to think for yourself' },
  { traditional: 'One pace for thirty students', freedom: 'A path shaped around each learner' },
  { traditional: 'Stress, ranking and pressure', freedom: 'Purpose, calm and real motivation' },
  { traditional: 'Sit still and listen', freedom: 'Create, build and collaborate' },
  { traditional: 'Subjects in separate boxes', freedom: 'Skills connected to real life' },
  { traditional: 'Learning stops at the school gate', freedom: 'The whole world is the campus' },
];

/* ---- Mission & Values ---- */
export const values: Card[] = [
  { title: 'Individuality & authenticity', body: 'Every learner is honoured as their own person. We help teens know themselves and express who they really are.' },
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
  { title: 'An engaging curriculum', body: '13 modern, skills-based courses that teens actually want to show up for.', icon: 'spark' },
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
  { title: '13 skills-based courses', body: 'From financial literacy to communication, technology to critical thinking — the things teens really need.', icon: 'spark' },
  { title: 'Mentoring built in', body: 'Every student is supported by mentors for college, career and emotional growth.', icon: 'compass' },
  { title: 'A weekly act of creation', body: 'Each week ends with something made — building confidence through action, not just assessment.', icon: 'heart' },
];

/* ---- Stats ---- */
export const stats: { value: string; label: string }[] = [
  { value: '13', label: 'modern, skills-based courses' },
  { value: '1 in 15', label: 'students on a full scholarship' },
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
    features: ['All 13 courses', 'Live small-group classes', 'College & emotional mentoring', 'Global student community'],
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
    a: 'Thirteen skills-based courses built for real life — including critical thinking, communication, financial literacy, media literacy, technology and creativity — alongside the academic foundations they need.',
  },
  {
    q: 'What about college and the future?',
    a: 'Every student has access to one-to-one college and career mentoring — from choosing a path to application essays and interviews. Book a call and we’ll talk through transcripts and your family’s specific goals.',
  },
  {
    q: 'How much does it cost?',
    a: 'Plans start at $900/month, with savings on quarterly and annual options. And for every 15 students who enrol, we offer one full scholarship to a student who couldn’t otherwise attend.',
  },
  {
    q: 'When can we start?',
    a: 'Our first full school year runs from September 2026. Ahead of that, college mentoring, mindfulness mentoring and tutoring are opening through 2026 — book a call to be part of the first cohort.',
  },
];

/* ---- Founder note ---- */
export const founderNote = {
  quote:
    'I built The Freedom School because every young person deserves an education that helps them think for themselves, follow their curiosity, and become who they’re meant to be — not who a system tells them to be. We replace stress and conformity with purpose and joy, and every single week, our students create something of their own.',
  name: 'The Freedom School',
  role: 'Founder & Lead Educator',
};
