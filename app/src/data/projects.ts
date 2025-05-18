import type { Project } from "../types/project";

const projects: Project[] = [
  {
    id: 1,
    title: "IBM Generative AI Applications with RAG and LangChain",
    description:
      "Build and deploy RAG-based AI applications using LangChain and IBM tools.",
    imageUrl: "/projects/generative-ai.webp",
    category: "Generative AI",
    technologies: ["LangChain", "IBM Cloud", "Python", "Vector DB"],
    liveUrl: "",
    githubUrl:
      "https://github.com/akhildev-mj/IBM-Generative-AI-Applications-with-RAG-and-LangChain",
  },
  {
    id: 2,
    title: "Google Advanced Data Analytics Final Project",
    description:
      "Projects and coursework for the Google Advanced Data Analytics Certification.",
    imageUrl: "/projects/google-da.webp",
    category: "Data Analytics",
    technologies: ["Python", "SQL", "Tableau", "BigQuery"],
    liveUrl: "",
    githubUrl:
      "https://github.com/akhildev-mj/Google-Advanced-Data-Analytics-Certification",
  },
  {
    id: 3,
    title: "IBM Developing AI Applications with Python and Flask",
    description:
      "Flask-based backend services integrated with AI capabilities on IBM Cloud.",
    imageUrl: "/projects/ai-python.webp",
    category: "Artificial Intelligence",
    technologies: ["Flask", "IBM Watson", "Python"],
    liveUrl: "",
    githubUrl:
      "https://github.com/akhildev-mj/IBM-Developing-AI-Applications-with-Python-and-Flask",
  },
  {
    id: 4,
    title: "Crack Detection using ResNet50 and VGG16",
    description:
      "Detecting concrete cracks with high accuracy using transfer learning with ResNet50 and VGG16.",
    imageUrl: "/projects/crack-detection.jpg",
    category: "Deep Learning",
    technologies: ["ResNet50", "VGG16", "PyTorch", "TensorFlow", "Keras"],
    liveUrl: "",
    githubUrl:
      "https://github.com/akhildev-mj/Crack-Detection-using-ResNet50-and-VGG16",
  },
  {
    id: 5,
    title: "Fashion-MNIST Classification",
    description:
      "A CNN model built with PyTorch to classify Fashion-MNIST images with over 85% accuracy.",
    imageUrl: "/projects/fashion-mnist.jpg",
    category: "Deep Learning",
    technologies: ["PyTorch", "CNN", "Fashion-MNIST"],
    liveUrl: "",
    githubUrl: "https://github.com/akhildev-mj/Fashion-MNIST-Classification",
  },
  {
    id: 6,
    title: "League of Legends Match Predictor",
    description:
      "A logistic regression model in PyTorch to predict match outcomes based on in-game stats.",
    imageUrl: "/projects/league-predictor.jpg",
    category: "Deep Learning",
    technologies: ["PyTorch", "Logistic Regression", "Neural Networks"],
    liveUrl: "",
    githubUrl:
      "https://github.com/akhildev-mj/League-of-Legends-Match-Predictor",
  },
  {
    id: 7,
    title: "Classify Waste Products Using Transfer Learning",
    description:
      "Image classifier for waste sorting using VGG16 and transfer learning techniques.",
    imageUrl: "/projects/waste-classification.jpg",
    category: "Deep Learning",
    technologies: ["VGG16", "Transfer Learning", "TensorFlow", "Keras"],
    liveUrl: "",
    githubUrl:
      "https://github.com/akhildev-mj/Classify-Waste-Products-Using-Transfer-Learning",
  },
  {
    id: 8,
    title: "Polynomial Regression",
    description:
      "A project exploring polynomial regression techniques in predictive modeling.",
    imageUrl: "/projects/polynomial.webp",
    category: "Machine Learning",
    technologies: ["Python", "scikit-learn", "Matplotlib"],
    liveUrl: "",
    githubUrl: "https://github.com/akhildev-mj/Polynomial-Regression",
  },
  {
    id: 9,
    title: "Linear Regression",
    description:
      "Basic implementation and visualization of linear regression models.",
    imageUrl: "/projects/linear.webp",
    category: "Machine Learning",
    technologies: ["Python", "NumPy", "Pandas", "Matplotlib"],
    liveUrl: "",
    githubUrl: "https://github.com/akhildev-mj/Linear-Regression",
  },
  {
    id: 10,
    title: "Portfolio Website",
    description: "My personal portfolio built with Next.js and TypeScript.",
    imageUrl: "/projects/portfolio.webp",
    category: "Web Development",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "akhildev.vercel.app",
    githubUrl: "https://github.com/akhildev-mj/portfolio",
  },
];

const projectCategories = [
  "All",
  ...new Set(
    Object.entries(
      projects.reduce((acc, cert) => {
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

export { projectCategories, projects };
