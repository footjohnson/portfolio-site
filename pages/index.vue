<template>
	<main>
		<div ref="heyBox" class="hey-box greet-text">
			<span class="hey">Hey</span>
			<span class="exclamation-mark">!</span>
			<span class="underline"></span>
		</div>
		<div ref="welcomeBox" class="welcome-box greet-text">
			<div class="welcome">Welcome</div>
			<div class="to-my">
				<span class="to">to</span>
				<span class="my">my</span>
			</div>
			<div class='website'>Website</div>
		</div>
	</main>
</template>

<script>
import gsap from 'gsap';
let initTl = gsap.timeline();
let scrollTl = gsap.timeline();

export default {
	layout: 'AboutLayout',
	components: {

	},
	methods: {
		// Setups
		async setupWelcome(){
			const welcomeBox = this.$refs['welcomeBox'];
			const welcome = welcomeBox.getElementsByClassName('welcome');
			const toTxt = welcomeBox.getElementsByClassName('to');
			const myTxt = welcomeBox.getElementsByClassName('my');
			const website = welcomeBox.getElementsByClassName('website');

			initTl = gsap.timeline()
			scrollTl = gsap.timeline();

			// scrollTl.set(welcome, {
			// 	y: -500
			// });
		},

		async heyAnimation(){
			const heyBox = this.$refs['heyBox'];
			const hey = heyBox.getElementsByClassName('hey');
			const exMark = heyBox.getElementsByClassName('exclamation-mark');
			const uLine = heyBox.getElementsByClassName('underline');

			const welcomeBox = this.$refs['welcomeBox'];
			const welcome = welcomeBox.getElementsByClassName('welcome');
			const toTxt = welcomeBox.getElementsByClassName('to');
			const myTxt = welcomeBox.getElementsByClassName('my');
			const website = welcomeBox.getElementsByClassName('website');

			// Restarts timeline
			initTl = gsap.timeline()
			// scrollTl = gsap.timeline();

			// scrollTl.set(welcome, {
			// 	y: -500
			// });

			initTl.set(welcome, {
				y: -300
			})
			.set(toTxt, {
				x: -500
			})
			.set(myTxt, {
				x: 500
			})
			.set(website, {
				y: 300
			});

			// Animation Durations in seconds
			const heyDuration = 1.6;
			const disappearDuration = .5;
			const welcomeDuration = 1.6;
			const negRelWelDuration = '-=' + welcomeDuration;

			return (
				// 'Hey!' animates in
				initTl.from(hey, {
					duration: heyDuration,
					x: -250
				}, 0)
				.from(exMark, {
					duration: heyDuration,
					y: -600
				}, 0)
				.from(uLine, {
					duration: heyDuration,
					x: -650
				}, 0)
				.to(heyBox, {
					duration: disappearDuration,
					opacity: 0,
					display: 'none'
				})
				// Welcome animation
				.to(welcome, {
					duration: welcomeDuration,
					y: 0
				}, '-=' + disappearDuration)
				.to(toTxt, {
					duration: welcomeDuration,
					x: welcomeDuration
				}, negRelWelDuration)
				.to(myTxt, {
					duration: welcomeDuration,
					x: 0
				}, negRelWelDuration)
				.to(website, {
					duration: welcomeDuration,
					y: 0
				}, negRelWelDuration)
			);
		},
		async welcomeAnimation(){
			const welcomeBox = this.$refs['welcomeBox'];
			const welcome = welcomeBox.getElementsByClassName('welcome');
			const toTxt = welcomeBox.getElementsByClassName('to');
			const myTxt = welcomeBox.getElementsByClassName('my');
			const website = welcomeBox.getElementsByClassName('website');

			return(
				scrollTl.to(welcome, {
					duration: 1,
					y: 0
				})
			)
		},
	},
	async mounted(){
		// Starts timeline every time this route pops up
		// scrollTl.restart(false);
		try{
			await this.setupWelcome();
			await this.heyAnimation();
			await this.welcomeAnimation();
		}
		catch{}
	},
	beforeRouteLeave(to, from, next){
		scrollTl.s
		next();
	}
}
</script>

<style scoped lang="scss">
	.about-cont{
		main{
			// display: grid;
			position: relative;
			align-content: center;
			height: 100%;
			width: 100%;
			.greet-text{
				font-size: 5em;
				font-family: 'Elsie Swash Caps', cursive;
				color: $black;
			}
			.hey-box{
				display: flex;
				justify-content: center;
				align-items: center;
				background: $white;
				width: 100%;
				height: 100%;
				position: absolute;
				z-index: 2;
				span{
					z-index: 2;
					display: inline-block;
					&.underline{
						height: 100%;
						width: 260px;
						// background: $green1;
						position: absolute;
						left: calc(50% - 130px);
						bottom: calc(50% - 50px);
						border-bottom: 6px $black solid;
						border-radius: 3px;
						// z-index: 0;
					}
				}
			}
			.welcome-box{
				height: 100%;
				width: 100%;
				position: absolute;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				background: $purple1;
				color: $white;
				span{
					z-index: 2;
					display: inline-block;
				}
			}
		}
	}
</style>
