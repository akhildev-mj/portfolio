'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import { categories, projects } from '../data/projects';

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
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: false, amount: 0.05 });

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

	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2
			}
		}
	};

	const headerVariants = {
		hidden: { opacity: 0, y: -20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: 'easeOut' }
		}
	};

	const filterVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: 'easeOut', delay: 0.3 }
		}
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				delay: 0.2 + i * 0.1,
				ease: 'easeOut'
			}
		})
	};

	const buttonVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, delay: 0.5, ease: 'easeOut' }
		}
	};

	return (
		<section
			id='projects'
			className='py-16 sm:py-20 bg-background relative overflow-hidden'
			ref={sectionRef}>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<motion.div
					variants={containerVariants}
					initial='hidden'
					animate={isInView ? 'visible' : 'hidden'}>
					{showHeading && (
						<motion.div
							className='text-center mb-8 sm:mb-12'
							variants={headerVariants}>
							<h2 className='text-3xl font-bold text-foreground sm:text-4xl'>
								My Projects
							</h2>
							<p className='mt-4 text-sm sm:text-lg text-muted-foreground'>
								A showcase of my data science and development work
							</p>
						</motion.div>
					)}

					<motion.div
						className='flex justify-start sm:justify-center space-x-2 sm:space-x-4 mb-6 sm:mb-8 overflow-x-auto pb-4'
						variants={filterVariants}>
						{categories.map((category) => (
							<motion.button
								key={category}
								onClick={() => setFilter(category)}
								className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
									filter === category
										? 'bg-primary text-primary-foreground'
										: 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
								}`}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}>
								{category}
							</motion.button>
						))}
					</motion.div>

					<motion.div
						layout
						className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
						<AnimatePresence>
							{displayedProjects.map((project, index) => (
								<motion.div
									key={project.id}
									layout
									variants={itemVariants}
									custom={index}
									className='bg-background rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10'>
									<div
										className='relative h-48 sm:h-64 overflow-hidden cursor-pointer'
										onClick={() => handleProjectClick(project)}>
										<Image
											src={project.imageUrl || '/placeholder.svg'}
											alt={project.title}
											fill
											style={{ objectFit: 'cover', objectPosition: 'top' }}
											className='transition-transform duration-300 ease-in-out hover:scale-105'
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
											{project.technologies.slice(0, 3).map((tech) => (
												<motion.span
													key={tech}
													className='text-[10px] sm:text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full'
													whileHover={{ scale: 1.1 }}
													transition={{
														type: 'spring',
														stiffness: 400,
														damping: 10
													}}>
													{tech}
												</motion.span>
											))}
											{project.technologies.length > 3 && (
												<span className='text-[10px] sm:text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full'>
													+{project.technologies.length - 3}
												</span>
											)}
										</div>
										<div className='flex justify-between'>
											<motion.button
												onClick={() => handleProjectClick(project)}
												className='text-primary hover:underline inline-flex items-center text-sm group'
												whileHover={{ x: 5 }}
												transition={{
													type: 'spring',
													stiffness: 400,
													damping: 10
												}}>
												View Details
												<ChevronRight className='w-3 h-3 sm:w-4 sm:h-4 ml-1 transform group-hover:translate-x-1 transition-transform' />
											</motion.button>
											<div className='flex gap-2'>
												<motion.a
													href={project.githubUrl}
													target='_blank'
													rel='noopener noreferrer'
													className='text-foreground hover:text-primary transition-colors'
													whileHover={{ scale: 1.2, rotate: 5 }}
													transition={{
														type: 'spring',
														stiffness: 400,
														damping: 10
													}}>
													<Github size={16} />
												</motion.a>
												<motion.a
													href={project.liveUrl}
													target='_blank'
													rel='noopener noreferrer'
													className='text-foreground hover:text-primary transition-colors'
													whileHover={{ scale: 1.2, rotate: -5 }}
													transition={{
														type: 'spring',
														stiffness: 400,
														damping: 10
													}}>
													<ExternalLink size={16} />
												</motion.a>
											</div>
										</div>
									</div>
								</motion.div>
							))}
						</AnimatePresence>
					</motion.div>

					{limit && limit < projects.length && (
						<motion.div
							className='mt-8 sm:mt-12 text-center'
							variants={buttonVariants}
							whileHover={{ scale: 1.05 }}
							transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
							<Link href='/projects'>
								<Button
									variant='outline'
									className='border-primary text-primary hover:bg-primary hover:text-primary-foreground'>
									View All Projects
									<ChevronRight className='ml-2 h-4 w-4' />
								</Button>
							</Link>
						</motion.div>
					)}
				</motion.div>
			</div>

			{/* Animated background elements */}
			<motion.div
				className='absolute top-40 right-10 w-40 h-40 rounded-full bg-primary/5 z-0 hidden md:block'
				animate={{
					scale: [1, 1.2, 1],
					rotate: [0, -30, 0]
				}}
				transition={{
					duration: 18,
					repeat: Number.POSITIVE_INFINITY,
					repeatType: 'reverse'
				}}
			/>
			<motion.div
				className='absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-primary/5 z-0 hidden md:block'
				animate={{
					scale: [1, 1.1, 1],
					rotate: [0, 20, 0]
				}}
				transition={{
					duration: 20,
					repeat: Number.POSITIVE_INFINITY,
					repeatType: 'reverse'
				}}
			/>

			<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
				<DialogContent className='max-w-4xl w-[95vw] sm:w-[90vw] max-h-[90vh] overflow-auto'>
					{selectedProject && (
						<motion.div
							className='flex flex-col'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4 }}>
							<h3 className='text-lg sm:text-2xl font-bold mb-4'>
								{selectedProject.title}
							</h3>
							<div className='relative w-full h-[30vh] sm:h-[40vh]'>
								<Image
									src={selectedProject.imageUrl || '/placeholder.svg'}
									alt={selectedProject.title}
									fill
									style={{ objectFit: 'cover', objectPosition: 'top' }}
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
										<motion.span
											key={tech}
											className='text-xs sm:text-sm bg-secondary text-secondary-foreground px-2 sm:px-3 py-1 rounded-full'
											whileHover={{ scale: 1.1 }}
											transition={{
												type: 'spring',
												stiffness: 400,
												damping: 10
											}}>
											{tech}
										</motion.span>
									))}
								</div>

								<div className='flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4'>
									{selectedProject.liveUrl && (
										<motion.a
											href={selectedProject.liveUrl}
											target='_blank'
											rel='noopener noreferrer'
											className='flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors text-sm'
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}>
											<ExternalLink size={16} /> Live Demo
										</motion.a>
									)}
									{selectedProject.githubUrl && (
										<motion.a
											href={selectedProject.githubUrl}
											target='_blank'
											rel='noopener noreferrer'
											className='flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:bg-secondary/80 transition-colors text-sm'
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}>
											<Github size={16} /> View Code
										</motion.a>
									)}
								</div>
							</div>
						</motion.div>
					)}
				</DialogContent>
			</Dialog>
		</section>
	);
}
