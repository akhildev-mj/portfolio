import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from './components/Header';
import Footer from './components/Footer';
import type React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Akhildev MJ | Data Scientist & Full Stack Developer',
	description:
		'Portfolio of Akhildev MJ, showcasing data science projects and full stack development work',
	generator: 'v0.dev'
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				suppressHydrationWarning
				className={`${inter.className} min-h-screen bg-background text-foreground`}>
				<ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
					<Suspense>
						<Header />
						<main>{children}</main>
						<Footer />
					</Suspense>
				</ThemeProvider>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
