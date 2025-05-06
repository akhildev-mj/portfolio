import CertificationsGrid from '../components/CertificationsGrid';

export const metadata = {
	title: 'Certifications | Akhildev MJ',
	description:
		'Professional certifications and achievements of Akhildev MJ in data science and development'
};

export default function CertificationsPage() {
	return (
		<div className='pt-16'>
			<div className='bg-background py-12'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center'>
						<h1 className='text-4xl font-bold text-foreground sm:text-5xl'>
							My Certifications
						</h1>
						<p className='mt-4 text-lg text-muted-foreground max-w-2xl mx-auto'>
							A comprehensive collection of my professional certifications and
							achievements in data science, machine learning, and software
							development.
						</p>
					</div>
				</div>
			</div>
			<CertificationsGrid showHeading={false} />
		</div>
	);
}
