import type { ElementType } from 'react';

export type IconType = ElementType;

export interface CertData {
	id?: number;
	title: string;
	desc: string;
	image: string;
	category: string;
	issuer: string;
	date: string;
	verifyUrl: string;
	skills: string[];
}

export interface ProjectData {
	id?: number;
	title: string;
	desc: string;
	image: string;
	category: string;
	tech: string[];
	icon: IconType;
	github: string;
	live: string;
}

export interface StatData {
	label: string;
	value: string;
	icon: IconType;
}
export interface ContactData {
	icon: IconType;
	label: string;
	value: string;
	href: string;
}
export interface SocialData {
	icon: IconType;
	href: string;
	label: string;
}
export interface NavData {
	name: string;
	href: string;
	icon: IconType;
	desc: string;
}
export interface CodeTemplate {
	language: string;
	code: string;
}

export interface CardProps<T> {
	item: T;
	index: number;
	isInView: boolean;
}
