<template>
	<div>
		<h1>Products</h1>
		<div class="row">
			<div v-if="!loaded"
				class="col col-12">
				<div class="alert alert-success">
					Loading...
				</div>
			</div>
			<template v-else>
				<div v-for="product in products"
					 :key="product.id_product"
					 class="col col-sm-4">
				   	<h3>{{ product.title }}</h3>
				   	<router-link :to="{
				   		name: 'product',
				   		params: {
				   			id: product.id_product
				   		}
				   	}">
				   		Get More Info
				   	</router-link>
				   	<div class="notice">{{ product.price }}</div>
				   	<hr>
					<transition name="rotate" mode="out-in">
					   	<button v-if="inCart(product.id_product)"
					   			key="remove"
					   			:disabled="inProcess(product.id_product)"
					   			class="btn btn-warning"
								@click="removeFromCart({
									id: product.id_product
								})"
					   	>
					   		Remove from cart
					   	</button>
					   	<button v-else
					   			key="add"
					   			:disabled="inProcess(product.id_product)"
					   			class="btn btn-success"
								@click="addToCart({
									id: product.id_product
								})"
					   	>
					   		Add to cart
					   	</button>
				   </transition>
				</div>	
			</template>
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
				loaded: 'products/itemsLoaded',
				inCart: 'cart/inCart',
				inProcess: 'cart/inProcess'
			})
		},
		methods: {
			...mapActions('cart', {
				addToCart: 'add',
				removeFromCart: 'remove'
			})
		}
	}
</script>

<style scoped>
	.notice{
		color: red;
	}
	
	.rotate-enter-active{
		animation: flipXIn 0.3s;
	}

	.rotate-leave-active{
		animation: flipXOut 0.3s;
	}

	@keyframes flipXIn{
		from{transform: rotateX(-90deg)}
		to{transform: rotateX(0deg)}
	}

	@keyframes flipXOut{
		from{transform: rotateX(0deg)}
		to{transform: rotateX(90deg)}
	}
	

</style>