<script setup>
import { ref, computed, getCurrentInstance } from 'vue';
import { uid } from 'uid';

let items = ref([]);
let taxRate = ref(6.25);
let other = ref(0);

const addNewItem = () => {
  items.value.push({
    id: uid(),
    description: '',
    taxed: false,
    amount: 0
  });
};

const updateItem = (index, key, value) => {
  items.value[index][key] = value;
};

const deleteItem = (index) => {
  items.value.splice(index, 1);
};

// Computed properties for calculating totals
const subTotal = computed(() => {
  return items.value.reduce((sum, item) => sum + parseFloat(item.amount), 0);
});

const taxable = computed(() => {
  return items.value.reduce((sum, item) => item.taxed ? sum + parseFloat(item.amount) : sum, 0);
});

const taxDue = computed(() => {
  return (taxable.value * taxRate.value / 100).toFixed(2);
});

const totalValue = computed(() => {
  return (subTotal.value - taxDue.value - parseFloat(other.value)).toFixed(2);
});

// Expose method to parent
const instance = getCurrentInstance();

if (instance) {
	instance.exposed ={
		getData() {
			return {
				items: items.value,
				subtotal: subTotal.value,
				taxable: taxable.value,
				taxRate: taxRate.value,
				taxDue: taxDue.value,
				other: other.value,
				totalValue: totalValue.value
			};
		}
	};
}
</script>

<template>
	<div class="invoice-itemized-details">
		<div class="invoice-table">
		<!-- Header -->
			<div class="invoice-row header">
				<div class="invoice-description">Description</div>
				<div class="invoice-cell">Taxed</div>
				<div class="invoice-cell">Amount</div>
			</div>

			<div class="capture-details">
				<div class="invoice-row" v-for="(item, index) in items" :key="item.id">
					<input 
						type="text" 
						class="invoice-description invoice-description-input" 
						v-model="item.description"
						@input="updateItem(index, 'description', item.description)"
					/>
					<input 
						type="checkbox" 
						class="invoice-cell invoice-taxed-input"
						v-model="item.taxed"
						@change="updateItem(index, 'taxed', item.taxed)"
					/>
					<input 
						type="number" 
						class="invoice-cell invoice-amount-input" 
						v-model="item.amount"
						@input="updateItem(index, 'amount', item.amount)"
					/>
					<div class="invoice-delete-row" @click="deleteItem(index)">x</div>
				</div>
			</div>
			<button class="add-item" @click="addNewItem">New Item</button>
		</div>
  	</div>

	<div class="invoice-itemized-details-totals">
		<div class="totals-table">
			<!-- Header -->
			<div class="totals-row">
				<div class="totals-description"></div>
				<div class="totals-cell">Subtotal</div>
				<div class="totals-cell">{{ subTotal }}</div>
			</div>
			<div class="totals-row">
				<div class="totals-description"></div>
				<div class="totals-cell">Taxable</div>
				<div class="totals-cell">{{ taxable }}</div>
			</div>
			<div class="totals-row">
				<div class="totals-description"></div>
				<div class="totals-cell">Tax Rate</div>
				<input type="number" class="totals-cell tax-rate" v-model="taxRate" />
			</div>
			<div class="totals-row">
				<div class="totals-description"></div>
				<div class="totals-cell">Tax due</div>
				<div class="totals-cell tax-due">{{ taxDue }}</div>
			</div>
			<div class="totals-row">
				<div class="totals-description"></div>
				<div class="totals-cell">Other</div>
				<input type="number" class="totals-cell other" v-model="other" />
			</div>
			<div class="totals-row">
				<div class="totals-description"></div>
				<div class="totals-cell total-label">Total</div>
				<div class="totals-cell total-value"><span>$</span>{{ totalValue }}</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>

input {
		border: none;
		outline: none;
		padding: 5px;
		border-bottom: 1px solid #ccc;
		margin-bottom: 10px;
}
.invoice-table {
	display: flex;
	flex-direction: column;

	.capture-details {
		padding: 10px;
		box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
	}

	.add-item {
		margin-top: 10px;
		padding: 5px;
		border: 1px solid #ccc;
		border-radius: 5px;
		background-color: #3b4e87;
		color: white;
		font-weight: bold;
		cursor: pointer;
	}
}

.invoice-row {
	display: flex;

	&.header {
		background-color: #3b4e87;
		color: white;
		font-weight: bold;
	}

	.invoice-cell {
		flex: 1;
		padding: 5px;

	}

	.invoice-description {
		flex: 5;
		padding: 5px;

	}
	.invoice-delete-row {
		color: red;
		cursor: pointer;
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