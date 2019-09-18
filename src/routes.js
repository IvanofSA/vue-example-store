import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Cart from './components/Cart';
import Checkout from './components/Checkout';
import E404 from './components/E404';
import Product from './components/Product';
import ProductsList from './components/ProductsList';

const routes = [
	{
		path: '',
		redirect: {name: 'products'}
	},
	{
		name: 'cart',
		path: '/cart',
		component: Cart
	},
	{
		name: 'products',
		path: '/products',
		component: ProductsList
	},
	{
		name: 'product',
		path: '/products/:id',
		component: Product
	},
	{
		name: 'checkout',
		path: '/checkout',
		component: Checkout
	},
	{
		path: '*',
		component: E404
	},
];


export default new VueRouter({
	routes,
	mode: 'history'
});