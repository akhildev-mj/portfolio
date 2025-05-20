import type { Certification } from "../types/certification";

const certifications: Certification[] = [
  {
    title: "Google Advanced Data Analytics Professional Certificate",
    description:
      "In-depth data analytics techniques using Google tools and techniques",
    imageUrl: "/certifications/google-advanced-data-analytics.jpeg",
    category: "Data Analytics",
    issuer: "Google",
    date: "May 2025",
  },
  {
    title: "Natural Language Processing Specialization Certificate",
    description:
      "Techniques for working with and understanding human language data",
    imageUrl: "/certifications/nlp-deeplearning.jpeg",
    category: "NLP",
    issuer: "DeepLearning.AI",
    date: "March 2025",
  },
  {
    title: "Microsoft Technical Assistant - Python",
    description: "Introduction to programming concepts with Python",
    imageUrl: "/certifications/ms-python-intro.jpeg",
    category: "Programming",
    issuer: "Microsoft",
    date: "February 2019",
  },
  {
    title: "IBM Generative AI Engineering Professional Certificate",
    description:
      "Professional-level certification in generative AI engineering concepts and techniques",
    imageUrl: "/certifications/ibm-gen-ai.jpeg",
    category: "AI",
    issuer: "IBM",
    date: "May 2025",
  },
  {
    title: "IBM Data Science Professional Certificate",
    description:
      "Professional-level certification in data science concepts and techniques",
    imageUrl: "/certifications/ibm-data-science-professional.jpeg",
    category: "Data Science",
    issuer: "IBM",
    date: "April 2024",
  },
  {
    title: "Deep Learning Specialization Certificate",
    description: "Mastering neural networks and deep learning frameworks",
    imageUrl: "/certifications/deep-learning-deeplearningai.jpeg",
    category: "Data Science",
    issuer: "DeepLearning.AI",
    date: "April 2025",
  },
  {
    title: "TensorFlow Developer Professional Certificate",
    description: "Building machine learning models with TensorFlow",
    imageUrl: "/certifications/tensorflow-developer.jpeg",
    category: "Data Science",
    issuer: "DeepLearning.AI",
    date: "June 2024",
  },
  {
    title: "IBM AI Developer Professional Certificate",
    description: "Professional-level certification in AI development",
    imageUrl: "/certifications/ibm-ai-developer.jpeg",
    category: "AI",
    issuer: "IBM",
    date: "May 2025",
  },
  {
    title: "IBM AI Engineering Professional Certificate",
    description:
      "Professional-level certification in AI engineering concepts and techniques",
    imageUrl: "/certifications/ibm-ai-engineering.jpeg",
    category: "AI",
    issuer: "IBM",
    date: "May 2025",
  },
  {
    title: "AI Engineering Specialization Certificate",
    description:
      "Advanced AI engineering skills including deploying models and systems",
    imageUrl: "/certifications/ai-engineering-scrimba.jpeg",
    category: "AI",
    issuer: "Scrimba",
    date: "April 2025",
  },
  {
    title: "Google Business Intelligence Professional Certificate",
    description:
      "Skills in data modeling and extract, transform, load (ETL) processes, data visualizations and dashboards",
    imageUrl: "/certifications/google-bi.jpeg",
    category: "Data Analytics",
    issuer: "Google",
    date: "May 2025",
  },
  {
    title: "Meta Data Analyst Professional Certificate",
    description:
      "Skills in data analysis using popular tools like SQL and Python",
    imageUrl: "/certifications/meta-data-analyst.jpeg",
    category: "Data Analytics",
    issuer: "Meta",
    date: "June 2024",
  },
  {
    title: "Meta Back-End Developer Professional Certificate",
    description:
      "Building scalable back-end services using modern technologies",
    imageUrl: "/certifications/meta-backend-developer.jpeg",
    category: "Development",
    issuer: "Meta",
    date: "September 2024",
  },
  {
    title: "Meta Front-End Developer Professional Certificate",
    description: "Developing modern, responsive front-end web applications",
    imageUrl: "/certifications/meta-frontend-developer.jpeg",
    category: "Development",
    issuer: "Meta",
    date: "August 2024",
  },
  {
    title: "Meta iOS Developer Professional Certificate",
    description: "Skills for developing native mobile apps for iOS platforms",
    imageUrl: "/certifications/meta-ios-developer.jpeg",
    category: "Development",
    issuer: "Meta",
    date: "March 2025",
  },
  {
    title: "Meta Database Engineer Professional Certificate",
    description: "Expertise in database management, design, and optimization",
    imageUrl: "/certifications/meta-database-engineer.jpeg",
    category: "Development",
    issuer: "Meta",
    date: "August 2024",
  },
  {
    title: "Meta React Native Professional Certificate",
    description: "Building cross-platform mobile apps using React Native",
    imageUrl: "/certifications/meta-react-native.jpeg",
    category: "Development",
    issuer: "Meta",
    date: "April 2025",
  },
  {
    title:
      "IBM Deep Learning with PyTorch, Keras and Tensorflow Professional Certificate",
    description:
      "Hands-on experience with deep learning frameworks and applications",
    imageUrl: "/certifications/ibm-deep-learning.jpeg",
    category: "Data Science",
    issuer: "IBM",
    date: "May 2025",
  },
  {
    title: "IBM Generative AI Engineering with LLMs Specialization Certificate",
    description:
      "Advanced specialization in generative AI engineering with large language models",
    imageUrl: "/certifications/ibm-gen-ai-specl.jpeg",
    category: "AI",
    issuer: "IBM",
    date: "May 2025",
  },
  {
    title: "AI Foundations for Everyone Specialization Certificate",
    description:
      "Fundamentals of Artificial Intelligence with real-world applications",
    imageUrl: "/certifications/ai-foundations-ibm.jpeg",
    category: "AI",
    issuer: "IBM",
    date: "May 2025",
  },
  {
    title: "Applied Data Science Specialization Certificate",
    description: "Hands-on skills in data science with real-world applications",
    imageUrl: "/certifications/applied-data-science-ibm.jpeg",
    category: "Data Science",
    issuer: "IBM",
    date: "April 2025",
  },
  {
    title: "Data Science Fundamentals Specialization Certificate",
    description: "Introduction to data science concepts and techniques",
    imageUrl: "/certifications/data-science-fundamentals-ibm.jpeg",
    category: "Data Science",
    issuer: "IBM",
    date: "April 2025",
  },
  {
    title: "Introduction to Data Science Specialization Certificate",
    description: "Learn the basic techniques in data science and analysis",
    imageUrl: "/certifications/intro-data-science-ibm.jpeg",
    category: "Data Science",
    issuer: "IBM",
    date: "April 2025",
  },
  {
    title: "Programming with Python",
    description: "Learning Python programming with practical applications",
    imageUrl: "/certifications/python-programming.jpeg",
    category: "Programming",
    issuer: "Internshala",
    date: "May 2018",
  },
  {
    title: "Android App Development",
    description: "Learn Android app development from scratch",
    imageUrl: "/certifications/android-development.jpeg",
    category: "Development",
    issuer: "Internshala",
    date: "August 2018",
  },
  {
    title: "Web Development",
    description: "Web development concepts including front-end and back-end",
    imageUrl: "/certifications/web-development.jpeg",
    category: "Development",
    issuer: "Internshala",
    date: "August 2018",
  },
  {
    title: "Google Agile Essentials",
    description:
      "Agile methodologies in a data-driven world for teams and projects",
    imageUrl: "/certifications/google-agile-essentials.jpeg",
    category: "Programming",
    issuer: "Google",
    date: "April 2025",
  },
  {
    title: "Google AI Essentials",
    description:
      "Essentials of AI, its applications, and how it’s transforming industries",
    imageUrl: "/certifications/google-ai-essentials.jpeg",
    category: "AI",
    issuer: "Google",
    date: "April 2025",
  },
  {
    title: "Google Prompting Essentials",
    description: "How to effectively use prompting techniques for AI models",
    imageUrl: "/certifications/google-prompting-essentials.jpeg",
    category: "AI",
    issuer: "Google",
    date: "April 2025",
  },
  {
    title: "Python for Time Series Data Analysis",
    description: "Time series data analysis using Python libraries",
    imageUrl: "/certifications/python-time-series.jpeg",
    category: "Data Science",
    issuer: "Udemy",
    date: "May 2024",
  },
  {
    title: "Data Science for Business | 6 Real-world Case Studies",
    description:
      "Practical data science skills for solving real-world business problems",
    imageUrl: "/certifications/data-science-business.jpeg",
    category: "Data Science",
    issuer: "Udemy",
    date: "April 2024",
  },
  {
    title: "Remix.js - The Practical Guide",
    description: "Learn Remix.js for modern web development",
    imageUrl: "/certifications/remixjs-guide.jpeg",
    category: "Development",
    issuer: "Udemy",
    date: "January 2024",
  },
  {
    title: "Flutter & Dart - The Complete Guide",
    description: "Building mobile apps with Flutter and Dart",
    imageUrl: "/certifications/flutter-dart-guide.jpeg",
    category: "Development",
    issuer: "Udemy",
    date: "March 2022",
  },
  {
    title: "Docker & Kubernetes: The Practical Guide",
    description:
      "Learn containerization and orchestration with Docker and Kubernetes",
    imageUrl: "/certifications/docker-kubernetes-guide.jpeg",
    category: "DevOps & Cloud",
    issuer: "Udemy",
    date: "February 2022",
  },
  {
    title: "Next.js & React - The Complete Guide",
    description: "Learn to build full-stack web apps with React and Next.js",
    imageUrl: "/certifications/nextjs-react-guide.jpeg",
    category: "Development",
    issuer: "Udemy",
    date: "February 2022",
  },
  {
    title: "Complete Guide to Elasticsearch",
    description: "Master Elasticsearch for real-time search and analytics",
    imageUrl: "/certifications/elasticsearch-guide.jpeg",
    category: "ELK Stack",
    issuer: "Udemy",
    date: "January 2022",
  },
  {
    title: "Data Processing with Logstash (and Filebeat)",
    description:
      "Learn data processing and transformation with Logstash and Filebeat",
    imageUrl: "/certifications/logstash-filebeat.jpeg",
    category: "ELK Stack",
    issuer: "Udemy",
    date: "January 2022",
  },
  {
    title: "Data Visualization with Kibana",
    description:
      "Create interactive dashboards and data visualizations with Kibana",
    imageUrl: "/certifications/kibana-data-viz.jpeg",
    category: "ELK Stack",
    issuer: "Udemy",
    date: "January 2022",
  },
  {
    title: "NestJS: The Complete Developer's Guide",
    description:
      "Learn NestJS for building server-side applications with TypeScript",
    imageUrl: "/certifications/nestjs-guide.jpeg",
    category: "Development",
    issuer: "Udemy",
    date: "December 2021",
  },
  {
    title: "The Complete React Developer Course (w/ Hooks and Redux)",
    description: "Building scalable React applications with hooks and Redux",
    imageUrl: "/certifications/react-developer-course.jpeg",
    category: "Development",
    issuer: "Udemy",
    date: "April 2021",
  },
  {
    title: "NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)",
    description: "Learn Node.js for back-end development with modern tools",
    imageUrl: "/certifications/nodejs-guide.jpeg",
    category: "Development",
    issuer: "Udemy",
    date: "January 2021",
  },
  {
    title: "The Complete JavaScript Course 2021: From Zero to Expert!",
    description:
      "Comprehensive JavaScript course for front-end and back-end development",
    imageUrl: "/certifications/javascript-complete-course.jpeg",
    category: "Programming",
    issuer: "Udemy",
    date: "December 2020",
  },
];

certifications.forEach((cert: any, i: number) => (cert.id = i + 1));

const certificationCategories = [
  "All",
  ...new Set(
    Object.entries(
      certifications.reduce((acc, cert) => {
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

export { certificationCategories, certifications };
