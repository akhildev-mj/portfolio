import { cn } from '@/utils/cn';
import React, { memo } from 'react';

type GlassFieldProps =
	| (React.InputHTMLAttributes<HTMLInputElement> & {
			as?: 'input';
			ref?: React.Ref<HTMLInputElement>;
	  })
	| (React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
			as: 'textarea';
			ref?: React.Ref<HTMLTextAreaElement>;
	  });

const GlassFieldComponent = ({
	as: Component = 'input',
	className,
	ref,
	...props
}: GlassFieldProps) => {
	const baseClasses =
		'w-full glass-inset px-5 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 dark:focus-visible:ring-gray-600 disabled:opacity-50 transition-all hover:bg-white/60 dark:hover:bg-white/5 backdrop-blur-md';

	if (Component === 'textarea') {
		return (
			<textarea
				ref={ref as React.Ref<HTMLTextAreaElement>}
				className={cn(
					baseClasses,
					'min-h-[120px] rounded-3xl py-4 resize-y',
					className
				)}
				{...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
			/>
		);
	}
	return (
		<input
			ref={ref as React.Ref<HTMLInputElement>}
			className={cn(baseClasses, 'h-12 rounded-full py-2', className)}
			{...(props as React.InputHTMLAttributes<HTMLInputElement>)}
		/>
	);
};

export const GlassField = memo(GlassFieldComponent);
