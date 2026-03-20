import { useInView } from 'framer-motion';
import React, { useRef } from 'react';

export const useSection = (): [
	React.RefObject<HTMLDivElement | null>,
	boolean,
] => {
	const r = useRef<HTMLDivElement>(null);
	return [r, useInView(r, { once: true, margin: '-100px' })];
};
