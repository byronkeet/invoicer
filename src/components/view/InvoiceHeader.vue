<script setup>
const props = defineProps({
	data: {
		type: Object,
		required: true,
	},
});
</script>

<template>
	<div class="invoice-header">
	  <div v-if="props" class="company-details">
		<h1>Company Name</h1>
		<div class="details">
		  <p class="street-address">{{ data.streetAddress || '[Street Address]' }}</p>
		  <p class="city">{{ data.city || '[City, ZIP]' }}</p>
		  <p class="phone">{{ data.phone || '[000-000-0000]' }}</p>
		  <p class="fax">{{ data.fax || '[000-000-0000]' }}</p>
		  <p class="website">{{ data.website || 'somedomail.com' }}</p>
		</div>
	  </div>
	  <div class="invoice-details">
		<h2>Invoice</h2>
		<div class="details">
		  <div class="row">
			<div class="date">DATE</div><div>{{ data.date || '12/9/2019' }}</div>
		  </div>
		  <div class="row">
			<div class="invoice-no">INVOICE #</div> <div>{{ data.invoiceNo || '[123456]' }}</div>
		  </div>
		  <div class="row">
			<div class="customer-id">CUSTOMER ID</div> <div>{{ data.customerID || '[123]' }}</div>
		  </div>
		  <div class="row">
			<div class="due-date">DUE DATE</div><div>{{ data.dueDate || '1/8/2020' }}</div>
		  </div>
		</div>
	  </div>
	</div>
  </template>

<style lang="scss" scoped>
.invoice-header {
	display: flex;
	justify-content: space-between;
	margin-bottom: 20px;
	padding: 20px 0;
	@media screen and (max-width: 768px) {
		flex-direction: column;
		gap: 20px;
	}

	.company-details {
		h1 {
			color: #3b4e87;
			font-weight: 400;
		}
		.details {
			display: flex;
			flex-direction: column;
			font-size: 12px;
			line-height: 1.5;
		}
	}
	.invoice-details {
		text-align: right;
		.details {
			display: flex;
			flex-direction: column;
			font-size: 12px;
			line-height: 1.5;

			.row {
				display: flex;
				justify-content: flex-end;
				align-items: flex-end;
				gap: 5px;
				div {
					font-size: 12px;
					&:nth-child(2) {
					width: 80px;
					text-align: center;
					border: 1px solid gray;
					}
				}
			}
		}
	}


}
</style>