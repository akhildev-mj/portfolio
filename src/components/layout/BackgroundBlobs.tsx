import { memo } from 'react';

export const BackgroundBlobs = memo(() => (
	<div className='fixed inset-0 z-0 overflow-hidden pointer-events-none'>
		<div className='absolute inset-0 grid-pattern opacity-100' />

		<div
			className='absolute top-[8%] left-[5%] 
      w-[65vw] h-[65vw] md:w-[40vw] md:h-[40vw] 
      bg-sky-300/60 md:bg-sky-300/45 dark:bg-sky-400/25 
      rounded-full blur-[40px] md:blur-[120px] 
      mix-blend-multiply dark:mix-blend-screen md:animate-[drift_20s_ease-in-out_infinite_alternate]'
		/>

		<div
			className='absolute bottom-[8%] right-[5%] 
      w-[70vw] h-[70vw] md:w-[50vw] md:h-[50vw] 
      bg-cyan-600/50 md:bg-cyan-600/35 dark:bg-cyan-400/15
      rounded-full blur-[40px] md:blur-[130px] 
      mix-blend-multiply dark:mix-blend-screen md:animate-[drift_25s_ease-in-out_infinite_alternate-reverse]'
		/>
	</div>
));
