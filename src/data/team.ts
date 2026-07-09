// Leadership — the real founders, with real names and photos.
export interface LeadershipMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  alt: string;
}

// Photos live in /public/founder/.
export const leadership: LeadershipMember[] = [
  {
    name: 'Dr. Alina Vehuni',
    role: 'CEO & Co-Founder',
    bio: 'Founder of Wholeness Education and a 20+ year veteran of public education — teacher, school leader, Fulbright Specialist, and global keynote speaker. She leads vision, pedagogy, and partnerships, keeping student wellbeing at the center of how the school works.',
    // TODO: drop Alina's headshot in at public/founder/alina-vehuni.jpg
    image: '/founder/alina-vehuni.jpg',
    alt: 'Dr. Alina Vehuni, CEO & Co-Founder',
  },
  {
    name: 'Dahlia Eisenberg',
    role: 'COO & Co-Founder',
    bio: 'A public school educator with a Master’s in Teaching and Special Education who spent years building custom learning for individual students. She leads operations, curriculum delivery, and the day-to-day of turning the vision into a school that runs.',
    image: '/founder/founder-home.jpg',
    alt: 'Dahlia Eisenberg, COO & Co-Founder',
  },
];

// Team / "Learning Leaders". Placeholder bios — replace names, photos and
// details with the real team before launch. Photos can be added later as
// `image` (import from ../assets) without changing the layout.

export interface Member {
  name: string;
  role: string;
  bio: string;
}

export const team: Member[] = [
  {
    name: 'Learning Leader',
    role: 'Communication & Storytelling',
    bio: 'An experienced educator helping students find their voice — in conversation, on the page, and on stage.',
  },
  {
    name: 'Learning Leader',
    role: 'Life Skills & Entrepreneurship',
    bio: 'A mentor who teaches money, making and real-world problem-solving through hands-on projects.',
  },
  {
    name: 'Learning Leader',
    role: 'Emotional & Mindfulness Mentoring',
    bio: 'A caring guide supporting the whole young person — their wellbeing, focus and inner life.',
  },
  {
    name: 'Learning Leader',
    role: 'College & Career Mentoring',
    bio: 'A one-to-one mentor helping students find and walk their own path after school.',
  },
  {
    name: 'Learning Leader',
    role: 'Exploration & Critical Thinking',
    bio: 'A facilitator who turns big questions into real projects students can’t wait to dig into.',
  },
];

// Set to true once real team members (with names and photos) are added.
export const teamIsPlaceholder = true;
