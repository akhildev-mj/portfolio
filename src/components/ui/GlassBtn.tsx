import type { IconType } from '@/types';
import { cn } from '@/utils/cn';
import React, { memo } from 'react';

interface GlassBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'liquid' | 'outline' | 'icon' | 'liquid-icon';
	icon?: IconType;
	ref?: React.Ref<HTMLButtonElement>; // React 19 native ref prop
}

const GlassBtnComponent = ({
	variant = 'liquid',
	icon: Icon,
	className,
	children,
	ref,
	...props
}: GlassBtnProps) => {
	const styles = {
		liquid: 'liquid-border rounded-full gap-3 px-5 py-2',
		outline:
			'glass-panel rounded-full gap-2 px-6 py-2.5 hover:bg-white/80 text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors',
		icon: 'glass-panel rounded-full w-12 h-12 hover:bg-white/80 transition-colors',
		'liquid-icon': 'liquid-border rounded-full w-12 h-12',
	};

	return (
		<button
			ref={ref}
			className={cn(
				'flex items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:opacity-50 group cursor-pointer',
				styles[variant],
				className
			)}
			{...props}>
			{Icon && variant === 'liquid' ? (
				<div className='w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md'>
					<Icon className='w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors' />
				</div>
			) : (
				Icon && (
					<Icon
						className={cn(
							variant === 'liquid-icon'
								? 'w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors'
								: variant === 'icon'
									? 'w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors'
									: 'w-4 h-4 text-gray-600 group-hover:text-gray-900'
						)}
					/>
				)
			)}
			{children && (
				<span
					className={
						variant === 'liquid'
							? 'text-gray-600 hover:text-gray-800 font-medium text-sm'
							: ''
					}>
					{children}
				</span>
			)}
		</button>
	);
};

export const GlassBtn = memo(GlassBtnComponent);
