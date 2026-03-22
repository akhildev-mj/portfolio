import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { NAV_ITEMS } from '@/constants/ui';
import { cn } from '@/utils/cn';
import { useEffect, useState } from 'react';

export const Navbar: React.FC<{ nav: (route: string) => void }> = ({ nav }) => {
	const [active, setActive] = useState<string>('home');
	const [isScrolled, setIsScrolled] = useState<boolean>(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);

			const sp = window.scrollY + window.innerHeight / 3;
			const cur = [...NAV_ITEMS].reverse().find((i) => {
				const el = document.getElementById(i.href.slice(1));
				return el && el.offsetTop <= sp;
			});
			if (cur) setActive(cur.href.slice(1));
		};
		window.addEventListener('scroll', handleScroll);
		handleScroll();
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const go = (h: string) => {
		if (h.startsWith('#')) {
			nav('home');
			setActive(h.slice(1));
			setTimeout(() => {
				const el = document.querySelector(h) as HTMLElement;
				if (el) {
					const y =
						el.getBoundingClientRect().top +
						window.scrollY -
						(window.innerWidth >= 1024 ? 30 : 20);
					window.scrollTo({ top: y, behavior: 'smooth' });
				}
			}, 100);
		}
	};

	return (
		<nav className='fixed top-4 left-0 right-0 z-[100] flex justify-center px-4'>
			<div
				className={cn(
					'rounded-full flex items-center justify-between p-1.5 w-full max-w-[20rem] sm:max-w-md md:max-w-2xl lg:max-w-5xl transition-all duration-500',
					isScrolled ? 'liquid-glass-strong-nav' : 'bg-transparent'
				)}>
				<div
					className='hidden md:flex items-center cursor-pointer group px-4'
					onClick={() => go('#home')}>
					<div className='w-8 h-8 liquid-glass rounded-full flex justify-center items-center font-bold text-gray-900 dark:text-white'>
						A
					</div>
					<span className='text-sm font-bold text-gray-900 dark:text-white tracking-widest ml-1'>
						KHILDEV
					</span>
				</div>
				<div className='flex w-full md:w-auto justify-between lg:justify-center gap-1 sm:gap-2 px-1.5 sm:px-2 rounded-full'>
					{NAV_ITEMS.map((i) => (
						<button
							key={i.name}
							aria-label={i.name}
							onClick={() => go(i.href)}
							className={cn(
								'group flex flex-1 md:flex-none items-center justify-center p-3 sm:p-2.5 md:px-5 transition-all duration-500 ease-in-out rounded-full cursor-pointer',
								active === i.href.slice(1)
									? 'liquid-glass text-gray-900 dark:text-white shadow-sm'
									: 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-white/40 dark:hover:bg-white/10'
							)}>
							<i.icon
								className={cn(
									'w-5 h-5 shrink-0 transition-transform duration-300',
									active === i.href.slice(1)
										? 'scale-110'
										: 'group-hover:scale-110'
								)}
							/>
							<div
								className={cn(
									'hidden md:block overflow-hidden transition-all duration-500 ease-in-out',
									active === i.href.slice(1)
										? 'max-w-[100px] opacity-100'
										: 'max-w-0 opacity-0'
								)}>
								<span className='block whitespace-nowrap font-bold tracking-wide text-xs pl-2'>
									{i.name}
								</span>
							</div>
						</button>
					))}
				</div>
			</div>
			<div className='sm:ml-4 px-3 flex items-center justify-center'>
				<ThemeToggle />
			</div>
		</nav>
	);
};
