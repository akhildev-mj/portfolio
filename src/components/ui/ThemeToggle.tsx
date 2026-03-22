import { GlassBtn } from '@/components/ui/GlassBtn';
import { useTheme } from '@/contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';

export const ThemeToggle = () => {
	const { theme, setTheme } = useTheme();
	const isDark = theme === 'dark';

	return (
		<GlassBtn
			variant='animated-liquid-icon'
			icon={isDark ? Sun : Moon}
			onClick={() => setTheme(isDark ? 'light' : 'dark')}
			aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
			title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
			// Sizing matches standard nav items, styling matches scroll-to-top
			className='w-10 h-10 sm:w-11 sm:h-11 shadow-sm'
		/>
	);
};
