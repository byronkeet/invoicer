<script setup>
import { ref } from 'vue';
import { uid } from 'uid';
import { useRouter } from 'vue-router';
const router = useRouter();

import NewInvoiceHeader from '../components/new/NewInvoiceHeader.vue';
import NewInvoiceBillTo from '../components/new/NewInvoiceBillTo.vue';
import NewInvoiceItemizedDetails from '../components/new/NewInvoiceItemizedDetails.vue';
import NewInvoiceOtherComments from '../components/new/NewInvoiceOtherComments.vue';
import NewInvoiceContactDetails from '../components/new/NewInvoiceContactDetails.vue';
import InvoiceFooter from '../components/InvoiceFooter.vue';

const headerRef = ref(null);
const billToRef = ref(null);
const itemizedDetailsRef = ref(null);
const otherCommentsRef = ref(null);
const contactDetailsRef = ref(null);

const saveInvoice = () => {
	const invoiceData = {
		id: uid(),
		date: new Date(),
		paid: false,
		header: headerRef.value.getData(),
		billTo: billToRef.value.getData(),
		itemizedDetails: itemizedDetailsRef.value.getData(),
		otherComments: otherCommentsRef.value.getData(),
		contactDetails: contactDetailsRef.value.getData(),
	};

	let existingInvoices = JSON.parse(localStorage.getItem('invoices')) || [];
	existingInvoices.push(invoiceData);
	localStorage.setItem('invoices', JSON.stringify(existingInvoices));
	router.push('/');
};
</script>

<template>
	<main class="container">
		<button class="save-invoice" @click="saveInvoice">Save Invoice</button>
		<NewInvoiceHeader ref="headerRef" />
		<NewInvoiceBillTo ref="billToRef" />
		<NewInvoiceItemizedDetails ref="itemizedDetailsRef" />
		<NewInvoiceOtherComments ref="otherCommentsRef" />
		<NewInvoiceContactDetails ref="contactDetailsRef" />
		<InvoiceFooter />
	</main>
</template>

<styles lang="scss" scoped>
.save-invoice {
	margin-top: 10px;
	padding: 5px;
	border: 1px solid #ccc;
	border-radius: 5px;
	background-color: #3b4e87;
	color: white;
	font-weight: bold;
	margin-bottom: 20px;
}
</styles>
