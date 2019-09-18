<template>
	<div>
		<h1>Cart</h1>
		<hr>
		<button class="btn btn-primary"
				@click="onOrder">
			Order Now
		</button>
	</div>
</template>

<script>
	export default {
		methods: {
			onOrder(){
				this.$router.push({
					name: 'checkout'
				});
			}
		}
	}
</script>