/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"color-base": {
					1: "rgb(var(--color-base-1) / <alpha-value>)",
					2: "rgb(var(--color-base-2) / <alpha-value>)",
					3: "rgb(var(--color-base-3) / <alpha-value>)",
				},
				color: {
					primary: "rgb(var(--color-text-primary) / <alpha-value>)",
					secondary: "rgb(var(--color-text-secondary) / <alpha-value>)",
					primaryColor1: "rgb(var(--primary-1) / <alpha-value>)",
					primaryColor2: "rgb(var(--primary-2) / <alpha-value>)",
				},
				interactive: {
					primary: "rgb(var(--color-text-interactive-primary) / <alpha-value>)",
					"primary-hover":
						"rgb(var(--color-text-interactive-primary-hover) / <alpha-value>)",
				},
				level: {
					1: "var(--color-border-1)",
					2: "var(--color-border-2)",
					3: "var(--color-border-3)",
					4: "var(--color-border-4)",
				},
				label: {
					1: "rgb(var(--color-label) / <alpha-value>)",
				},
			},
			backgroundImage: {
				gradientBorder:
					"linear-gradient(129.59deg, #969696 0%, #343434 98.18%)",
			},
		},
	},
	plugins: [],
};
