import { GlassBtn } from '@/components/ui/GlassBtn';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CERTIFICATIONS } from '@/constants/certifications';
import type { CardProps } from '@/types';
import { cn } from '@/utils/cn';
import { ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export interface SectionGridProps<T> {
	id: string;
	title: string;
	data: T[];
	Card: React.FC<CardProps<T>>;
	nav: (route: string) => void;
	navRoute: string;
	navText: string;
}

const certificationsLoop = CERTIFICATIONS.map(({ image, title }, index) => ({
	id: index,
	image,
	title,
}));

export const SectionGrid = <T extends any>({
	id,
	title,
	data,
	Card,
	nav,
	navRoute,
	navText,
}: SectionGridProps<T>) => {
	const marqueeRef = useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (title !== 'Certifications') return;

		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting);
			},
			{ threshold: 0.1 }
		);

		const currentMarquee = marqueeRef.current;

		if (currentMarquee) {
			observer.observe(currentMarquee);
		}

		return () => {
			if (currentMarquee) {
				observer.unobserve(currentMarquee);
			}
		};
	}, [title]);

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
					ref={marqueeRef}
					className='relative mb-12 overflow-hidden [mask-image:none] md:[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
					<div
						className={cn(
							'flex gap-4 w-max animate-scroll-left hover:[animation-play-state:paused]',
							!isVisible && '[animation-play-state:paused]'
						)}
						style={{ animationDuration: '60s' }}>
						{certificationsLoop.map((cert, idx) => (
							<img
								key={`${cert.id}-${idx}`}
								width={80}
								height={80}
								src={cert.image}
								alt={cert.title}
								loading='lazy'
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
