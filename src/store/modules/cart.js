export default {
	namespaced: true,
	state: {
		productsId: [],
		processId: []
	},
	getters: {
		productsId(state){
			return state.productsId;
		},
		processId(state){
			return state.processId;
		},
		inCart: (state, getters) => (id) => {
			return getters.productsId.indexOf(id) !== -1;
		},
		inProcess: (state, getters) => (id) => {
			return getters.processId.indexOf(id) !== -1;
		},
		canAdd: (state, getters) => (id) => {
			return !getters.inCart(id) && !getters.inProcess(id);
		},
		canRemove: (state, getters) => (id) => {
			return getters.inCart(id) && !getters.inProcess(id);
		},
		cnt(state, getters){
			return getters.productsId.length;
		},
		sum(state, getters, rootState, rootGetters){
			let sum = 0;

			for(let i = 0; i < state.productsId.length; i++){
				let prId = state.productsId[i];
				let product = rootGetters['products/product'](prId);
				sum += product.price;
			}

			return sum;
		}
	},
	mutations: {
		add(state, product){
			state.productsId.push(product.id);
		},
		remove(state, product){
			let ind = state.productsId.indexOf(product.id);
			state.productsId.splice(ind, 1);
		},
		addProcess(state, product){
			state.processId.push(product.id);
		},
		removeProcess(state, product){
			let ind = state.processId.indexOf(product.id);
			state.processId.splice(ind, 1);
		}
	},
	actions: {
		/* 
		add({ state, commit, rootState, rootGetters }, product){
			console.log(rootGetters);
			if(!rootGetters['cart/inCart'](product.id)){
				commit('add', product);
			}
		}
		*/
		add(store, product){
			if(store.getters.canAdd(product.id)){
				store.commit('addProcess', product);

				setTimeout(() => {
					/*
						Vue.http.get('cart.php', {
							params: {
								'action': 'add',
								'id': product.id
							}
						}).then((response) => {
							// commit...
						});

					*/

					store.commit('add', product);
					store.commit('removeProcess', product);
				}, 100);
			}
		},
		remove(store, product){
			if(store.getters.canRemove(product.id)){
				store.commit('addProcess', product);

				setTimeout(() => {
					store.commit('remove', product);
					store.commit('removeProcess', product);
				}, 100);
			}
		}
	}
} 