export const CONTACT = {
  email: 'shariffnahurira2015@gmail.com',
  phone: '+256784507038',
  whatsapp: '256784507038',
  whatsappUrl:
    'https://wa.me/256784507038?text=' +
    encodeURIComponent("Hi Shariff, I came across your portfolio and would love to chat."),
  location: 'Bugolobi, Kampala, Uganda',
  socials: {
    behance: 'https://www.behance.net/nahurirashariff',
    linkedin: 'https://www.linkedin.com/in/shariff-nahurira/',
    twitter: 'https://x.com/0mega001',
    instagram: 'https://www.instagram.com/shariff_omega/',
  },
};

export const LOGO_SRC = '/profile/logo.png';

// Profile photos. Save your photos at any of these paths — site tries .png
// (transparent background) first, then .jpg. Drop in either format.
//   public/profile/hero.{png,jpg}        -> Home / Hero section
//   public/profile/why-hire-me.{png,jpg} -> Why Hire Me section
export const HERO_PHOTO_CANDIDATES = [
  '/profile/hero.png',
  '/profile/hero.jpg',
  '/profile/hero.jpeg',
];
export const WHY_HIRE_PHOTO_CANDIDATES = [
  '/profile/hero2.png',
  '/profile/why-hire-me.png',
  '/profile/why-hire-me.jpg',
  '/profile/why-hire-me.jpeg',
];
// Fallback used while a real photo isn't yet saved.
export const PLACEHOLDER_PHOTO = 'https://randomuser.me/api/portraits/men/32.jpg';

export const EXPERIENCE = [
  { key: 'kacyber_senior', current: true },
  { key: 'kacyber_officer', current: false },
  { key: 'uzazi', current: true },
  { key: 'musadan', current: true },
  { key: 'primacy', current: false },
  { key: 'likana', current: false },
  { key: 'sumic', current: false },
];

export const PROJECTS = [
  {
    key: 'ictCards',
    accent: '#1E3A8A',
    icon: 'Badge',
    image: '/projects/ict-cards.jpg',
    background: '#0A0A0A',
    url: 'https://www.behance.net/gallery/248120657/weGo-Agent-App-Redesign',
  },
  {
    key: 'wegoApp',
    accent: '#F26B2C',
    icon: 'PointOfSale',
    image: '/projects/wego-pos.jpg',
    background: '#FBEFD7',
    url: 'https://www.behance.net/gallery/248120657/weGo-Agent-App-Redesign',
  },
];

export const STATS = [
  { key: 'years', value: '5+' },
  { key: 'projects', value: '40+' },
  { key: 'clients', value: '7' },
  { key: 'skills', value: '9' },
];
