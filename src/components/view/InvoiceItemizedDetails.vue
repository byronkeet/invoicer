<script setup>
import InvoiceItem from '../InvoiceItem.vue';
import { defineProps } from 'vue';

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const { items, subtotal, taxable, taxRate, taxDue, totalValue } = props.data;
</script>

<template>
	<div v-if="props" class="invoice-itemized-details">
		<div class="invoice-table">

			<!-- Header -->
			<div class="invoice-row header">
				<div class="invoice-description">Description</div>
				<div class="invoice-cell">Taxed</div>
				<div class="invoice-cell">Amount</div>
			</div>

			<InvoiceItem
				v-for="item in items"
				:key="item.id"
				:item="item"
			/>

		</div>
	</div>

	<div class="invoice-itemized-details-totals">
		<div class="totals-table">
		<!-- Header -->
		<div class="totals-row">
			<div class="totals-description"></div>
			<div class="totals-cell">Subtotal</div>
			<div class="totals-cell">{{ subtotal }}</div>
		</div>
		<div class="totals-row">
			<div class="totals-description"></div>
			<div class="totals-cell">Taxable</div>
			<div class="totals-cell">{{ taxable }}</div>
		</div>
		<div class="totals-row">
			<div class="totals-description"></div>
			<div class="totals-cell">Tax Rate</div>
			<div class="totals-cell tax-rate">{{ taxRate }}</div>
		</div>
		<div class="totals-row">
			<div class="totals-description"></div>
			<div class="totals-cell">Tax due</div>
			<div class="totals-cell tax-due">{{ taxDue }}</div>
		</div>
		<div class="totals-row">
			<div class="totals-description"></div>
			<div class="totals-cell">Total</div>
			<div class="totals-cell total-value"><span>$</span>{{ totalValue }}</div>
		</div>
		</div>
	</div>
</template>



<style lang="scss" scoped>
.invoice-table {
	display: flex;
	flex-direction: column;
}

.invoice-row {
	display: flex;

	&.header {
		background-color: #3b4e87;
		color: white;
		font-weight: bold;
	}

	&:not(.header):nth-child(odd) {
		background-color: white;
	}

	&:not(.header):nth-child(even) {
		background-color: #f2f2f2;
	}

	.invoice-cell {
		flex: 1;
		padding: 5px;
		border-bottom: 1px solid #ccc;

		&:not(:last-child) {
			border-right: 1px solid #ccc;
		}
	}

	.invoice-description {
		flex: 5;
		padding: 5px;
		border-bottom: 1px solid #ccc;

		&:not(:last-child) {
			border-right: 1px solid #ccc;
		}
	}


}

.totals-table {
	display: flex;
	flex-direction: column;

	.totals-row {
		display: flex;
		.totals-cell {
			flex: 1;
			padding: 5px;
			&:nth-child(3) {
				text-align: right;
			}
			&.tax-rate {
				border: 1px solid #ccc;
			}
			&.other {
				border: 1px solid #ccc;
			}
			&.total-label {
				text-transform: uppercase;
				font-weight: bold;
				border-top: 1px solid black;
			}
			&.total-value {
				background-color: #d2d9ec;
				display: flex;
				justify-content: space-between;
				border-top: 1px solid black;
			}
		}
		.totals-description {
			flex: 5;
			padding: 5px;
		}
	}
}
</style>