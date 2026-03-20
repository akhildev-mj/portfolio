import { CertCard } from '@/components/cards/CertCard';
import { ProjCard } from '@/components/cards/ProjCard';
import { BackgroundBlobs } from '@/components/layout/BackgroundBlobs';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { About } from '@/components/sections/About';
import { Hero } from '@/components/sections/Hero';
import type { SectionGridProps } from '@/components/sections/SectionGrid';
import {
	CERTIFICATIONS,
	CERTIFICATION_CATEGORIES,
} from '@/constants/certifications';
import { PROJECTS, PROJECT_CATEGORIES } from '@/constants/projects';
import type { ArchivePageProps } from '@/pages/ArchivePage';
import { LiquidGlassStyles } from '@/styles/LiquidGlassStyles';
import type { CertData, ProjectData } from '@/types';
import { LazyMotion, domAnimation } from 'framer-motion';
import { Suspense, lazy, useState } from 'react';

// Change these two lines in src/App.tsx:
const SectionGrid = lazy(() =>
	import('@/components/sections/SectionGrid').then((m) => ({
		default: m.SectionGrid,
	}))
) as <T>(props: SectionGridProps<T>) => React.JSX.Element;
const ArchivePage = lazy(() =>
	import('@/pages/ArchivePage').then((m) => ({ default: m.ArchivePage }))
) as <T>(props: ArchivePageProps<T>) => React.JSX.Element;

const Contact = lazy(() =>
	import('@/components/sections/Contact').then((m) => ({ default: m.Contact }))
);

const SectionLoader = () => (
	<div className='w-full h-64 flex items-center justify-center animate-pulse text-gray-400'>
		Loading...
	</div>
);

export default function App() {
	const [route, setRoute] = useState<string>('home');

	return (
		<LazyMotion features={domAnimation} strict>
			<div className='relative min-h-screen bg-[#fafafa] text-gray-900 font-sans selection:bg-gray-200 selection:text-gray-900 pb-safe overflow-x-hidden'>
				<meta name='theme-color' content='#fafafa' />

				<LiquidGlassStyles />
				<BackgroundBlobs />
				<Navbar nav={setRoute} />

				<main className='relative z-10'>
					{route === 'home' && (
						<>
							<Hero />
							<About />

							<Suspense fallback={<SectionLoader />}>
								<SectionGrid<CertData>
									id='certs'
									title='Credentials'
									data={CERTIFICATIONS}
									Card={CertCard}
									nav={setRoute}
									navRoute='Credentials'
									navText='All Credentials'
								/>
								<SectionGrid<ProjectData>
									id='work'
									title='Work'
									data={PROJECTS}
									Card={ProjCard}
									nav={setRoute}
									navRoute='work'
									navText='All Work'
								/>
								<Contact />
							</Suspense>
						</>
					)}

					{route === 'Credentials' && (
						<Suspense fallback={<SectionLoader />}>
							<ArchivePage<CertData>
								title='Credentials Archive'
								cats={CERTIFICATION_CATEGORIES}
								data={CERTIFICATIONS}
								Card={CertCard}
								nav={setRoute}
							/>
						</Suspense>
					)}
					{route === 'work' && (
						<Suspense fallback={<SectionLoader />}>
							<ArchivePage<ProjectData>
								title='Work Archive'
								cats={PROJECT_CATEGORIES}
								data={PROJECTS}
								Card={ProjCard}
								nav={setRoute}
							/>
						</Suspense>
					)}
				</main>

				<Footer />
			</div>
		</LazyMotion>
	);
}
