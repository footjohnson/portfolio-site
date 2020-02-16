<template>
    <main>
        <section class="welcome-slide">
            <div ref="heyBox" class="hey-box greet-text">
                <span class="hey">Yo, dawg</span>
                <span class="exclamation-mark">!</span>
                <span class="underline"></span>
            </div>
            <div ref="welcomeBox" class="welcome-box greet-text">
                <div class="welcome">Welcome</div>
                <div class="to-my">
                    <span class="to">to</span>
                    <span class="my">my</span>
                </div>
                <div class="website">Website</div>
            </div>
            <div ref="scrollDownBox" class="scroll-down-box">
                <span class="scroll-down-text">Scroll Down</span>
                <div class="scroll-down-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.33 28">
                        <defs>
                            <style>
                                path {
                                    fill: #fff;
                                }
                            </style>
                        </defs>
                        <title>scroll-down-arrow</title>
                        <g>
                            <path
                                d="M12.55,27.5a.61.61,0,0,1-.47-.21L.6,13.2a.34.34,0,0,1-.07-.39.61.61,0,0,1,.53-.31.66.66,0,0,1,.3.07l0,0,5.43,1.29V.5h11V13.93l5.08-1.26.05,0a.71.71,0,0,1,.31-.08.61.61,0,0,1,.53.31.34.34,0,0,1-.06.38L13,27.28A.58.58,0,0,1,12.55,27.5Z"
                            />
                            <path
                                d="M17.33,1V14.57l1.25-.3,4.4-1.1.11,0,.1-.06.07,0L12.64,27a.3.3,0,0,1-.09,0,.21.21,0,0,1-.08,0L1.08,13l.06,0,.1.05.1,0L6.1,14.22l1.23.29V1h10m1-1h-12V13.25L1.57,12.12A1.19,1.19,0,0,0,1.06,12a1,1,0,0,0-.85,1.51l11.48,14.1a1.12,1.12,0,0,0,.86.39,1.1,1.1,0,0,0,.88-.41l10.71-14a1,1,0,0,0-.87-1.49,1.18,1.18,0,0,0-.53.13l-4.41,1.09V0Z"
                            />
                        </g>
                    </svg>
                </div>
            </div>
        </section>
		<section id="about-slide" class="about-slide">
			<SkillPlanets />
		</section>
    </main>
</template>

<script>
import SkillPlanets from '~/components/SkillPlanets.vue';

import gsap from 'gsap';
import { ScrollMagic, ScrollScene } from 'scrollscene';

let initTl = gsap.timeline();

const AboutBGColor = '#111111';

export default {
	layout: 'AboutLayout',
	components: {
		SkillPlanets
	},
	methods: {
		async heyAnimation(){
			/* Animation Elements */

			// 'Hey!' elements
			const heyBox = this.$refs['heyBox'];
			const hey = heyBox.getElementsByClassName('hey');
			const exMark = heyBox.getElementsByClassName('exclamation-mark');
			const uLine = heyBox.getElementsByClassName('underline');

			// 'Welcome' elements
			const welcomeBox = this.$refs['welcomeBox'];
			const welcome = welcomeBox.getElementsByClassName('welcome');
			const toTxt = welcomeBox.getElementsByClassName('to');
			const myTxt = welcomeBox.getElementsByClassName('my');
			const website = welcomeBox.getElementsByClassName('website');

			// 'Scroll Down' elements
			const scrollDownBox = this.$refs['scrollDownBox'];
			const scrollDownArrow = scrollDownBox.getElementsByClassName('scroll-down-arrow');

			// Restarts timeline
			initTl = gsap.timeline()

			// Sets up 'Welcome' animation
			initTl.set(welcome, {
				y: -150
			})
			.set(toTxt, {
				x: -50
			})
			.set(myTxt, {
				x: 50
			})
			.set(website, {
				y: 150
			});

			// Makes "Scroll Down Arrow" start jumping
			gsap.to(scrollDownArrow, {
				duration: .8,
				y: 25,
				yoyo: true,
				repeat: -1,
				ease: "power1.inOut"
			});

			// Animation Durations in seconds
			const heyDuration = 1.6;
			const disappearDuration = .5;
			const welcomeDuration = 1.8;
			const negRelWelDuration = '-=' + welcomeDuration;

			return (
				// 'Hey!' animation
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
				.to([welcome, toTxt, myTxt, website], {
					duration: welcomeDuration,
					y: 0,
					x: 0,
					ease: "elastic.out(1, 0.5)"
				}, '-=' + disappearDuration)

				// 'Scroll down' fades in
				.to(scrollDownBox, {
					duration: 1.6,
					opacity: 1,
				}, '-=' + 1)
			);
		},

        async aboutAnimation(){
			const atl = gsap.timeline({paused: true});
			atl.to('main', {
				background: AboutBGColor,
				// duration: 2
			})

			const scrollScene = new ScrollScene({
				triggerElement: "#about-slide",
				duration: '100%', // the scene should last for a scroll distance of 100px
				offset: 50, // start this scene after scrolling for 50px
				gsap: {
					timeline: atl
				}
			})
		},

		async contactAnimation(){
			const ctl = gsap.timeline({paused: true});
			ctl.to('main', {
				backgroundColor: "#3f0058"
				// duration: 2
			}).to('main', {
				css:{
					backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='50' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e8005c' fill-opacity='0.32'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
				}

			})

			const scrollScene = new ScrollScene({
				triggerElement: "#contact-slide",
				duration: '100%', // the scene should last for a scroll distance of 100px
				offset: 50, // start this scene after scrolling for 50px
				gsap: {
					timeline: ctl
				}
			})
		}
	},
	async mounted(){
		// Starts timeline every time this route pops up
		try{
			await this.aboutAnimation();
			await this.heyAnimation();
		}
		catch{}
	},
	beforeRouteLeave(to, from, next){
		next();
	}
}
</script>

<style scoped lang="scss">
.about-cont {
    main {
		scroll-snap-type: y mandatory;
		overflow-y: scroll;
		display: grid;
		grid-template: repeat(2, auto) / 1fr;
        min-height: 100%;
		// height: 1000px;
		width: 100%;
		z-index: 2;
		section{
			position: relative;
			height: 100vh;
			width: 100%;
			scroll-snap-align: start;
			z-index: 3;
			&.welcome-slide {
				min-height: 496px;
				.greet-text {
					font-size: 5em;
					font-family: "Elsie Swash Caps", cursive;
					color: $black;
				}
				.hey-box {
					display: flex;
					justify-content: center;
					align-items: center;
					background: $white;
					width: 100%;
					height: 100%;
					position: absolute;
					z-index: 10;
					span {
						z-index: 9;
						display: inline-block;
						&.underline {
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
				.welcome-box {
					height: 100%;
					width: 100%;
					position: absolute;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					// background: $black;
					color: $white;
					span {
						z-index: 2;
						display: inline-block;
					}
				}
				.scroll-down-box {
					position: absolute;
					display: flex;
					flex-direction: column;
					justify-content: flex-start;
					align-items: center;
					bottom: 0;
					width: 100%;
					height: 110px;
					margin: 20px 0;
					opacity: 0;
					.scroll-down-text {
						font-size: 1.2em;
						font-weight: bold;
					}
					.scroll-down-arrow {
						margin-top: 20px;
						width: 40px;
					}
				}
			}
			&.about-slide{

				// position: relative;
				// background: $black;
				// z-index: 100
			}
			&.contact-slide{
				display: grid;
				grid-template: repeat(2, 1fr) 80px / repeat(2, 1fr);
				justify-items: center;
				// background-color: #3f0058;
				.module{
					height: 90%;
					width: 80%;
					background: $black;
					border: 1px $green1 dashed;
					border-radius: 3px;
					box-shadow: 0px 0px 5px 2px $black;
					h4{
						font-size: 1.1em;
						font-weight: normal;
					}
					a{
						font-size: 1em;
					}
				}
				.github-cont{
					grid-column: 1 / 2;
					grid-row: 1 / 2;
					align-self: flex-start;
				}
				.linkedin-cont{
					grid-column: 1 / 2;
					grid-row: 2 / 3;
					align-self: flex-end;
				}
				.email-form-cont{
					display: flex;
					flex-direction: column;
					height: 100%;
					min-height: 275px;
					grid-column: 2 / 3;
					grid-row: 1 / 3;
					h2{ // form greeting
						font-family: "Elsie Swash Caps", cursive;
						display: flex;
						align-items: center;
						justify-content: center;
						// color: $green1;
						height: 60px;
					}
					form{
						height: 100%;
						display: grid;
						grid-template: repeat(2, 1fr) 2fr 60px / auto;
						label{
							margin: auto;
							width: 70%;
							display: block;
							text-align: left;
						}
						input, textarea, button{
							width: 80%;
							border-radius: 3px;
						}
						textarea{
							resize: none;
							overflow-y: scroll;
						}
						button{
							height: 30px;
							margin: 0 auto;
						}
					}
				}
			}
		}
    }
}

@media screen and (max-width: $med-break){
	.about-cont{
		main{
			section{
				height: calc(100vh - #{$mobile-nav-height});
			}
		}
	}
}
</style>
