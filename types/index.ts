export interface Project {
  id?: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  icon: any;
  github: string;
  live: string;
}

export interface Certification {
  id?: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
  skills: string[];
  category: string;
  verifyUrl: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: any;
}

export interface ContactInfo {
  icon: any;
  label: string;
  value: string;
  href: string;
}

export interface SocialLink {
  icon: any;
  href: string;
  label: string;
}

export interface NavItem {
  name: string;
  href: string;
  icon: any;
  description: string;
}

export interface CodeTemplate {
  language: string;
  code: string;
}
