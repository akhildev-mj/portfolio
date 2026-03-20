import { fadeInUp } from '@/utils/animations';
import { m } from 'framer-motion';
import React, { memo } from 'react';

const SectionHeaderComponent: React.FC<{
	title: string;
	subtitle?: string;
	isInView: boolean;
}> = ({ title, subtitle, isInView }) => (
	<m.div
		{...fadeInUp}
		animate={isInView ? fadeInUp.animate : {}}
		className='text-center mb-12 sm:mb-16 w-full'>
		<h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-glass-gradient px-4 tracking-tight'>
			{title}
		</h2>
		<div className='w-12 sm:w-16 h-1 bg-gray-300 rounded-full mx-auto mb-4 sm:mb-6 backdrop-blur-md' />
		{subtitle && (
			<p className='text-gray-500 max-w-2xl mx-auto text-xs sm:text-sm tracking-wide px-4'>
				{subtitle}
			</p>
		)}
	</m.div>
);

export const SectionHeader = memo(SectionHeaderComponent);
