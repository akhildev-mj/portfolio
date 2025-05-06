'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { DialogTitle } from '@radix-ui/react-dialog';
import { projects } from '../data/projects';

const categories = [
	'All',
	...new Set(projects.map((project) => project.category))
];

export default function ProjectsGrid({
	limit,
	showHeading = true
}: {
	limit?: number;
	showHeading?: boolean;
}) {
	const [filter, setFilter] = useState('All');
	const [selectedProject, setSelectedProject] = useState<
		(typeof projects)[0] | null
	>(null);
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const filteredProjects =
		filter === 'All'
			? projects
			: projects.filter((project) => project.category === filter);

	const displayedProjects = limit
		? filteredProjects.slice(0, limit)
		: filteredProjects;

	const handleProjectClick = (project: (typeof projects)[0]) => {
		setSelectedProject(project);
		setIsDialogOpen(true);
	};

	return (
		<section id='projects' className='py-16 sm:py-20 bg-background'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				{showHeading && (
					<motion.div
						className='text-center mb-8 sm:mb-12'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}>
						<h2 className='text-3xl font-bold text-foreground sm:text-4xl'>
							My Projects
						</h2>
						<p className='mt-4 text-sm sm:text-lg text-muted-foreground'>
							A showcase of my data science and development work
						</p>
					</motion.div>
				)}

				<div className='flex justify-start sm:justify-center space-x-2 sm:space-x-4 mb-6 sm:mb-8 overflow-x-auto pb-4'>
					{categories.map((category) => (
						<button
							key={category}
							onClick={() => setFilter(category)}
							className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
								filter === category
									? 'bg-primary text-primary-foreground'
									: 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
							}`}>
							{category}
						</button>
					))}
				</div>

				<motion.div
					layout
					className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
					<AnimatePresence>
						{displayedProjects.map((project) => (
							<motion.div
								key={project.id}
								layout
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.5 }}
								className='bg-background rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10'>
								<div
									className='relative h-48 sm:h-64 overflow-hidden cursor-pointer'
									onClick={() => handleProjectClick(project)}>
									<Image
										src={project.imageUrl || '/placeholder.svg'}
										alt={project.title}
										fill
										style={{ objectFit: 'cover' }}
										className='transition-transform duration-300 ease-in-out group-hover:scale-105'
									/>
									<motion.div
										className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300'
										whileHover={{ opacity: 1 }}>
										<p className='text-white text-center px-4 text-sm sm:text-base'>
											Click to view details
										</p>
									</motion.div>
								</div>
								<div className='p-4 sm:p-6'>
									<div className='text-xs sm:text-sm font-medium text-primary mb-1'>
										{project.category}
									</div>
									<h3 className='text-base sm:text-xl font-semibold text-foreground mb-2'>
										{project.title}
									</h3>
									<p className='text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4'>
										{project.description}
									</p>
									<div className='flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4'>
										{project.technologies.map((tech) => (
											<span
												key={tech}
												className='text-[10px] sm:text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full'>
												{tech}
											</span>
										))}
									</div>
									<div className='flex justify-between'>
										<button
											onClick={() => handleProjectClick(project)}
											className='text-primary hover:underline inline-flex items-center text-sm'>
											View Details
										</button>
										<div className='flex gap-2'>
											<a
												href={project.githubUrl}
												target='_blank'
												rel='noopener noreferrer'
												className='text-foreground hover:text-primary transition-colors'>
												<Github size={16} />
											</a>
											<a
												href={project.liveUrl}
												target='_blank'
												rel='noopener noreferrer'
												className='text-foreground hover:text-primary transition-colors'>
												<ExternalLink size={16} />
											</a>
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</AnimatePresence>
				</motion.div>

				{limit && limit < projects.length && (
					<div className='mt-8 sm:mt-12 text-center'>
						<Link href='/projects'>
							<Button
								variant='outline'
								className='border-primary text-primary hover:bg-primary hover:text-primary-foreground'>
								View All Projects
							</Button>
						</Link>
					</div>
				)}

				<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
					<DialogContent className='max-w-4xl w-[95vw] sm:w-[90vw] max-h-[90vh] overflow-auto'>
						{selectedProject && (
							<div className='flex flex-col'>
								<h3 className='text-lg sm:text-2xl font-bold mb-4'>
									{selectedProject.title}
								</h3>
								<div className='relative w-full h-[30vh] sm:h-[40vh]'>
									<Image
										src={selectedProject.imageUrl || '/placeholder.svg'}
										alt={selectedProject.title}
										fill
										style={{ objectFit: 'cover' }}
										className='rounded-lg'
									/>
								</div>
								<div className='mt-4 sm:mt-6'>
									<p className='text-sm sm:text-base text-muted-foreground mb-4'>
										{selectedProject.description}
									</p>

									<h4 className='font-semibold mb-2 text-sm sm:text-base'>
										Technologies Used:
									</h4>
									<div className='flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6'>
										{selectedProject.technologies.map((tech) => (
											<span
												key={tech}
												className='text-xs sm:text-sm bg-secondary text-secondary-foreground px-2 sm:px-3 py-1 rounded-full'>
												{tech}
											</span>
										))}
									</div>

									<div className='flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4'>
										{selectedProject.liveUrl && (
											<a
												href={selectedProject.liveUrl}
												target='_blank'
												rel='noopener noreferrer'
												className='flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors text-sm'>
												<ExternalLink size={16} /> Live Demo
											</a>
										)}
										{selectedProject.githubUrl && (
											<a
												href={selectedProject.githubUrl}
												target='_blank'
												rel='noopener noreferrer'
												className='flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:bg-secondary/80 transition-colors text-sm'>
												<Github size={16} /> View Code
											</a>
										)}
									</div>
								</div>
							</div>
						)}
					</DialogContent>
				</Dialog>
			</div>
		</section>
	);
}
