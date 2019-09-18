<template>
	<div>
		<h1> {{product.title}} </h1>
		<router-link :to="{ name: 'products' }"> Back to products</router-link>
		<hr>
		<div class="alert alert-success">
			{{product.price}}
		</div>

	</div>
</template>

<script>
	import {mapGetters} from 'vuex';

	export default {
		computed: {
			...mapGetters('products', {
				productProxy: 'product'
			}),
			product() {
				return this.productProxy(this.$route.params.id);
			}
		}
	}
</script>