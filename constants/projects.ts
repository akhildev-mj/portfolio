import { Project } from "@/types";
import {
  FaBrain,
  FaChartBar,
  FaChartLine,
  FaGlobe,
  FaRobot,
} from "react-icons/fa";

const PROJECT_DATA: Project[] = [
  {
    title: "Audocare AI Voice Agent",
    description:
      "Intelligent, speech-driven assistant that engages users in real-time conversations to detect and assess symptoms of illness",
    image: "/projects/audocare-ai.jpeg",
    category: "Generative AI",
    technologies: ["Python", "NLP", "LiveKit", "OpenAI", "ElevenLabs"],
    icon: FaRobot,
    github: "https://github.com/akhildev-mj/Audocare-AI-Agent",
    live: "",
  },
  {
    title: "Audocare AI Voice Agent Web Application",
    description:
      "A companion frontend for the Audocare AI Voice Agent, built using Next.js and LiveKit SDK.",
    image: "/projects/audocare-ai-web.jpeg",
    category: "Web Development",
    technologies: ["Next.js", "LiveKit SDK", "TypeScript", "Tailwind CSS"],
    icon: FaGlobe,
    github: "https://github.com/akhildev-mj/Audocare-Web-App",
    live: "",
  },
  {
    title: "IBM Generative AI Applications with RAG and LangChain",
    description:
      "Build and deploy RAG-based AI applications using LangChain and IBM tools.",
    image: "/projects/generative-ai.jpeg",
    category: "Generative AI",
    technologies: ["LangChain", "IBM Cloud", "Python", "Vector DB"],
    icon: FaRobot,
    github:
      "https://github.com/akhildev-mj/IBM-Generative-AI-Applications-with-RAG-and-LangChain",
    live: "",
  },
  {
    title: "Google Advanced Data Analytics Final Project",
    description:
      "Projects and coursework for the Google Advanced Data Analytics Certification.",
    image: "/projects/google-da.jpeg",
    category: "Data Analytics",
    technologies: ["Python", "SQL", "Tableau", "BigQuery"],
    icon: FaChartBar,
    github:
      "https://github.com/akhildev-mj/Google-Advanced-Data-Analytics-Certification",
    live: "",
  },
  {
    title: "IBM Developing AI Applications with Python and Flask Project",
    description:
      "Flask-based backend services integrated with AI capabilities on IBM Cloud.",
    image: "/projects/ai-python.jpeg",
    category: "Artificial Intelligence",
    technologies: ["Flask", "IBM Watson", "Python"],
    icon: FaBrain,
    github:
      "https://github.com/akhildev-mj/IBM-Developing-AI-Applications-with-Python-and-Flask",
    live: "",
  },
  {
    title: "Crack Detection using ResNet50 and VGG16",
    description:
      "Detecting concrete cracks with high accuracy using transfer learning with ResNet50 and VGG16.",
    image: "/projects/crack-detection.jpeg",
    category: "Deep Learning",
    technologies: ["ResNet50", "VGG16", "PyTorch", "TensorFlow", "Keras"],
    icon: FaBrain,
    github:
      "https://github.com/akhildev-mj/Crack-Detection-using-ResNet50-and-VGG16",
    live: "",
  },
  {
    title: "Fashion-MNIST Classification",
    description:
      "A CNN model built with PyTorch to classify Fashion-MNIST images with over 85% accuracy.",
    image: "/projects/fashion-mnist.jpeg",
    category: "Deep Learning",
    technologies: ["PyTorch", "CNN", "Fashion-MNIST"],
    icon: FaBrain,
    github: "https://github.com/akhildev-mj/Fashion-MNIST-Classification",
    live: "",
  },
  {
    title: "League of Legends Match Predictor",
    description:
      "A logistic regression model in PyTorch to predict match outcomes based on in-game stats.",
    image: "/projects/league-predictor.jpeg",
    category: "Deep Learning",
    technologies: ["PyTorch", "Logistic Regression", "Neural Networks"],
    icon: FaBrain,
    github: "https://github.com/akhildev-mj/League-of-Legends-Match-Predictor",
    live: "",
  },
  {
    title: "Classify Waste Products Using Transfer Learning",
    description:
      "Image classifier for waste sorting using VGG16 and transfer learning techniques.",
    image: "/projects/waste-classification.jpeg",
    category: "Deep Learning",
    technologies: ["VGG16", "Transfer Learning", "TensorFlow", "Keras"],
    icon: FaBrain,
    github:
      "https://github.com/akhildev-mj/Classify-Waste-Products-Using-Transfer-Learning",
    live: "",
  },
  {
    title: "Polynomial Regression",
    description:
      "A project exploring polynomial regression techniques in predictive modeling.",
    image: "/projects/polynomial.jpeg",
    category: "Machine Learning",
    technologies: ["Python", "scikit-learn", "Matplotlib"],
    icon: FaChartLine,
    github: "https://github.com/akhildev-mj/Polynomial-Regression",
    live: "",
  },
  {
    title: "Linear Regression",
    description:
      "Basic implementation and visualization of linear regression models.",
    image: "/projects/linear.jpeg",
    category: "Machine Learning",
    technologies: ["Python", "NumPy", "Pandas", "Matplotlib"],
    icon: FaChartLine,
    github: "https://github.com/akhildev-mj/Linear-Regression",
    live: "",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with Next.js and TypeScript.",
    image: "/projects/portfolio.jpeg",
    category: "Web Development",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    icon: FaGlobe,
    github: "https://github.com/akhildev-mj/portfolio",
    live: "https://akhildev.vercel.app",
  },
];

export const PROJECTS: Project[] = PROJECT_DATA.map((project, index) => ({
  id: index + 1,
  ...project,
}));

export const PROJECT_CATEGORIES = [
  "All",
  ...new Set(
    Object.entries(
      PROJECTS.reduce((acc, cert) => {
        const category = cert.category;
        if (acc[category]) acc[category]++;
        else acc[category] = 1;
        return acc;
      }, {} as Record<string, number>)
    )
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map(([category]) => category)
  ),
];
