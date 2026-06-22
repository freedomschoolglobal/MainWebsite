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
    name: 'Founder & Lead Educator',
    role: 'The Freedom School',
    bio: 'Building The Freedom School to give every young person an education that honours who they are — and soon working alongside a team of world-class educators from around the globe.',
  },
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
