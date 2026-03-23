import { GlassBtn } from '@/components/ui/GlassBtn';
import { ArrowLeft } from '@/components/ui/Icons';
import type { CardProps } from '@/types';
import { cn } from '@/utils/cn';
import { useEffect, useState } from 'react';

export interface ArchivePageProps<T> {
	title: string;
	cats: string[];
	data: T[];
	Card: React.FC<CardProps<T>>;
	nav: (route: string) => void;
}

export const ArchivePage = <T extends any>({
	title,
	cats,
	data,
	Card,
	nav,
}: ArchivePageProps<T>) => {
	const [active, setActive] = useState<string>('All');
	useEffect(() => window.scrollTo(0, 0), []);
	return (
		<div className='min-h-screen pt-28 lg:pt-36 px-4 sm:px-6 text-center pb-16 sm:pb-20 max-w-7xl mx-auto relative z-10 w-full'>
			<div className='flex justify-center mb-8'>
				<GlassBtn
					variant='outline'
					icon={ArrowLeft}
					onClick={() => nav('home')}
					className='py-2 px-5 text-xs'>
					Return
				</GlassBtn>
			</div>
			<h1 className='text-3xl sm:text-4xl md:text-6xl font-bold mb-10 text-glass-gradient tracking-tight'>
				{title}
			</h1>
			<div className='flex flex-wrap justify-center gap-2 sm:gap-3 mb-16 p-2 glass-panel rounded-3xl w-fit mx-auto'>
				{cats.map((c) => (
					<button
						key={c}
						onClick={() => setActive(c)}
						className={cn(
							'px-5 py-2 rounded-2xl text-xs font-semibold tracking-wide transition-all',
							active === c
								? 'glass-inset text-gray-900 dark:text-white shadow-sm border border-black/5 dark:border-white/5'
								: 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white hover:bg-white/40 dark:hover:bg-white/10'
						)}>
						{c}
					</button>
				))}
			</div>
			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
				{(active === 'All'
					? data
					: data.filter((d: any) => d.category === active)
				).map((d: any, i: number) => (
					<Card key={d.id} item={d} index={i} />
				))}
			</div>
		</div>
	);
};
