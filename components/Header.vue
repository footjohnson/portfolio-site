<template>
	<header>
		<h1 ref="headerText" v-html="HeaderText">

		</h1>
	</header>
</template>

<script>
import gsap from 'gsap';

export default {
	props: {

	},
	data: function(){
		return {

		}
	},
	computed: {
		HeaderText: function(){ // Add o-spin class to 'o' chars in header
			let newHeaderText = this.$store.getters['store/getHeaderText'].replace(/o/g, "<span class='o-spin'>o</span>");
			// newHeaderText = newHeaderText.replace(/O/g, "<span class='o-spin'>O</span>");

			return newHeaderText;
		}
	},
	methods: {
		SpinOs: function(){
			this.$nextTick(()=>{
				const headerText = this.$refs['headerText'].querySelectorAll('span.o-spin');
				gsap.to(headerText, {
					duration: 5,
					rotation: 360,
					transformOrigin: 'center 60%',
					smoothOrigin: true,
					ease: "none",
					repeat: Infinity
				});
			})
		}
	},
	mounted: function(){
		this.SpinOs();
	},
	watch: {
		HeaderText: function(){
			this.SpinOs();
		}
	}
}
</script>

<style lang="scss" scoped>
	header{
		padding-top: 20px;
		font-size: 2em;
		color: $green1;
		grid-column: 1 / 3;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		text-shadow: 3px 3px 2px $black;
		h1 /deep/ .o-spin{
			display: inline-block;
			text-shadow: 0 0 4px $black;
		}
	}
</style>
