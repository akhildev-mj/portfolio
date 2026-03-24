import { memo } from 'react';

export const BackgroundBlobs = memo(() => (
	<div className='fixed inset-0 z-0 overflow-hidden pointer-events-none'>
		<div className='absolute inset-0 grid-pattern opacity-100' />

		<div
			className='absolute top-[8%] left-[5%] 
      w-[65vw] h-[65vw] md:w-[40vw] md:h-[40vw] 
      bg-zinc-300/60 md:bg-zinc-300/45 dark:bg-zinc-300/20 
      rounded-full blur-[40px] md:blur-[120px] 
      mix-blend-multiply dark:mix-blend-screen md:animate-[drift_20s_ease-in-out_infinite_alternate]'
		/>

		<div
			className='absolute bottom-[8%] right-[5%] 
      w-[70vw] h-[70vw] md:w-[50vw] md:h-[50vw] 
      bg-zinc-600/50 md:bg-zinc-600/35 dark:bg-zinc-600/20
      rounded-full blur-[40px] md:blur-[130px] 
      mix-blend-multiply dark:mix-blend-screen md:animate-[drift_25s_ease-in-out_infinite_alternate-reverse]'
		/>
	</div>
));
