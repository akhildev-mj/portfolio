import CodeBlock from '@/components/common/CodeBlock';
import { GlassBtn } from '@/components/ui/GlassBtn';
import { Download, Sparkles, Zap } from '@/components/ui/Icons';
import { CODE_TEMPLATES, ROLES, SOCIALS } from '@/constants/ui';
import { useEffect, useState } from 'react';

export const Hero: React.FC = () => {
	const [roleIdx, setRole] = useState<number>(0);
	const [tplIdx, setTpl] = useState<number>(0);
	const [gen, setGen] = useState<boolean>(false);

	useEffect(() => {
		const id = setInterval(() => setRole((p) => (p + 1) % ROLES.length), 3000);
		return () => clearInterval(id);
	}, []);

	const handleResumeClick = () => {
		window.open(
			'/resume/Akhildev_MJ_Resume.pdf',
			'_blank',
			'noopener,noreferrer'
		);
	};

	return (
		<section
			id='home'
			className='min-h-screen flex items-center px-4 sm:px-6 lg:px-20 pt-28 lg:pt-36 pb-16 max-w-7xl mx-auto w-full'>
			<div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full'>
				<div className='text-center lg:text-left z-10 w-full'>
					<div className='inline-flex items-center space-x-2 glass-panel rounded-full px-4 py-1.5 mb-6 sm:mb-8'>
						<div className='w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]' />
						<span className='text-[10px] sm:text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider'>
							Open to Projects
						</span>
					</div>

					<h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight leading-tight w-full'>
						<span className='block text-gray-500 dark:text-gray-400 text-xl sm:text-2xl mb-1 sm:mb-2 font-normal tracking-normal'>
							Hi, I'm
						</span>
						<span className='block text-glass-gradient pb-1 sm:pb-2'>
							Akhildev MJ
						</span>
					</h1>

					<div className='h-8 sm:h-10 flex items-center justify-center lg:justify-start overflow-hidden w-full'>
						<h2
							key={roleIdx}
							className='text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light tracking-wide truncate transition-opacity duration-300'>
							{ROLES[roleIdx]}
						</h2>
					</div>

					<p className='text-sm sm:text-base md:text-lg text-gray-500 dark:text-gray-400 my-6 sm:my-8 leading-relaxed max-w-lg mx-auto lg:mx-0 font-light'>
						Transforming data into intelligent solutions with precision
						engineering and immersive interfaces.
					</p>

					<div className='flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-5 items-center'>
						<div className='hover:scale-[1.02] active:scale-[0.98] transition-transform'>
							<GlassBtn
								variant='animated-light'
								icon={Download}
								className='text-xs sm:text-sm'
								onClick={handleResumeClick}>
								Resume
							</GlassBtn>
						</div>
						<div className='flex gap-3'>
							{SOCIALS.map((s) => (
								<div
									key={s.label}
									className='hover:scale-[1.05] active:scale-[0.95] transition-transform'>
									<GlassBtn
										variant='icon'
										icon={s.icon}
										aria-label={`Visit my ${s.label}`}
										onClick={() => window.open(s.href)}
									/>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className='w-full max-w-lg mx-auto glass-panel rounded-[2.5rem] p-2 relative md:animate-[float_4s_ease-in-out_infinite] liquid-border-light min-w-0'>
					<div className='glass-inset rounded-[2rem] p-5 sm:p-6 backdrop-blur-xl border border-white/20 dark:border-white/5 w-full'>
						<div className='flex justify-between items-center mb-5 sm:mb-6 w-full'>
							<div className='flex gap-2 items-center'>
								<div className='w-3 h-3 rounded-full bg-red-400 shadow-[0_0_8px_#f87171] shrink-0' />
								<div className='w-3 h-3 rounded-full bg-yellow-400 shadow-[0_0_8px_#facc15] shrink-0' />
								<div className='w-3 h-3 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80] shrink-0' />
								<span className='text-gray-500 dark:text-gray-400 text-[10px] sm:text-xs ml-2 uppercase tracking-widest truncate'>
									sys.{CODE_TEMPLATES[tplIdx].language.toLowerCase()}
								</span>
							</div>
							<button
								onClick={() => {
									setGen(true);
									setTimeout(() => {
										setTpl((p) => (p + 1) % CODE_TEMPLATES.length);
										setGen(false);
									}, 1000);
								}}
								aria-label='Generate code snippet'
								className='glass-panel px-3 py-1.5 rounded-full hover:bg-white/80 dark:hover:bg-white/10 transition-colors cursor-pointer shrink-0'>
								{gen ? (
									<Zap className='w-3.5 h-3.5 text-gray-700 dark:text-gray-300 animate-spin' />
								) : (
									<Sparkles className='w-3.5 h-3.5 text-gray-700 dark:text-gray-300' />
								)}
							</button>
						</div>
						<div className='min-h-[140px] sm:min-h-[160px] text-xs sm:text-sm relative overflow-hidden w-full'>
							<div
								key={tplIdx}
								className='whitespace-pre-line leading-loose w-full'>
								<CodeBlock
									key={tplIdx}
									code={CODE_TEMPLATES[tplIdx].code}
									lang={CODE_TEMPLATES[tplIdx].language.toLocaleLowerCase()}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
