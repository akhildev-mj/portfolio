'use client';

import { motion } from 'framer-motion';

export default function AboutUs() {
	return (
		<section id='about' className='about-section section-alt'>
			<div className='container'>
				<motion.h2
					className='section-title'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}>
					About Me
				</motion.h2>
				<div className='about-grid'>
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}>
						<h3 className='mb-4'>Data Scientist & Developer</h3>
						<p className='text-muted mb-6'>
							I'm Akhildev MJ, a passionate data scientist and full stack
							developer with expertise in transforming complex data into
							actionable insights and building robust web applications. With a
							strong foundation in both data science and software development, I
							bridge the gap between analytics and implementation.
						</p>
						<p className='text-muted'>
							My approach combines analytical thinking with creative
							problem-solving to deliver solutions that not only meet technical
							requirements but also provide real business value. I'm constantly
							exploring new technologies and methodologies to enhance my skill
							set and deliver better results.
						</p>
					</motion.div>
					<motion.div
						className='about-image'
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}>
						<div className='image-bg'></div>
						<div className='image-content'>
							<p className='text-center font-bold text-xl sm:text-2xl'>
								Turning Data into Insights
							</p>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
