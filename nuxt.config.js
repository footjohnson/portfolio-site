
export default {
	mode: 'universal',
	/*
	** Headers of the page
	*/
	head: {
		title: "Jace's website",
		meta: [
		{ charset: 'utf-8' },
		{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [
		{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
		{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Elsie+Swash+Caps:900|Amaranth|Vidaloka|Spirax&display=swap' }
		//   <link href="https://fonts.googleapis.com/css?family=Elsie+Swash+Caps:900|Macondo+Swash+Caps|Metamorphous|Mystery+Quest|Spirax&display=swap" rel="stylesheet">
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
		{src: '~/plugins/testt.js', mode: 'client'}
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
		}
	}
}
