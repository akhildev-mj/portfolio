'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
	const [mounted, setMounted] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => setMounted(true), []);

	const navItems = [
		{ name: 'Home', href: '/' },
		{ name: 'About', href: '/#about' },
		{ name: 'Certifications', href: '/#certifications' },
		{ name: 'Projects', href: '/#projects' },
		{ name: 'Contact', href: '/#contact' }
	];

	const menuVariants = {
		closed: {
			opacity: 0,
			x: '100%',
			transition: {
				type: 'spring',
				stiffness: 400,
				damping: 40,
				when: 'afterChildren',
				staggerChildren: 0.05,
				staggerDirection: -1
			}
		},
		open: {
			opacity: 1,
			x: 0,
			transition: {
				type: 'spring',
				stiffness: 400,
				damping: 40,
				when: 'beforeChildren',
				staggerChildren: 0.1,
				delayChildren: 0.2
			}
		}
	};

	const menuItemVariants = {
		closed: {
			opacity: 0,
			x: 20,
			transition: {
				type: 'spring',
				stiffness: 400,
				damping: 40
			}
		},
		open: {
			opacity: 1,
			x: 0,
			transition: {
				type: 'spring',
				stiffness: 400,
				damping: 40
			}
		}
	};

	const overlayVariants = {
		closed: {
			opacity: 0,
			transition: {
				duration: 0.3,
				ease: 'easeInOut'
			}
		},
		open: {
			opacity: 1,
			transition: {
				duration: 0.3,
				ease: 'easeInOut'
			}
		}
	};

	return (
		<motion.header
			className='header'
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
			<div className='container'>
				<nav className='header-inner' aria-label='Global'>
					<div className='logo-container'>
						<Link href='/' className='logo'>
							<span className='sr-only'>Akhildev MJ</span>
							<motion.span
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.6, delay: 0.2 }}>
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
								transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}>
								<Link href={item.href} className='nav-link'>
									{item.name}
								</Link>
							</motion.div>
						))}
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

						{/* Mobile Menu Overlay */}
						<AnimatePresence>
							{isMenuOpen && (
								<div className='mobile-nav-wrapper'>
									<motion.div
										className='mobile-nav-overlay'
										onClick={() => setIsMenuOpen(false)}
										variants={overlayVariants}
										initial='closed'
										animate='open'
										exit='closed'></motion.div>
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
													whileHover={{ x: 5 }}
													transition={{
														type: 'spring',
														stiffness: 400,
														damping: 10
													}}>
													<Link
														href={item.href}
														className='nav-link'
														onClick={() => setIsMenuOpen(false)}>
														{item.name}
													</Link>
												</motion.div>
											))}
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
