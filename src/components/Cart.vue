<template>
	<div>

		<div class="containre">
			<table class="table table-bordered">
				<tr>
					<td>Title</td>
					<td>Price</td>
				</tr>
				<tr v-for="item in results"
					:key="item.id">
					<td> {{ item.title }}</td>
					<td> {{ item.price }}</td>

				</tr>
			</table>
		</div>

		<h1>Cart</h1>
		<router-link class="btn btn-success"
					 :to="{name: 'checkout'}"
		>
			Order Now
		</router-link>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'

	export default {
		computed: {
			...mapGetters({
				results: 'cart/results'
			})
		}
	}
</script>