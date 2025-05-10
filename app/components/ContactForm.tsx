'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form';
import { CheckCircle2 } from 'lucide-react';

const formSchema = z.object({
	name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
	email: z.string().email({ message: 'Please enter a valid email address.' }),
	phoneNumber: z
		.string()
		.min(10, { message: 'Please enter a valid phone number.' }),
	projectType: z
		.string()
		.min(1, { message: 'Please enter your project type.' }),
	message: z
		.string()
		.min(10, { message: 'Message must be at least 10 characters.' })
});

export default function ContactForm() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			phoneNumber: '',
			projectType: '',
			message: ''
		}
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		setIsSubmitting(true);
		// Simulate API call
		setTimeout(() => {
			setIsSubmitting(false);
			setIsSubmitted(true);
			form.reset();

			// Reset the success message after 5 seconds
			setTimeout(() => {
				setIsSubmitted(false);
			}, 5000);
		}, 2000);
	}

	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2
			}
		}
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: 'easeOut' }
		}
	};

	const successVariants = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.5,
				ease: [0.22, 1, 0.36, 1]
			}
		}
	};

	return (
		<section className='bg-background py-16 sm:py-20'>
			<div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false, amount: 0.3 }}
					transition={{ duration: 0.6 }}
					className='text-center mb-8 sm:mb-12'>
					<h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4'>
						Get in Touch
					</h2>
					<p className='text-sm sm:text-lg text-muted-foreground'>
						I'd love to hear from you. Fill out the form below and I'll get back
						to you as soon as possible.
					</p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: false, amount: 0.3 }}
					className='bg-background border border-border rounded-xl p-4 sm:p-6 shadow-sm'>
					{isSubmitted ? (
						<motion.div
							className='flex flex-col items-center justify-center py-12 text-center'
							variants={successVariants}
							initial='hidden'
							animate='visible'>
							<motion.div
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								transition={{
									type: 'spring',
									stiffness: 260,
									damping: 20,
									delay: 0.2
								}}
								className='w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4'>
								<CheckCircle2 className='w-8 h-8 text-primary' />
							</motion.div>
							<h3 className='text-xl font-semibold mb-2'>Message Sent!</h3>
							<p className='text-muted-foreground max-w-md'>
								Thank you for reaching out. I'll get back to you as soon as
								possible.
							</p>
						</motion.div>
					) : (
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className='space-y-4 sm:space-y-6'>
								<motion.div variants={itemVariants}>
									<FormField
										control={form.control}
										name='name'
										render={({ field }) => (
											<FormItem>
												<FormLabel>Name</FormLabel>
												<FormControl>
													<Input placeholder='Your Name' {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</motion.div>

								<motion.div variants={itemVariants}>
									<FormField
										control={form.control}
										name='email'
										render={({ field }) => (
											<FormItem>
												<FormLabel>Email</FormLabel>
												<FormControl>
													<Input
														placeholder='your.email@example.com'
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</motion.div>

								<motion.div variants={itemVariants}>
									<FormField
										control={form.control}
										name='phoneNumber'
										render={({ field }) => (
											<FormItem>
												<FormLabel>Phone Number</FormLabel>
												<FormControl>
													<Input placeholder='Your phone number' {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</motion.div>

								<motion.div variants={itemVariants}>
									<FormField
										control={form.control}
										name='projectType'
										render={({ field }) => (
											<FormItem>
												<FormLabel>Project Type</FormLabel>
												<FormControl>
													<Input
														placeholder='Data Science / Web Development / Consulting'
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</motion.div>

								<motion.div variants={itemVariants}>
									<FormField
										control={form.control}
										name='message'
										render={({ field }) => (
											<FormItem>
												<FormLabel>Message</FormLabel>
												<FormControl>
													<Textarea
														placeholder='Tell me about your project or inquiry...'
														className='min-h-[120px]'
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</motion.div>

								<motion.div
									variants={itemVariants}
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}>
									<Button
										type='submit'
										className='w-full'
										disabled={isSubmitting}>
										{isSubmitting ? (
											<span className='flex items-center'>
												<svg
													className='animate-spin -ml-1 mr-3 h-4 w-4 text-white'
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
												Sending...
											</span>
										) : (
											'Send Message'
										)}
									</Button>
								</motion.div>
							</form>
						</Form>
					)}
				</motion.div>
			</div>
		</section>
	);
}
