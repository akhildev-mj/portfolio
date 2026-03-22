import { GRAMMAR } from '@/constants/grammar';
import { memo, type ReactNode, useMemo } from 'react';

interface CodeBlockProps {
	code: string;
	lang: string;
}

const CodeBlockComponent = ({ code, lang }: CodeBlockProps) => {
	const highlightedCode = useMemo(() => {
		// 1. Get rules for the language (fallback to plain text if not found)
		const rules = GRAMMAR[lang.toLowerCase()];
		if (!rules) return code;

		// 2. Combine all rules into one regex with numbered capturing groups
		const combinedRegex = new RegExp(
			rules.map((r) => `(${r.pattern})`).join('|'),
			'gm'
		);

		const elements: ReactNode[] = [];
		let lastIndex = 0;
		let match;

		// 3. Scan the string in a single O(n) pass
		while ((match = combinedRegex.exec(code)) !== null) {
			// Safety catch for zero-length matches
			if (match.index === combinedRegex.lastIndex) {
				combinedRegex.lastIndex++;
			}

			// A. Push un-highlighted text before the current match
			if (match.index > lastIndex) {
				elements.push(code.substring(lastIndex, match.index));
			}

			// B. Find which specific rule was matched
			for (let i = 0; i < rules.length; i++) {
				if (match[i + 1]) {
					// match[1] corresponds to rules[0], match[2] to rules[1], etc.
					elements.push(
						<span key={`${match.index}-${i}`} className={rules[i].color}>
							{match[i + 1]}
						</span>
					);
					break;
				}
			}

			lastIndex = combinedRegex.lastIndex;
		}

		// 4. Push any remaining plain text at the end of the string
		if (lastIndex < code.length) {
			elements.push(code.substring(lastIndex));
		}

		return elements;
	}, [code, lang]);

	return (
		<pre className='m-0 bg-transparent overflow-hidden max-w-full scrollbar-hide'>
			<code
				className={`language-${lang} text-gray-800 tracking-tight leading-relaxed`}>
				{highlightedCode}
			</code>
		</pre>
	);
};

export default memo(CodeBlockComponent);
