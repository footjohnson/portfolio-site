
export default {
	mode: 'universal',
	/*
	** Headers of the page
	*/
	head: {
		title: "Jace's Totally Sick, Awesome-Radical Website",
		meta: [
		{ charset: 'utf-8' },
		{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [
		{ rel: 'icon', type: 'image/x-icon', href: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/alien-monster_1f47e.png' },
		{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Elsie+Swash+Caps:900|Amaranth|Vidaloka|Spirax&display=swap' },
		{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/brands.min.css' }
		],
		script: [
		// { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js' },
		// { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.1.1/gsap.min.js' },
		// { src: 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.js' },
		// { src: 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.js' },
			{ src: 'https://kit.fontawesome.com/b6bacb61e0.js', crossorigin: 'anonymous', SameSite="none" }
		]
	},
	/*
	** Customize the progress-bar color
	*/
	loading: { color: '#fff' },
	router: {

	},
	/*
	** Global CSS
	*/
	css: [
		'@/assets/css/meyer-reset.css',
		//   "https://fonts.googleapis.com/css?family=Elsie+Swash+Caps:900|Macondo+Swash+Caps|Metamorphous|Mystery+Quest|Spirax&display=swap"
	],
	/*
	** Plugins to load before mounting the App
	*/
	plugins: [
		// {src: '~/plugins/testt.js', mode: 'client'},
		// {
		// 	src: '~plugins/vue-scrollmagic.js',
		// 	ssr: false
		// }
	],
	/*
	** Nuxt.js dev-modules
	*/
	buildModules: [
	],
	/*
	** Nuxt.js modules
	*/
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
		'@nuxtjs/style-resources',
	],
	/*
	** Axios module configuration
	** See https://axios.nuxtjs.org/options
	*/
	axios: {
	},
	/*
	** Build configuration
	*/
	styleResources: {
		// your settings here
		sass: [],
		scss: ['@/assets/scss/vars.scss'],
		less: [],
		stylus: []
	},
	build: {
		/*
		** You can extend webpack config here
		*/
		extend (config, ctx) {
		},
		// vendor: ['ScrollMagic']
	}
}
