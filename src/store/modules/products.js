import Vue from 'vue';

export default {
	namespaced: true,
	state: {
		items: {},
		itemsLoaded: false
	},
	getters: {
		items(state){
			return state.items;
		},
		itemsLoaded(state){
			return state.itemsLoaded;
		},
		product: (state, getters) => (id) => {
			return getters.items[id];
		}
	},
	mutations: {
		setItems(state, items){
			state.items = items;
			state.itemsLoaded = true;
		}
	},
	actions: {
		loadItems(store){
			if(!store.state.itemsLoaded){
				Vue.http.get('products.php')
				   .then((response) => {
				   		store.commit('setItems', response.data);
				   });
			}
		}
	}
}

/*
function getProducts(){
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
}*/