// Curriculum: five learning areas and the 15+ skills-based subjects within them.

export interface Theme {
  name: string;
  blurb: string;
}

export const themes: Theme[] = [
  { name: 'Communication & Expression', blurb: 'Reading, writing, speaking and reading the media — so ideas land and every voice is heard.' },
  { name: 'Science & the Natural World', blurb: 'Curiosity about how the world, the body and the universe actually work.' },
  { name: 'Technology & Numbers', blurb: 'The tools and thinking of the modern world — from maths to technology to AI.' },
  { name: 'Mind & Wellbeing', blurb: 'Understanding yourself and others, and building a calm, healthy inner life.' },
  { name: 'People, Society & Purpose', blurb: 'How the world fits together, the questions worth asking, and finding your own path.' },
];

export interface Course {
  slug: string;
  title: string;
  theme: string;
  summary: string;
  learn: string[];
  coral: number;
}

export const courses: Course[] = [
  {
    slug: 'reading-writing',
    title: 'Reading & Writing',
    theme: 'Communication & Expression',
    summary: 'Find your voice on the page — read deeply, write clearly, and tell stories worth remembering.',
    learn: ['Write with a voice that’s your own', 'Read closely and think critically about texts', 'Structure essays, stories and arguments', 'Edit and share your own work'],
    coral: 1,
  },
  {
    slug: 'speaking-communication',
    title: 'Speaking & Communication',
    theme: 'Communication & Expression',
    summary: 'Say what you mean with clarity and confidence — in conversation, on a stage, and in writing.',
    learn: ['Speak clearly to any audience', 'Listen so people feel understood', 'Tell a story that moves people', 'Handle nerves and think on your feet'],
    coral: 2,
  },
  {
    slug: 'health-anatomy',
    title: 'Health & Anatomy',
    theme: 'Science & the Natural World',
    summary: 'Understand the body you’ll live in for life — how it works, and how to keep it well.',
    learn: ['How the major body systems work', 'Nutrition, sleep and movement basics', 'Make informed choices about your health', 'Know when and how to get support'],
    coral: 3,
  },
  {
    slug: 'mathematics',
    title: 'Mathematics',
    theme: 'Technology & Numbers',
    summary: 'Maths that actually shows up in real life — reasoning, data, probability and smart decisions.',
    learn: ['Reason logically with numbers', 'Read data and statistics critically', 'Understand probability and risk', 'Apply maths to money and projects'],
    coral: 4,
  },
  {
    slug: 'technology',
    title: 'Technology',
    theme: 'Technology & Numbers',
    summary: 'Use today’s tools to build, make and solve problems — creatively and responsibly.',
    learn: ['Build and make with modern software', 'Solve problems with a maker’s mindset', 'Stay safe and private online', 'Understand the tech shaping your future'],
    coral: 5,
  },
  {
    slug: 'science',
    title: 'Science',
    theme: 'Science & the Natural World',
    summary: 'Ask questions, run experiments, and understand the science behind everyday life.',
    learn: ['Think like a scientist', 'Design and run simple experiments', 'Understand key ideas across the sciences', 'Use evidence to reach conclusions'],
    coral: 6,
  },
  {
    slug: 'financial-literacy',
    title: 'Financial Literacy',
    theme: 'People, Society & Purpose',
    summary: 'The money skills that change a life: budgeting, saving, investing and understanding how the economy really works.',
    learn: ['Budget and save with intention', 'Understand credit, debt and interest', 'The basics of investing and compounding', 'Earn, price and value your own work'],
    coral: 7,
  },
  {
    slug: 'history',
    title: 'History',
    theme: 'People, Society & Purpose',
    summary: 'How we got here — the people, events and ideas that shaped the world we live in.',
    learn: ['See current events in historical context', 'Weigh sources and points of view', 'Trace how ideas and societies change', 'Draw lessons from the past'],
    coral: 8,
  },
  {
    slug: 'nature-our-world',
    title: 'Nature & Our World',
    theme: 'Science & the Natural World',
    summary: 'Our planet and our place in it — ecosystems, the environment, and living consciously.',
    learn: ['How ecosystems and climate work', 'Our impact on the natural world', 'Live more sustainably day to day', 'Care for the world around you'],
    coral: 1,
  },
  {
    slug: 'media-literacy',
    title: 'Media Literacy',
    theme: 'Communication & Expression',
    summary: 'Read the modern world clearly — from headlines and ads to algorithms and AI-made content.',
    learn: ['Tell credible sources from noise', 'See how feeds and algorithms shape you', 'Spot persuasion, framing and fakes', 'Use social media on your own terms'],
    coral: 2,
  },
  {
    slug: 'philosophy',
    title: 'Philosophy',
    theme: 'People, Society & Purpose',
    summary: 'The big questions — how to think well, what matters, and how to build your own point of view.',
    learn: ['Question what you’re told', 'Recognise bias and logical fallacies', 'Reason your way to your own conclusions', 'Explore ethics, meaning and ideas'],
    coral: 3,
  },
  {
    slug: 'astronomy',
    title: 'Astronomy',
    theme: 'Science & the Natural World',
    summary: 'Look up and out — the planets, stars and galaxies, and our tiny, wondrous place in the cosmos.',
    learn: ['The solar system and beyond', 'How stars and galaxies form', 'Read and navigate the night sky', 'The science of space exploration'],
    coral: 4,
  },
  {
    slug: 'passion-project',
    title: 'Passion Project',
    theme: 'People, Society & Purpose',
    summary: 'The heart of the week: every student creates something real and shares it with the community.',
    learn: ['Plan and run your own project', 'Work solo and in teams', 'Give and receive useful feedback', 'Ship something real, every week'],
    coral: 5,
  },
  {
    slug: 'psychology',
    title: 'Psychology',
    theme: 'Mind & Wellbeing',
    summary: 'Why we think, feel and act the way we do — and what that means for everyday life.',
    learn: ['How the mind and brain work', 'Understand motivation and behaviour', 'Recognise cognitive biases', 'Apply psychology to your own life'],
    coral: 6,
  },
  {
    slug: 'civil-rights-week',
    title: 'Civil Rights Week',
    theme: 'People, Society & Purpose',
    summary: 'A focused deep-dive into justice, equality and the people who changed the world by standing up.',
    learn: ['Key civil rights movements and figures', 'How ordinary people drive change', 'Your own rights and responsibilities', 'Stand up for fairness in your community'],
    coral: 7,
  },
  {
    slug: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    theme: 'Technology & Numbers',
    summary: 'Understand and use AI — creatively, critically and responsibly — as a tool for thinking.',
    learn: ['How modern AI actually works', 'Work alongside AI as a thinking tool', 'Use AI ethically and wisely', 'Understand its impact on your future'],
    coral: 8,
  },
  {
    slug: 'wellbeing',
    title: 'Wellbeing',
    theme: 'Mind & Wellbeing',
    summary: 'Practical tools for a calm, focused mind — and healthy habits that actually last.',
    learn: ['Steady your attention and focus', 'Work with stress and anxiety', 'Build healthy daily habits', 'Reflect, rest and recharge'],
    coral: 1,
  },
  {
    slug: 'emotional-intelligence',
    title: 'Emotional Intelligence',
    theme: 'Mind & Wellbeing',
    summary: 'Know your own emotions, understand others, and build the relationships that make life good.',
    learn: ['Name and manage your emotions', 'Build empathy and real connection', 'Navigate conflict with care', 'Set boundaries and ask for help'],
    coral: 2,
  },
];
