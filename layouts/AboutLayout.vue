<template>
	<div class="container">
		<Navigation />
		<div class="about-cont">
			<nuxt />
		</div>
	</div>
</template>

<script>
import Navigation from '~/components/Navigation.vue';

export default {
	props: {
		'headerText': {
			default: 'asdf'
		}
	},
	data: function(){
		return {
			// 'headerText': 'Portfolio'
		}
	},
	components: {
		Navigation
	},
}
</script>

<style lang="scss" scoped>
.container{
	// height: 100vh;
	// overflow: hidden;
	.about-cont{
		overflow-x: hidden;
		display: grid;
		grid-template: 1fr / 1fr;
		// background-color: #3f0058;
		// background-image: url("data:image/svg+xml,%3Csvg width='100' height='50' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e8005c' fill-opacity='0.32'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
		background-color: $purple1;
	}
}
</style>
