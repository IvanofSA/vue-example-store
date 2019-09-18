<template>
	<div>
		<h1>Products</h1>
		<div class="row">
			<div v-for="item in products"
				 :key="item.id_product"
				 class="col col-sm-4">
				<h3>{{item.title}}</h3>

				<router-link :to="{
					name: 'product',
					params: {
						id: item.id_product
					}
				}">
					Get more Info
				</router-link>

				<div>{{item.title}}</div>
				<hr>
				<button v-if="inCart(item.id_product)"
						class="btn btn-warning"
						@click="removeFromCart({
							id: item.id_product
						})"
				> Remove to cart
				</button>

				<button v-else
						class="btn btn-success"
						@click="addToCart({
							id: item.id_product
						})"
				> Add to cart
				</button>

			</div>
		</div>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';
	import {mapActions} from 'vuex';

	export default {
		computed: {
			...mapGetters({
				products: 'products/items',
				inCart: 'cart/inCart'
			}),
		},
		methods: {
			...mapActions('cart', {
				addToCart: 'add',
				removeFromCart: 'remove'
			}),

		}
	}
</script>