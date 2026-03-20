import { AnimatePresence, motion, useInView } from 'framer-motion';
import {
	ArrowLeft,
	ArrowUp,
	Award,
	BadgeCheck,
	BriefcaseBusiness,
	Calendar,
	ChevronRight,
	Download,
	ExternalLink,
	FileBadge,
	FolderKanban,
	Github,
	Heart,
	House,
	Laptop,
	LineChart,
	Linkedin,
	Mail,
	MapPin,
	MessageCircle,
	Phone,
	PhoneCall,
	Sparkles,
	Terminal,
	User,
	Zap,
} from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { codeToHtml } from 'shiki';
import {
	CERTIFICATION_CATEGORIES,
	CERTIFICATIONS,
} from './constants/certifications';
import { PROJECT_CATEGORIES, PROJECTS } from './constants/projects';

// --- TYPES & INTERFACES ---
type IconType = React.ElementType;

export interface CertData {
	id?: number;
	title: string;
	desc: string;
	image: string;
	category: string;
	issuer: string;
	date: string;
	verifyUrl: string;
	skills: string[];
}

export interface ProjectData {
	id?: number;
	title: string;
	desc: string;
	image: string;
	category: string;
	tech: string[];
	icon: IconType;
	github: string;
	live: string;
}

interface StatData {
	label: string;
	value: string;
	icon: IconType;
}
interface ContactData {
	icon: IconType;
	label: string;
	value: string;
	href: string;
}
interface SocialData {
	icon: IconType;
	href: string;
	label: string;
}
interface NavData {
	name: string;
	href: string;
	icon: IconType;
	desc: string;
}
interface CodeTemplate {
	language: string;
	code: string;
}

interface CardProps<T> {
	item: T;
	index: number;
	isInView: boolean;
}

interface SectionGridProps<T> {
	id: string;
	title: string;
	data: T[];
	Card: React.FC<CardProps<T>>;
	nav: (route: string) => void;
	navRoute: string;
	navText: string;
}

interface ArchivePageProps<T> {
	title: string;
	cats: string[];
	data: T[];
	Card: React.FC<CardProps<T>>;
	nav: (route: string) => void;
}

// --- CSS ---
const LiquidGlassStyles: React.FC = () => (
	<style>{`
    @keyframes shimmer { 0% { background-position: 200% center; } 100% { background-position: 0% center; } }
    @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
    @keyframes drift { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(3vw, -3vw) scale(1.05); } }
    @keyframes blobFloat { 0%, 100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-20px) scale(1.05); } }
    @keyframes gradient-xy { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }

    /* Shiki overrides for transparency */
    pre.shiki {
      background: transparent !important;
      margin: 0;
      overflow-x: hidden;
      max-width: 100%;
    }
    
    /* PRESERVED LIQUID BORDER FOR PRIMARY BUTTONS (Dark mode look on light bg) */
    .liquid-border { position: relative; background: linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.02)); z-index: 1; backdrop-filter: blur(10px); }
    .liquid-border::before {
      content: ""; position: absolute; inset: -1.5px; padding: 1.75px; border-radius: inherit;
      background: linear-gradient(115deg, #737373 0%, #737373 20%, #ffdccd 28%, #ffffff 30%, #abf7ff 32%, #737373 40%, #737373 70%, #ffdccd 78%, #ffffff 80%, #abf7ff 82%, #737373 90%, #737373 100%);
      background-size: 200% auto; animation: shimmer 3s linear infinite;
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude; z-index: -1;
    }

    /* LIGHT MODE LIQUID BORDER */
    .liquid-border-light {
      position: relative;
      background: rgba(255, 255, 255, 0.7);
      z-index: 1;
      backdrop-filter: blur(10px);
    }

    .liquid-border-light::before {
      content: "";
      position: absolute;
      inset: -1.5px;
      padding: 1.75px;
      border-radius: inherit;

      background: linear-gradient(
        115deg,
        #f5f5f5 0%,
        #eaeaea 15%,
        #ffd9c7 25%,
        #ffffff 30%,
        #bff6ff 35%,
        #eaeaea 45%,
        #f5f5f5 60%,
        #ffd9c7 75%,
        #ffffff 80%,
        #bff6ff 85%,
        #eaeaea 92%,
        #f5f5f5 100%
      );

      background-size: 200% auto;
      animation: shimmer 3s linear infinite;

      -webkit-mask: linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;

      z-index: -1;
    }

    /* NEW: SYNCHRONIZED LIGHT HOVER BORDER ANIMATION */
    .hover-border-liquid { position: relative; z-index: 1; transition: background-color 0.3s; }
    .hover-border-liquid::before {
      content: ""; position: absolute; inset: -1.5px; padding: 1.75px; border-radius: inherit;
      background: linear-gradient(
        115deg,
        #f5f5f5 0%,
        #eaeaea 15%,
        #ffd9c7 25%,
        #ffffff 30%,
        #bff6ff 35%,
        #eaeaea 45%,
        #f5f5f5 60%,
        #ffd9c7 75%,
        #ffffff 80%,
        #bff6ff 85%,
        #eaeaea 92%,
        #f5f5f5 100%
      );
      background-size: 200% auto; 
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude; z-index: -1;
      opacity: 0; transition: opacity 0.4s ease-in-out;
    }
    .group:hover .hover-border-liquid::before,
    .hover-border-liquid:hover::before {
      opacity: 1; animation: shimmer 3s linear infinite;
    }
    
    /* EXTREME LIQUID GLASS CLASSES (Light Mode) */
    .glass-panel { 
        background: rgba(255, 255, 255, 0.15); 
        backdrop-filter: blur(24px); 
        -webkit-backdrop-filter: blur(24px); 
        border: 1px solid rgba(255, 255, 255, 0.4); 
        box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.05), inset 0 1px 2px rgba(255,255,255,0.5); 
    }
    .glass-panel-hover:hover { 
        background: rgba(255, 255, 255, 0.25); 
        border: 1px solid rgba(255, 255, 255, 0.6); 
        box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.08), inset 0 1px 2px rgba(255,255,255,0.8); 
    }
    .glass-inset { 
        background: rgba(255, 255, 255, 0.1); 
        box-shadow: inset 0 2px 10px rgba(0,0,0,0.02); 
        border: 1px solid rgba(255,255,255,0.3); 
    }
    
    /* Dynamic Grid Pattern (Light) */
    .grid-pattern {
        background-image: 
          linear-gradient(rgba(0, 0, 0, 0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 0, 0, 0.04) 1px, transparent 1px);
        background-size: 40px 40px;
        -webkit-mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
        mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
    }
    
    /* Typography Utilities */
    .text-glass-gradient { 
        background: linear-gradient(180deg, #111827 0%, #4b5563 100%); 
        -webkit-background-clip: text; 
        -webkit-text-fill-color: transparent; 
    }

    ::-webkit-scrollbar { width: 8px; } ::-webkit-scrollbar-track { background: transparent; } ::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.1); border-radius: 4px; } ::-webkit-scrollbar-thumb:hover { background: rgba(0,0,0,0.2); }
  `}</style>
);

// --- UTILS & OTHER DATA ---
const cn = (...c: (string | undefined | null | false)[]) =>
	c.filter(Boolean).join(' ');
const fadeInUp = {
	initial: { opacity: 0, y: 30 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.6 },
};
const fadeInLeft = {
	initial: { opacity: 0, x: -50 },
	animate: { opacity: 1, x: 0 },
	transition: { duration: 0.8 },
};
const fadeInRight = {
	initial: { opacity: 0, x: 50 },
	animate: { opacity: 1, x: 0 },
	transition: { duration: 0.8 },
};
const btnHover = { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 } };
const stagger = { animate: { transition: { staggerChildren: 0.1 } } };

const ROLES: string[] = [
	'Data Scientist',
	'AI Engineer',
	'Full Stack Developer',
];
const STATS: StatData[] = [
	{ label: 'Years Experience', value: '5+', icon: LineChart },
	{ label: 'Builds', value: '25+', icon: FolderKanban },
	{ label: 'Credentials', value: '50+', icon: FileBadge },
	{ label: 'Tech', value: '20+', icon: Laptop },
];
const CONTACT_INFO: ContactData[] = [
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
const SOCIALS: SocialData[] = [
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
const NAV_ITEMS: NavData[] = [
	{ name: 'Home', href: '#home', icon: House, desc: 'Top' },
	{ name: 'About', href: '#about', icon: User, desc: 'Info' },
	{ name: 'Credentials', href: '#certs', icon: Award, desc: 'Credentials' },
	{ name: 'Work', href: '#work', icon: BriefcaseBusiness, desc: 'Work' },
	{ name: 'Contact', href: '#contact', icon: PhoneCall, desc: 'Reach out' },
];

const CODE_TEMPLATES: CodeTemplate[] = [
	{
		language: 'Python',
		code: 'def get_user():\n  user = {\n    "name": "Akhildev MJ",\n    "job": "AI Engineer",\n    "skills": ["AI"]\n  }\n  return user\n',
	},
	{
		language: 'JavaScript',
		code: 'const getUser = () => {\n  const user = {\n    name: "Akhildev MJ",\n    job: "AI Engineer",\n    skills: ["AI"]\n  };\n  return user;\n};\n',
	},
	{
		language: 'C++',
		code: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nstruct User {\n  string name = "Akhildev MJ";\n  string job = "AI Engineer";\n  vector<string> skills;\n};\n',
	},
];

const ABOUT_MD: string[] = [
	'# Akhildev MJ',
	'## Summary',
	'Senior SWE & Data Scientist at QBurst (5+ yrs).',
	'AI, ML, DL, Full Stack, Cloud expertise.',
	'## Core Skills',
	'- AI / ML / DL',
	'- Full Stack (Web/Mobile)',
	'- Cloud Architecture',
];

const handleResumeClick = () => {
	window.open(
		'/resume/Akhildev_MJ_Resume.pdf',
		'_blank',
		'noopener,noreferrer'
	);
};

const certificationsLoop = Array(5)
	.fill(CERTIFICATIONS)
	.flat()
	.map(({ image, title }, index) => ({
		id: index,
		image,
		title,
	}));

export const CodeBlock = ({ code, lang }: any) => {
	const [html, setHtml] = useState('');

	useEffect(() => {
		const load = async () => {
			const out = await codeToHtml(code, {
				lang,
				theme: 'everforest-light',
			});
			setHtml(out);
		};
		load();
	}, [code, lang]);

	return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

// --- REUSABLE COMPONENTS ---
interface GlassBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'liquid' | 'outline' | 'icon' | 'liquid-icon';
	icon?: IconType;
}

const GlassBtn = React.forwardRef<HTMLButtonElement, GlassBtnProps>(
	({ variant = 'liquid', icon: Icon, className, children, ...props }, ref) => {
		const styles = {
			liquid: 'liquid-border rounded-full gap-3 px-5 py-2',
			outline:
				'glass-panel rounded-full gap-2 px-6 py-2.5 hover:bg-white/80 text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors',
			icon: 'glass-panel rounded-full w-12 h-12 hover:bg-white/80 transition-colors',
			'liquid-icon': 'liquid-border rounded-full w-12 h-12',
		};
		return (
			<button
				ref={ref}
				className={cn(
					'flex items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:opacity-50 group cursor-pointer',
					styles[variant],
					className
				)}
				{...props}>
				{Icon && variant === 'liquid' ? (
					<div className='w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md'>
						<Icon className='w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors' />
					</div>
				) : (
					Icon && (
						<Icon
							className={cn(
								variant === 'liquid-icon'
									? 'w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors'
									: variant === 'icon'
										? 'w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors'
										: 'w-4 h-4 text-gray-600 group-hover:text-gray-900'
							)}
						/>
					)
				)}
				{children && (
					<span
						className={
							variant === 'liquid'
								? 'text-gray-600 hover:text-gray-800 font-medium text-sm'
								: ''
						}>
						{children}
					</span>
				)}
			</button>
		);
	}
);
GlassBtn.displayName = 'GlassBtn';

type GlassFieldProps =
	| (React.InputHTMLAttributes<HTMLInputElement> & { as?: 'input' })
	| (React.TextareaHTMLAttributes<HTMLTextAreaElement> & { as: 'textarea' });

const GlassField = React.forwardRef<
	HTMLInputElement | HTMLTextAreaElement,
	GlassFieldProps
>(({ as: Component = 'input', className, ...props }, ref) => {
	const baseClasses =
		'w-full glass-inset px-5 text-sm text-gray-900 placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 disabled:opacity-50 transition-all hover:bg-white/60 backdrop-blur-md';

	if (Component === 'textarea') {
		return (
			<textarea
				ref={ref as React.Ref<HTMLTextAreaElement>}
				className={cn(
					baseClasses,
					'min-h-[120px] rounded-3xl py-4 resize-y',
					className
				)}
				{...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
			/>
		);
	}
	return (
		<input
			ref={ref as React.Ref<HTMLInputElement>}
			className={cn(baseClasses, 'h-12 rounded-full py-2', className)}
			{...(props as React.InputHTMLAttributes<HTMLInputElement>)}
		/>
	);
});
GlassField.displayName = 'GlassField';

const SectionHeader: React.FC<{
	title: string;
	subtitle?: string;
	isInView: boolean;
}> = ({ title, subtitle, isInView }) => (
	<motion.div
		{...fadeInUp}
		animate={isInView ? fadeInUp.animate : {}}
		className='text-center mb-12 sm:mb-16 w-full'>
		<h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-glass-gradient px-4 tracking-tight'>
			{title}
		</h2>
		<div className='w-12 sm:w-16 h-1 bg-gray-300 rounded-full mx-auto mb-4 sm:mb-6 backdrop-blur-md' />
		{subtitle && (
			<p className='text-gray-500 max-w-2xl mx-auto text-xs sm:text-sm tracking-wide px-4'>
				{subtitle}
			</p>
		)}
	</motion.div>
);

const ImgFallback: React.FC<{ src: string; className?: string }> = ({
	src,
	className,
}) => (
	<div className={cn('bg-gray-100 backdrop-blur-sm', className)}>
		<img
			src={src}
			alt='thumbnail'
			onError={(e) =>
				((e.currentTarget as HTMLImageElement).src =
					'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800')
			}
			className='w-full h-full object-cover opacity-90 transition-all duration-700 ease-out mix-blend-multiply'
		/>
	</div>
);

// --- MODERN GLASS PROJECT CARD ---
const ProjCard: React.FC<CardProps<ProjectData>> = ({
	item: p,
	index,
	isInView,
}) => (
	<motion.article
		initial={{ opacity: 0, y: 40 }}
		animate={isInView ? { opacity: 1, y: 0 } : {}}
		transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
		whileHover={{ y: -8 }}
		className='group relative glass-panel glass-panel-hover rounded-[2rem] overflow-hidden flex flex-col w-full transition-all duration-500'>
		<div className='absolute inset-0 bg-gradient-to-tr from-white/40 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10' />

		<div className='relative h-56 overflow-hidden'>
			<div className='w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out'>
				<ImgFallback src={p.image} className='h-full' />
			</div>
			<div className='absolute inset-0 bg-gradient-to-t from-[#fafafa]/90 via-[#fafafa]/30 to-transparent' />
			<div className='absolute top-4 left-4 glass-panel px-4 py-1.5 rounded-full flex items-center space-x-2 z-20'>
				<p.icon className='w-3.5 h-3.5 text-gray-600 group-hover:text-gray-900 transition-colors duration-300' />
				<span className='text-[10px] text-gray-800 uppercase tracking-widest font-bold'>
					{p.category}
				</span>
			</div>
		</div>

		<div className='p-6 flex flex-col justify-between flex-1 relative z-20'>
			<h3 className='font-bold text-gray-900 text-xl mb-3 tracking-tight'>
				{p.title}
			</h3>
			<p className='text-gray-600 text-sm mb-5 line-clamp-2 leading-relaxed'>
				{p.desc}
			</p>

			<div className='flex flex-wrap gap-2 mb-6'>
				{p.tech.map((t, i) => (
					<span
						key={t}
						className='px-3 py-1.5 text-[10px] uppercase font-bold glass-inset text-gray-700 rounded-full transition-colors duration-300'
						style={{ transitionDelay: `${i * 50}ms` }}>
						{t}
					</span>
				))}
			</div>

			<div className='flex gap-3 mt-auto pt-4 border-t border-black/5'>
				<GlassBtn
					variant='outline'
					icon={Github}
					className='flex-1 py-2 text-xs hover-border-liquid'
					onClick={() => window.open(p.github)}>
					Code
				</GlassBtn>
				{p.live && (
					<GlassBtn
						variant='outline'
						icon={ExternalLink}
						className='flex-1 py-2 text-xs'
						onClick={() => window.open(p.live)}>
						Demo
					</GlassBtn>
				)}
			</div>
		</div>
	</motion.article>
);

const CertCard: React.FC<CardProps<CertData>> = ({
	item: c,
	index,
	isInView,
}) => (
	<motion.article
		initial={{ opacity: 0, y: 30, scale: 0.95 }}
		animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
		transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
		whileHover={{ y: -8 }}
		className='group relative glass-panel glass-panel-hover hover-border-liquid rounded-[2rem] p-6 flex flex-col w-full transition-all duration-500'>
		<div className='absolute inset-0 bg-gradient-to-tr from-white/40 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10' />

		<div className='flex items-start mb-5 relative z-20'>
			<div className='mr-5 w-16 h-16 sm:w-20 sm:h-20 glass-inset rounded-2xl p-1 overflow-hidden transform group-hover:scale-105 transition-transform duration-500 flex-shrink-0'>
				<ImgFallback src={c.image} className='rounded-xl h-full' />
			</div>
			<div className='flex flex-col flex-1 gap-y-1 justify-center h-16 sm:h-20'>
				<h3 className='font-semibold text-gray-900 group-hover:text-black line-clamp-2 transition-colors duration-300 leading-snug'>
					{c.title}
				</h3>
				<p className='font-bold text-gray-500 text-sm'>{c.issuer}</p>
			</div>
		</div>

		<p className='text-gray-600 text-sm mb-5 line-clamp-2 relative z-20 leading-relaxed'>
			{c.desc}
		</p>

		<div className='flex flex-wrap gap-2 mb-5 flex-1 relative z-20'>
			{c.skills &&
				c.skills.map((s, i) => (
					<span
						key={s}
						className='px-3 py-1.5 text-[10px] uppercase font-bold glass-inset text-gray-700 rounded-full transition-colors duration-300'
						style={{ transitionDelay: `${i * 50}ms` }}>
						{s}
					</span>
				))}
		</div>

		<div className='border-t border-black/5 pt-4 flex justify-between items-center relative z-20'>
			<div className='flex items-center text-xs text-gray-500 font-medium'>
				<Calendar className='w-3.5 h-3.5 mr-1.5' />
				{c.date}
			</div>
			<button
				className='text-xs font-semibold tracking-wide flex items-center transition-all duration-300 text-lime-600 hover:text-lime-700 hover:drop-shadow-[0_0_10px_rgba(132,204,22,0.7)]'
				onClick={() => window.open(c.verifyUrl || '#', '_blank')}>
				Verify <BadgeCheck className='w-4 h-4 ml-1.5' />
			</button>
		</div>
	</motion.article>
);

// --- SECTIONS ---
const useSection = (): [React.RefObject<HTMLDivElement | null>, boolean] => {
	const r = useRef<HTMLDivElement>(null);
	return [r, useInView(r, { once: true, margin: '-100px' })];
};

const Hero: React.FC = () => {
	const [roleIdx, setRole] = useState<number>(0);
	const [tplIdx, setTpl] = useState<number>(0);
	const [gen, setGen] = useState<boolean>(false);

	useEffect(() => {
		const id = setInterval(() => setRole((p) => (p + 1) % ROLES.length), 3000);
		return () => clearInterval(id);
	}, []);

	return (
		<section
			id='home'
			className='min-h-screen flex items-center px-4 sm:px-6 lg:px-20 pt-28 lg:pt-36 pb-16 max-w-7xl mx-auto w-full'>
			<div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full'>
				<motion.div
					{...fadeInLeft}
					className='text-center lg:text-left z-10 w-full'>
					<motion.div
						{...fadeInUp}
						className='inline-flex items-center space-x-2 glass-panel rounded-full px-4 py-1.5 mb-6 sm:mb-8'>
						<div className='w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]' />
						<span className='text-[10px] sm:text-xs font-bold text-gray-700 uppercase tracking-wider'>
							Open to Work
						</span>
					</motion.div>

					<motion.h1
						{...fadeInUp}
						className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight leading-tight w-full'>
						<span className='block text-gray-500 text-xl sm:text-2xl mb-1 sm:mb-2 font-normal'>
							Hi, I'm
						</span>
						<span className='block text-glass-gradient pb-1 sm:pb-2'>
							Akhildev MJ
						</span>
					</motion.h1>

					<div className='h-8 sm:h-10 flex items-center justify-center lg:justify-start overflow-hidden w-full'>
						<AnimatePresence mode='wait'>
							<motion.h2
								key={roleIdx}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								transition={{ duration: 0.4 }}
								className='text-lg sm:text-xl md:text-2xl text-gray-600 font-light tracking-wide truncate'>
								{ROLES[roleIdx]}
							</motion.h2>
						</AnimatePresence>
					</div>

					<motion.p
						{...fadeInUp}
						className='text-sm sm:text-base md:text-lg text-gray-500 my-6 sm:my-8 leading-relaxed max-w-lg mx-auto lg:mx-0 font-light'>
						Transforming data into intelligent solutions with precision
						engineering and immersive interfaces.
					</motion.p>

					<motion.div
						{...fadeInUp}
						className='flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-5 items-center'>
						<motion.div {...btnHover}>
							<GlassBtn
								icon={Download}
								className='text-xs sm:text-sm'
								onClick={handleResumeClick}>
								Resume
							</GlassBtn>
						</motion.div>
						<div className='flex gap-3'>
							{SOCIALS.map((s) => (
								<motion.div key={s.label} {...btnHover}>
									<GlassBtn
										variant='icon'
										icon={s.icon}
										onClick={() => window.open(s.href)}
									/>
								</motion.div>
							))}
						</div>
					</motion.div>
				</motion.div>

				<motion.div
					{...fadeInRight}
					className='w-full max-w-lg mx-auto glass-panel rounded-[2.5rem] p-2 relative animate-[float_4s_ease-in-out_infinite] liquid-border-light min-w-0'>
					<div className='glass-inset rounded-[2rem] p-5 sm:p-6 backdrop-blur-xl border border-white/20 w-full'>
						<div className='flex justify-between items-center mb-5 sm:mb-6 w-full'>
							<div className='flex gap-2 items-center'>
								<div className='w-3 h-3 rounded-full bg-red-400 shadow-[0_0_8px_#f87171] shrink-0' />
								<div className='w-3 h-3 rounded-full bg-yellow-400 shadow-[0_0_8px_#facc15] shrink-0' />
								<div className='w-3 h-3 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80] shrink-0' />
								<span className='text-gray-500 text-[10px] sm:text-xs font-mono ml-2 uppercase tracking-widest truncate'>
									sys.{CODE_TEMPLATES[tplIdx].language.toLowerCase()}
								</span>
							</div>
							<button
								onClick={() => {
									setGen(true);
									setTimeout(() => {
										setTpl((p) => (p + 1) % CODE_TEMPLATES.length);
										setGen(false);
									}, 1000);
								}}
								className='glass-panel px-3 py-1.5 rounded-full hover:bg-white/80 transition-colors cursor-pointer shrink-0'>
								{gen ? (
									<Zap className='w-3.5 h-3.5 text-gray-700 animate-spin' />
								) : (
									<Sparkles className='w-3.5 h-3.5 text-gray-700' />
								)}
							</button>
						</div>
						<div className='min-h-[140px] sm:min-h-[160px] font-mono text-xs sm:text-sm relative overflow-hidden w-full'>
							<motion.div
								key={tplIdx}
								initial={{ opacity: 0, x: -10 }}
								animate={{ opacity: 1, x: 0 }}
								className='whitespace-pre-line leading-loose w-full'>
								<CodeBlock
									key={tplIdx}
									code={CODE_TEMPLATES[tplIdx].code}
									lang={CODE_TEMPLATES[tplIdx].language.toLocaleLowerCase()}
								/>
							</motion.div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

const About: React.FC = () => {
	const [ref, inView] = useSection();
	return (
		<section
			id='about'
			ref={ref}
			className='py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto relative z-10 w-full'>
			<div className='absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent' />
			<SectionHeader title='About Me' isInView={inView} />
			<div className='grid lg:grid-cols-2 gap-8 sm:gap-10 items-center w-full'>
				<motion.div
					{...fadeInLeft}
					animate={inView ? fadeInLeft.animate : {}}
					className='group glass-panel rounded-[2.5rem] p-2 w-full min-w-0 max-w-full liquid-border-light'>
					<div className='glass-inset rounded-[2rem] p-5 sm:p-8 backdrop-blur-xl overflow-hidden w-full'>
						<div className='flex gap-2 mb-5 sm:mb-6 pb-4 border-b border-black/5'>
							<Terminal className='w-4 h-4 text-gray-500 shrink-0' />
							<span className='text-gray-500 text-[10px] sm:text-xs uppercase tracking-widest truncate'>
								sys_profile.md
							</span>
						</div>
						<div className='space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed overflow-hidden w-full font-mono'>
							{ABOUT_MD.map((l, i) => (
								<motion.div
									key={i}
									initial={{ opacity: 0, y: 10 }}
									animate={inView ? { opacity: 1, y: 0 } : {}}
									transition={{ delay: 0.2 + i * 0.1 }}
									className='w-full min-w-0'>
									<CodeBlock key={i} code={l} lang={'markdown'} />
								</motion.div>
							))}
						</div>
					</div>
				</motion.div>

				<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full min-w-0'>
					{STATS.map((s, i) => (
						<motion.div
							key={s.label}
							initial={{ opacity: 0, scale: 0.9 }}
							animate={inView ? { opacity: 1, scale: 1 } : {}}
							transition={{ delay: 0.4 + i * 0.1 }}
							whileHover={{ y: -5 }}
							className='glass-panel glass-panel-hover p-6 sm:p-8 rounded-[2rem] flex flex-col items-center text-center group transition-all duration-300 w-full min-w-0 '>
							<div className='w-12 h-12 glass-inset rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform'>
								<s.icon className='w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors' />
							</div>
							<div className='text-3xl font-bold text-gray-900 mb-2 drop-shadow-md'>
								{s.value}
							</div>
							<div className='text-gray-500 text-[10px] sm:text-xs uppercase font-medium tracking-widest text-center'>
								{s.label}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

const SectionGrid = <T extends any>({
	id,
	title,
	data,
	Card,
	nav,
	navRoute,
	navText,
}: SectionGridProps<T>) => {
	const [ref, inView] = useSection();
	return (
		<section
			id={id}
			ref={ref}
			className='py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto relative z-10 w-full'>
			<div className='absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent' />
			<SectionHeader title={title} isInView={inView} />
			<motion.div
				variants={stagger}
				animate={inView ? 'animate' : 'initial'}
				className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16'>
				{data.slice(0, 3).map((d: any, i: number) => (
					<Card key={d.id} item={d} index={i} isInView={inView} />
				))}
			</motion.div>

			{title === 'Credentials' && (
				<div
					className='relative mb-12 overflow-hidden'
					style={{
						WebkitMaskImage:
							'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
						maskImage:
							'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
					}}>
					<motion.div
						animate={{ x: ['0%', '-100%'] }}
						transition={{
							repeat: Infinity,
							repeatType: 'loop',
							duration: certificationsLoop.length * 10,
							ease: 'linear',
						}}
						className='flex gap-4 w-max'>
						{certificationsLoop.map((cert, idx) => (
							<div key={`${cert.id}-${idx}`}>
								<img
									width={80}
									height={80}
									src={cert.image}
									alt={cert.title}
									className='rounded-xl object-cover h-20 w-20'
								/>
							</div>
						))}
					</motion.div>
				</div>
			)}

			<motion.div
				initial={{ opacity: 0 }}
				animate={inView ? { opacity: 1 } : {}}
				className='flex justify-center'>
				<motion.div {...btnHover}>
					<GlassBtn
						icon={ChevronRight}
						onClick={() => nav(navRoute)}
						className='text-xs sm:text-sm shadow-lg shadow-black/5'>
						{navText}
					</GlassBtn>
				</motion.div>
			</motion.div>
		</section>
	);
};

const Contact: React.FC = () => {
	const [ref, inView] = useSection();
	return (
		<section
			id='contact'
			ref={ref}
			className='py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto overflow-hidden relative z-10 w-full'>
			<div className='absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent' />
			<SectionHeader
				title="Let's Connect"
				subtitle="Ready to collaborate on innovative projects? Let's create immersive solutions together."
				isInView={inView}
			/>

			<div className='grid lg:grid-cols-12 gap-8 sm:gap-12 w-full'>
				<motion.div
					{...fadeInLeft}
					animate={inView ? fadeInLeft.animate : {}}
					className='lg:col-span-5 glass-panel rounded-[2.5rem] p-8 h-full flex flex-col justify-center w-full min-w-0'>
					<h3 className='text-xl font-semibold text-gray-900 mb-8 tracking-wide'>
						Get in Touch
					</h3>
					<div className='flex flex-col gap-5'>
						{CONTACT_INFO.map((i, idx) => (
							<motion.a
								key={i.label}
								href={i.href}
								initial={{ opacity: 0, x: -20 }}
								animate={inView ? { opacity: 1, x: 0 } : {}}
								transition={{ delay: 0.2 + idx * 0.1 }}
								className='flex gap-5 group items-center p-2 -m-2 rounded-2xl hover:bg-white/40 transition-colors w-full min-w-0'>
								<div className='w-12 h-12 glass-inset rounded-full flex justify-center items-center group-hover:scale-110 transition-transform shrink-0'>
									<i.icon className='w-5 h-5 text-gray-500 group-hover:text-gray-900 transition-colors' />
								</div>
								<div className='min-w-0'>
									<p className='text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 font-semibold mb-1 truncate'>
										{i.label}
									</p>
									<p className='text-sm text-gray-800 group-hover:text-gray-900 transition-colors truncate'>
										{i.value}
									</p>
								</div>
							</motion.a>
						))}
					</div>
				</motion.div>

				<motion.div
					{...fadeInRight}
					animate={inView ? fadeInRight.animate : {}}
					className='lg:col-span-7 glass-panel rounded-[2.5rem] p-8 w-full min-w-0'>
					<h3 className='text-xl font-semibold text-gray-900 mb-8 tracking-wide'>
						Send a Message
					</h3>
					<form className='space-y-5' onSubmit={(e) => e.preventDefault()}>
						<div className='grid md:grid-cols-2 gap-5'>
							<GlassField placeholder='Your Name' />
							<GlassField type='email' placeholder='your@email.com' />
						</div>
						<GlassField placeholder="What's this about?" />
						<GlassField
							as='textarea'
							placeholder='Tell me about your project or idea...'
						/>
						<div className='flex justify-center lg:justify-end pt-4'>
							<motion.div {...btnHover}>
								<GlassBtn
									icon={ChevronRight}
									type='submit'
									className='text-xs sm:text-sm w-full sm:w-auto shadow-lg shadow-black/5'>
									Send Message
								</GlassBtn>
							</motion.div>
						</div>
					</form>
				</motion.div>
			</div>
		</section>
	);
};

const ArchivePage = <T extends any>({
	title,
	cats,
	data,
	Card,
	nav,
}: ArchivePageProps<T>) => {
	const [active, setActive] = useState<string>('All');
	useEffect(() => window.scrollTo(0, 0), []);
	return (
		<div className='min-h-screen pt-28 lg:pt-36 px-4 sm:px-6 text-center pb-16 sm:pb-20 max-w-7xl mx-auto relative z-10 w-full'>
			<div className='flex justify-center mb-8'>
				<GlassBtn
					variant='outline'
					icon={ArrowLeft}
					onClick={() => nav('home')}
					className='py-2 px-5 text-xs'>
					Return
				</GlassBtn>
			</div>
			<h1 className='text-3xl sm:text-4xl md:text-6xl font-bold mb-10 text-glass-gradient tracking-tight'>
				{title}
			</h1>

			<div className='flex flex-wrap justify-center gap-2 sm:gap-3 mb-16 p-2 glass-panel rounded-3xl w-fit mx-auto'>
				{cats.map((c) => (
					<button
						key={c}
						onClick={() => setActive(c)}
						className={cn(
							'px-5 py-2 rounded-2xl text-xs font-semibold tracking-wide transition-all',
							active === c
								? 'glass-inset text-gray-900 shadow-sm border border-black/5'
								: 'text-gray-500 hover:text-gray-800 hover:bg-white/40'
						)}>
						{c}
					</button>
				))}
			</div>

			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
				{(active === 'All'
					? data
					: data.filter((d: any) => d.category === active)
				).map((d: any, i: number) => (
					<Card key={d.id} item={d} index={i} isInView={true} />
				))}
			</div>
		</div>
	);
};

// --- EXTREME LIQUID GLASS NAVBAR ---
const Navbar: React.FC<{ nav: (route: string) => void }> = ({ nav }) => {
	const [active, setActive] = useState<string>('home');

	useEffect(() => {
		const handleScroll = () => {
			const sp = window.scrollY + window.innerHeight / 3;
			const cur = [...NAV_ITEMS].reverse().find((i) => {
				const el = document.getElementById(i.href.slice(1));
				return el && el.offsetTop <= sp;
			});
			if (cur) setActive(cur.href.slice(1));
		};
		window.addEventListener('scroll', handleScroll);
		handleScroll();
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const go = (h: string) => {
		if (h.startsWith('#')) {
			nav('home');
			setActive(h.slice(1));
			setTimeout(() => {
				const el = document.querySelector(h) as HTMLElement;
				if (el) {
					const isDesktop = window.innerWidth >= 1024;
					const offset = isDesktop ? 30 : 20;
					const y = el.getBoundingClientRect().top + window.scrollY - offset;
					window.scrollTo({ top: y, behavior: 'smooth' });
				}
			}, 100);
		}
	};

	return (
		<nav className='fixed top-4 left-0 right-0 z-[100] flex justify-center px-4'>
			<div className='glass-panel bg-white/10 backdrop-blur-3xl border border-white/40 shadow-2xl shadow-blue-900/5 rounded-full flex items-center justify-between p-1.5 w-full max-w-[20rem] sm:max-w-md md:max-w-2xl lg:max-w-4xl'>
				<div
					className='hidden md:flex items-center cursor-pointer group px-4'
					onClick={() => go('#home')}>
					<div className='w-8 h-8 glass-inset bg-white/20 rounded-full flex justify-center items-center backdrop-blur-md font-bold text-gray-900'>
						A
					</div>
					<span className='text-sm font-bold text-gray-900 tracking-widest ml-0.5'>
						KHILDEV
					</span>
				</div>

				<div className='flex w-full md:w-auto justify-between lg:justify-center gap-1 sm:gap-2 px-1.5 sm:px-2 rounded-full'>
					{NAV_ITEMS.map((i) => (
						<button
							key={i.name}
							onClick={() => go(i.href)}
							className={cn(
								'group flex flex-1 md:flex-none items-center justify-center p-3 sm:p-2.5 transition-all duration-400 rounded-full cursor-pointer',
								active === i.href.slice(1)
									? 'glass-inset bg-white/50 text-gray-900 shadow-sm border border-white/80 md:px-6'
									: 'text-gray-500 hover:text-gray-900 hover:bg-white/40 md:px-4'
							)}>
							<i.icon
								className={cn(
									'w-5 h-5 shrink-0 transition-transform duration-300',
									active === i.href.slice(1)
										? 'scale-110'
										: 'group-hover:scale-110'
								)}
							/>
							<span
								className={cn(
									'hidden md:block overflow-hidden transition-all duration-400 ease-out whitespace-nowrap font-bold tracking-wide text-xs',
									active === i.href.slice(1)
										? 'max-w-[100px] opacity-100 ml-2'
										: 'max-w-0 opacity-0'
								)}>
								{i.name}
							</span>
						</button>
					))}
				</div>
			</div>
		</nav>
	);
};

// --- LIGHT ANIMATED BACKGROUND ---
const BackgroundBlobs = () => (
	<div className='fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#fafafa]'>
		{/* Animated Grid Mask */}
		<div className='absolute inset-0 grid-pattern opacity-100' />

		{/* Floating Soft Pastel Orbs */}
		<div className='absolute top-[5%] left-[5%] w-[40vw] h-[40vw] bg-purple-300/40 rounded-full blur-[100px] mix-blend-multiply animate-[drift_20s_ease-in-out_infinite_alternate]' />
		<div className='absolute bottom-[5%] right-[5%] w-[50vw] h-[50vw] bg-teal-300/30 rounded-full blur-[120px] mix-blend-multiply animate-[drift_25s_ease-in-out_infinite_alternate-reverse]' />
		<div className='absolute top-[30%] right-[20%] w-[35vw] h-[35vw] bg-blue-200/40 rounded-full blur-[110px] mix-blend-multiply animate-[blobFloat_18s_ease-in-out_infinite_alternate]' />
	</div>
);

export default function App() {
	const [route, setRoute] = useState<string>('home');

	useEffect(() => {
		let metaThemeColor = document.querySelector(
			'meta[name=theme-color]'
		) as HTMLMetaElement;
		if (!metaThemeColor) {
			metaThemeColor = document.createElement('meta');
			metaThemeColor.name = 'theme-color';
			document.getElementsByTagName('head')[0].appendChild(metaThemeColor);
		}
		metaThemeColor.content = '#fafafa';
	}, []);

	return (
		<div className='relative min-h-screen bg-[#fafafa] text-gray-900 font-sans selection:bg-gray-200 selection:text-gray-900 pb-safe overflow-x-hidden'>
			<LiquidGlassStyles />
			<BackgroundBlobs />
			<Navbar nav={setRoute} />

			<main className='relative z-10'>
				{route === 'home' && (
					<>
						<Hero />
						<About />
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
					</>
				)}
				{route === 'Credentials' && (
					<ArchivePage<CertData>
						title='Credentials Archive'
						cats={CERTIFICATION_CATEGORIES}
						data={CERTIFICATIONS}
						Card={CertCard}
						nav={setRoute}
					/>
				)}
				{route === 'work' && (
					<ArchivePage<ProjectData>
						title='Work Archive'
						cats={PROJECT_CATEGORIES}
						data={PROJECTS}
						Card={ProjCard}
						nav={setRoute}
					/>
				)}
			</main>

			<footer className='py-12 sm:py-16 pb-28 lg:pb-12 px-4 border-t border-black/5 text-center relative mt-auto z-10'>
				<div className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2'>
					<GlassBtn
						variant='liquid-icon'
						icon={ArrowUp}
						onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
						className='w-12 h-12 shadow-xl shadow-black/10'
					/>
				</div>
				<div className='flex justify-center gap-6 mb-8 pt-8'>
					{SOCIALS.map((l) => (
						<a
							key={l.label}
							href={l.href}
							target='_blank'
							rel='noreferrer'
							className='text-gray-500 hover:text-gray-900 transition-colors bg-white/40 p-3 rounded-full hover:bg-white/80 border border-white/60'>
							<l.icon className='w-5 h-5' />
						</a>
					))}
				</div>
				<p className='text-gray-500 text-[10px] tracking-widest font-bold flex justify-center items-center'>
					&copy; {new Date().getFullYear()} Made with
					<span>
						<Heart className='w-4 h-4 mx-2 mb-0.5 text-red-500 fill-red-500/20' />
					</span>
					by one and only Akku
				</p>
			</footer>
		</div>
	);
}
