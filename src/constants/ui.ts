import {
	Award,
	BriefcaseBusiness,
	FileBadge,
	FolderKanban,
	Github,
	House,
	Laptop,
	LineChart,
	Linkedin,
	Mail,
	MapPin,
	MessageCircle,
	Phone,
	PhoneCall,
	User,
} from '@/components/ui/Icons';
import type {
	CodeTemplate,
	ContactData,
	NavData,
	SocialData,
	StatData,
} from '../types';

export const ROLES: string[] = [
	'Data Scientist',
	'AI Engineer',
	'Full Stack Developer',
];

export const STATS: StatData[] = [
	{ label: 'Years Experience', value: '5+', icon: LineChart },
	{ label: 'Builds', value: '25+', icon: FolderKanban },
	{ label: 'Certifications', value: '50+', icon: FileBadge },
	{ label: 'Tech', value: '20+', icon: Laptop },
];

export const CONTACT_INFO: ContactData[] = [
	{
		icon: Mail,
		label: 'Email',
		value: 'akhildev.adj@gmail.com',
		href: 'mailto:akhildev.adj@gmail.com',
	},
	{
		icon: Phone,
		label: 'Phone',
		value: '+91 9074123050',
		href: 'tel:+919074123050',
	},
	{ icon: MapPin, label: 'Location', value: 'Kerala, India', href: '#contact' },
	{
		icon: MessageCircle,
		label: 'WhatsApp',
		value: '919074123050',
		href: 'https://wa.me/919074123050',
	},
];

export const SOCIALS: SocialData[] = [
	{ icon: Github, href: 'https://github.com/akhildev-mj', label: 'GitHub' },
	{
		icon: Linkedin,
		href: 'https://linkedin.com/in/akhildevmj',
		label: 'LinkedIn',
	},
	{
		icon: MessageCircle,
		href: 'https://wa.me/919074123050',
		label: 'WhatsApp',
	},
];

export const NAV_ITEMS: NavData[] = [
	{ name: 'Home', href: '#home', icon: House, desc: 'Top' },
	{ name: 'About', href: '#about', icon: User, desc: 'Info' },
	{
		name: 'Certifications',
		href: '#certs',
		icon: Award,
		desc: 'Certifications',
	},
	{
		name: 'Projects',
		href: '#projects',
		icon: BriefcaseBusiness,
		desc: 'Projects',
	},
	{ name: 'Contact', href: '#contact', icon: PhoneCall, desc: 'Reach out' },
];

export const CODE_TEMPLATES: CodeTemplate[] = [
	{
		language: 'Python',
		code: 'def get_user():\n  user = {\n    "name": "Akhildev MJ",\n    "job": "AI Engineer",\n    "skills": ["AI"]\n  }\n  return user\n',
	},
	{
		language: 'JavaScript',
		code: 'const getUser = () => {\n  const user = {\n    name: "Akhildev MJ",\n    job: "AI Engineer",\n    skills: ["AI"]\n  };\n  return user;\n};\n',
	},
];

export const ABOUT_MD: string[] = [
	'# Akhildev MJ',
	'## Summary',
	'Senior SWE & Data Scientist at QBurst (5+ yrs).',
	'AI, ML, DL, Full Stack, Cloud expertise.',
	'## Core Skills',
	'- AI / ML / DL',
	'- Full Stack (Web/Mobile)',
	'- Cloud Architecture',
];
