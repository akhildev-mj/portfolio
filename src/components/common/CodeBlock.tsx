import { memo } from 'react';

interface CodeBlockProps {
	code: string;
	lang: string;
}

const CodeBlockComponent = ({ code, lang }: CodeBlockProps) => {
	return (
		<pre className='m-0 bg-transparent overflow-x-auto max-w-full scrollbar-hide'>
			<code
				className={`language-${lang} font-mono text-gray-800 tracking-tight leading-relaxed`}>
				{code}
			</code>
		</pre>
	);
};

export default memo(CodeBlockComponent);
