// Curriculum: five learning areas and the 13 skills-based courses within them.

export interface Theme {
  name: string;
  blurb: string;
}

export const themes: Theme[] = [
  { name: 'Communication', blurb: 'Speaking, writing and listening so ideas land — and so others are truly heard.' },
  { name: 'Life Skills', blurb: 'The practical know-how school usually skips: money, work, health and technology.' },
  { name: 'Emotional Intelligence', blurb: 'Understanding yourself and others, and learning to navigate a full inner life.' },
  { name: 'Exploration', blurb: 'Big questions, real projects and the freedom to follow genuine curiosity.' },
  { name: 'Mathematics', blurb: 'Numbers as a tool for thinking clearly and making confident real-world decisions.' },
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
    slug: 'critical-thinking',
    title: 'Critical Thinking',
    theme: 'Exploration',
    summary: 'How to question what you’re told, spot a weak argument, and reason your way to your own conclusions.',
    learn: ['Tell strong arguments from manipulation', 'Recognise bias, spin and logical fallacies', 'Form and defend your own point of view', 'Change your mind well when the evidence changes'],
    coral: 1,
  },
  {
    slug: 'communication-public-speaking',
    title: 'Communication & Public Speaking',
    theme: 'Communication',
    summary: 'Say what you mean with clarity and confidence — in conversation, on a stage, and in writing.',
    learn: ['Speak clearly to any audience', 'Listen so people feel understood', 'Tell a story that moves people', 'Handle nerves and think on your feet'],
    coral: 2,
  },
  {
    slug: 'financial-literacy',
    title: 'Financial Literacy',
    theme: 'Life Skills',
    summary: 'The money skills that change a life: budgeting, saving, investing and understanding how the economy really works.',
    learn: ['Budget and save with intention', 'Understand credit, debt and interest', 'The basics of investing and compounding', 'Earn, price and value your own work'],
    coral: 3,
  },
  {
    slug: 'media-literacy',
    title: 'Media Literacy',
    theme: 'Communication',
    summary: 'Read the modern world clearly — from headlines and ads to algorithms and AI-made content.',
    learn: ['Tell credible sources from noise', 'See how feeds and algorithms shape you', 'Spot persuasion, framing and fakes', 'Use social media on your own terms'],
    coral: 4,
  },
  {
    slug: 'digital-ai-literacy',
    title: 'Digital & AI Literacy',
    theme: 'Life Skills',
    summary: 'Use today’s tools — including AI — creatively, critically and responsibly.',
    learn: ['Work alongside AI as a thinking tool', 'Build and make with modern software', 'Stay safe and private online', 'Understand the tech shaping your future'],
    coral: 5,
  },
  {
    slug: 'emotional-intelligence',
    title: 'Emotional Intelligence',
    theme: 'Emotional Intelligence',
    summary: 'Know your own emotions, understand others, and build the relationships that make life good.',
    learn: ['Name and manage your emotions', 'Build empathy and real connection', 'Navigate conflict with care', 'Set boundaries and ask for help'],
    coral: 6,
  },
  {
    slug: 'mindfulness-inner-life',
    title: 'Mindfulness & Inner Life',
    theme: 'Emotional Intelligence',
    summary: 'Practical tools for a calm, focused mind — and a friendlier relationship with your own thoughts.',
    learn: ['Steady your attention and focus', 'Work with stress and anxiety', 'Build healthy daily habits', 'Reflect, rest and recharge'],
    coral: 7,
  },
  {
    slug: 'entrepreneurship',
    title: 'Entrepreneurship',
    theme: 'Life Skills',
    summary: 'Turn an idea into something real — a product, a project, a small business — and learn by building it.',
    learn: ['Spot problems worth solving', 'Test an idea cheaply and fast', 'Talk to real customers', 'Pitch, price and launch'],
    coral: 8,
  },
  {
    slug: 'creative-writing-storytelling',
    title: 'Creative Writing & Storytelling',
    theme: 'Communication',
    summary: 'Find your voice on the page and learn the craft of telling a story people remember.',
    learn: ['Write with a voice that’s yours', 'Structure stories and essays', 'Edit your own work', 'Share and perform your writing'],
    coral: 1,
  },
  {
    slug: 'health-wellbeing',
    title: 'Health & Wellbeing',
    theme: 'Life Skills',
    summary: 'Look after the body and mind you’ll live in for the rest of your life.',
    learn: ['Nutrition, sleep and movement basics', 'Mental health and resilience', 'Healthy relationships with screens', 'Knowing when and how to get support'],
    coral: 2,
  },
  {
    slug: 'world-and-society',
    title: 'World & Society',
    theme: 'Exploration',
    summary: 'How the world fits together — history, cultures, systems and your place as a global citizen.',
    learn: ['Understand how societies work', 'See current events in context', 'Appreciate other cultures and views', 'Take action in your own community'],
    coral: 3,
  },
  {
    slug: 'mathematics-for-life',
    title: 'Mathematics for Life',
    theme: 'Mathematics',
    summary: 'Maths that actually shows up in real life — reasoning, data, probability and smart decisions.',
    learn: ['Reason logically with numbers', 'Read data and statistics critically', 'Understand probability and risk', 'Apply maths to money and projects'],
    coral: 4,
  },
  {
    slug: 'the-project-studio',
    title: 'The Project Studio',
    theme: 'Exploration',
    summary: 'The heart of the week: every student creates something real and shares it with the community.',
    learn: ['Plan and run your own project', 'Work solo and in teams', 'Give and receive useful feedback', 'Ship something real, every week'],
    coral: 6,
  },
];
