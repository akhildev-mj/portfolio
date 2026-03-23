import { GlassBtn } from '@/components/ui/GlassBtn';
import { Moon, Sun } from '@/components/ui/Icons';
import { useTheme } from '@/contexts/ThemeContext';

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
			className='w-10 h-10 sm:w-11 sm:h-11 shadow-sm'
		/>
	);
};
