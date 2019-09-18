export default {
	namespaced: true,
	state: {
		items: [
			{
				title: 'Products',
				route: 'products'
			},
			{
				title: 'You Cart',
				route: 'cart'
			},
			{
				title: 'Checkout',
				route: 'checkout'
			},
		]
	},
	getters: {
		items(state) {
			return state.items;
		}
	}
}