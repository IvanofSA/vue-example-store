<template>
	<div>
		<h1>Order now</h1>
		<hr>
		<table class="table table-bordered">
			<tr>
				<td>in Cart</td>
				<td>Total</td>
			</tr>
			<tr>
				<td> {{ cartCount }}</td>
				<td> {{ cartSum }}</td>
			</tr>

		</table>

		<button class="btn btn-success"
				@click="sendResult"
				:disabled="!disabledBtn">
			Send
		</button>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';
	import {mapActions} from 'vuex';


	export default {
		computed: {

			...mapGetters({
				cartCount: 'cart/cnt',
				cartSum: 'cart/sum',
				result: 'cart/result',
			}),
			disabledBtn() {
				return this.cartCount != 0;
			}
		},
		methods: {
			...mapActions({
				sendResult: 'cart/sendResult'
			}),
		}
	}
</script>