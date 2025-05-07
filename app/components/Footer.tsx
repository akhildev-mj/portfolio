import Link from 'next/link';
import { Github, Linkedin, Mail, Phone, MessageSquare } from 'lucide-react';

export default function Footer() {
	return (
		<footer className='footer'>
			<div className='footer-content'>
				<nav className='footer-nav' aria-label='Footer'>
					{['Home', 'About', 'Certifications', 'Projects', 'Contact'].map(
						(item) => (
							<div key={item} className='footer-nav-item'>
								<Link
									href={
										item === 'Home'
											? '/'
											: item === 'About'
											? '/#about'
											: item === 'Projects'
											? '/projects'
											: item === 'Certifications'
											? '/certifications'
											: `/#${item.toLowerCase()}`
									}
									className='footer-link'>
									{item}
								</Link>
							</div>
						)
					)}
				</nav>

				<div className='social-links'>
					<a href='tel:+919074123050' className='social-link'>
						<span className='sr-only'>Phone</span>
						<Phone className='h-5 w-5 sm:h-6 sm:w-6' />
					</a>
					<a href='mailto:akhildev.adj@gmail.com' className='social-link'>
						<span className='sr-only'>Email</span>
						<Mail className='h-5 w-5 sm:h-6 sm:w-6' />
					</a>
					<a
						href='https://wa.me/9074123050'
						target='_blank'
						rel='noopener noreferrer'
						className='social-link'>
						<span className='sr-only'>WhatsApp</span>
						<MessageSquare className='h-5 w-5 sm:h-6 sm:w-6' />
					</a>
					<a
						href='https://linkedin.com/in/akhildevmj'
						target='_blank'
						rel='noopener noreferrer'
						className='social-link'>
						<span className='sr-only'>LinkedIn</span>
						<Linkedin className='h-5 w-5 sm:h-6 sm:w-6' />
					</a>
					<a
						href='https://github.com/akhildev-mj'
						target='_blank'
						rel='noopener noreferrer'
						className='social-link'>
						<span className='sr-only'>GitHub</span>
						<Github className='h-5 w-5 sm:h-6 sm:w-6' />
					</a>
				</div>

				<p className='copyright'>
					© {new Date().getFullYear()} Akhildev MJ. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
