import { NavItem } from '../types';

export const navigationItems: NavItem[] = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Pricing and Services',
    path: '/services',
  },
];

// Export the same navigation items for footer use
export const footerNavItems: NavItem[] = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Pricing and Services',
    path: '/services',
  },
  {
    label: 'Privacy Policy',
    path: '/privacy',
  },
  {
    label: 'Terms of Service',
    path: '/terms',
  },
  {
    label: 'Sitemap',
    path: '/sitemap',
  }
];