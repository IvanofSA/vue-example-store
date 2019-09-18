export default {
	namespaced: true,
	state: {
		productsId: [],
		send: false
	},
	getters: {
		productsId(state) {
			return state.productsId;
		},
		send(state) {
			return state.send;
		},
		inCart: (state, getters) => (id) => {
			return getters.productsId.indexOf(id) !== -1;
		},

		cnt(state, getters) {
			return getters.productsId.length;
		},
		sum(state, getters, rootState, rootGetters) {

			let sum = 0;

			for( let i = 0; i < state.productsId.length; i++ ) {
				sum += rootGetters['products/product'](state.productsId[i]).price;
			}

			return sum;
		},
		results(state, getters, rootState, rootGetters) {
			let result = [];

			for( let i = 0; i < state.productsId.length; i++ ) {
				result.push(rootGetters['products/product'](state.productsId[i]));
			}

			return result;
		},
	},
	mutations: {
		add(state, product) {
			state.productsId.push(product.id);
		},
		remove(state, product) {
			let ind = state.productsId.indexOf(product.id);
			state.productsId.splice(ind, 1);
		},
		sendResult(state) {
			state.send = true;
			state.productsId = [];
		}
	},

	actions: {

		add(store, product) {
			if(!store.getters.inCart(product.id)) {
				store.commit('add', product);
			}
		},

		remove(store, product) {
			if(store.getters.inCart(product.id)) {
				store.commit('remove', product);
			}
		},

		sendResult(store, product) {
			if(store.getters.productsId.length != 0) {
				store.commit('sendResult', product);
			}
		}
	}

}