'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { categories, certifications } from '../data/certifications';
import { ChevronRight } from 'lucide-react';

export default function CertificationsGrid({
	limit,
	showHeading = true
}: {
	limit?: number;
	showHeading?: boolean;
}) {
	const [filter, setFilter] = useState('All');
	const [selectedCertificate, setSelectedCertificate] = useState<
		(typeof certifications)[0] | null
	>(null);
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: false, amount: 0.05 });

	const filteredCertifications =
		filter === 'All'
			? certifications
			: certifications.filter((cert) => cert.category === filter);

	const displayedCertifications = limit
		? filteredCertifications.slice(0, limit)
		: filteredCertifications;

	const handleCertificateClick = (certificate: (typeof certifications)[0]) => {
		setSelectedCertificate(certificate);
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
			id='certifications'
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
								My Certifications
							</h2>
							<p className='mt-4 text-sm sm:text-lg text-muted-foreground'>
								Professional certifications and achievements in data science and
								development
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
							{displayedCertifications.map((certificate, index) => (
								<motion.div
									key={certificate.id}
									layout
									variants={itemVariants}
									custom={index}
									className='bg-background rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10'>
									<div
										className='relative h-48 sm:h-64 overflow-hidden cursor-pointer'
										onClick={() => handleCertificateClick(certificate)}>
										<Image
											src={certificate.imageUrl || '/placeholder.svg'}
											alt={certificate.title}
											fill
											style={{ objectFit: 'cover', objectPosition: 'top' }}
											className='transition-transform duration-300 ease-in-out group-hover:scale-105'
										/>
										<motion.div
											className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300'
											whileHover={{ opacity: 1 }}>
											<p className='text-white text-center px-4 text-sm sm:text-base'>
												Click to view certificate
											</p>
										</motion.div>
									</div>
									<div className='p-4 sm:p-6'>
										<div className='text-xs sm:text-sm font-medium text-primary mb-1'>
											{certificate.category}
										</div>
										<h3 className='text-base sm:text-xl font-semibold text-foreground mb-2'>
											{certificate.title}
										</h3>
										<p className='text-xs sm:text-sm text-muted-foreground mb-4'>
											{certificate.issuer} • {certificate.date}
										</p>
										<motion.button
											onClick={() => handleCertificateClick(certificate)}
											className='text-primary hover:underline inline-flex items-center text-sm group'
											whileHover={{ x: 5 }}
											transition={{
												type: 'spring',
												stiffness: 400,
												damping: 10
											}}>
											View Certificate
											<ChevronRight className='w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 transform group-hover:translate-x-1 transition-transform' />
										</motion.button>
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
				className='absolute -top-16 -left-16 w-32 h-32 rounded-full bg-primary/5 z-0 hidden md:block'
				animate={{
					scale: [1, 1.2, 1],
					rotate: [0, 45, 0]
				}}
				transition={{
					duration: 12,
					repeat: Number.POSITIVE_INFINITY,
					repeatType: 'reverse'
				}}
			/>
			<motion.div
				className='absolute bottom-20 right-10 w-24 h-24 rounded-full bg-primary/5 z-0 hidden md:block'
				animate={{
					scale: [1, 1.3, 1],
					rotate: [0, -30, 0]
				}}
				transition={{
					duration: 15,
					repeat: Number.POSITIVE_INFINITY,
					repeatType: 'reverse'
				}}
			/>

			<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
				<DialogContent className='max-w-4xl w-[95vw] sm:w-[90vw] max-h-[90vh] overflow-auto'>
					{selectedCertificate && (
						<motion.div
							className='flex flex-col items-center'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4 }}>
							<h3 className='text-lg sm:text-xl font-bold mb-4'>
								{selectedCertificate.title}
							</h3>
							<div className='relative w-full h-[40vh] sm:h-[60vh]'>
								<Image
									src={selectedCertificate.imageUrl || '/placeholder.svg'}
									alt={selectedCertificate.title}
									fill
									style={{ objectFit: 'contain' }}
								/>
							</div>
							<div className='mt-4 text-center'>
								<p className='text-sm text-muted-foreground'>
									{selectedCertificate.issuer} • {selectedCertificate.date}
								</p>
								<p className='mt-2 text-sm sm:text-base'>
									{selectedCertificate.description}
								</p>
							</div>
						</motion.div>
					)}
				</DialogContent>
			</Dialog>
		</section>
	);
}
