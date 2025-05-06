import Skills from '../components/Skills';

export const metadata = {
	title: 'Skills | Akhildev MJ',
	description:
		'Technical skills and expertise of Akhildev MJ in data science and full stack development'
};

export default function SkillsPage() {
	return (
		<div className='pt-16'>
			<div className='bg-background py-12'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center'>
						<h1 className='text-4xl font-bold text-foreground sm:text-5xl'>
							My Skills & Expertise
						</h1>
						<p className='mt-4 text-lg text-muted-foreground max-w-2xl mx-auto'>
							A comprehensive overview of my technical skills in data science,
							machine learning, and software development.
						</p>
					</div>
				</div>
			</div>
			<Skills showHeading={false} />
		</div>
	);
}
