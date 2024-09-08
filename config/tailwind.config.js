const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./public/*.html', './app/helpers/**/*.rb', './app/javascript/**/*.js', './app/views/**/*.{erb,haml,html,slim}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans],
			},
		},
		colors: {
			'blue-chill': {
				50: '#f2f9f9',
				100: '#ddeff0',
				200: '#bfe0e2',
				300: '#92cace',
				400: '#5faab1',
				500: '#438e96',
				600: '#3b757f',
				700: '#356169',
				800: '#325158',
				900: '#2d464c',
				950: '#1a2c32',
			},
		},
	},
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('@tailwindcss/container-queries')],
};
