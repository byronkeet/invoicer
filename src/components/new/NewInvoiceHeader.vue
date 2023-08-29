<script setup>
import { ref, getCurrentInstance } from 'vue';

const streetAddress = ref("");
const city = ref("");
const phone = ref("");
const fax = ref("");
const website = ref("");
const date = ref("");
const invoiceNo = ref("");
const customerID = ref("");
const dueDate = ref("");

// Expose method to parent
const instance = getCurrentInstance();

if (instance) {
	instance.exposed ={
		getData() {
			return {
				streetAddress: streetAddress.value,
				city: city.value,
				phone: phone.value,
				fax: fax.value,
				website: website.value,
				date: date.value,
				invoiceNo: invoiceNo.value,
				customerID: customerID.value,
				dueDate: dueDate.value,
			};
		}
	};
}
</script>

<template>
	<div class="invoice-header">
			<div class="company-details">
				<h1>Company Name</h1>
				<div class="details">
					<p class="street-address">Street Address</p>
					<input type="text" class="street-address-input" v-model="streetAddress" />
					<p class="phone">City</p>
					<input type="text" class="city-input" v-model="city" />
					<p class="phone">Phone</p>
					<input type="text" class="phone-input" v-model="phone" />
					<p class="fax">Fax</p>
					<input type="text" class="fax-input" v-model="fax" />
					<p class="website">Website</p>
					<input type="text" class="website-input" v-model="website" />
				</div>
			</div>
			<div class="invoice-details">
				<h2>Invoice</h2>
				<div class="details">
					<div class="row">
						<div class="date">Date</div>
						<input type="text" class="date-input" v-model="date" />
					</div>
					<div class="row">
						<div class="invoice-no">Invoice #</div>
						<input type="text" class="Invoice-no-input" v-model="invoiceNo" />
					</div>
					<div class="row">
						<div class="customer-id">Customer ID</div>
						<input type="text" class="customer-id-input" v-model="customerID" />
					</div>
					<div class="row">
						<div class="due-date">Due Date</div>
						<input type="text" class="due-date-input" v-model="dueDate" />
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

	input {
		border: none;
		outline: none;
		padding: 5px;
		border-bottom: 1px solid #ccc;
		margin-bottom: 10px;
	}

	.company-details {
		h1 {
			color: #3b4e87;
			font-weight: 400;
			margin-bottom: 10px;
		}
		.details {
			display: flex;
			flex-direction: column;
			font-size: 12px;
			line-height: 1.5;
			padding: 10px;
			box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

		}
	}
	.invoice-details {
		text-align: right;

		h2 {
			margin-bottom: 10px;
		}
		.details {
			display: flex;
			flex-direction: column;
			font-size: 12px;
			line-height: 1.5;
			padding: 10px;
			box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

			.row {
				display: flex;
				flex-direction: column;
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
			input {
				text-align: right;
			}
		}
	}
}
</style>