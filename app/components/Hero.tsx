'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
	return (
		<section className='hero-section'>
			<div className='container'>
				<div className='hero'>
					<motion.div
						className='hero-content'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}>
						<h1 className='hero-title'>
							<span className='text-gradient'>Akhildev MJ</span>
						</h1>
						<p className='hero-description'>
							Data Scientist & Full Stack Developer crafting intelligent
							solutions through code and analytics.
						</p>
						<div className='hero-actions'>
							<Link
								href='/certifications'
								className='btn btn-primary btn-rounded'>
								View My Certifications
							</Link>
							<a href='#contact' className='btn btn-outline'>
								Contact Me <span aria-hidden='true'>→</span>
							</a>
						</div>
					</motion.div>
					<motion.div
						className='hero-image'
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}>
						<img
							src='/hero.webp'
							alt='Data visualization'
							className='hero-img'
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
