'use client';

import { motion } from 'framer-motion';
import {
	Code,
	Database,
	LineChart,
	Server,
	Cpu,
	Globe,
	Lock,
	Layers
} from 'lucide-react';
import Link from 'next/link';

const skills = [
	{
		icon: <Database className='skill-icon' />,
		title: 'Data Science',
		description:
			'Machine learning models, data analysis, and predictive analytics to extract valuable insights from your data.'
	},
	{
		icon: <Code className='skill-icon' />,
		title: 'Full Stack Development',
		description:
			'End-to-end web applications with modern frameworks and responsive design principles.'
	},
	{
		icon: <LineChart className='skill-icon' />,
		title: 'Data Visualization',
		description:
			'Interactive dashboards and visualizations that make complex data accessible and actionable.'
	},
	{
		icon: <Server className='skill-icon' />,
		title: 'API Development',
		description:
			'Robust and scalable APIs that connect your applications and services seamlessly.'
	},
	{
		icon: <Cpu className='skill-icon' />,
		title: 'Cloud Computing',
		description:
			'Designing and implementing scalable solutions using AWS, Azure, and Google Cloud.'
	},
	{
		icon: <Globe className='skill-icon' />,
		title: 'DevOps',
		description:
			'CI/CD pipelines, containerization, and infrastructure as code for seamless deployment.'
	},
	{
		icon: <Lock className='skill-icon' />,
		title: 'Cybersecurity',
		description:
			'Implementing secure coding practices and protecting applications from common vulnerabilities.'
	},
	{
		icon: <Layers className='skill-icon' />,
		title: 'Database Design',
		description:
			'Designing efficient database schemas and optimizing queries for performance.'
	}
];

export default function Skills({
	limit,
	showHeading = true
}: {
	limit?: number;
	showHeading?: boolean;
}) {
	const displayedSkills = limit ? skills.slice(0, limit) : skills;

	return (
		<section id='skills' className='skills-section'>
			<div className='container'>
				{showHeading && (
					<motion.h2
						className='section-title'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}>
						My Skills
					</motion.h2>
				)}
				<div className='skills-grid'>
					{displayedSkills.map((skill, index) => (
						<motion.div
							key={skill.title}
							className='skill-card'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: index * 0.1 }}>
							<div className='skill-card-content'>
								{skill.icon}
								<h3 className='skill-title'>{skill.title}</h3>
								<p className='skill-description'>{skill.description}</p>
							</div>
						</motion.div>
					))}
				</div>

				{limit && limit < skills.length && (
					<div className='view-all-skills'>
						<Link href='/skills' className='btn btn-outline'>
							View All Skills
						</Link>
					</div>
				)}
			</div>
		</section>
	);
}
