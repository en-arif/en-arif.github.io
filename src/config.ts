// src/config.ts
export interface SiteConfig {
  title: string;
  description: string;
  author: {
    name: string;
    bio: string;
    avatar?: string;
  };
  social: {
    github?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    email?: string;
  };
  siteUrl: string;
}

export const config: SiteConfig = {
  title: "NUR ARIF",
  description: "Programmer From Indonesia",
  author: {
    name: "Nur Arif",
    bio: "Cyber Security Specialist | Pentester | Backend | Reverse Engineer | Python Programming",
    avatar: "/favicon.svg",
  },
  social: {
    github: "https://github.com/ArN-1",
    twitter: "https://x.com/arifnrrrrr",
    linkedin: "https://www.linkedin.com/in/nur-arif-8b6a521a4/",
    email: "mailto:nurarifdev@gmail.com", // tambah mailto: agar bisa langsung jadi link
  },
  siteUrl: "https://www.nurarif.com",
};

// Export constants untuk SEO component
export const SITE_TITLE = config.title;
export const SITE_DESCRIPTION = config.description;
export const SITE_URL = config.siteUrl;
export const SITE_AUTHOR = config.author.name;