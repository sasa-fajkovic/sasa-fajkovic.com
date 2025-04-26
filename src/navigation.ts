import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: '/#about',
    },
    {
      text: 'Experience',
      href: '/#experience',
    },
    {
      text: 'Publications',
      href: '/#publications',
    },
    {
      text: 'Blog',
      href: '/blog',
    },
  ],
  actions: [{ text: 'Reach our', href: 'mailto:fajkovic.sasa@proton.me', target: '_blank' }],
};

export const footerData = {
  socialLinks: [
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/sasa-fajkovic' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com/in/sasa-fajkovic' },
  ],
  footNote: `
    All rights reserved.
  `,
};
