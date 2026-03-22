import { GRAMMAR } from '@/constants/grammar';
import { memo, useMemo } from 'react';

interface CodeBlockProps {
	code: string;
	lang: string;
}

const CodeBlockComponent = ({ code, lang }: CodeBlockProps) => {
	const highlightedCode = useMemo(() => {
		const rules = GRAMMAR[lang.toLowerCase()];
		if (!rules) return code;

		const combinedRegex = new RegExp(
			rules.map((r) => `(${r.pattern})`).join('|'),
			'gm'
		);

		const elements: React.ReactNode[] = [];
		let lastIndex = 0;
		let match;

		while ((match = combinedRegex.exec(code)) !== null) {
			if (match.index === combinedRegex.lastIndex) {
				combinedRegex.lastIndex++;
			}

			if (match.index > lastIndex) {
				elements.push(code.substring(lastIndex, match.index));
			}

			for (let i = 0; i < rules.length; i++) {
				if (match[i + 1]) {
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

		if (lastIndex < code.length) {
			elements.push(code.substring(lastIndex));
		}

		return elements;
	}, [code, lang]);

	return (
		<pre className='m-0 bg-transparent overflow-hidden max-w-full scrollbar-hide'>
			<code
				className={`language-${lang} text-gray-800 dark:text-gray-200 tracking-tight leading-relaxed`}>
				{highlightedCode}
			</code>
		</pre>
	);
};

export default memo(CodeBlockComponent);
