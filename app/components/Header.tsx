'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
	const [mounted, setMounted] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => setMounted(true), []);

	const navItems = [
		{ name: 'Home', href: '/' },
		// { name: 'About', href: '/#about' },
		{ name: 'Skills', href: '/#skills' },
		{ name: 'Certifications', href: '/#certifications' },
		{ name: 'Projects', href: '/#projects' },
		{ name: 'Contact', href: '/#contact' }
	];

	return (
		<motion.header
			className='header'
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.6 }}>
			<div className='container'>
				<nav className='header-inner' aria-label='Global'>
					<div className='logo-container'>
						<Link href='/' className='logo'>
							<span className='sr-only'>Akhildev MJ</span>
							<span>Akhildev MJ</span>
						</Link>
					</div>

					{/* Desktop Navigation */}
					<div className='desktop-nav'>
						{navItems.map((item) => (
							<Link key={item.name} href={item.href} className='nav-link'>
								{item.name}
							</Link>
						))}
					</div>

					{/* Mobile Navigation */}
					<div className='mobile-nav-container'>
						<button
							className='mobile-menu-button'
							onClick={() => setIsMenuOpen(true)}>
							<Menu className='h-6 w-6' />
							<span className='sr-only'>Open menu</span>
						</button>

						{/* Mobile Menu Overlay */}
						{isMenuOpen && (
							<div className='mobile-nav-wrapper'>
								<div
									className='mobile-nav-overlay'
									onClick={() => setIsMenuOpen(false)}></div>
								<div className='mobile-nav'>
									<div className='mobile-nav-header'>
										<button
											className='mobile-nav-close'
											onClick={() => setIsMenuOpen(false)}>
											<X className='h-6 w-6' />
											<span className='sr-only'>Close menu</span>
										</button>
									</div>
									<div className='nav-links'>
										{navItems.map((item) => (
											<Link
												key={item.name}
												href={item.href}
												className='nav-link'
												onClick={() => setIsMenuOpen(false)}>
												{item.name}
											</Link>
										))}
									</div>
								</div>
							</div>
						)}
					</div>
				</nav>
			</div>
		</motion.header>
	);
}
