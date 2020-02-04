<template>
	<main>
		<div class="module github-cont">
			<h4>Github</h4>
			<a href="https://github.com/footjohnson" target="_blank">https://github.com/footjohnson</a>
		</div>
		<div class="module linkedin-cont">
			<h4>Linkedin</h4>
			<a href="https://www.linkedin.com/in/jace-medlin/" target="_blank">https://www.linkedin.com/in/jace-medlin/</a>
		</div>
		<div class="module email-form-cont">
			<h2>Say Hello!</h2>
			<form action="">
				<div class="name-cont">
					<label for="name">Name</label>
					<input name="name" id="name" type="text" required>
				</div>

				<div class="email-cont">
					<label for="email">Email</label>
					<input name="email" id="email" type="email" required>
				</div>

				<div class="message-cont">
					<label for="message">Message</label>
					<textarea name="message" id="message" cols="30" rows="5"
						required placeholder="Write your message here.">
					</textarea>
				</div>

				<button type="submit">Send</button>
			</form>
		</div>
	</main>
</template>

<script>
export default {
	created: function(){
		this.$store.commit('store/updateHeaderText', 'Contact Me')
	}
}
</script>

<style lang="scss" scoped>
	main{
		display: grid;
		grid-template: repeat(2, 1fr) 80px / repeat(2, 1fr);
		justify-items: center;
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
</style>
