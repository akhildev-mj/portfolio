import { memo } from 'react';

export const BackgroundBlobs = memo(() => (
	// Fix: Removed background colors so mix-blend-mode can blend with the App.tsx background properly
	<div className='fixed inset-0 z-0 overflow-hidden pointer-events-none'>
		<div className='absolute inset-0 grid-pattern opacity-100' />

		{/* Blob 1 */}
		<div
			className='absolute top-[8%] left-[5%] 
      w-[65vw] h-[65vw] md:w-[40vw] md:h-[40vw] 
      bg-fuchsia-300/60 md:bg-fuchsia-100/45 dark:bg-fuchsia-600/20 
      rounded-full blur-[100px] md:blur-[120px] 
      mix-blend-multiply dark:mix-blend-screen animate-[drift_20s_ease-in-out_infinite_alternate]'
		/>

		{/* Blob 2 */}
		<div
			className='absolute bottom-[8%] right-[5%] 
      w-[70vw] h-[70vw] md:w-[50vw] md:h-[50vw] 
      bg-blue-300/50 md:bg-blue-400/35 dark:bg-blue-600/20
      rounded-full blur-[90px] md:blur-[130px] 
      mix-blend-multiply dark:mix-blend-screen animate-[drift_25s_ease-in-out_infinite_alternate-reverse]'
		/>

		{/* Blob 3 */}
		<div
			className='absolute top-[30%] right-[10%] 
      w-[60vw] h-[60vw] md:w-[35vw] md:h-[35vw] 
      bg-violet-300/55 md:bg-violet-400/45 dark:bg-violet-600/20
      rounded-full blur-[95px] md:blur-[120px] 
      mix-blend-multiply dark:mix-blend-screen animate-[blobFloat_18s_ease-in-out_infinite_alternate]'
		/>

		{/* Blob 4 */}
		<div
			className='absolute bottom-[20%] left-[15%] 
      w-[55vw] h-[55vw] md:w-[30vw] md:h-[30vw] 
      bg-pink-300/50 md:bg-pink-400/40 dark:bg-pink-600/20
      rounded-full blur-[70px] md:blur-[110px] 
      mix-blend-multiply dark:mix-blend-screen animate-[blobFloat_22s_ease-in-out_infinite_alternate-reverse]'
		/>
	</div>
));
