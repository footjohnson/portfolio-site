<template>
	<nav>
		<nuxt-link class="name-cont" to="/">
			<h2 class="first-name">Jace</h2>
			<h2 class="last-name">Medlin</h2>
			<h3 class="professional-title">
				<span class="outer" aria-hidden="true">
					<span class="inner">Software Architect</span>
				</span>
			</h3>
		</nuxt-link>
		<ul>
			<li>
				<nuxt-link to="/">About</nuxt-link>
			</li>
			<!-- <li class="nav-divider">*</li> -->
			<li>
				<nuxt-link to="/portfolio">Portfolio</nuxt-link>
			</li>
			<!-- <li class="nav-divider">*</li> -->
			<li>
				<nuxt-link to="/contact-info">Contact Info</nuxt-link>
			</li>
		</ul>
		<small class="copyright">© Jace Medlin 2020</small>
	</nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
	nav{
		z-index: 5;
		display: grid;
		grid-template: auto 1fr 40px / 280px;
		align-items: center;
		justify-items: center;
		min-height: 100vh;
		height: 100%;
		background: $black;
		color: $white;
		box-shadow: 1px 0px 10px $black;
		border-right: $green1 dashed .75px;
		&, a{
			color: $green1;
			text-decoration: none;
		}
		h2, h3{
			font-family: 'Elsie Swash Caps', cursive;
		}
		.name-cont{
			height: auto;
			margin: 50px 0;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			.first-name, .last-name{
				font-size: 3.2em;
			}
			.professional-title{
				color: $white;
				font-size: 1.4em;
			}
		}
		ul{
			font-size: 1.2em;
			display: flex;
			flex-direction: column;
			height: 100%;
			width: 100%;
			text-align: center;
			li{
				margin: 30px 0;
				a{
					color: white;
				}
			}
		}
		.copyright{
			display: flex;
			align-items: center;
			justify-content: center;
			align-self: flex-end;
			width: 100%;
			height: 100%;
			font-size: .8em;
		}
	}

	@media screen and (max-width: $med-break) {
		nav{
			grid-template: 1fr / 1fr;
			height: $mobile-nav-height;
			min-height: $mobile-nav-height;
			border-right: 0;
			border-top: $green1 dashed .75px;
			ul{
				width: 100%;
				flex-direction: row;
				justify-content: space-around;
				align-items: center;
				li{
					width: 100%;
					&:not(:last-child){
						border-right: 1px white solid;
					}
					&:not(.nav-divider){
						margin: 0;
					}
					a{
						width: 100%;
					}
				}
			}
			.name-cont, .copyright, .nav-divider{
				display: none;
			}
		}
	}
</style>
