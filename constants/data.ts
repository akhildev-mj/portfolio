import type {
  CodeTemplate,
  ContactInfo,
  NavItem,
  SocialLink,
  Stat,
} from "@/types";
import {
  FaAward,
  FaBrain,
  FaChartLine,
  FaCode,
  FaCog,
  FaDatabase,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaTerminal,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const ROLES = ["Data Scientist", "AI Engineer", "Full Stack Developer"];

export const STATS: Stat[] = [
  { label: "Years Experience", value: "5+", icon: FaChartLine },
  { label: "Projects Completed", value: "25+", icon: FaCode },
  { label: "Certifications", value: "50+", icon: FaAward },
  { label: "Technologies", value: "20+", icon: FaCog },
];

export const CONTACT_INFO: ContactInfo[] = [
  {
    icon: MdEmail,
    label: "Email",
    value: "akhildev.mj@gmail.com",
    href: "mailto:akhildev.mj@gmail.com",
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "+91 9876543210",
    href: "tel:+919876543210",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Thrissur, Kerala, India",
    href: "#",
  },
];

export const CREDLY_PROFILE_URL = "https://www.credly.com/users/akhildevmj";
export const GITHUB_PROFILE_URL = "https://github.com/akhildev-mj";
export const LINKEDIN_PROFILE_URL = "https://linkedin.com/in/akhildevmj";
export const WHATSAPP_PROFILE_URL = "https://wa.me/919074123050";
export const PORTFOLIO_URL = "https://akhildev.vercel.app";

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: FaGithub,
    href: GITHUB_PROFILE_URL,
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: LINKEDIN_PROFILE_URL,
    label: "LinkedIn",
  },
  {
    icon: FaWhatsapp,
    href: WHATSAPP_PROFILE_URL,
    label: "WhatsApp",
  },
];

export const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "#home", icon: FaTerminal, description: "Back to top" },
  {
    name: "About",
    href: "#about",
    icon: FaCode,
    description: "Learn about me",
  },
  {
    name: "Projects",
    href: "#projects",
    icon: FaDatabase,
    description: "View my work",
  },
  {
    name: "Certifications",
    href: "#certifications",
    icon: FaBrain,
    description: "My credentials",
  },
  {
    name: "Contact",
    href: "#contact",
    icon: MdEmail,
    description: "Get in touch",
  },
];

export const CODE_TEMPLATES: CodeTemplate[] = [
  {
    language: "Python",
    code: `def predict_future(data):
    model = AIModel()
    insights = model.analyze(data)
    return insights.predictions`,
  },
  {
    language: "JavaScript",
    code: `const buildApp = async () => {
    const ai = new AIEngine();
    const result = await ai.process();
    return result.magic;
};`,
  },
  {
    language: "SQL",
    code: `SELECT innovation, creativity
FROM data_science
WHERE passion = 'unlimited'
ORDER BY impact DESC;`,
  },
];

export const ABOUT_SNIPPETS = [
  "# About Akhildev MJ",
  "",
  "## Professional Summary",
  "Passionate Data Scientist and AI Engineer with 5+ years",
  "of experience in building intelligent systems that",
  "transform raw data into actionable insights.",
  "",
  "## Core Expertise",
  "- Machine Learning & Deep Learning",
  "- Data Analysis & Visualization",
  "- Full Stack Development",
  "- Cloud Architecture & Deployment",
  "",
  "## Mission",
  "Bridging the gap between complex data and",
  "practical solutions that drive business value.",
];

export const CODE_RAIN_DROPS = [
  "AI",
  "ML",
  "DL",
  "NLP",
  "{}",
  "=>",
  "<>",
  "</>",
];
