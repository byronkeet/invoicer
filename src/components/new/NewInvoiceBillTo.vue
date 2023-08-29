<script setup>
import { ref, getCurrentInstance, onMounted } from 'vue';

const billTo = ref({
	name: '',
	companyName: '',
	streetAddress: '',
	city: '',
	phone: '',
});

// Mock API
const fetchBillToDetails = async () => {
	return new Promise((resolve) => {
		setTimeout(() => {
		resolve({
			name: 'User One',
			companyName: 'Company Name',
			streetAddress: '1 Second St',
			city: 'Cape Town',
			phone: '123-456-7890',
		});
		}, 1000);
	});
};

// Fetch and populate data when component is mounted
onMounted(async () => {
	const details = await fetchBillToDetails();
	billTo.value = { ...details };
});

// Expose method to parent
const instance = getCurrentInstance();

if (instance) {
	instance.exposed ={
		getData() {
			return {
				name: billTo.value.name,
				companyName: billTo.value.companyName,
				streetAddress: billTo.value.streetAddress,
				city: billTo.value.city,
				phone: billTo.value.phone,
			};
		}
	};
}
</script>

<template>
	<div class="invoice-bill-to">
		<h3>Bill To</h3>
		<div class="details">
			<p class="name">Name</p>
			<input type="text" v-model="billTo.name" class="name-input" />
			<p class="company-name">Company Name</p>
			<input type="text" v-model="billTo.companyName" class="company-name-input" />
			<p class="street-address">Street Address</p>
			<input type="text" v-model="billTo.streetAddress" class="street-address-input" />
			<p class="city">City</p>
			<input type="text" v-model="billTo.city" class="city-input" />
			<p class="phone">Phone</p>
			<input type="text" v-model="billTo.phone" class="phone-input" />
		</div>
	</div>
</template>
  

<style lang="scss" scoped>
.invoice-bill-to {
	width: 30%;
	@media screen and (max-width: 768px) {
		width: 100%;
	}
	input {
		border: none;
		outline: none;
		padding: 5px;
		border-bottom: 1px solid #ccc;
		margin-bottom: 10px;
	}
	h3 {
		background-color: #3b4e87;
		color: white;
		margin-bottom: 5px;
		padding-left: 10px;
	}
	.details {
		display: flex;
		flex-direction: column;
		font-size: 12px;
		line-height: 1.5;
		padding-left: 10px;
		padding: 10px;
		box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
	}
	margin-bottom: 20px;
}
</style>