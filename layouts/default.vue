<template>
	<div class="container">
		<Navigation />
		<div class="main-cont">
			<Header v-bind:headerText="headerText" />
			<nuxt />
		</div>
	</div>
</template>

<script>
import Navigation from '~/components/Navigation.vue';
import Header from '~/components/Header.vue'

export default {
	components: {
		Navigation, Header
	},
	props: {
		'headerText': {
			default: 'header'
		}
	},
	data: function(){
		return {
			// 'headerText': 'Portfolio'
		}
	},
}
</script>

<style lang="scss">
@import "~/assets/scss/vars.scss";

html {
	overflow-x: hidden;
	color: white;
	font-family: 'Vidaloka', 'Times New Roman', sans-serif;
	// word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
}

h1, h2, h3, label{
	font-family: 'Spirax', cursive;
}

*,
*:before,
*:after {
	box-sizing: border-box;
	margin: 0;
}

.container{
	overflow-x: hidden;
	color: white;
	font-family: 'Vidaloka', 'Times New Roman', sans-serif;
	// word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
	// min-height: 100vh;
	// height: 100vh;
	width: 100vw;
	display: grid;
	grid-template: auto / min-content auto;
	overflow-x: hidden;
	.main-cont{
		display: grid;
		grid-template: $header-height auto / 1fr;
		background-color: #3f0058;
		background-image: url("data:image/svg+xml,%3Csvg width='100' height='50' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e8005c' fill-opacity='0.32'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
	}
	& main{
		justify-content: center;
		align-items: center;
		width: 100%;
		margin: 0 auto;
		// min-height: 100vh;
		height: 100%;
		text-align: center;
	}
}

a:not(.name-cont){
	color: white;
	text-decoration: none;
	&.nuxt-link-exact-active{
		color: $fuchsia1;
	}
	font-size: 1.2em;
	position: relative;
	display: inline-block;
	transition: color .2s ease;

	&:hover {
		color: $green1;

		&::after,
		&::before {
			width: 100%;
			left: 0;
		}

	}

	&::after,
	&::before {
		content: '';
		position: absolute;
		top: calc(100% + 5px);
		width: 0;
		right: 0;
		height: 2px;
	}

	&::before {
		transition: width .4s ease-out .1s;
		background: $green1;
	}

	&::after {
		transition: width .2s ease-out;
		background: $fuchsia1;
	}
}

@media screen and (max-width: $med-break){
	.container{
		grid-template: auto min-content / 1fr;
		height: 100vh;
		.main-cont, .about-cont{
			grid-row: 1 / 2;
			min-height: 100%;
			overflow-y: scroll;
		}
	}
}
</style>
