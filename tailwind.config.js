/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./app.vue',
		'./error.vue'
	],
	theme: {
		extend: {
			colors: {
				Black: 'hsl(var(--custom-color-black))',
				LightGray: 'hsl(var(--custom-color-light-gray))',
				Green: 'hsl(var(--custom-color-green))',
				GreenLight: 'hsl(var(--custom-color-green-light))'
			},
			fontFamily: {
				Poppins: ['Poppins', 'serif']
			}
		},
		container: { center: true, padding: '1.25rem' }
	},
	plugins: []
};
