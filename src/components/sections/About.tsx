import CodeBlock from '@/components/common/CodeBlock';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ABOUT_MD, STATS } from '@/constants/ui';
import { useSection } from '@/hooks/useSection';
import { fadeInLeft } from '@/utils/animations';
import { m } from 'framer-motion';
import { Terminal } from 'lucide-react';
import React from 'react';

export const About: React.FC = () => {
	const [ref, inView] = useSection();

	return (
		<section
			id='about'
			ref={ref}
			className='py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto relative z-10 w-full'>
			<div className='absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent' />
			<SectionHeader title='About Me' isInView={inView} />
			<div className='grid lg:grid-cols-2 gap-8 sm:gap-10 items-center w-full'>
				<m.div
					{...fadeInLeft}
					animate={inView ? fadeInLeft.animate : {}}
					className='group glass-panel rounded-[2.5rem] p-2 w-full min-w-0 max-w-full liquid-border-light'>
					<div className='glass-inset rounded-[2rem] p-5 sm:p-8 backdrop-blur-xl overflow-hidden w-full'>
						<div className='flex gap-2 mb-5 sm:mb-6 pb-4 border-b border-black/5'>
							<Terminal className='w-4 h-4 text-gray-500 shrink-0' />
							<span className='text-gray-500 text-[10px] sm:text-xs uppercase tracking-widest truncate'>
								sys_profile.md
							</span>
						</div>
						<div className='space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed overflow-hidden w-full'>
							{ABOUT_MD.map((l, i) => (
								<m.div
									key={i}
									initial={{ opacity: 0, y: 10 }}
									animate={inView ? { opacity: 1, y: 0 } : {}}
									transition={{ delay: 0.2 + i * 0.1 }}
									className='w-full min-w-0'>
									<CodeBlock key={i} code={l} lang={'markdown'} />
								</m.div>
							))}
						</div>
					</div>
				</m.div>

				<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full min-w-0'>
					{STATS.map((s, i) => (
						<m.div
							key={s.label}
							initial={{ opacity: 0, scale: 0.9 }}
							animate={inView ? { opacity: 1, scale: 1 } : {}}
							transition={{ delay: 0.4 + i * 0.1 }}
							whileHover={{ y: -5 }}
							className='glass-panel glass-panel-hover p-6 sm:p-8 rounded-[2rem] flex flex-col items-center text-center group transition-all duration-300 w-full min-w-0 '>
							<div className='w-12 h-12 glass-inset rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform'>
								<s.icon className='w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors' />
							</div>
							<div className='text-3xl font-bold text-gray-900 mb-2 drop-shadow-md'>
								{s.value}
							</div>
							<div className='text-gray-500 text-[10px] sm:text-xs uppercase font-medium tracking-widest text-center'>
								{s.label}
							</div>
						</m.div>
					))}
				</div>
			</div>
		</section>
	);
};
