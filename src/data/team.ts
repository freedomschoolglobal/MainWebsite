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

// Advisors — real names and photos, but not founders/leadership.
// Photos live in /public/advisors/.
export const advisors: LeadershipMember[] = [
  {
    name: 'Noan Fesnoux',
    role: 'Strategic Advisor',
    bio: 'An educator since 2003, with a Master’s in Educational Technology from UBC. Noan has built nature-based, project-driven schools worldwide — from Green School Bali to the Dubai Future Foundation to founding Budapest’s REAL School — and now advises The Freedom School on strategy and program design.',
    image: '/advisors/noan-fesnoux.jpg',
    alt: 'Noan Fesnoux, Strategic Advisor',
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
    role: 'Exploration & Critical Thinking',
    bio: 'A facilitator who turns big questions into real projects students can’t wait to dig into.',
  },
];

// Set to true once real team members (with names and photos) are added.
export const teamIsPlaceholder = true;
