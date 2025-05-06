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
			console.log(values);
			setIsSubmitting(false);
			form.reset();
			alert("Thank you for your message. We'll get back to you soon!");
		}, 2000);
	}

	return (
		<section className='bg-background py-16 sm:py-20'>
			<div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
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
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className='bg-background border border-border rounded-xl p-4 sm:p-6 shadow-sm'>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className='space-y-4 sm:space-y-6'>
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
							<FormField
								control={form.control}
								name='email'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input placeholder='your.email@example.com' {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
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
							<Button type='submit' className='w-full' disabled={isSubmitting}>
								{isSubmitting ? 'Sending...' : 'Send Message'}
							</Button>
						</form>
					</Form>
				</motion.div>
			</div>
		</section>
	);
}
