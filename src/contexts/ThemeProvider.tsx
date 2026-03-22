import { useEffect, useState } from 'react';
import { ThemeContext, type Theme } from './ThemeContext';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [theme, setTheme] = useState<Theme>(() => {
		const storedTheme = localStorage.getItem('theme') as Theme;
		if (storedTheme === 'light' || storedTheme === 'dark') return storedTheme;

		return window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light';
	});

	useEffect(() => {
		const root = window.document.documentElement;
		root.classList.remove('light', 'dark');
		root.classList.add(theme);
		localStorage.setItem('theme', theme);

		let metaThemeColor = document.querySelector('meta[name="theme-color"]');
		if (!metaThemeColor) {
			metaThemeColor = document.createElement('meta');
			metaThemeColor.setAttribute('name', 'theme-color');
			document.head.appendChild(metaThemeColor);
		}
		metaThemeColor.setAttribute(
			'content',
			theme === 'dark' ? '#0a0a0a' : '#fafafa'
		);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
