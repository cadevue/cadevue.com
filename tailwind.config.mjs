/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontSize: {
				'xxs': '.5rem',
			},
			colors: {
				'main-red'	: '#BA3A2C',
				'light-red'	: '#FF432F',
				'main-black': '#202020',
				'main-light': '#F6F4F1',
				'main-gray': '#D9D9D9',
			},
			rotate: {
				'135': '135deg',
			},
			minHeight: {
				'1.25s': '125vh',
			}
		},
	},
	plugins: [],
}
