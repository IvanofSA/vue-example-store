<template>
	<div>
		<h1 :class="colors.em">Page not found</h1>
		<hr>
		<router-link :to="{name: 'products'}">
			Start from main page
		</router-link>
	</div>
</template>

<script>
	import { bModal } from 'bootstrap-vue'

	export default {
		components: {
			bModal
		}
	}
</script>

<style module="colors">

	.notice{
		font-size: 20px;
	}

	.em{
		font-style: italic;
	}

</style>