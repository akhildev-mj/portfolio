'use client';

import { motion } from 'framer-motion';
import { Code, Database, LineChart, Server } from 'lucide-react';

const services = [
	{
		icon: <Database className='w-12 h-12 mb-4 text-primary' />,
		title: 'Data Science',
		description:
			'Machine learning models, data analysis, and predictive analytics to extract valuable insights from your data.'
	},
	{
		icon: <Code className='w-12 h-12 mb-4 text-primary' />,
		title: 'Full Stack Development',
		description:
			'End-to-end web applications with modern frameworks and responsive design principles.'
	},
	{
		icon: <LineChart className='w-12 h-12 mb-4 text-primary' />,
		title: 'Data Visualization',
		description:
			'Interactive dashboards and visualizations that make complex data accessible and actionable.'
	},
	{
		icon: <Server className='w-12 h-12 mb-4 text-primary' />,
		title: 'API Development',
		description:
			'Robust and scalable APIs that connect your applications and services seamlessly.'
	}
];

export default function Services() {
	return (
		<section
			id='skills'
			className='py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900'>
			<div className='container mx-auto'>
				<motion.h2
					className='text-5xl font-black mb-16 text-center text-foreground'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}>
					My Services
				</motion.h2>
				<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
					{services.map((service, index) => (
						<motion.div
							key={service.title}
							className='bg-background p-6 rounded-lg shadow-md'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: index * 0.1 }}>
							{service.icon}
							<h3 className='text-xl font-bold mb-2 text-foreground'>
								{service.title}
							</h3>
							<p className='text-muted-foreground'>{service.description}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
