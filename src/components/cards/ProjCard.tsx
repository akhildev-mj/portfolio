import { GlassBtn } from '@/components/ui/GlassBtn';
import { ExternalLink, Github } from '@/components/ui/Icons';
import { ImgFallback } from '@/components/ui/ImgFallback';
import type { CardProps, ProjectData } from '@/types';
import { memo } from 'react';

const ProjCardComponent: React.FC<CardProps<ProjectData>> = ({
	item: p,
	index,
}) => (
	<article className='group relative liquid-glass-strong rounded-[2rem] overflow-hidden flex flex-col w-full transition-all duration-500 hover:bg-white/60 dark:hover:bg-white/5 hover:-translate-y-2'>
		<div className='absolute inset-0 bg-gradient-to-tr from-white/40 via-white/10 to-transparent dark:from-white/10 dark:via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10' />
		<div className='relative h-56 overflow-hidden'>
			<div className='w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out'>
				<ImgFallback src={p.image} className='h-full' priority={index < 2} />
			</div>
			<div className='absolute inset-0 bg-gradient-to-t from-[#fafafa]/10 via-[#fafafa]/0 to-transparent dark:from-[#0a0a0a]/50 dark:via-transparent' />
			<div className='absolute top-4 left-4 liquid-glass-strong px-4 py-1.5 rounded-full flex items-center space-x-2 z-20'>
				<p.icon className='w-3.5 h-3.5 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300' />
				<span className='text-[10px] text-gray-800 dark:text-gray-200 uppercase tracking-widest font-bold'>
					{p.category}
				</span>
			</div>
		</div>
		<div className='p-6 flex flex-col justify-between flex-1 relative z-20'>
			<h3 className='font-bold text-gray-900 dark:text-white text-xl mb-3 tracking-tight'>
				{p.title}
			</h3>
			<p className='text-gray-600 dark:text-gray-300 text-sm mb-5 line-clamp-2 leading-relaxed'>
				{p.desc}
			</p>
			<div className='flex flex-wrap gap-2 mb-6'>
				{p.tech.map((t) => (
					<span
						key={t}
						className='px-3 py-1.5 text-[10px] uppercase font-bold liquid-glass text-gray-700 dark:text-gray-300 rounded-full transition-colors duration-300'>
						{t}
					</span>
				))}
			</div>
			<div className='flex gap-3 mt-auto pt-4 border-t border-black/5 dark:border-white/5'>
				<GlassBtn
					variant='outline'
					icon={Github}
					className='flex-1 py-2 text-xs'
					onClick={() => window.open(p.github)}>
					Code
				</GlassBtn>
				{p.live && (
					<GlassBtn
						variant='outline'
						icon={ExternalLink}
						className='flex-1 py-2 text-xs'
						onClick={() => window.open(p.live)}>
						Demo
					</GlassBtn>
				)}
			</div>
		</div>
	</article>
);

export const ProjCard = memo(ProjCardComponent);
