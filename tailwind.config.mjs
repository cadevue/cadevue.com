/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'main-red'	: '#BA3A2C',
				'main-black': '#222222',
				'main-light': '#F6F4F1',
				'other-gray': '#D9D9D9',
			},
			rotate: {
				'135': '135deg',
			},
			fontSize: {
				'xxs': '0.5rem',
			}
		},
	},
	plugins: [],
}
