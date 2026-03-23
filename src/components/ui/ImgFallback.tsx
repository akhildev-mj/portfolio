import { cn } from '@/utils/cn';
import { memo } from 'react';

const ImgFallbackComponent: React.FC<{
	src: string;
	className?: string;
	priority?: boolean;
}> = ({ src, className, priority = false }) => (
	<div className={cn(className)}>
		<img
			src={src}
			alt='thumbnail'
			loading={priority ? 'eager' : 'lazy'}
			fetchPriority={priority ? 'high' : 'auto'}
			decoding='async'
			onError={(e) =>
				((e.currentTarget as HTMLImageElement).src =
					'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800')
			}
			className='w-full h-full object-cover opacity-90 transition-all duration-700 ease-out mix-blend-multiply'
		/>
	</div>
);

export const ImgFallback = memo(ImgFallbackComponent);
