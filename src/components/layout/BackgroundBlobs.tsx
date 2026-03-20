import { memo } from 'react';

export const BackgroundBlobs = memo(() => (
	<div className='fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#fafafa]'>
		<div className='absolute inset-0 grid-pattern opacity-100' />
		<div className='absolute top-[5%] left-[5%] w-[40vw] h-[40vw] bg-purple-300/40 rounded-full blur-[100px] mix-blend-multiply animate-[drift_20s_ease-in-out_infinite_alternate]' />
		<div className='absolute bottom-[5%] right-[5%] w-[50vw] h-[50vw] bg-teal-300/30 rounded-full blur-[120px] mix-blend-multiply animate-[drift_25s_ease-in-out_infinite_alternate-reverse]' />
		<div className='absolute top-[30%] right-[20%] w-[35vw] h-[35vw] bg-blue-200/40 rounded-full blur-[110px] mix-blend-multiply animate-[blobFloat_18s_ease-in-out_infinite_alternate]' />
	</div>
));
