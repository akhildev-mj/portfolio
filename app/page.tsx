import Hero from './components/Hero';
import CertificationsGrid from './components/CertificationsGrid';
import ProjectsGrid from './components/ProjectsGrid';
import ContactForm from './components/ContactForm';
import NewsletterSubscribe from './components/NewsletterSubscribe';
import AboutUs from './components/AboutUs';

export default function Home() {
	return (
		<>
			<Hero />
			<AboutUs />
			<CertificationsGrid limit={3} />
			<ProjectsGrid limit={3} />
			<div id='contact'>
				<ContactForm />
			</div>
			<NewsletterSubscribe />
		</>
	);
}
