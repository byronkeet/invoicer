<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

import InvoiceHeader from '../components/view/InvoiceHeader.vue';
import InvoiceBillTo from '../components/view/InvoiceBillTo.vue';
import InvoiceItemizedDetails from '../components/view/InvoiceItemizedDetails.vue';
import InvoiceOtherComments from '../components/view/InvoiceOtherComments.vue';
import InvoiceContactDetails from '../components/view/InvoiceContactDetails.vue';
import InvoiceFooter from '../components/InvoiceFooter.vue';

const route = useRoute();
const invoice = ref(null);

onMounted(() => {
  const invoiceId = route.params.id;
  const invoices = JSON.parse(localStorage.getItem('invoices') || '[]');
  invoice.value = invoices.find(inv => inv.id === invoiceId);
  if (!invoice.value) {
    console.error("Invoice not found.");
  }
});

</script>

<template>
  <main v-if="invoice && invoice.id" class="container">
    <InvoiceHeader :data="invoice.header" />
    <InvoiceBillTo :data="invoice.billTo" />
    <InvoiceItemizedDetails :data="invoice.itemizedDetails" />
    <InvoiceOtherComments :data="invoice.otherComments" />
    <InvoiceContactDetails :data="invoice.contactDetails" />
    <InvoiceFooter />
  </main>
</template>

<styles lang="scss" scoped>
</styles>
