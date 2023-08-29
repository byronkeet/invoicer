import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
	{
		path: '/',
		name: 'invoices',
		component: () => import('../views/InvoicesView.vue')
	},
	{
		path: '/new',
		name: 'newInvoice',
		component: () => import('../views/NewInvoice.vue')
	},
	{
		path: '/invoice/:id',
		name: 'invoice',
		component: () => import('../views/InvoiceView.vue')
		}
	]
})

export default router
