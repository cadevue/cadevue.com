/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'main-red'	: '#BA3A2C',
				'main-black': '#222222',
				'main-light': '#F6F4F1',
			},
		},
	},
	plugins: [],
}
