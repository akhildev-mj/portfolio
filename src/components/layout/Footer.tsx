import { GlassBtn } from '@/components/ui/GlassBtn';
import { SOCIALS } from '@/constants/ui';
import { ArrowUp, Heart } from 'lucide-react';
import { memo } from 'react';

export const Footer = memo(() => (
	<footer className='py-12 sm:py-16 pb-28 lg:pb-12 px-4 border-t border-black/5 text-center relative mt-auto z-10'>
		<div className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2'>
			<GlassBtn
				variant='liquid-icon'
				icon={ArrowUp}
				aria-label='Scroll to top of page'
				onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
				className='w-12 h-12 shadow-xl shadow-black/10'
			/>
		</div>
		<div className='flex justify-center gap-6 mb-8 pt-8'>
			{SOCIALS.map((l) => (
				<a
					key={l.label}
					href={l.href}
					target='_blank'
					rel='noreferrer'
					aria-label={`Visit my ${l.label}`}
					className='text-gray-500 hover:text-gray-900 transition-colors bg-white/40 p-3 rounded-full hover:bg-white/80 border border-white/60'>
					<l.icon className='w-5 h-5' />
				</a>
			))}
		</div>
		<p className='text-gray-500 text-[10px] tracking-widest font-bold flex justify-center items-center'>
			&copy; {new Date().getFullYear()} Made with{' '}
			<Heart className='w-4 h-4 mx-2 mb-0.5 text-red-500 fill-red-500/20' /> by
			one and only Akku
		</p>
	</footer>
));
