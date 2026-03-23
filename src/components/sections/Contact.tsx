import { GlassBtn } from '@/components/ui/GlassBtn';
import { GlassField } from '@/components/ui/GlassField';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CONTACT_INFO } from '@/constants/ui';
import { ChevronRight } from 'lucide-react';

export const Contact: React.FC = () => {
	return (
		<section
			id='contact'
			className='py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto overflow-hidden relative z-10 w-full'>
			<SectionDivider />
			<SectionHeader
				title="Let's Connect"
				subtitle="Ready to collaborate on innovative projects? Let's create immersive solutions together."
			/>

			<div className='grid lg:grid-cols-12 gap-8 sm:gap-12 w-full'>
				<div className='lg:col-span-5 glass-panel rounded-[2.5rem] p-8 h-full flex flex-col justify-center w-full min-w-0'>
					<h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-8 tracking-wide'>
						Get in Touch
					</h3>
					<div className='flex flex-col gap-5'>
						{CONTACT_INFO.map((i) => (
							<a
								key={i.label}
								href={i.href}
								className='flex gap-5 group items-center p-2 -m-2 rounded-2xl hover:bg-white/40 dark:hover:bg-white/5 transition-colors w-full min-w-0'>
								<div className='w-12 h-12 glass-inset rounded-full flex justify-center items-center group-hover:scale-110 transition-transform shrink-0'>
									<i.icon className='w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors' />
								</div>
								<div className='min-w-0'>
									<p className='text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 font-semibold mb-1 truncate'>
										{i.label}
									</p>
									<p className='text-sm text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors truncate'>
										{i.value}
									</p>
								</div>
							</a>
						))}
					</div>
				</div>

				<div className='lg:col-span-7 glass-panel rounded-[2.5rem] p-8 w-full min-w-0'>
					<h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-8 tracking-wide'>
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
							<div className='hover:scale-[1.02] active:scale-[0.98] transition-transform'>
								<GlassBtn
									variant='animated-light'
									icon={ChevronRight}
									type='submit'
									className='text-xs sm:text-sm w-full sm:w-auto shadow-lg shadow-black/5'>
									Send Message
								</GlassBtn>
							</div>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};
