import { ImgFallback } from '@/components/ui/ImgFallback';
import type { CardProps, CertData } from '@/types';
import { m } from 'framer-motion';
import { BadgeCheck, Calendar } from 'lucide-react';
import { memo } from 'react';

const CertCardComponent: React.FC<CardProps<CertData>> = ({
	item: c,
	index,
	isInView,
}) => (
	<m.article
		initial={{ opacity: 0, y: 30, scale: 0.95 }}
		animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
		transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
		whileHover={{ y: -8 }}
		className='group relative liquid-glass-strong rounded-[2rem] p-6 flex flex-col w-full transition-all duration-500 hover:bg-white/60 dark:hover:bg-white/5'>
		<div className='absolute inset-0 bg-gradient-to-tr from-white/40 via-white/10 to-transparent dark:from-white/10 dark:via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10' />
		<div className='flex items-start mb-5 relative z-20'>
			<div className='mr-5 w-16 h-16 sm:w-20 sm:h-20 liquid-glass rounded-2xl p-1 overflow-hidden transform group-hover:scale-105 transition-transform duration-500 flex-shrink-0'>
				<ImgFallback src={c.image} className='rounded-xl h-full' />
			</div>
			<div className='flex flex-col flex-1 gap-y-1 justify-center h-16 sm:h-20'>
				<h3 className='font-semibold text-gray-900 dark:text-white group-hover:text-black dark:group-hover:text-gray-100 line-clamp-2 transition-colors duration-300 leading-snug'>
					{c.title}
				</h3>
				<p className='font-bold text-gray-500 dark:text-gray-400 text-sm'>
					{c.issuer}
				</p>
			</div>
		</div>
		<p className='text-gray-600 dark:text-gray-300 text-sm mb-5 line-clamp-2 relative z-20 leading-relaxed'>
			{c.desc}
		</p>
		<div className='flex flex-wrap gap-2 mb-5 flex-1 relative z-20'>
			{c.skills &&
				c.skills.map((s, i) => (
					<span
						key={s}
						className='px-3 py-1.5 text-[10px] uppercase font-bold liquid-glass text-gray-700 dark:text-gray-300 rounded-full transition-colors duration-300'
						style={{ transitionDelay: `${i * 50}ms` }}>
						{s}
					</span>
				))}
		</div>
		<div className='border-t border-black/5 dark:border-white/5 pt-4 flex justify-between items-center relative z-20'>
			<div className='flex items-center text-xs text-gray-500 dark:text-gray-400 font-medium'>
				<Calendar className='w-3.5 h-3.5 mr-1.5' />
				{c.date}
			</div>
			<button
				className='text-xs font-semibold tracking-wide flex items-center transition-all duration-300 text-lime-600 dark:text-lime-400 hover:text-lime-700 dark:hover:text-lime-300 hover:drop-shadow-[0_0_10px_rgba(132,204,22,0.7)]'
				onClick={() => window.open(c.verifyUrl || '#', '_blank')}>
				Verify <BadgeCheck className='w-4 h-4 ml-1.5' />
			</button>
		</div>
	</m.article>
);

export const CertCard = memo(CertCardComponent);
