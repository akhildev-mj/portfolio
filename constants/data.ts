import type {
  Certification,
  CodeTemplate,
  ContactInfo,
  NavItem,
  Project,
  SocialLink,
  Stat,
} from "@/types";
import {
  FaAward,
  FaBrain,
  FaChartBar,
  FaChartLine,
  FaCode,
  FaCog,
  FaDatabase,
  FaGithub,
  FaGlobe,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaRobot,
  FaTerminal,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const ROLES = ["Data Scientist", "AI Engineer", "Full Stack Developer"];

export const STATS: Stat[] = [
  { label: "Years Experience", value: "5+", icon: FaChartLine },
  { label: "Projects Completed", value: "25+", icon: FaCode },
  { label: "Certifications", value: "50+", icon: FaAward },
  { label: "Technologies", value: "25+", icon: FaCog },
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

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "IBM Generative AI Applications with RAG and LangChain",
    description:
      "Build and deploy RAG-based AI applications using LangChain and IBM tools.",
    image: "/projects/generative-ai.webp",
    technologies: ["LangChain", "IBM Cloud", "Python", "Vector DB"],
    category: "Generative AI",
    icon: FaRobot,
    github:
      "https://github.com/akhildev-mj/IBM-Generative-AI-Applications-with-RAG-and-LangChain",
    live: "",
  },
  {
    id: 2,
    title: "Google Advanced Data Analytics Final Project",
    description:
      "Projects and coursework for the Google Advanced Data Analytics Certification.",
    image: "/projects/google-da.webp",
    technologies: ["Python", "SQL", "Tableau", "BigQuery"],
    category: "Data Analytics",
    icon: FaChartBar,
    github:
      "https://github.com/akhildev-mj/Google-Advanced-Data-Analytics-Certification",
    live: "",
  },
  {
    id: 3,
    title: "IBM Developing AI Applications with Python and Flask",
    description:
      "Flask-based backend services integrated with AI capabilities on IBM Cloud.",
    image: "/projects/ai-python.webp",
    technologies: ["Flask", "IBM Watson", "Python"],
    category: "Artificial Intelligence",
    icon: FaBrain,
    github:
      "https://github.com/akhildev-mj/IBM-Developing-AI-Applications-with-Python-and-Flask",
    live: "",
  },
  {
    id: 4,
    title: "Crack Detection using ResNet50 and VGG16",
    description:
      "Detecting concrete cracks with high accuracy using transfer learning with ResNet50 and VGG16.",
    image: "/projects/crack-detection.jpg",
    technologies: ["ResNet50", "VGG16", "PyTorch", "TensorFlow", "Keras"],
    category: "Deep Learning",
    icon: FaBrain,
    github:
      "https://github.com/akhildev-mj/Crack-Detection-using-ResNet50-and-VGG16",
    live: "",
  },
  {
    id: 5,
    title: "Fashion-MNIST Classification",
    description:
      "A CNN model built with PyTorch to classify Fashion-MNIST images with over 85% accuracy.",
    image: "/projects/fashion-mnist.jpg",
    technologies: ["PyTorch", "CNN", "Fashion-MNIST"],
    category: "Deep Learning",
    icon: FaBrain,
    github: "https://github.com/akhildev-mj/Fashion-MNIST-Classification",
    live: "",
  },
  {
    id: 6,
    title: "League of Legends Match Predictor",
    description:
      "A logistic regression model in PyTorch to predict match outcomes based on in-game stats.",
    image: "/projects/league-predictor.jpg",
    technologies: ["PyTorch", "Logistic Regression", "Neural Networks"],
    category: "Deep Learning",
    icon: FaBrain,
    github: "https://github.com/akhildev-mj/League-of-Legends-Match-Predictor",
    live: "",
  },
  {
    id: 7,
    title: "Classify Waste Products Using Transfer Learning",
    description:
      "Image classifier for waste sorting using VGG16 and transfer learning techniques.",
    image: "/projects/waste-classification.jpg",
    technologies: ["VGG16", "Transfer Learning", "TensorFlow", "Keras"],
    category: "Deep Learning",
    icon: FaBrain,
    github:
      "https://github.com/akhildev-mj/Classify-Waste-Products-Using-Transfer-Learning",
    live: "",
  },
  {
    id: 8,
    title: "Polynomial Regression",
    description:
      "A project exploring polynomial regression techniques in predictive modeling.",
    image: "/projects/polynomial.webp",
    technologies: ["Python", "scikit-learn", "Matplotlib"],
    category: "Machine Learning",
    icon: FaChartLine,
    github: "https://github.com/akhildev-mj/Polynomial-Regression",
    live: "",
  },
  {
    id: 9,
    title: "Linear Regression",
    description:
      "Basic implementation and visualization of linear regression models.",
    image: "/projects/linear.webp",
    technologies: ["Python", "NumPy", "Pandas", "Matplotlib"],
    category: "Machine Learning",
    icon: FaChartLine,
    github: "https://github.com/akhildev-mj/Linear-Regression",
    live: "",
  },
  {
    id: 10,
    title: "Portfolio Website",
    description: "My personal portfolio built with Next.js and TypeScript.",
    image: "/projects/portfolio.webp",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "Web Development",
    icon: FaGlobe,
    github: "https://github.com/akhildev-mj/portfolio",
    live: "https://akhildev.vercel.app",
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 1,
    title: "Google Advanced Data Analytics Professional Certificate",
    issuer: "Google",
    date: "May 2025",
    credentialId: "GADA-2025-001",
    image: "/certifications/google-advanced-data-analytics.jpeg",
    description:
      "In-depth data analytics techniques using Google tools and techniques",
    skills: [
      "Google Analytics",
      "BigQuery",
      "Data Visualization",
      "Statistical Analysis",
    ],
    category: "Data Analytics",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/professional-cert/google-data-analytics",
  },
  {
    id: 2,
    title: "Natural Language Processing Specialization Certificate",
    issuer: "DeepLearning.AI",
    date: "April 2025",
    credentialId: "NLP-DL-2025-002",
    image: "/certifications/nlp-deeplearning.jpeg",
    description:
      "Techniques for working with and understanding human language data",
    skills: ["NLP", "BERT", "Transformers", "Text Processing"],
    category: "AI/ML",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/specialization/nlp-deeplearning",
  },
  {
    id: 3,
    title: "Microsoft Technical Assistant - Python",
    issuer: "Microsoft",
    date: "June 2019",
    credentialId: "MS-PY-2019-003",
    image: "/certifications/ms-python-intro.jpeg",
    description: "Introduction to programming concepts with Python",
    skills: [
      "Python",
      "Programming Fundamentals",
      "Data Structures",
      "Algorithms",
    ],
    category: "Programming",
    verifyUrl: "https://docs.microsoft.com/en-us/learn/certifications/",
  },
  {
    id: 4,
    title: "IBM Generative AI Engineering Professional Certificate",
    issuer: "IBM",
    date: "March 2025",
    credentialId: "IBM-GAI-2025-004",
    image: "/certifications/ibm-gen-ai.jpeg",
    description:
      "Professional-level certification in generative AI engineering concepts and techniques",
    skills: ["Generative AI", "LLMs", "Prompt Engineering", "AI Ethics"],
    category: "AI/ML",
    verifyUrl: "https://www.credly.com/badges/ibm-generative-ai-engineering",
  },
  {
    id: 5,
    title: "IBM Data Science Professional Certificate",
    issuer: "IBM",
    date: "November 2024",
    credentialId: "IBM-DS-2024-005",
    image: "/certifications/ibm-data-science-professional.jpeg",
    description:
      "Professional-level certification in data science concepts and techniques",
    skills: ["Python", "Machine Learning", "Data Visualization", "SQL"],
    category: "Data Science",
    verifyUrl: "https://www.credly.com/badges/ibm-data-science-professional",
  },
  {
    id: 6,
    title: "Deep Learning Specialization Certificate",
    issuer: "DeepLearning.AI",
    date: "February 2025",
    credentialId: "DL-SPEC-2025-006",
    image: "/certifications/deep-learning-deeplearningai.jpeg",
    description: "Mastering neural networks and deep learning frameworks",
    skills: ["Neural Networks", "TensorFlow", "CNN", "RNN"],
    category: "AI/ML",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/specialization/deep-learning",
  },
  {
    id: 7,
    title: "TensorFlow Developer Professional Certificate",
    issuer: "DeepLearning.AI",
    date: "December 2024",
    credentialId: "TF-DEV-2024-007",
    image: "/certifications/tensorflow-developer.jpeg",
    description: "Building machine learning models with TensorFlow",
    skills: ["TensorFlow", "Keras", "Computer Vision", "NLP"],
    category: "AI/ML",
    verifyUrl: "https://www.tensorflow.org/certificate",
  },
  {
    id: 8,
    title: "IBM AI Developer Professional Certificate",
    issuer: "IBM",
    date: "January 2025",
    credentialId: "IBM-AID-2025-008",
    image: "/certifications/ibm-ai-developer.jpeg",
    description: "Professional-level certification in AI development",
    skills: ["AI Development", "Watson AI", "Python", "Machine Learning"],
    category: "AI/ML",
    verifyUrl: "https://www.credly.com/badges/ibm-ai-developer",
  },
  {
    id: 9,
    title: "IBM AI Engineering Professional Certificate",
    issuer: "IBM",
    date: "February 2025",
    credentialId: "IBM-AIE-2025-009",
    image: "/certifications/ibm-ai-engineering.jpeg",
    description:
      "Professional-level certification in AI engineering concepts and techniques",
    skills: ["AI Engineering", "Deep Learning", "Computer Vision", "NLP"],
    category: "AI/ML",
    verifyUrl: "https://www.credly.com/badges/ibm-ai-engineering",
  },
  {
    id: 10,
    title: "AI Engineering Specialization Certificate",
    issuer: "Scrimba",
    date: "January 2025",
    credentialId: "SCRIMBA-AI-2025-010",
    image: "/certifications/ai-engineering-scrimba.jpeg",
    description:
      "Advanced AI engineering skills including deploying models and systems",
    skills: ["AI Deployment", "Model Optimization", "MLOps", "Production AI"],
    category: "AI/ML",
    verifyUrl: "",
  },
  {
    id: 11,
    title: "Google Business Intelligence Professional Certificate",
    issuer: "Google",
    date: "April 2025",
    credentialId: "GBI-2025-011",
    image: "/certifications/google-bi.jpeg",
    description:
      "Skills in data modeling and extract, transform, load (ETL) processes, data visualizations and dashboards",
    skills: ["Business Intelligence", "ETL", "Data Modeling", "Dashboards"],
    category: "Data Analytics",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/professional-cert/google-bi",
  },
  {
    id: 12,
    title: "Meta Data Analyst Professional Certificate",
    issuer: "Meta",
    date: "October 2024",
    credentialId: "META-DA-2024-012",
    image: "/certifications/meta-data-analyst.jpeg",
    description:
      "Skills in data analysis using popular tools like SQL and Python",
    skills: ["SQL", "Python", "Data Analysis", "Statistics"],
    category: "Data Analytics",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/professional-cert/meta-data-analyst",
  },
  {
    id: 13,
    title: "Meta Back-End Developer Professional Certificate",
    issuer: "Meta",
    date: "September 2024",
    credentialId: "META-BE-2024-013",
    image: "/certifications/meta-backend-developer.jpeg",
    description:
      "Building scalable back-end services using modern technologies",
    skills: ["Django", "APIs", "Databases", "Cloud Deployment"],
    category: "Development",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/professional-cert/meta-backend",
  },
  {
    id: 14,
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta",
    date: "August 2024",
    credentialId: "META-FE-2024-014",
    image: "/certifications/meta-frontend-developer.jpeg",
    description: "Developing modern, responsive front-end web applications",
    skills: ["React", "JavaScript", "HTML/CSS", "UI/UX"],
    category: "Development",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/professional-cert/meta-frontend",
  },
  {
    id: 15,
    title: "Meta iOS Developer Professional Certificate",
    issuer: "Meta",
    date: "March 2025",
    credentialId: "META-iOS-2025-015",
    image: "/certifications/meta-ios-developer.jpeg",
    description: "Skills for developing native mobile apps for iOS platforms",
    skills: ["Swift", "iOS Development", "Xcode", "Mobile UI"],
    category: "Development",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/professional-cert/meta-ios",
  },
];

export const PROJECT_CATEGORIES = [
  "All",
  "Generative AI",
  "Data Analytics",
  "Artificial Intelligence",
  "Deep Learning",
  "Machine Learning",
  "Web Development",
];

export const CERTIFICATION_CATEGORIES = [
  "All",
  "AI/ML",
  "Data Analytics",
  "Data Science",
  "Development",
  "Programming",
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
