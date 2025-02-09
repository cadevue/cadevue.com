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
				'light-red'	: '#FA4430',
				'main-black': '#1E1E1E',
				'main-darker': '#1A1A1A',
				'main-light': '#F6F4F1',
				'main-gray': '#D9D9D9',
			},
			rotate: {
				'135': '135deg',
			},
			minHeight: {
				'1.25s': '125vh',
			},
			maxWidth: {
				'8xl': '90rem',
				'5.5xl': '68rem',
			},
			screens: {
				'3xl': '1680px',
			}
		},
	},
	plugins: [],
}
