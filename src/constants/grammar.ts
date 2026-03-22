export interface SyntaxRule {
	pattern: string;
	color: string;
}

export const GRAMMAR: Record<string, SyntaxRule[]> = {
	javascript: [
		{
			pattern: '\\/\\/.*|\\/\\*[\\s\\S]*?\\*\\/',
			color: 'text-gray-400 italic',
		},
		{
			pattern: '["\'`][\\s\\S]*?["\'`]',
			color: 'text-green-600 dark:text-green-400',
		},
		{
			pattern:
				'\\b(?:const|let|var|function|return|if|else|for|while|class|import|export|from|await|async|try|catch)\\b',
			color: 'text-purple-600 dark:text-purple-400 font-semibold',
		},
		{
			pattern: '\\b(?:true|false|null|undefined)\\b',
			color: 'text-orange-500',
		},
		{
			pattern: '\\b[a-zA-Z_$][0-9a-zA-Z_$]*(?=\\s*\\()',
			color: 'text-blue-600 dark:text-blue-400',
		},
		{ pattern: '\\b\\d+(?:\\.\\d+)?\\b', color: 'text-orange-500' },
	],
	python: [
		{ pattern: '#.*', color: 'text-gray-400 italic' },
		{
			pattern: '["\'][\\s\\S]*?["\']',
			color: 'text-green-600 dark:text-green-400',
		},
		{
			pattern:
				'\\b(?:def|return|if|elif|else|for|while|class|import|from|in|and|or|not|with|as|try|except|pass)\\b',
			color: 'text-purple-600 dark:text-purple-400 font-semibold',
		},
		{ pattern: '\\b(?:True|False|None)\\b', color: 'text-orange-500' },
		{
			pattern: '\\b[a-zA-Z_][0-9a-zA-Z_]*(?=\\s*\\()',
			color: 'text-blue-600 dark:text-blue-400',
		},
		{ pattern: '\\b\\d+(?:\\.\\d+)?\\b', color: 'text-orange-500' },
	],
	markdown: [
		{
			pattern: '^#+\\s+.*',
			color: 'text-blue-600 dark:text-blue-400 font-bold',
		},
		{
			pattern: '\\*\\*.*?\\*\\*|__.*?__',
			color: 'font-bold text-gray-900 dark:text-white',
		},
		{
			pattern: '\\*.*?\\*|_.*?_',
			color: 'italic text-gray-700 dark:text-gray-300',
		},
		{
			pattern: '`[^`]+`',
			color:
				'text-green-700 dark:text-green-400 bg-green-50/50 dark:bg-green-900/30 px-1 rounded',
		},
		{
			pattern: '^\\s*(?:[-*+]|\\d+\\.)\\s+',
			color: 'text-purple-600 dark:text-purple-400 font-bold',
		},
	],
};
