<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const invoices = ref(JSON.parse(localStorage.getItem('invoices')) || []);

watch(invoices, () => {
	localStorage.setItem('invoices', JSON.stringify(invoices.value));
});

const goToInvoice = (id) => {
	router.push(`/invoice/${id}`);
};

const goToNewInvoice = () => {
	router.push('/new');
};

const deleteInvoice = (id) => {
	const index = invoices.value.findIndex(invoice => invoice.id === id);
	if (index !== -1) {
		invoices.value.splice(index, 1);
		localStorage.setItem('invoices', JSON.stringify(invoices.value));
	}
};
</script>

<template>
<div class="container">
	<h1>Invoices</h1>
	<button class="create-invoice" @click="goToNewInvoice">Create Invoice</button>
	<table>
		<thead>
			<tr>
			<th>Invoice Number</th>
			<th>Date</th>
			<th>Delete</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="invoice in invoices" :key="invoice.id">
			<td><a @click="goToInvoice(invoice.id)">{{ invoice.header.invoiceNo }}</a></td>
			<td>{{ invoice.header.date }}</td>
			<td><button class="delete-invoice" @click="deleteInvoice(invoice.id)">X</button></td>
			</tr>
		</tbody>
	</table>
</div>
</template>

<style lang="scss" scoped>
.create-invoice {
	margin-top: 10px;
	padding: 5px;
	border: 1px solid #ccc;
	border-radius: 5px;
	background-color: #3b4e87;
	color: white;
	font-weight: bold;
	margin-bottom: 20px;
}
table {
	width: 100%;
	border-collapse: collapse;
	thead {
		th {
			background-color: #3b4e87;
			color: white;
			padding: 10px;
			text-align: left;
		}
	}
	tbody {
		tr {
		&:nth-child(odd) {
			background-color: #f2f2f2;
		}
		td {
			padding: 10px;
			border-bottom: 1px solid #ccc;
		}
		}
	}
}
.delete-invoice {
	color: red;
	background: none;
	outline: none;
	border: none;
	margin-left: 10px;
	cursor: pointer;
}
</style>
