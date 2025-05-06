'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { certifications } from '../data/certifications';

const categories = [
	'All',
	...new Set(certifications.map((cert) => cert.category))
];

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

	return (
		<section id='certifications' className='py-16 sm:py-20 bg-background'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				{showHeading && (
					<motion.div
						className='text-center mb-8 sm:mb-12'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}>
						<h2 className='text-3xl font-bold text-foreground sm:text-4xl'>
							My Certifications
						</h2>
						<p className='mt-4 text-sm sm:text-lg text-muted-foreground'>
							Professional certifications and achievements in data science and
							development
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
						{displayedCertifications.map((certificate) => (
							<motion.div
								key={certificate.id}
								layout
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.5 }}
								className='bg-background rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10'>
								<div
									className='relative h-48 sm:h-64 overflow-hidden cursor-pointer'
									onClick={() => handleCertificateClick(certificate)}>
									<Image
										src={certificate.imageUrl || '/placeholder.svg'}
										alt={certificate.title}
										fill
										style={{ objectFit: 'cover' }}
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
									<button
										onClick={() => handleCertificateClick(certificate)}
										className='text-primary hover:underline inline-flex items-center text-sm'>
										View Certificate
										<svg
											className='w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M14 5l7 7m0 0l-7 7m7-7H3'
											/>
										</svg>
									</button>
								</div>
							</motion.div>
						))}
					</AnimatePresence>
				</motion.div>

				{limit && (
					<div className='mt-8 sm:mt-12 text-center'>
						<Link href='/certifications'>
							<Button
								variant='outline'
								className='border-primary text-primary hover:bg-primary hover:text-primary-foreground'>
								View All Certifications
							</Button>
						</Link>
					</div>
				)}

				<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
					<DialogContent className='max-w-4xl w-[95vw] sm:w-[90vw] max-h-[90vh] overflow-auto'>
						{selectedCertificate && (
							<div className='flex flex-col items-center'>
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
							</div>
						)}
					</DialogContent>
				</Dialog>
			</div>
		</section>
	);
}
