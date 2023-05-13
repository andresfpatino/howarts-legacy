/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
                'navbar' : "url('/public/assets/nav-bar-bg-left.webp')",				
				'gradientNavbar' : ' linear-gradient( 90deg, rgba(23, 47, 73, 0.5), rgba(23, 47, 73, 0.5) 58%, rgba(23, 47, 73, 0) )',
            },
		},
	},
	plugins: [],
}
