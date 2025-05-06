import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Skills from './components/Skills';
import CertificationsGrid from './components/CertificationsGrid';
import ProjectsGrid from './components/ProjectsGrid';
import ContactForm from './components/ContactForm';
import NewsletterSubscribe from './components/NewsletterSubscribe';

export default function Home() {
	return (
		<>
			<Hero />
			{/* <AboutUs /> */}
			<Skills limit={4} />
			<CertificationsGrid limit={3} />
			<ProjectsGrid limit={3} />
			<div id='contact'>
				<ContactForm />
			</div>
			<NewsletterSubscribe />
		</>
	);
}
