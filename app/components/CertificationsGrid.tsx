'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { certifications } from '../data/certifications';
import { USE_IN_VIEW_AMOUNT } from '../shared/constants';

// Add this utility class for hiding scrollbars while allowing scrolling
const scrollbarHideClass = 'scrollbar-hide';

export default function CertificationsGrid({
	isHomePage = true,
	limit,
	showHeading = true
}: {
	limit?: number;
	showHeading?: boolean;
	isHomePage?: boolean;
}) {
	const [filter, setFilter] = useState('All');
	const [selectedCertification, setSelectedCertification] = useState<
		(typeof certifications)[0] | null
	>(null);
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [sectionRef] = useState(useRef(null));
	const [isInView, setIsInView] = useState(false);

	useEffect(() => {
		if (sectionRef.current) {
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							setIsInView(true);
						} else {
							if (isHomePage) {
								setIsInView(false);
							}
						}
					});
				},
				{
					threshold: isHomePage ? USE_IN_VIEW_AMOUNT : 0
				}
			);

			observer.observe(sectionRef.current);

			return () => observer.disconnect();
		}
	}, [isHomePage]);

	const filteredCertifications =
		filter === 'All'
			? certifications
			: certifications.filter(
					(certification) => certification.category === filter
			  );

	const displayedCertifications = limit
		? filteredCertifications.slice(0, limit)
		: filteredCertifications;

	const handleCertificationClick = (
		certification: (typeof certifications)[0]
	) => {
		setSelectedCertification(certification);
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

	const categories = [
		'All',
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
		)
	];

	return (
		<section
			id='certifications'
			className='py-16 sm:py-20 bg-background relative overflow-hidden'
			ref={sectionRef}>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<motion.div
					variants={containerVariants}
					initial='hidden'
					animate={isHomePage ? (isInView ? 'visible' : 'hidden') : 'visible'}>
					{showHeading && (
						<motion.div
							className='text-center mb-8 sm:mb-12'
							variants={headerVariants}>
							<h2 className='text-3xl font-bold text-foreground sm:text-4xl'>
								My Certifications
							</h2>
							<p className='mt-4 text-sm sm:text-lg text-muted-foreground'>
								A showcase of my professional certifications and achievements
							</p>
						</motion.div>
					)}

					<motion.div
						className='w-full relative mb-6 sm:mb-8'
						variants={filterVariants}>
						<div className='category-scroll'>
							<div className='category-scroll-inner'>
								{categories.map((category) => (
									<motion.button
										key={category}
										onClick={() => setFilter(category)}
										className={`category-button ${
											filter === category
												? 'category-button-active'
												: 'category-button-inactive'
										}`}
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}>
										{category}
									</motion.button>
								))}
							</div>
						</div>
						<div className='absolute left-0 right-0 bottom-0 h-4 pointer-events-none bg-gradient-to-t from-background to-transparent sm:hidden'></div>
					</motion.div>

					<motion.div
						layout
						className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
						<AnimatePresence>
							{displayedCertifications.map((certification, index) => (
								<motion.div
									key={certification.id}
									layout
									variants={itemVariants}
									custom={index}
									className='bg-background rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10'>
									<div
										className='relative h-48 sm:h-64 overflow-hidden cursor-pointer'
										onClick={() => handleCertificationClick(certification)}>
										<Image
											src={
												certification.imageUrl
													.replace('.jpeg', '_t.jpeg')
													.replace(
														'/certifications/',
														'/certifications/thumbnails/'
													) || '/placeholder.svg'
											}
											alt={certification.title}
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
											{certification.category}
										</div>
										<h3 className='text-base sm:text-xl font-semibold text-foreground mb-2'>
											{certification.title}
										</h3>
										<p className='text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4'>
											{certification.description}
										</p>
										<div className='flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4'>
											<span className='text-[10px] sm:text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full'>
												{certification.issuer}
											</span>
										</div>
										<div className='flex justify-between'>
											<motion.button
												onClick={() => handleCertificationClick(certification)}
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
										</div>
									</div>
								</motion.div>
							))}
						</AnimatePresence>
					</motion.div>

					{limit && limit < certifications.length && (
						<motion.div
							className='mt-8 sm:mt-12 text-center'
							variants={buttonVariants}
							whileHover={{ scale: 1.05 }}
							transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
							<Link href='/certifications'>
								<Button
									variant='outline'
									className='border-primary text-primary hover:bg-primary hover:text-primary-foreground'>
									View All Certifications
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
					{selectedCertification && (
						<motion.div
							className='flex flex-col'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4 }}>
							<h3 className='text-lg sm:text-2xl font-bold mb-4'>
								{selectedCertification.title}
							</h3>
							<div className='relative w-full h-[30vh] sm:h-[40vh]'>
								<Image
									src={selectedCertification.imageUrl || '/placeholder.svg'}
									alt={selectedCertification.title}
									fill
									style={{ objectFit: 'contain' }}
									className='rounded-lg'
								/>
							</div>
							<div className='mt-4 sm:mt-6'>
								<p className='text-sm sm:text-base text-muted-foreground mb-4'>
									{selectedCertification.description}
								</p>

								<h4 className='font-semibold mb-2 text-sm sm:text-base'>
									Issuer:
								</h4>
								<div className='flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6'>
									<span className='text-xs sm:text-sm bg-secondary text-secondary-foreground px-2 sm:px-3 py-1 rounded-full'>
										{selectedCertification.issuer}
									</span>
								</div>

								<div className='flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4'></div>
							</div>
						</motion.div>
					)}
				</DialogContent>
			</Dialog>
			<style jsx>{styles}</style>
		</section>
	);
}

// Add this style to the component
const styles = `
    .scrollbar-hide {
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    }
    .scrollbar-hide::-webkit-scrollbar {
      display: none;  /* Chrome, Safari and Opera */
    }

    .category-scroll {
      overflow-x: auto;
      overflow-y: hidden;
      scroll-snap-type: x mandatory;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none; /* Hide scrollbar for Firefox */
      -ms-overflow-style: none; /* Hide scrollbar for IE and Edge */
    }

    .category-scroll::-webkit-scrollbar {
      display: none; /* Hide scrollbar for Chrome, Safari and Opera */
    }

    .category-scroll-inner {
      display: flex;
      padding-bottom: 10px; /* Add some space for the shadow */
    }

    .category-button {
      scroll-snap-align: start;
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 500;
      white-space: nowrap;
      transition: all 0.2s ease-in-out;
      margin: 0 4px;
      cursor: pointer;
      border: none;
      outline: none;

			
    }

    .category-button-active {
		  background-color: hsl(var(--primary));
      color:hsl(var(--primary-foreground));
    }

		.category-button-inactive {
			background-color: hsl(var(--secondary));
			color: hsl(var(--secondary-foreground));
		}
  `;
