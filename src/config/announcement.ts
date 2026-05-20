export const announcementConfig = {
  enabled: false,
  items: [
    {
      textKey: 'event',
      href: '/events/VAN501-2026',
      variant: 'event',
    },
    {
      textKey: 'petition',
      href: 'https://www.ourcommons.ca/petitions/en/Petition/Details?Petition=e-7341',
      variant: 'petition',
      badge: 'e-7341',
      external: true,
    },
  ],
} as const;
