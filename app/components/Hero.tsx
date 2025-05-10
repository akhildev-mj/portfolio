'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Award } from 'lucide-react';

export default function Hero() {
	// Animation variants for staggered animations
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
				delayChildren: 0.1
			}
		}
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
		}
	};

	const imageVariants = {
		hidden: { opacity: 0, scale: 0.9 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 1.2,
				ease: [0.22, 1, 0.36, 1],
				delay: 0.4
			}
		}
	};

	const floatingAnimation = {
		y: [0, -15, 0],
		transition: {
			duration: 6,
			repeat: Number.POSITIVE_INFINITY,
			repeatType: 'loop' as const,
			ease: 'easeInOut'
		}
	};

	const backgroundCircleVariants = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: {
			opacity: 0.5,
			scale: 1,
			transition: {
				duration: 2,
				ease: 'easeOut',
				delay: 0.2
			}
		}
	};

	return (
		<section className='hero-section'>
			<div className='container'>
				<motion.div
					className='hero'
					variants={containerVariants}
					initial='hidden'
					animate='visible'>
					<motion.div className='hero-content' variants={itemVariants}>
						<motion.h1 className='hero-title' variants={itemVariants}>
							<span className='text-gradient'>Akhildev MJ</span>
						</motion.h1>
						<motion.p className='hero-description' variants={itemVariants}>
							Data Scientist & Full Stack Developer crafting intelligent
							solutions through code and analytics.
						</motion.p>
						<motion.div className='hero-actions' variants={itemVariants}>
							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
								<Link
									href='/certifications'
									className='btn btn-primary btn-rounded'>
									View My Certifications
								</Link>
							</motion.div>
							<motion.a
								href='https://www.credly.com/users/akhildevmj'
								className='group flex items-center gap-2 text-foreground hover:text-primary transition-colors px-2 py-3'
								target='_blank'
								rel='noreferrer'
								whileHover={{ x: 5 }}
								transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
								<Award className='h-5 w-5' />
								<span className='relative font-medium'>
									Credly Badges
									<span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full'></span>
								</span>
							</motion.a>
						</motion.div>
					</motion.div>
					<motion.div
						className='hero-image'
						variants={imageVariants}
						animate={floatingAnimation}>
						<img
							src='/hero.webp'
							alt='Data visualization'
							className='hero-img'
						/>
					</motion.div>
				</motion.div>
			</div>

			{/* Animated background elements */}
			<motion.div
				className='absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/5 z-0'
				variants={backgroundCircleVariants}
				initial='hidden'
				animate='visible'
				animate={{
					scale: [1, 1.2, 1],
					rotate: [0, 90, 0]
				}}
				transition={{
					duration: 20,
					repeat: Number.POSITIVE_INFINITY,
					repeatType: 'reverse'
				}}
			/>
			<motion.div
				className='absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-secondary/5 z-0'
				variants={backgroundCircleVariants}
				initial='hidden'
				animate='visible'
				animate={{
					scale: [1, 1.1, 1],
					rotate: [0, -45, 0]
				}}
				transition={{
					duration: 25,
					repeat: Number.POSITIVE_INFINITY,
					repeatType: 'reverse'
				}}
			/>
		</section>
	);
}
