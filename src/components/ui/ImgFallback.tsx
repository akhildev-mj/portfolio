import { cn } from '@/utils/cn';
import React, { memo } from 'react';

const ImgFallbackComponent: React.FC<{ src: string; className?: string }> = ({
	src,
	className,
}) => (
	<div className={cn('bg-gray-100 backdrop-blur-sm', className)}>
		<img
			src={src}
			alt='thumbnail'
			onError={(e) =>
				((e.currentTarget as HTMLImageElement).src =
					'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800')
			}
			className='w-full h-full object-cover opacity-90 transition-all duration-700 ease-out mix-blend-multiply'
		/>
	</div>
);

export const ImgFallback = memo(ImgFallbackComponent);
