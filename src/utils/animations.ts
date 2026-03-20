export const fadeInUp = {
	initial: { opacity: 0, y: 30 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.6 },
};

export const fadeInLeft = {
	initial: { opacity: 0, x: -50 },
	animate: { opacity: 1, x: 0 },
	transition: { duration: 0.8 },
};

export const fadeInRight = {
	initial: { opacity: 0, x: 50 },
	animate: { opacity: 1, x: 0 },
	transition: { duration: 0.8 },
};

export const btnHover = {
	whileHover: { scale: 1.02 },
	whileTap: { scale: 0.98 },
};

export const stagger = { animate: { transition: { staggerChildren: 0.1 } } };
