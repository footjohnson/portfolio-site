<template>
	<main>
		<h2 class="section-header websites-header">Websites</h2>
		<h2 class="section-header graphics header">Vector Graphics and Animations</h2>
		<section class="website-cards">
			Websites
		</section>
		<section class="graphics-cards">
			Graphics
		</section>
		<h3 class="websites-link"><nuxt-link to="portfolio/websites">See more websites</nuxt-link></h3>
		<h3 class="graphics-link"><nuxt-link to="portfolio/graphics">See more graphics and animations</nuxt-link></h3>
	</main>
</template>

<script>

export default {
	props: {

	},
	data: function(){
		return {

		}
	},
	methods: {

	},
	computed: {

	},
	created() {
		this.$store.commit('store/updateHeaderText', 'Portfolio')
	},
	mounted() {

	},
	// watch:{
	// 	HeaderText: function(){
	// 		alert("changed")
	// 	}
	// }
}
</script>

<style lang="scss" scoped>
	main{
		display: grid;
		grid-template: 60px 1fr 80px / repeat(2, 1fr);
		.section-header{
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			height: 100%;
		}
		section{
			min-height: 320px;
			&.website-cards{
				border-right: 2px $green1 solid;
			}
		}
	}

	@keyframes o-spin {
		100% {transform: rotate(360deg)}
	}

</style>
