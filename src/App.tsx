import { AnimatePresence, motion, useInView } from 'framer-motion';
import {
  ArrowLeft,
  ArrowUp,
  BadgeCheck,
  Calendar,
  ChevronRight,
  Download,
  ExternalLink,
  FileBadge,
  FolderKanban,
  Github,
  Laptop,
  LineChart,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  SearchCode,
  Sparkles,
  Terminal,
  UserCircle,
  X,
  Zap,
} from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
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
const MetalStyles: React.FC = () => (
  <style>{`
    @keyframes shimmer { 0% { background-position: 200% center; } 100% { background-position: 0% center; } }
    @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
    
    body { background-color: #030303; background-image: radial-gradient(circle at 50% 0%, #161616 0%, #030303 60%); background-attachment: fixed; }
    
    .liquid-border { position: relative; background: #0a0a0a; z-index: 1; }
    .liquid-border::before {
      content: ""; position: absolute; inset: -1.5px; border-radius: inherit; padding: 1.5px;
      background: linear-gradient(115deg, #080808 0%, #080808 20%, #ffdccd 28%, #ffffff 30%, #abf7ff 32%, #080808 40%, #080808 70%, #ffdccd 78%, #ffffff 80%, #abf7ff 82%, #080808 90%, #080808 100%);
      background-size: 200% auto; animation: shimmer 3s linear infinite;
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude; z-index: -1;
    }
    
    .metal-surface { background: linear-gradient(180deg, #151515 0%, #080808 100%); box-shadow: inset 0 1px 1px rgba(255,255,255,0.08), inset 0 -1px 1px rgba(0,0,0,0.8), 0 15px 25px -5px rgba(0,0,0,0.9); border: 1px solid #000; }
    .metal-emboss { background: linear-gradient(135deg, #222, #0a0a0a); box-shadow: inset 0 1px 2px rgba(255,255,255,0.15), inset 0 -1px 2px rgba(0,0,0,0.8), 0 4px 8px rgba(0,0,0,0.8); border: 1px solid #000; }
    .metal-inset { background: #020202; box-shadow: inset 0 4px 8px rgba(0,0,0,0.8), inset 0 1px 3px rgba(0,0,0,0.9), 0 1px 1px rgba(255,255,255,0.05); border: 1px solid #111; }
    
    .text-metal { background: linear-gradient(to bottom, #fff 0%, #b3b3b3 45%, #666 55%, #ccc 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; filter: drop-shadow(0px 2px 4px rgba(0,0,0,0.8)); }
    .text-metal-light { background: linear-gradient(to bottom, #fff 0%, #999 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    
    ::-webkit-scrollbar { width: 8px; } ::-webkit-scrollbar-track { background: #050505; } ::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; } ::-webkit-scrollbar-thumb:hover { background: #555; }
    
    .animate-float { animation: float 4s ease-in-out infinite; }
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
  { label: 'Projects', value: '25+', icon: FolderKanban },
  { label: 'Certs', value: '50+', icon: FileBadge },
  { label: 'Tech', value: '20+', icon: Laptop },
];
const CONTACT_INFO: ContactData[] = [
  {
    icon: Mail,
    label: 'Email',
    value: 'akhildev.adj@gmail.com',
    href: 'mailto:a@g.com',
  },
  { icon: Phone, label: 'Phone', value: '+91 9074123050', href: 'tel:+91' },
  { icon: MapPin, label: 'Location', value: 'Kerala, India', href: '#' },
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
  { name: 'Home', href: '#home', icon: Terminal, desc: 'Top' },
  { name: 'About', href: '#about', icon: UserCircle, desc: 'Info' },
  { name: 'Projects', href: '#projects', icon: FolderKanban, desc: 'Work' },
  {
    name: 'Certifications',
    href: '#certifications',
    icon: FileBadge,
    desc: 'Certs',
  },
  { name: 'Contact', href: '#contact', icon: Mail, desc: 'Reach out' },
];

const CODE_TEMPLATES: CodeTemplate[] = [
  {
    language: 'Python',
    code: `def predict(data):\n  model = AIModel()\n  return model.analyze(data).preds`,
  },
  {
    language: 'JavaScript',
    code: `const run = async () => {\n  const ai = new AI();\n  return await ai.process();\n};`,
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
    'noopener,noreferrer',
  );
};

// --- REUSABLE COMPONENTS ---
interface MetalBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'liquid' | 'outline' | 'icon' | 'liquid-icon';
  icon?: IconType;
}

const MetalBtn = React.forwardRef<HTMLButtonElement, MetalBtnProps>(
  ({ variant = 'liquid', icon: Icon, className, children, ...props }, ref) => {
    const styles = {
      liquid: 'liquid-border rounded-full gap-3 px-6 py-2.5',
      outline:
        'metal-emboss rounded-full gap-2 px-6 py-2.5 hover:bg-[#111] text-gray-400 hover:text-white text-sm font-medium',
      icon: 'metal-emboss rounded-full w-12 h-12 hover:bg-[#111]',
      'liquid-icon': 'liquid-border rounded-full w-12 h-12',
    };
    return (
      <button
        ref={ref}
        className={cn(
          'flex items-center justify-center transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-500 disabled:opacity-50 group',
          styles[variant],
          className,
        )}
        {...props}
      >
        {Icon && variant === 'liquid' ? (
          <div className='w-8 h-8 rounded-full metal-emboss flex items-center justify-center'>
            <Icon className='w-4 h-4 text-gray-400 group-hover:text-white transition-colors' />
          </div>
        ) : (
          Icon && (
            <Icon
              className={cn(
                variant === 'icon' || variant === 'liquid-icon'
                  ? 'w-5 h-5 text-gray-400 group-hover:text-white transition-colors'
                  : 'w-4 h-4',
              )}
            />
          )
        )}
        {children && (
          <span
            className={
              variant === 'liquid' ? 'text-metal-light font-medium text-sm' : ''
            }
          >
            {children}
          </span>
        )}
      </button>
    );
  },
);
MetalBtn.displayName = 'MetalBtn';

type MetalFieldProps =
  | (React.InputHTMLAttributes<HTMLInputElement> & { as?: 'input' })
  | (React.TextareaHTMLAttributes<HTMLTextAreaElement> & { as: 'textarea' });

const MetalField = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  MetalFieldProps
>(({ as: Component = 'input', className, ...props }, ref) => {
  if (Component === 'textarea') {
    return (
      <textarea
        ref={ref as React.Ref<HTMLTextAreaElement>}
        className={cn(
          'w-full metal-inset px-5 text-sm text-gray-200 placeholder:text-gray-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-500 disabled:opacity-50 min-h-[120px] rounded-2xl py-4 resize-y transition-all hover:bg-[#080808]',
          className,
        )}
        {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
      />
    );
  }
  return (
    <input
      ref={ref as React.Ref<HTMLInputElement>}
      className={cn(
        'w-full metal-inset px-5 text-sm text-gray-200 placeholder:text-gray-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-500 disabled:opacity-50 h-12 rounded-full py-2 transition-all hover:bg-[#080808]',
        className,
      )}
      {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
    />
  );
});
MetalField.displayName = 'MetalField';

const SectionHeader: React.FC<{
  title: string;
  subtitle?: string;
  isInView: boolean;
}> = ({ title, subtitle, isInView }) => (
  <motion.div
    {...fadeInUp}
    animate={isInView ? fadeInUp.animate : {}}
    className='text-center mb-12 sm:mb-16'
  >
    <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-metal px-4'>
      {title}
    </h2>
    <div className='w-12 sm:w-16 h-1 metal-emboss rounded-full mx-auto mb-4 sm:mb-6' />
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
  <div className={cn('bg-[#0a0a0a]', className)}>
    <img
      src={src}
      alt='thumbnail'
      onError={(e) =>
        ((e.currentTarget as HTMLImageElement).src =
          'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800')
      }
      className='w-full h-full object-cover opacity-80 transition-all duration-700 ease-out'
    />
  </div>
);

// --- ALIVE & MODERN PROJECT CARD ---
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
    className='group relative metal-surface rounded-3xl overflow-hidden flex flex-col w-full shadow-lg hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,1)] transition-all duration-500 border border-[#222] hover:border-[#333]'
  >
    {/* Glare overlay effect */}
    <div className='absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10' />

    <div className='relative h-56 overflow-hidden border-b border-[#111]'>
      <div className='w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out'>
        <ImgFallback
          src={p.image}
          className='h-full group-hover:mix-blend-normal'
        />
      </div>
      <div className='absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent' />
      <div className='absolute top-4 left-4 metal-emboss px-3 py-1.5 rounded-full flex items-center space-x-2 shadow-lg backdrop-blur-md'>
        <p.icon className='w-3.5 h-3.5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300' />
        <span className='text-[10px] text-gray-300 uppercase tracking-widest font-bold'>
          {p.category}
        </span>
      </div>
    </div>

    <div className='p-6 flex flex-col justify-between flex-1 bg-[#0a0a0a] relative z-20'>
      <h3 className='font-bold text-gray-200 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 text-xl mb-3 transition-all duration-300'>
        {p.title}
      </h3>
      <p className='text-gray-500 text-sm mb-5 line-clamp-2 leading-relaxed'>
        {p.desc}
      </p>

      <div className='flex flex-wrap gap-2 mb-6'>
        {p.tech.map((t, i) => (
          <span
            key={t}
            className='px-3 py-1.5 text-[10px] uppercase font-bold metal-inset text-gray-400 rounded-full border border-[#1a1a1a] group-hover:border-[#333] transition-colors duration-300'
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            {t}
          </span>
        ))}
      </div>

      <div className='flex gap-3 mt-auto pt-4 border-t border-[#1a1a1a]'>
        <MetalBtn
          variant='outline'
          icon={Github}
          className='flex-1 py-2 text-xs'
          onClick={() => window.open(p.github)}
        >
          Code
        </MetalBtn>
        {p.live && (
          <MetalBtn
            variant='outline'
            icon={ExternalLink}
            className='flex-1 py-2 text-xs'
            onClick={() => window.open(p.live)}
          >
            Demo
          </MetalBtn>
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
    className='group relative metal-surface rounded-3xl p-6 flex flex-col w-full shadow-lg hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,1)] transition-all duration-500 border border-[#222] hover:border-[#333]'
  >
    <div className='absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10' />

    <div className='flex items-start mb-5 relative z-20'>
      <div className='mr-5 w-20 h-20 metal-inset rounded-2xl p-1 overflow-hidden transform group-hover:scale-105 transition-transform duration-500'>
        <ImgFallback
          src={c.image}
          className='rounded-xl h-full group-hover:mix-blend-normal'
        />
      </div>
      <div className='flex flex-col flex-1 gap-y-1'>
        <h3 className='font-semibold text-gray-200 group-hover:text-white line-clamp-2 transition-colors duration-300 leading-snug'>
          {c.title}
        </h3>
        <p className='font-bold text-metal text-sm'>{c.issuer}</p>
      </div>
    </div>

    <p className='text-gray-500 text-sm mb-5 line-clamp-2 relative z-20 leading-relaxed'>
      {c.desc}
    </p>

    <div className='flex flex-wrap gap-2 mb-5 flex-1 relative z-20'>
      {c.skills &&
        c.skills.map((s, i) => (
          <span
            key={s}
            className='px-3 py-1.5 text-[10px] uppercase font-bold metal-inset text-gray-400 rounded-full border border-[#1a1a1a] group-hover:border-[#333] transition-colors duration-300'
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            {s}
          </span>
        ))}
    </div>

    <div className='border-t border-[#1a1a1a] pt-4 flex justify-between items-center relative z-20'>
      <div className='flex items-center text-xs text-gray-500 font-medium'>
        <Calendar className='w-3.5 h-3.5 mr-1.5 text-gray-600 group-hover:text-gray-400 transition-colors' />
        {c.date}
      </div>
      <button
        className='text-xs font-bold tracking-wide text-gray-500 hover:text-white flex items-center transition-colors'
        onClick={() => window.open(c.verifyUrl || '#', '_blank')}
      >
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
      className='min-h-screen flex items-center px-4 sm:px-6 lg:px-20 pt-28 pb-16 max-w-7xl mx-auto'
    >
      <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full'>
        <motion.div {...fadeInLeft} className='text-center lg:text-left z-10'>
          <motion.div
            {...fadeInUp}
            className='inline-flex items-center space-x-2 metal-emboss rounded-full px-4 py-1.5 mb-6 sm:mb-8 shadow-lg'
          >
            <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]' />
            <span className='text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider'>
              Available for work
            </span>
          </motion.div>

          <motion.h1
            {...fadeInUp}
            className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight leading-tight'
          >
            <span className='block text-gray-500 text-xl sm:text-2xl mb-1 sm:mb-2 font-normal'>
              Hi, I'm
            </span>
            <span className='block text-metal pb-1 sm:pb-2'>Akhildev MJ</span>
          </motion.h1>

          <div className='h-8 sm:h-10 flex items-center justify-center lg:justify-start overflow-hidden'>
            <AnimatePresence mode='wait'>
              <motion.h2
                key={roleIdx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className='text-lg sm:text-xl md:text-2xl text-gray-400 font-light tracking-wide'
              >
                {ROLES[roleIdx]}
              </motion.h2>
            </AnimatePresence>
          </div>

          <motion.p
            {...fadeInUp}
            className='text-sm sm:text-base md:text-lg text-gray-500 my-6 sm:my-8 leading-relaxed max-w-lg mx-auto lg:mx-0 font-light'
          >
            Transforming data into intelligent solutions with precision
            engineering.
          </motion.p>

          <motion.div
            {...fadeInUp}
            className='flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-5 items-center'
          >
            <motion.div {...btnHover}>
              <MetalBtn
                icon={Download}
                className='text-xs sm:text-sm'
                onClick={handleResumeClick}
              >
                Resume
              </MetalBtn>
            </motion.div>
            <div className='flex gap-3'>
              {SOCIALS.map((s) => (
                <motion.div key={s.label} {...btnHover}>
                  <MetalBtn
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
          className='w-full max-w-lg mx-auto metal-surface rounded-[2rem] p-5 sm:p-6 relative shadow-2xl animate-float'
        >
          <div className='flex justify-between items-center mb-5 sm:mb-6'>
            <div className='flex gap-2 items-center'>
              <div className='w-2.5 h-2.5 sm:w-3 sm:h-3 metal-emboss rounded-full' />
              <div className='w-2.5 h-2.5 sm:w-3 sm:h-3 metal-emboss rounded-full' />
              <span className='text-gray-500 text-[10px] sm:text-xs font-mono ml-2 uppercase tracking-widest'>
                sys.{CODE_TEMPLATES[tplIdx].language.toLowerCase()}
              </span>
            </div>
            <MetalBtn
              variant='outline'
              onClick={() => {
                setGen(true);
                setTimeout(() => {
                  setTpl((p) => (p + 1) % 2);
                  setGen(false);
                }, 1000);
              }}
              className='px-3 sm:px-4 py-1 sm:py-1.5'
            >
              {gen ? (
                <Zap className='w-3.5 h-3.5 animate-spin' />
              ) : (
                <Sparkles className='w-3.5 h-3.5' />
              )}
            </MetalBtn>
          </div>
          <div className='metal-inset rounded-xl p-4 sm:p-5 min-h-[140px] sm:min-h-[160px] font-mono text-xs sm:text-sm relative overflow-hidden'>
            <div className='text-gray-600 mb-3'>
              // AI Generation initialized
            </div>
            <motion.div
              key={tplIdx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className='text-gray-300 whitespace-pre-line leading-loose'
            >
              {CODE_TEMPLATES[tplIdx].code}
            </motion.div>
            {gen && (
              <div className='absolute bottom-4 left-4 sm:left-5 flex gap-2 items-center'>
                <div className='w-1.5 h-1.5 bg-gray-400 rounded-full animate-ping' />
                <span className='text-gray-500 text-[10px] sm:text-xs uppercase tracking-widest'>
                  Processing...
                </span>
              </div>
            )}
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
      className='py-16 sm:py-20 px-4 sm:px-6 border-t border-[#111] max-w-7xl mx-auto overflow-hidden'
    >
      <SectionHeader title='About Core' isInView={inView} />
      <div className='grid lg:grid-cols-2 gap-8 sm:gap-10 items-center'>
        <motion.div
          {...fadeInLeft}
          animate={inView ? fadeInLeft.animate : {}}
          className='metal-surface rounded-3xl p-5 sm:p-6 font-mono group hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,1)] transition-shadow'
        >
          <div className='metal-inset rounded-2xl p-5 sm:p-6'>
            <div className='flex gap-2 mb-5 sm:mb-6 pb-4 border-b border-[#222]'>
              <Terminal className='w-4 h-4 text-gray-500' />
              <span className='text-gray-500 text-[10px] sm:text-xs uppercase tracking-widest'>
                sys_profile.md
              </span>
            </div>
            <div className='space-y-4 text-xs sm:text-sm text-gray-400 leading-relaxed'>
              {ABOUT_MD.map((l, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  {l.startsWith('# ') ? (
                    <h3 className='text-gray-200 font-bold text-base sm:text-lg mb-2'>
                      {l.replace('# ', '')}
                    </h3>
                  ) : l.startsWith('##') ? (
                    <h4 className='text-gray-300 font-semibold mt-4 mb-2'>
                      {l.replace('##', '')}
                    </h4>
                  ) : l.startsWith('-') ? (
                    <div className='flex gap-2 items-center group-hover:translate-x-1 transition-transform'>
                      <div className='w-1 h-1 bg-gray-500 rounded-full' />
                      <span>{l.replace('-', '')}</span>
                    </div>
                  ) : (
                    <span>{l}</span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5'>
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 + i * 0.1 }}
              whileHover={{ y: -5 }}
              className='metal-surface p-5 sm:p-6 rounded-3xl flex flex-col items-center text-center group border border-[#1a1a1a] hover:border-[#333] transition-colors'
            >
              <div className='w-10 h-10 sm:w-12 sm:h-12 metal-emboss rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform'>
                <s.icon className='w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-cyan-400 transition-colors' />
              </div>
              <div className='text-2xl sm:text-3xl font-bold text-metal-light mb-1'>
                {s.value}
              </div>
              <div className='text-gray-500 text-[10px] sm:text-xs uppercase font-medium tracking-widest'>
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
      className='py-16 sm:py-20 px-4 sm:px-6 border-t border-[#111] max-w-7xl mx-auto'
    >
      <SectionHeader title={title} isInView={inView} />
      <motion.div
        variants={stagger}
        animate={inView ? 'animate' : 'initial'}
        className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16'
      >
        {data.slice(0, 3).map((d: any, i: number) => (
          <Card key={d.id} item={d} index={i} isInView={inView} />
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        className='flex justify-center'
      >
        <motion.div {...btnHover}>
          <MetalBtn
            icon={ChevronRight}
            onClick={() => nav(navRoute)}
            className='text-xs sm:text-sm'
          >
            {navText}
          </MetalBtn>
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
      className='py-16 sm:py-24 px-4 sm:px-6 border-t border-[#111] max-w-6xl mx-auto overflow-hidden'
    >
      <SectionHeader
        title='Initialize Contact'
        subtitle='Secure communication channel open for project inquiries and collaborations.'
        isInView={inView}
      />
      <div className='grid lg:grid-cols-12 gap-8 sm:gap-12'>
        <motion.div
          {...fadeInLeft}
          animate={inView ? fadeInLeft.animate : {}}
          className='lg:col-span-5 metal-surface rounded-3xl p-6 sm:p-8 h-full shadow-lg'
        >
          <h3 className='text-lg sm:text-xl font-semibold text-gray-200 mb-6 sm:mb-8 tracking-wide'>
            Comms Link
          </h3>
          <div className='space-y-6'>
            {CONTACT_INFO.map((i, idx) => (
              <motion.a
                key={i.label}
                href={i.href}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className='flex gap-4 sm:gap-5 group items-center'
              >
                <div className='w-10 h-10 sm:w-12 sm:h-12 metal-emboss rounded-full flex justify-center items-center group-hover:scale-110 transition-transform'>
                  <i.icon className='w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-cyan-400 transition-colors' />
                </div>
                <div>
                  <p className='text-[10px] sm:text-xs uppercase tracking-widest text-gray-600 font-semibold mb-0.5 sm:mb-1'>
                    {i.label}
                  </p>
                  <p className='text-xs sm:text-sm text-gray-300 group-hover:text-white transition-colors'>
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
          className='lg:col-span-7 metal-surface rounded-3xl p-6 sm:p-8 shadow-lg'
        >
          <h3 className='text-lg sm:text-xl font-semibold text-gray-200 mb-6 sm:mb-8 tracking-wide'>
            Data Input
          </h3>
          <form
            className='space-y-4 sm:space-y-5'
            onSubmit={(e) => e.preventDefault()}
          >
            <div className='grid md:grid-cols-2 gap-4 sm:gap-5'>
              <MetalField placeholder='Identification' />
              <MetalField type='email' placeholder='Return Address' />
            </div>
            <MetalField placeholder='Subject Header' />
            <MetalField as='textarea' placeholder='Transmit details...' />
            <div className='flex justify-end pt-2 sm:pt-4'>
              <motion.div {...btnHover}>
                <MetalBtn
                  icon={ChevronRight}
                  type='submit'
                  className='text-xs sm:text-sm w-full sm:w-auto'
                >
                  Submit Data
                </MetalBtn>
              </motion.div>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

// --- PAGES ---
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
    <div className='min-h-screen pt-24 sm:pt-28 px-4 sm:px-6 text-center pb-16 sm:pb-20 max-w-7xl mx-auto'>
      <div className='flex justify-center mb-6 sm:mb-8'>
        <MetalBtn
          variant='outline'
          icon={ArrowLeft}
          onClick={() => nav('home')}
          className='py-1.5 text-xs'
        >
          Return
        </MetalBtn>
      </div>
      <h1 className='text-3xl sm:text-4xl md:text-6xl font-bold mb-8 sm:mb-10 text-metal'>
        {title}
      </h1>

      <div className='flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16 p-1.5 sm:p-2 metal-surface rounded-[2rem] sm:rounded-full w-fit mx-auto'>
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={cn(
              'px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-semibold tracking-wide transition-all',
              active === c
                ? 'metal-inset text-white'
                : 'text-gray-500 hover:text-gray-300',
            )}
          >
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

// --- APP LAYOUT ---
const Navbar: React.FC<{ nav: (route: string) => void }> = ({ nav }) => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [cmd, setCmd] = useState<boolean>(false);
  const [active, setActive] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
      setTimeout(
        () => document.querySelector(h)?.scrollIntoView({ behavior: 'smooth' }),
        100,
      );
    }
  };

  return (
    <>
      <nav className='fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none'>
        <div
          className={cn(
            'pointer-events-auto metal-surface rounded-full px-3 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-500 w-full max-w-4xl',
            scrolled
              ? 'shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] border-[#222]'
              : 'border-transparent bg-transparent shadow-none',
          )}
        >
          <div
            className='flex items-center gap-2 sm:gap-3 cursor-pointer group'
            onClick={() => go('#home')}
          >
            <div className='w-8 h-8 sm:w-8 sm:h-8 metal-emboss rounded-full flex justify-center items-center'>
              <span className='font-bold text-gray-400 text-xs group-hover:text-white transition-colors'>
                A.
              </span>
            </div>
            <span className='hidden md:block text-xs sm:text-sm font-bold text-metal-light tracking-widest'>
              AKHILDEV
            </span>
          </div>

          <div className='flex gap-1 metal-inset px-1.5 sm:px-2 py-1.5 sm:py-1 rounded-full mx-auto md:mx-0'>
            {NAV_ITEMS.slice(1).map((i) => (
              <button
                key={i.name}
                onClick={() => go(i.href)}
                className={cn(
                  'group flex items-center justify-center p-2 sm:p-2.5 transition-all duration-400 rounded-full border',
                  active === i.href.slice(1)
                    ? 'metal-surface text-white border-[#333] px-3 sm:px-4'
                    : 'text-gray-500 hover:text-gray-200 border-transparent hover:bg-white/5 hover:px-3 sm:hover:px-4',
                )}
              >
                <i.icon
                  className={cn(
                    'w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 transition-transform duration-300',
                    active === i.href.slice(1)
                      ? 'scale-110'
                      : 'group-hover:scale-110',
                  )}
                />
                <span
                  className={cn(
                    'overflow-hidden transition-all duration-400 ease-out whitespace-nowrap font-bold tracking-wide text-[10px] sm:text-xs',
                    active === i.href.slice(1)
                      ? 'max-w-[100px] opacity-100 ml-2'
                      : 'max-w-0 opacity-0 md:group-hover:max-w-[100px] md:group-hover:opacity-100 md:group-hover:ml-2',
                  )}
                >
                  {i.name}
                </span>
              </button>
            ))}
          </div>

          <div
            className='liquid-border rounded-full p-[1px] cursor-pointer ml-auto md:ml-0'
            onClick={() => setCmd(true)}
          >
            <div className='bg-[#0a0a0a] rounded-full flex items-center justify-center w-9 h-9 sm:w-auto sm:h-9 sm:px-4 hover:bg-[#111] transition-colors'>
              <SearchCode className='w-4 h-4 text-gray-400 sm:mr-2' />
              <span className='text-xs text-gray-500 font-bold tracking-wide hidden sm:block'>
                Search...
              </span>
            </div>
          </div>
        </div>
      </nav>

      {cmd && (
        <div
          className='fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex justify-center pt-[10vh] sm:pt-[15vh] px-4'
          onClick={() => setCmd(false)}
        >
          <div
            className='w-full max-w-2xl metal-surface rounded-[2rem] p-2 h-fit border border-[#222] shadow-2xl'
            onClick={(e) => e.stopPropagation()}
          >
            <div className='metal-inset rounded-[1.5rem] p-3 sm:p-4 flex items-center gap-3 mb-2'>
              <div className='w-8 h-8 sm:w-10 sm:h-10 metal-emboss rounded-full flex justify-center items-center'>
                <SearchCode className='w-4 h-4 sm:w-5 sm:h-5 text-gray-400' />
              </div>
              <input
                autoFocus
                placeholder='Query system...'
                className='flex-1 bg-transparent text-gray-200 text-xs sm:text-sm outline-none font-mono placeholder:text-gray-600'
              />
              <button
                onClick={() => setCmd(false)}
                className='w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-[#111] flex justify-center items-center transition-colors'
              >
                <X className='w-4 h-4 sm:w-5 sm:h-5 text-gray-500' />
              </button>
            </div>
            <div className='p-2 space-y-1'>
              <div className='px-4 py-2 text-[10px] uppercase text-gray-600 font-bold tracking-widest'>
                Navigation Directives
              </div>
              {NAV_ITEMS.map((i) => (
                <button
                  key={i.name}
                  onClick={() => {
                    go(i.href);
                    setCmd(false);
                  }}
                  className={cn(
                    'w-full flex items-center gap-4 p-3 rounded-2xl text-left transition-all duration-300 group',
                    active === i.href.slice(1)
                      ? 'bg-[#1a1a1a]'
                      : 'hover:bg-[#111]',
                  )}
                >
                  <div
                    className={cn(
                      'w-10 h-10 rounded-full flex justify-center items-center transition-all',
                      active === i.href.slice(1)
                        ? 'metal-inset'
                        : 'metal-emboss group-hover:scale-110',
                    )}
                  >
                    <i.icon
                      className={cn(
                        'w-4 h-4 transition-colors',
                        active === i.href.slice(1)
                          ? 'text-cyan-400'
                          : 'text-gray-500 group-hover:text-white',
                      )}
                    />
                  </div>
                  <div className='flex flex-col'>
                    <span
                      className={cn(
                        'text-xs sm:text-sm font-bold tracking-wide transition-colors',
                        active === i.href.slice(1)
                          ? 'text-cyan-400'
                          : 'text-gray-300 group-hover:text-white',
                      )}
                    >
                      {i.name}
                    </span>
                    <span className='text-[10px] sm:text-xs text-gray-600 tracking-wide'>
                      {i.desc}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default function App() {
  const [route, setRoute] = useState<string>('home');
  return (
    <div className='relative min-h-screen font-sans selection:bg-gray-700 selection:text-white pb-safe'>
      <MetalStyles />
      <Navbar nav={setRoute} />
      <main className='relative z-10'>
        {route === 'home' && (
          <>
            <Hero />
            <About />
            <SectionGrid<ProjectData>
              id='projects'
              title='Featured Works'
              data={PROJECTS}
              Card={ProjCard}
              nav={setRoute}
              navRoute='projects'
              navText='All Projects'
            />
            <SectionGrid<CertData>
              id='certifications'
              title='Credentials'
              data={CERTIFICATIONS}
              Card={CertCard}
              nav={setRoute}
              navRoute='cert'
              navText='All Certs'
            />
            <Contact />
          </>
        )}
        {route === 'projects' && (
          <ArchivePage<ProjectData>
            title='Project Archive'
            cats={PROJECT_CATEGORIES}
            data={PROJECTS}
            Card={ProjCard}
            nav={setRoute}
          />
        )}
        {route === 'cert' && (
          <ArchivePage<CertData>
            title='Credential Archive'
            cats={CERTIFICATION_CATEGORIES}
            data={CERTIFICATIONS}
            Card={CertCard}
            nav={setRoute}
          />
        )}
      </main>
      <footer className='py-12 sm:py-16 px-4 border-t border-[#111] text-center relative mt-auto'>
        <div className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <MetalBtn
            variant='liquid-icon'
            icon={ArrowUp}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className='bg-[#050505] w-10 h-10 sm:w-12 sm:h-12'
          />
        </div>
        <div className='flex justify-center gap-4 sm:gap-6 mb-6 pt-6 sm:pt-8'>
          {SOCIALS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target='_blank'
              rel='noreferrer'
              className='text-gray-600 hover:text-white transition-colors'
            >
              <l.icon className='w-4 h-4 sm:w-5 sm:h-5' />
            </a>
          ))}
        </div>
        <p className='text-gray-700 text-[10px] uppercase tracking-widest font-bold'>
          &copy; {new Date().getFullYear()} System Operational.
        </p>
      </footer>
    </div>
  );
}
