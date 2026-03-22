import type { IconType } from '@/types';
import { cn } from '@/utils/cn';
import React, { memo } from 'react';

interface GlassBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?:
		| 'liquid'
		| 'outline'
		| 'icon'
		| 'liquid-icon'
		| 'animated-light'
		| 'animated-liquid-icon';
	icon?: IconType;
	ref?: React.Ref<HTMLButtonElement>;
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
		liquid:
			'liquid-glass rounded-full gap-3 px-5 py-2 hover:bg-white/60 dark:hover:bg-white/10 transition-colors',
		outline:
			'liquid-glass rounded-full gap-2 px-6 py-2.5 hover:bg-white/60 dark:hover:bg-white/10 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition-colors',
		icon: 'liquid-glass rounded-full w-12 h-12 hover:bg-white/60 dark:hover:bg-white/10 transition-colors',
		'liquid-icon':
			'liquid-glass-strong rounded-full w-12 h-12 hover:bg-white/70 dark:hover:bg-white/10 transition-colors',
		'animated-liquid-icon':
			'liquid-border-light rounded-full w-12 h-12 hover:bg-white/70 dark:hover:bg-white/10 transition-colors',
		'animated-light':
			'liquid-border-light rounded-full gap-3 px-6 py-3 transition-colors text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white font-medium',
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
					<Icon className='w-4 h-4 text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-white transition-colors' />
				</div>
			) : (
				Icon && (
					<Icon
						className={cn(
							variant === 'liquid-icon'
								? 'w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-white transition-colors'
								: variant === 'icon'
									? 'w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors'
									: 'w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
						)}
					/>
				)
			)}
			{children && (
				<span
					className={
						variant === 'liquid'
							? 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white font-medium text-sm'
							: ''
					}>
					{children}
				</span>
			)}
		</button>
	);
};

export const GlassBtn = memo(GlassBtnComponent);
