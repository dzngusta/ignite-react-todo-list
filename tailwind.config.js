/** @type {import('tailwindcss').Config} */
export const content = ['./index.html', './src/**/*.{js,ts,jsx,tsx}'];
export const theme = {
	extend: {
		fontFamily: {
			inter: ['Inter Regular', 'sans-serif'],
		},
		colors: {
			['purple']: '#8284FA',
			['purple-dark']: '#5E60CE',
			['blue']: '#4EA8DE',
			['blue-dark']: '#1E6F9F',
			['base']: {
				['gray-700']: '#0D0D0D',
				['gray-600']: '#1A1A1A',
				['gray-500']: '#262626',
				['gray-400']: '#333333',
				['gray-300']: '#808080',
				['gray-200']: '#D9D9D9',
				['gray-100']: '#F2F2F2',
				['danger']: '#E25858',
			},
		},
	},
};
export const plugins = [];
export const darkMode = 'class';
