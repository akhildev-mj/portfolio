import { GlassBtn } from '@/components/ui/GlassBtn';
import { GlassField } from '@/components/ui/GlassField';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CONTACT_INFO } from '@/constants/ui';
import { useSection } from '@/hooks/useSection';
import { btnHover, fadeInLeft, fadeInRight } from '@/utils/animations';
import { m } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import React from 'react';

export const Contact: React.FC = () => {
	const [ref, inView] = useSection();

	return (
		<section
			id='contact'
			ref={ref}
			className='py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto overflow-hidden relative z-10 w-full'>
			<SectionDivider />
			<SectionHeader
				title="Let's Connect"
				subtitle="Ready to collaborate on innovative projects? Let's create immersive solutions together."
				isInView={inView}
			/>

			<div className='grid lg:grid-cols-12 gap-8 sm:gap-12 w-full'>
				<m.div
					{...fadeInLeft}
					animate={inView ? fadeInLeft.animate : {}}
					className='lg:col-span-5 glass-panel rounded-[2.5rem] p-8 h-full flex flex-col justify-center w-full min-w-0'>
					<h3 className='text-xl font-semibold text-gray-900 mb-8 tracking-wide'>
						Get in Touch
					</h3>
					<div className='flex flex-col gap-5'>
						{CONTACT_INFO.map((i, idx) => (
							<m.a
								key={i.label}
								href={i.href}
								initial={{ opacity: 0, x: -20 }}
								animate={inView ? { opacity: 1, x: 0 } : {}}
								transition={{ delay: 0.2 + idx * 0.1 }}
								className='flex gap-5 group items-center p-2 -m-2 rounded-2xl hover:bg-white/40 transition-colors w-full min-w-0'>
								<div className='w-12 h-12 glass-inset rounded-full flex justify-center items-center group-hover:scale-110 transition-transform shrink-0'>
									<i.icon className='w-5 h-5 text-gray-500 group-hover:text-gray-900 transition-colors' />
								</div>
								<div className='min-w-0'>
									<p className='text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 font-semibold mb-1 truncate'>
										{i.label}
									</p>
									<p className='text-sm text-gray-800 group-hover:text-gray-900 transition-colors truncate'>
										{i.value}
									</p>
								</div>
							</m.a>
						))}
					</div>
				</m.div>

				<m.div
					{...fadeInRight}
					animate={inView ? fadeInRight.animate : {}}
					className='lg:col-span-7 glass-panel rounded-[2.5rem] p-8 w-full min-w-0'>
					<h3 className='text-xl font-semibold text-gray-900 mb-8 tracking-wide'>
						Send a Message
					</h3>
					<form className='space-y-5' onSubmit={(e) => e.preventDefault()}>
						<div className='grid md:grid-cols-2 gap-5'>
							<GlassField placeholder='Your Name' />
							<GlassField type='email' placeholder='your@email.com' />
						</div>
						<GlassField placeholder="What's this about?" />
						<GlassField
							as='textarea'
							placeholder='Tell me about your project or idea...'
						/>
						<div className='flex justify-center lg:justify-end pt-4'>
							<m.div {...btnHover}>
								<GlassBtn
									variant='animated-light'
									icon={ChevronRight}
									type='submit'
									className='text-xs sm:text-sm w-full sm:w-auto shadow-lg shadow-black/5'>
									Send Message
								</GlassBtn>
							</m.div>
						</div>
					</form>
				</m.div>
			</div>
		</section>
	);
};
