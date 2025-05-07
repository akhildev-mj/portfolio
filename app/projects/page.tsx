import ProjectsGrid from '../components/ProjectsGrid';

export const metadata = {
	title: 'Projects | Akhildev MJ',
	description:
		'Portfolio of data science and development projects by Akhildev MJ'
};

export default function ProjectsPage() {
	return (
		<div className='pt-16'>
			<div className='bg-background py-12'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center'>
						<h1 className='text-4xl font-bold text-foreground sm:text-5xl'>
							My Projects
						</h1>
						<p className='mt-4 text-lg text-muted-foreground max-w-2xl mx-auto'>
							A comprehensive collection of my data science and full stack
							development projects, showcasing my skills and expertise.
						</p>
					</div>
				</div>
			</div>
			<ProjectsGrid isHomePage={false} showHeading={false} />
		</div>
	);
}
