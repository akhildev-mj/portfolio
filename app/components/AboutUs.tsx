'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import {
	Database,
	Code,
	LineChart,
	Server,
	Cpu,
	Globe,
	ChevronRight
} from 'lucide-react';
import { USE_IN_VIEW_AMOUNT } from '../shared/constants';

export default function AboutUs() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: false, amount: USE_IN_VIEW_AMOUNT });

	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3
			}
		}
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: 'easeOut' }
		}
	};

	const leftColumnVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8, ease: 'easeOut' }
		}
	};

	const rightColumnVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 }
		}
	};

	const skillItemVariants = {
		hidden: { opacity: 0, y: 15 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				delay: 0.3 + i * 0.1
			}
		})
	};

	const statsVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				delay: 0.6
			}
		}
	};

	const statNumberVariants = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: (i: number) => ({
			opacity: 1,
			scale: 1,
			transition: {
				type: 'spring',
				stiffness: 200,
				damping: 10,
				delay: 0.8 + i * 0.1
			}
		})
	};

	return (
		<section
			id='about'
			className='py-16 sm:py-20 bg-background relative overflow-hidden'>
			<div className='container' ref={ref}>
				<motion.div
					variants={containerVariants}
					initial='hidden'
					animate={isInView ? 'visible' : 'hidden'}>
					<motion.h2 className='section-title' variants={itemVariants}>
						About Me
					</motion.h2>

					<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12'>
						<motion.div variants={leftColumnVariants} className='space-y-6'>
							<h3 className='text-xl sm:text-2xl font-bold text-foreground'>
								Data Scientist & Full Stack Developer
							</h3>
							<p className='text-muted-foreground'>
								I'm Akhildev MJ, a passionate data scientist and full stack
								developer with expertise in transforming complex data into
								actionable insights and building robust web applications. With a
								strong foundation in both data science and software development,
								I bridge the gap between analytics and implementation.
							</p>
							<p className='text-muted-foreground'>
								My approach combines analytical thinking with creative
								problem-solving to deliver solutions that not only meet
								technical requirements but also provide real business value. I'm
								constantly exploring new technologies and methodologies to
								enhance my skill set and deliver better results.
							</p>

							<motion.div
								className='pt-4'
								whileHover={{ scale: 1.05 }}
								transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
								<Link
									href='/certifications'
									className='btn btn-primary btn-rounded inline-flex items-center gap-2'>
									View My Certifications
									<ChevronRight className='h-4 w-4' />
								</Link>
							</motion.div>
						</motion.div>

						<motion.div variants={rightColumnVariants} className='space-y-6'>
							<h3 className='text-xl sm:text-2xl font-bold text-foreground'>
								Core Skills
							</h3>

							<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
								{[
									{
										icon: <Database className='h-6 w-6 text-primary mt-0.5' />,
										title: 'Data Science',
										description:
											'Machine learning, predictive modeling, data analysis'
									},
									{
										icon: <Code className='h-6 w-6 text-primary mt-0.5' />,
										title: 'Full Stack Development',
										description: 'React, Next.js, Node.js, Python, TypeScript'
									},
									{
										icon: <LineChart className='h-6 w-6 text-primary mt-0.5' />,
										title: 'Data Visualization',
										description: 'Tableau, Python visualization libraries'
									},
									{
										icon: <Cpu className='h-6 w-6 text-primary mt-0.5' />,
										title: 'Artificial Intelligence',
										description:
											'NLP, deep learning, AI application development'
									},
									{
										icon: <Globe className='h-6 w-6 text-primary mt-0.5' />,
										title: 'Natural Language Processing',
										description:
											'Text analysis, sentiment analysis, language models'
									},
									{
										icon: <Server className='h-6 w-6 text-primary mt-0.5' />,
										title: 'DevOps & Cloud',
										description: 'Docker, Kubernetes, cloud deployment'
									}
								].map((skill, i) => (
									<motion.div
										key={skill.title}
										className='flex items-start gap-3'
										variants={skillItemVariants}
										custom={i}
										whileHover={{
											x: 5,
											transition: {
												type: 'spring',
												stiffness: 300,
												damping: 10
											}
										}}>
										{skill.icon}
										<div>
											<h4 className='font-semibold'>{skill.title}</h4>
											<p className='text-sm text-muted-foreground'>
												{skill.description}
											</p>
										</div>
									</motion.div>
								))}
							</div>

							<motion.div
								className='pt-4'
								variants={itemVariants}
								whileHover={{ x: 5 }}
								transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
								<Link
									href='/skills'
									className='text-primary hover:underline inline-flex items-center gap-1 group'>
									<span>View all my skills and expertise</span>
									<ChevronRight className='h-4 w-4 transform group-hover:translate-x-1 transition-transform' />
								</Link>
							</motion.div>
						</motion.div>
					</div>

					<motion.div
						className='mt-12 pt-8 border-t border-border'
						variants={statsVariants}>
						<div className='grid grid-cols-2 sm:grid-cols-4 gap-6 text-center'>
							{[
								{ number: '50+', label: 'Certifications' },
								{ number: '25+', label: 'Projects' },
								{ number: '25+', label: 'Technologies' },
								{ number: '5+', label: 'Years Experience' }
							].map((stat, i) => (
								<motion.div
									key={stat.label}
									variants={statNumberVariants}
									custom={i}
									whileHover={{
										scale: 1.1,
										transition: { type: 'spring', stiffness: 300, damping: 10 }
									}}>
									<h4 className='text-3xl sm:text-4xl font-bold text-primary'>
										{stat.number}
									</h4>
									<p className='text-sm sm:text-base text-muted-foreground'>
										{stat.label}
									</p>
								</motion.div>
							))}
						</div>
					</motion.div>
				</motion.div>
			</div>

			{/* Background decoration */}
			<motion.div
				className='absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-primary/5 z-0'
				animate={{
					scale: [1, 1.2, 1],
					rotate: [0, 45, 0]
				}}
				transition={{
					duration: 15,
					repeat: Number.POSITIVE_INFINITY,
					repeatType: 'reverse'
				}}
			/>
		</section>
	);
}
