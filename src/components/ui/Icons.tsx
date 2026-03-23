import { memo } from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
	className?: string;
}

// Helper to keep the boilerplate clean
const IconWrapper = ({
	className,
	children,
	...props
}: IconProps & { children: React.ReactNode }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='24'
		height='24'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
		className={className}
		{...props}>
		{children}
	</svg>
);

// --- General UI Icons ---
export const ExternalLink = memo((props: IconProps) => (
	<IconWrapper {...props}>
		<path d='M15 3h6v6' />
		<path d='M10 14 21 3' />
		<path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' />
	</IconWrapper>
));

export const Github = memo((props: IconProps) => (
	<IconWrapper {...props}>
		<path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
		<path d='M9 18c-4.51 2-5-2-7-2' />
	</IconWrapper>
));

export const BadgeCheck = memo((props: IconProps) => (
	<IconWrapper {...props}>
		<path d='M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z' />
		<path d='m9 12 2 2 4-4' />
	</IconWrapper>
));

export const Calendar = memo((props: IconProps) => (
	<IconWrapper {...props}>
		<rect width='18' height='18' x='3' y='4' rx='2' ry='2' />
		<line x1='16' x2='16' y1='2' y2='6' />
		<line x1='8' x2='8' y1='2' y2='6' />
		<line x1='3' x2='21' y1='10' y2='10' />
	</IconWrapper>
));

export const Terminal = memo((props: IconProps) => (
	<IconWrapper {...props}>
		<polyline points='4 17 10 11 4 5' />
		<line x1='12' x2='20' y1='19' y2='19' />
	</IconWrapper>
));

export const ChevronRight = memo((props: IconProps) => (
	<IconWrapper {...props}>
		<path d='m9 18 6-6-6-6' />
	</IconWrapper>
));

export const Download = memo((props: IconProps) => (
	<IconWrapper {...props}>
		<path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
		<polyline points='7 10 12 15 17 10' />
		<line x1='12' x2='12' y1='15' y2='3' />
	</IconWrapper>
));

export const Sparkles = memo((props: IconProps) => (
	<IconWrapper {...props}>
		<path d='m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z' />
		<path d='M5 3v4' />
		<path d='M19 17v4' />
		<path d='M3 5h4' />
		<path d='M17 19h4' />
	</IconWrapper>
));

export const Zap = memo((props: IconProps) => (
	<IconWrapper {...props}>
		<path d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z' />
	</IconWrapper>
));

export const ArrowUp = memo((props: IconProps) => (
	<IconWrapper {...props}>
		<path d='m5 12 7-7 7 7' />
		<path d='M12 19V5' />
	</IconWrapper>
));

export const Heart = memo((props: IconProps) => (
	<IconWrapper {...props}>
		<path d='M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z' />
	</IconWrapper>
));

export const Moon = memo((props: IconProps) => (
	<IconWrapper {...props}>
		<path d='M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z' />
	</IconWrapper>
));

export const Sun = memo((props: IconProps) => (
	<IconWrapper {...props}>
		<circle cx='12' cy='12' r='4' />
		<path d='M12 2v2' />
		<path d='M12 20v2' />
		<path d='m4.93 4.93 1.41 1.41' />
		<path d='m17.66 17.66 1.41 1.41' />
		<path d='M2 12h2' />
		<path d='M20 12h2' />
		<path d='m6.34 17.66-1.41 1.41' />
		<path d='m19.07 4.93-1.41 1.41' />
	</IconWrapper>
));

export const ArrowLeft = memo((props: IconProps) => (
	<IconWrapper {...props}>
		<path d='m12 19-7-7 7-7' />
		<path d='M19 12H5' />
	</IconWrapper>
));

// --- Constants & Stats Icons ---
export const Brain = memo((props: IconProps) => (
	<IconWrapper {...props}>
		<path d='M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z' />
		<path d='M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z' />
		<path d='M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4' />
		<path d='M17.599 6.5a3 3 0 0 0 .399-1.375' />
		<path d='M6.002 5.125A3 3 0 0 0 6.401 6.5' />
		<path d='M3.477 10.896a4 4 0 0 1 .585-.396' />
		<path d='M19.938 10.5a4 4 0 0 1 .585.396' />
		<path d='M6 18a4 4 0 0 1-1.967-.516' />
		<path d='M19.967 17.484A4 4 0 0 1 18 18' />
	</IconWrapper>
));

export const ChartBar = memo((props: IconProps) => (
	<IconWrapper {...props}>
		<path d='M3 3v18h18' />
		<path d='M18 17V9' />
		<path d='M13 17V5' />
		<path d='M8 17v-3' />
	</IconWrapper>
));

export const ChartLine = memo((props: IconProps) => (
	<IconWrapper {...props}>
		<path d='M3 3v18h18' />
		<path d='m19 9-5 5-4-4-3 3' />
	</IconWrapper>
));

export const Globe = memo((props: IconProps) => (
	<IconWrapper {...props}>
		<circle cx='12' cy='12' r='10' />
		<path d='M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20' />
		<path d='M2 12h20' />
	</IconWrapper>
));

export const Award = memo((props: IconProps) => (
	<IconWrapper {...props}>
		<circle cx='12' cy='8' r='6' />
		<path d='M15.477 12.89 17 22l-5-3-5 3 1.523-9.11' />
	</IconWrapper>
));

export const BriefcaseBusiness = memo((props: IconProps) => (
	<IconWrapper {...props}>
		<path d='M12 12h.01' />
		<path d='M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2' />
		<path d='M22 13a18.15 18.15 0 0 1-20 0' />
		<rect width='20' height='14' x='2' y='6' rx='2' />
	</IconWrapper>
));

export const FileBadge = memo((props: IconProps) => (
	<IconWrapper {...props}>
		<path d='M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3' />
		<path d='M14 2v4a2 2 0 0 0 2 2h4' />
		<path d='M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z' />
		<path d='M7 16.5 8 22l-3-1-3 1 1-5.5' />
	</IconWrapper>
));

export const FolderKanban = memo((props: IconProps) => (
	<IconWrapper {...props}>
		<path d='M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z' />
		<path d='M8 10v4' />
		<path d='M12 10v2' />
		<path d='M16 10v6' />
	</IconWrapper>
));

export const House = memo((props: IconProps) => (
	<IconWrapper {...props}>
		<path d='M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8' />
		<path d='M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
	</IconWrapper>
));

export const Laptop = memo((props: IconProps) => (
	<IconWrapper {...props}>
		<path d='M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16' />
	</IconWrapper>
));

export const LineChart = memo((props: IconProps) => (
	<IconWrapper {...props}>
		<path d='M3 3v18h18' />
		<path d='m19 9-5 5-4-4-3 3' />
	</IconWrapper>
));

export const Linkedin = memo((props: IconProps) => (
	<IconWrapper {...props}>
		<path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
		<rect width='4' height='12' x='2' y='9' />
		<circle cx='4' cy='4' r='2' />
	</IconWrapper>
));

export const Mail = memo((props: IconProps) => (
	<IconWrapper {...props}>
		<rect width='20' height='16' x='2' y='4' rx='2' />
		<path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
	</IconWrapper>
));

export const MapPin = memo((props: IconProps) => (
	<IconWrapper {...props}>
		<path d='M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z' />
		<circle cx='12' cy='10' r='3' />
	</IconWrapper>
));

export const MessageCircle = memo((props: IconProps) => (
	<IconWrapper {...props}>
		<path d='M7.9 20A9 9 0 1 0 4 16.1L2 22Z' />
	</IconWrapper>
));

export const Phone = memo((props: IconProps) => (
	<IconWrapper {...props}>
		<path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
	</IconWrapper>
));

export const PhoneCall = memo((props: IconProps) => (
	<IconWrapper {...props}>
		<path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
		<path d='M14.05 2a9 9 0 0 1 8 7.94' />
		<path d='M14.05 6A5 5 0 0 1 18 10' />
	</IconWrapper>
));

export const User = memo((props: IconProps) => (
	<IconWrapper {...props}>
		<path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' />
		<circle cx='12' cy='7' r='4' />
	</IconWrapper>
));
