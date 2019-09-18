import Vue from 'vue'; 
import VueRouter from 'vue-router'; 

Vue.use(VueRouter);

import ProductsList from './components/ProductsList';
import Product from './components/Product';
import Cart from './components/Cart';
import E404 from './components/E404';
import Checkout from './components/Checkout';

import {store} from './store';

const routes = [
	{
		path: '',
		redirect: {name: 'products'}
	},
	{
		name: 'products',
		path: '/products',
		component: ProductsList,
		beforeEnter(from, to, next){
			store.dispatch('products/loadItems');
			next();
		}
	},
	{
		name: 'product',
		path: '/products/:id',
		component: Product
	},
	{
		name: 'cart',
		path: '/cart',
		component: Cart
	},
	{
		name: 'checkout',
		path: '/checkout',
		component: Checkout
	},
	{
		path: '*',
		component: E404
	}
];



export default new VueRouter({
	routes,
	mode: 'history'
});