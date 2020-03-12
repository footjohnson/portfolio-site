<template>
	<main>
		<h1 class="section-header websites-header">Websites and Web Applications</h1>
		<!-- <h2 class="section-header graphics header">Vector Graphics and Animations</h2> -->
		<section class="website-cards">
			<div class="card">
				<div class="img-cont">
					<a href="https://memento.jacemedlin.xyz" target="_blank" >
						<img src="/portfolio-examples/memento.png" alt="Demo Image of memento">
					</a>
				</div>
				<div class="card-description">
					<h5><a href="https://memento.jacemedlin.xyz" target="_blank">memento</a></h5>
					<p>
						File storage and management web app built with Vue, Flask, and GCP. <br>
						Contact me for demo credentials.
					</p>
				</div>
			</div>
		</section>
		<!-- <section class="graphics-cards">
			Graphics
		</section> -->
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
		$header-ht: 60px;
		$bottom-ht: 80px;
		$body-ht: 100vh - calc(#{$header-ht} + #{$bottom-ht});

		grid-template: #{$header-ht} auto #{$bottom-ht} / auto;
		.section-header{
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			height: 100%;
		}
		section{
			&.website-cards{
				display: grid;
				justify-content: center;
				.card{
					position: relative;
					display: flex;
					flex-direction: column;
					justify-content: flex-end;
					height: 220px;
					width: 200px;
					background: $black;
					border: 1px $green1 dashed;
					border-radius: 4px;
					.img-cont{
						position: absolute;
						top: 0;
						width: 100%;
						img{
							height: 100%;
							width: 100%;
						}
					}
					.card-description{
						height: 44px;
						padding: 16px 0;
						z-index: 2;
						background: $black;
						overflow: hidden;
						transition: .5s ease-in-out;
						&:hover{
							height: 100%;
						}
						h5{
							font-size: 1em;
							margin-top: -3px;
							margin-bottom: 12px;
						}
						p{
							margin: 0 10px;
							overflow: hidden;
							text-overflow: ellipsis;
						}
					}
				}
			}
		}
	}

	@keyframes o-spin {
		100% {transform: rotate(360deg)}
	}

</style>
