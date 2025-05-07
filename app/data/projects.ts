export const projects = [
	{
		id: 1,
		title: 'IBM Generative AI Applications with RAG and LangChain',
		description:
			'Build and deploy RAG-based AI applications using LangChain and IBM tools.',
		imageUrl: '/projects/generative-ai.webp',
		category: 'Generative AI',
		technologies: ['LangChain', 'IBM Cloud', 'Python', 'Vector DB'],
		liveUrl: '',
		githubUrl:
			'https://github.com/akhildev-mj/IBM-Generative-AI-Applications-with-RAG-and-LangChain'
	},
	{
		id: 2,
		title: 'Google Advanced Data Analytics Final Project',
		description:
			'Projects and coursework for the Google Advanced Data Analytics Certification.',
		imageUrl: '/projects/google-da.webp',
		category: 'Data Science',
		technologies: ['Python', 'SQL', 'Tableau', 'BigQuery'],
		liveUrl: '',
		githubUrl:
			'https://github.com/akhildev-mj/Google-Advanced-Data-Analytics-Certification'
	},
	{
		id: 3,
		title: 'IBM Developing AI Applications with Python and Flask',
		description:
			'Flask-based backend services integrated with AI capabilities on IBM Cloud.',
		imageUrl: '/projects/ai-python.webp',
		category: 'AI Development',
		technologies: ['Flask', 'IBM Watson', 'Python'],
		liveUrl: '',
		githubUrl:
			'https://github.com/akhildev-mj/IBM-Developing-AI-Applications-with-Python-and-Flask'
	},
	{
		id: 4,
		title: 'Polynomial Regression',
		description:
			'A project exploring polynomial regression techniques in predictive modeling.',
		imageUrl: '/projects/polynomial.webp',
		category: 'Machine Learning',
		technologies: ['Python', 'scikit-learn', 'Matplotlib'],
		liveUrl: '',
		githubUrl: 'https://github.com/akhildev-mj/Polynomial-Regression'
	},
	{
		id: 5,
		title: 'Linear Regression',
		description:
			'Basic implementation and visualization of linear regression models.',
		imageUrl: '/projects/linear.webp',
		category: 'Machine Learning',
		technologies: ['Python', 'NumPy', 'Pandas', 'Matplotlib'],
		liveUrl: '',
		githubUrl: 'https://github.com/akhildev-mj/Linear-Regression'
	},
	{
		id: 6,
		title: 'Portfolio Website',
		description: 'My personal portfolio built with Next.js and TypeScript.',
		imageUrl: '/projects/portfolio.webp',
		category: 'Web Development',
		technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
		liveUrl: '',
		githubUrl: 'https://github.com/akhildev-mj/portfolio'
	}
];

export const categories = [
	'All',
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
	)
];
