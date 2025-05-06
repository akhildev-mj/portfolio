'use client';

import { motion } from 'framer-motion';
import {
	Database,
	Code,
	LineChart,
	Server,
	Cpu,
	Globe,
	Lock,
	Layers
} from 'lucide-react';
import Link from 'next/link';
import { certifications } from '../data/certifications';

// Map certification categories to icons
const iconMap = {
	'Data Analytics': LineChart,
	'Data Science': Database,
	NLP: Globe,
	Python: Code,
	'Artificial Intelligence': Cpu,
	Development: Code,
	Devops: Server,
	'ELK Stack': Layers
};

// Generate unique skills from certifications
const uniqueCategories = Array.from(
	new Set(certifications.map((cert) => cert.category))
);

const skills = uniqueCategories.map((category) => {
	// Determine icon component, fallback to Code
	const IconComponent = (iconMap[category as keyof typeof iconMap] ||
		Code) as React.ElementType;
	return {
		icon: <IconComponent className='skill-icon' />,
		title: category,
		description: `Skills and expertise in ${category} gained through ${
			certifications.filter((c) => c.category === category).length
		} certification(s).`
	};
});

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
