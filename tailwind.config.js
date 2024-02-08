/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./**/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				offwhite: '#FFFBFC',
				offblack: '#121212',
				grey: '#1D1D1D',
				outline: '#3D3D3D',
				green: '#00A55E',
				purple: '#5946B2',
				red: '#CC2500',
				yellow: '#F9A826'
			}
		},
		screens: {
			sd: '350px',

			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '740px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px'
			// => @media (min-width: 1536px) { ... }
		}
	},
	plugins: [require('tailwind-scrollbar-hide')]
};
