import CodeBlock from '@/components/common/CodeBlock';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ABOUT_MD, STATS } from '@/constants/ui';
import { Terminal } from 'lucide-react';

export const About: React.FC = () => {
	return (
		<section
			id='about'
			className='py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto relative z-10 w-full'>
			<SectionDivider />
			<SectionHeader title='About Me' />
			<div className='grid lg:grid-cols-2 gap-8 sm:gap-10 items-center w-full'>
				<div className='group glass-panel rounded-[2.5rem] p-2 w-full min-w-0 max-w-full liquid-border-light'>
					<div className='glass-inset rounded-[2rem] p-5 sm:p-8 backdrop-blur-xl overflow-hidden w-full'>
						<div className='flex gap-2 mb-5 sm:mb-6 pb-4 border-b border-black/5 dark:border-white/5'>
							<Terminal className='w-4 h-4 text-gray-500 dark:text-gray-400 shrink-0' />
							<span className='text-gray-500 dark:text-gray-400 text-[10px] sm:text-xs uppercase tracking-widest truncate'>
								sys_profile.md
							</span>
						</div>
						<div className='space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed overflow-hidden w-full'>
							{ABOUT_MD.map((l, i) => (
								<div key={i} className='w-full min-w-0'>
									<CodeBlock key={i} code={l} lang={'markdown'} />
								</div>
							))}
						</div>
					</div>
				</div>

				<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full min-w-0'>
					{STATS.map((s) => (
						<div
							key={s.label}
							className='glass-panel glass-panel-hover p-6 sm:p-8 rounded-[2rem] flex flex-col items-center text-center group transition-all duration-300 w-full min-w-0 hover:-translate-y-1.5'>
							<div className='w-12 h-12 glass-inset rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform'>
								<s.icon className='w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors' />
							</div>
							<div className='text-3xl font-bold text-gray-900 dark:text-white mb-2 drop-shadow-md'>
								{s.value}
							</div>
							<div className='text-gray-500 dark:text-gray-400 text-[10px] sm:text-xs uppercase font-medium tracking-widest text-center'>
								{s.label}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
