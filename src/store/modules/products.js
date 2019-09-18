export default {
	namespaced: true,
	state: {
		items: getProducts()
	},
	getters: {
		items(state) {
			return state.items
		},
		product: (state) => (id) => {
			return state.items[id]
		}
	}
}

function getProducts() {
	return {
		1: {
			id_product: 1,
			title: 'Iphone 5',
			price: 5000
		},
		2: {
			id_product: 2,
			title: 'Iphone 6',
			price: 15000
		},
		5: {
			id_product: 5,
			title: 'Iphone 7',
			price: 20000
		}
	}
}