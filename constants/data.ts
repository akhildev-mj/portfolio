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
    value: "akhildev.adj@gmail.com",
    href: "mailto:akhildev.adj@gmail.com",
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "+91 9074123050",
    href: "tel:+919074123050",
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
  "Senior Software Engineer and Data Scientist at QBurst with over 5 years of experience.",
  "Expertise spans AI, ML, DL, data science, full stack development (frontend, backend, mobile), and cloud technologies.",
  "Certified in over 50 areas and successfully completed 25+ projects using 20+ technologies.",
  "",
  "## Core Expertise",
  "- Artificial Intelligence (AI)",
  "- Machine Learning (ML)",
  "- Deep Learning (DL)",
  "- Data Science & Analytics",
  "- Full Stack Development (Frontend, Backend, Mobile)",
  "- Cloud Architecture & Deployment",
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
