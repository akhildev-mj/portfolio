'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage
} from '@/components/ui/form';
import { CheckCircle2, Mail } from 'lucide-react';

const formSchema = z.object({
	email: z.string().email({ message: 'Please enter a valid email address.' })
});

export default function NewsletterSubscribe() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubscribed, setIsSubscribed] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: ''
		}
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		setIsSubmitting(true);
		// Simulate API call
		setTimeout(() => {
			setIsSubmitting(false);
			setIsSubscribed(true);
			form.reset();

			// Reset the success message after 5 seconds
			setTimeout(() => {
				setIsSubscribed(false);
			}, 5000);
		}, 1500);
	}

	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: [0.22, 1, 0.36, 1]
			}
		}
	};

	const iconVariants = {
		hidden: { scale: 0, rotate: -45 },
		visible: {
			scale: 1,
			rotate: 0,
			transition: {
				type: 'spring',
				stiffness: 260,
				damping: 20,
				delay: 0.2
			}
		}
	};

	const pulseAnimation = {
		scale: [1, 1.05, 1],
		transition: {
			duration: 2,
			repeat: Number.POSITIVE_INFINITY,
			repeatType: 'reverse' as const
		}
	};

	return (
		<section className='bg-background py-12 sm:py-16'>
			<div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
				<motion.div
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.1 }}
					animate={isSubscribed ? {} : pulseAnimation}
					className='bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl sm:rounded-3xl p-6 sm:p-8 shadow-lg'>
					{isSubscribed ? (
						<motion.div
							className='flex flex-col items-center justify-center py-4 text-center'
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.4 }}>
							<motion.div
								variants={iconVariants}
								initial='hidden'
								animate='visible'
								className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3'>
								<CheckCircle2 className='w-6 h-6 text-primary' />
							</motion.div>
							<h3 className='text-lg font-semibold mb-1'>
								Successfully Subscribed!
							</h3>
							<p className='text-sm text-muted-foreground'>
								Thank you for subscribing to my newsletter.
							</p>
						</motion.div>
					) : (
						<>
							<motion.div
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5 }}
								className='flex justify-center mb-4'>
								<div className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center'>
									<Mail className='w-6 h-6 text-primary' />
								</div>
							</motion.div>

							<motion.h2
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.1 }}
								className='text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 text-center'>
								Stay Updated
							</motion.h2>

							<motion.p
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.2 }}
								className='text-sm sm:text-base text-muted-foreground mb-5 sm:mb-6 text-center'>
								Subscribe to my newsletter for the latest updates on data
								science and development.
							</motion.p>

							<Form {...form}>
								<form
									onSubmit={form.handleSubmit(onSubmit)}
									className='space-y-4'>
									<motion.div
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.5, delay: 0.3 }}
										className='flex flex-col sm:flex-row gap-3'>
										<FormField
											control={form.control}
											name='email'
											render={({ field }) => (
												<FormItem className='flex-1'>
													<FormControl>
														<Input
															placeholder='Enter your email'
															{...field}
															className='rounded-full'
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
										<motion.div
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
											transition={{
												type: 'spring',
												stiffness: 400,
												damping: 10
											}}>
											<Button
												type='submit'
												className='rounded-full sm:w-auto'
												disabled={isSubmitting}>
												{isSubmitting ? (
													<span className='flex items-center'>
														<svg
															className='animate-spin -ml-1 mr-2 h-4 w-4 text-white'
															xmlns='http://www.w3.org/2000/svg'
															fill='none'
															viewBox='0 0 24 24'>
															<circle
																className='opacity-25'
																cx='12'
																cy='12'
																r='10'
																stroke='currentColor'
																strokeWidth='4'></circle>
															<path
																className='opacity-75'
																fill='currentColor'
																d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
														</svg>
														Subscribing...
													</span>
												) : (
													'Subscribe'
												)}
											</Button>
										</motion.div>
									</motion.div>
								</form>
							</Form>
						</>
					)}
				</motion.div>
			</div>
		</section>
	);
}
