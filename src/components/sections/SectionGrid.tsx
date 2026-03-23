import { GlassBtn } from '@/components/ui/GlassBtn';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CERTIFICATIONS } from '@/constants/certifications';
import type { CardProps } from '@/types';
import { ChevronRight } from 'lucide-react';

export interface SectionGridProps<T> {
	id: string;
	title: string;
	data: T[];
	Card: React.FC<CardProps<T>>;
	nav: (route: string) => void;
	navRoute: string;
	navText: string;
}

const certificationsLoop = Array(5)
	.fill(CERTIFICATIONS)
	.flat()
	.map(({ image, title }, index) => ({ id: index, image, title }));

export const SectionGrid = <T extends any>({
	id,
	title,
	data,
	Card,
	nav,
	navRoute,
	navText,
}: SectionGridProps<T>) => {
	return (
		<section
			id={id}
			className='py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto relative z-10 w-full'>
			<SectionDivider />
			<SectionHeader title={title} />

			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16'>
				{data.slice(0, 3).map((d: any, i: number) => (
					<Card key={d.id} item={d} index={i} />
				))}
			</div>

			{title === 'Certifications' && (
				<div
					className='relative mb-12 overflow-hidden'
					style={{
						maskImage:
							'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
					}}>
					<div className='flex gap-4 w-max animate-scroll-left hover:[animation-play-state:paused]'>
						{certificationsLoop.map((cert, idx) => (
							<img
								key={`${cert.id}-${idx}`}
								width={80}
								height={80}
								src={cert.image}
								alt={cert.title}
								className='rounded-xl object-cover h-20 w-20'
							/>
						))}
					</div>
				</div>
			)}

			<div className='flex justify-center'>
				<div className='hover:scale-[1.02] active:scale-[0.98] transition-transform'>
					<GlassBtn
						variant='animated-light'
						icon={ChevronRight}
						onClick={() => nav(navRoute)}
						className='text-xs sm:text-sm shadow-lg shadow-black/5'>
						{navText}
					</GlassBtn>
				</div>
			</div>
		</section>
	);
};
