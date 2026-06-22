// Central site configuration: identity, navigation, footer, social, CTAs.
// Edit here to update nav/footer across the whole site.

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export const site = {
  name: 'The Freedom School',
  shortName: 'Freedom School',
  // Used for <title> suffix, Open Graph, structured data.
  tagline: 'Education for Life',
  description:
    'The Freedom School is a fully online high school that teaches teens how to think, not what to think — building real-world skills, creativity and confidence in a warm global community.',
  // IMPORTANT: update to the final production domain before launch.
  url: 'https://thefreedomschool.co',
  email: 'freedomschoolglobal@gmail.com',
  // Public Calendly scheduling link (no API key needed for the embed).
  calendly: 'https://calendly.com/freedomschoolglobal',
  locale: 'en',
  foundingYear: 2026,
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/thefreedomschoolofficial/', handle: '@thefreedomschoolofficial', icon: 'instagram' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@thefreedomschoolglobal', handle: '@thefreedomschoolglobal', icon: 'tiktok' },
  ],
  // Primary conversion actions used in header, footer and CTA bands.
  cta: {
    primary: { label: 'Apply Now', href: '/apply' },
    secondary: { label: 'Book a Call', href: '/book-a-call' },
  },
};

// ---- Header navigation (with dropdowns) ----
export const mainNav: NavLink[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About us',
    href: '/our-story',
    children: [
      { label: 'Our Story', href: '/our-story' },
      { label: 'Mission & Values', href: '/mission-values' },
      { label: 'How We Learn', href: '/how-we-learn' },
      { label: 'Our Team', href: '/our-team' },
      { label: 'Journal', href: '/journal' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Careers', href: '/careers' },
    ],
  },
  {
    label: 'Curriculum',
    href: '/curriculum',
    children: [
      { label: 'Curriculum Overview', href: '/curriculum' },
      { label: 'Our Approach to Learning', href: '/our-approach-to-learning' },
      { label: 'A Day in the Life', href: '/our-approach-to-learning#a-day' },
    ],
  },
  {
    label: 'Mentoring',
    href: '/mentoring/college-career',
    children: [
      { label: 'College & Career Mentoring', href: '/mentoring/college-career' },
      { label: 'Emotional Mentoring', href: '/mentoring/emotional' },
    ],
  },
];

// ---- Footer navigation columns ----
export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: 'Explore',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Our Story', href: '/our-story' },
      { label: 'Mission & Values', href: '/mission-values' },
      { label: 'How We Learn', href: '/how-we-learn' },
      { label: 'Our Team', href: '/our-team' },
      { label: 'Journal', href: '/journal' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Careers', href: '/careers' },
    ],
  },
  {
    title: 'Curriculum',
    links: [
      { label: 'Curriculum Overview', href: '/curriculum' },
      { label: 'Our Approach to Learning', href: '/our-approach-to-learning' },
      { label: 'A Day in the Life', href: '/our-approach-to-learning#a-day' },
    ],
  },
  {
    title: 'Mentoring',
    links: [
      { label: 'College & Career Mentoring', href: '/mentoring/college-career' },
      { label: 'Emotional Mentoring', href: '/mentoring/emotional' },
      { label: 'Book a Call', href: '/book-a-call' },
      { label: 'Apply Now', href: '/apply' },
    ],
  },
];

export const legalNav: NavLink[] = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
];
