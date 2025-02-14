/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,jsx,ts,tsx}",
		"node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}", // Add Flowbite React components
		"node_modules/flowbite/**/*.js", // Add Flowbite UI components
	],
	theme: {
		extend: {},
	},
	plugins: [require("flowbite/plugin")], // Correct way to add Flowbite plugin
};
