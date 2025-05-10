'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function Header() {
	const [mounted, setMounted] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { resolvedTheme, setTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	const navItems = [
		{ name: 'Home', href: '/' },
		{ name: 'About', href: '/#about' },
		{ name: 'Certifications', href: '/#certifications' },
		{ name: 'Projects', href: '/#projects' },
		{ name: 'Contact', href: '/#contact' }
	];

	const toggleTheme = () => {
		setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
	};

	const menuVariants = {
		closed: {
			opacity: 0,
			x: '100%',
			transition: {
				type: 'spring',
				stiffness: 400,
				damping: 20,
				when: 'afterChildren',
				staggerChildren: 0.015,
				staggerDirection: -1
			}
		},
		open: {
			opacity: 1,
			x: 0,
			transition: {
				type: 'spring',
				stiffness: 400,
				damping: 20,
				when: 'beforeChildren',
				staggerChildren: 0.02,
				delayChildren: 0.01
			}
		}
	};

	const menuItemVariants = {
		closed: {
			opacity: 0,
			x: 20
		},
		open: {
			opacity: 1,
			x: 0
		}
	};

	const overlayVariants = {
		closed: { opacity: 0, transition: { duration: 0.1, ease: 'easeInOut' } },
		open: { opacity: 1, transition: { duration: 0.1, ease: 'easeInOut' } }
	};

	return (
		<motion.header
			className='header'
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
			<div className='container'>
				<nav className='header-inner' aria-label='Global'>
					<div className='logo-container'>
						<Link href='/' className='logo'>
							<span className='sr-only'>Akhildev MJ</span>
							<motion.span
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3, delay: 0.1 }}>
								Akhildev MJ
							</motion.span>
						</Link>
					</div>

					{/* Desktop Navigation */}
					<div className='desktop-nav'>
						{navItems.map((item, index) => (
							<motion.div
								key={item.name}
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.2, delay: 0.05 + index * 0.05 }}>
								<Link href={item.href} className='nav-link'>
									{item.name}
								</Link>
							</motion.div>
						))}

						{/* Theme Toggle */}
						{mounted && (
							<button
								onClick={toggleTheme}
								className='theme-toggle'
								aria-label='Toggle theme'>
								{resolvedTheme === 'dark' ? (
									<Sun className='h-5 w-5' />
								) : (
									<Moon className='h-5 w-5' />
								)}
							</button>
						)}
					</div>

					{/* Mobile Navigation */}
					<div className='mobile-nav-container'>
						<motion.button
							className='mobile-menu-button'
							onClick={() => setIsMenuOpen(true)}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}>
							<Menu className='h-6 w-6' />
							<span className='sr-only'>Open menu</span>
						</motion.button>

						<AnimatePresence>
							{isMenuOpen && (
								<div className='mobile-nav-wrapper'>
									<motion.div
										className='mobile-nav-overlay'
										onClick={() => setIsMenuOpen(false)}
										variants={overlayVariants}
										initial='closed'
										animate='open'
										exit='closed'
									/>

									<motion.div
										className='mobile-nav'
										variants={menuVariants}
										initial='closed'
										animate='open'
										exit='closed'>
										<div className='mobile-nav-header'>
											<motion.button
												className='mobile-nav-close'
												onClick={() => setIsMenuOpen(false)}
												whileHover={{ scale: 1.1, rotate: 90 }}
												whileTap={{ scale: 0.9 }}>
												<X className='h-6 w-6' />
												<span className='sr-only'>Close menu</span>
											</motion.button>
										</div>

										<div className='nav-links'>
											{navItems.map((item) => (
												<motion.div
													key={item.name}
													variants={menuItemVariants}
													whileHover={{ x: 5 }}>
													<Link
														href={item.href}
														className='nav-link'
														onClick={() => setIsMenuOpen(false)}>
														{item.name}
													</Link>
												</motion.div>
											))}

											{mounted && (
												<motion.div
													variants={menuItemVariants}
													className='flex items-center'>
													<button
														onClick={toggleTheme}
														className='nav-link flex items-center'
														aria-label='Toggle theme'>
														{resolvedTheme === 'dark' ? (
															<Sun className='h-5 w-5' />
														) : (
															<Moon className='h-5 w-5' />
														)}
													</button>
												</motion.div>
											)}
										</div>
									</motion.div>
								</div>
							)}
						</AnimatePresence>
					</div>
				</nav>
			</div>
		</motion.header>
	);
}
