export interface SyntaxRule {
	pattern: string;
	color: string;
}

/**
 * FUTURE-PROOF GRAMMAR DICTIONARY
 * To add a new language, simply add an array of rules here.
 * IMPORTANT: Order matters! Always put Comments and Strings first so
 * keywords inside them are ignored. Use non-capturing groups `(?:...)` inside patterns.
 */
export const GRAMMAR: Record<string, SyntaxRule[]> = {
	javascript: [
		{
			pattern: '\\/\\/.*|\\/\\*[\\s\\S]*?\\*\\/',
			color: 'text-gray-400 italic',
		}, // Comments
		{ pattern: '["\'`][\\s\\S]*?["\'`]', color: 'text-green-600' }, // Strings
		{
			pattern:
				'\\b(?:const|let|var|function|return|if|else|for|while|class|import|export|from|await|async|try|catch)\\b',
			color: 'text-purple-600 font-semibold',
		}, // Keywords
		{
			pattern: '\\b(?:true|false|null|undefined)\\b',
			color: 'text-orange-500',
		}, // Booleans & Null
		{
			pattern: '\\b[a-zA-Z_$][0-9a-zA-Z_$]*(?=\\s*\\()',
			color: 'text-blue-600',
		}, // Functions
		{ pattern: '\\b\\d+(?:\\.\\d+)?\\b', color: 'text-orange-500' }, // Numbers
	],
	python: [
		{ pattern: '#.*', color: 'text-gray-400 italic' }, // Comments
		{ pattern: '["\'][\\s\\S]*?["\']', color: 'text-green-600' }, // Strings
		{
			pattern:
				'\\b(?:def|return|if|elif|else|for|while|class|import|from|in|and|or|not|with|as|try|except|pass)\\b',
			color: 'text-purple-600 font-semibold',
		}, // Keywords
		{ pattern: '\\b(?:True|False|None)\\b', color: 'text-orange-500' }, // Booleans & None
		{ pattern: '\\b[a-zA-Z_][0-9a-zA-Z_]*(?=\\s*\\()', color: 'text-blue-600' }, // Functions
		{ pattern: '\\b\\d+(?:\\.\\d+)?\\b', color: 'text-orange-500' }, // Numbers
	],
	markdown: [
		{ pattern: '^#+\\s+.*', color: 'text-blue-600 font-bold' }, // Headings
		{ pattern: '\\*\\*.*?\\*\\*|__.*?__', color: 'font-bold text-gray-900' }, // Bold
		{ pattern: '\\*.*?\\*|_.*?_', color: 'italic text-gray-700' }, // Italic
		{ pattern: '`[^`]+`', color: 'text-green-700 bg-green-50/50 px-1 rounded' }, // Inline code
		{
			pattern: '^\\s*(?:[-*+]|\\d+\\.)\\s+',
			color: 'text-purple-600 font-bold',
		}, // Lists
	],
};
