<script setup>
import { ref, getCurrentInstance } from 'vue';

const name = ref("");
const phone = ref("");
const email = ref("");

// Expose method to parent
const instance = getCurrentInstance();

if (instance) {
	instance.exposed ={
		getData() {
			return {
				name: name.value,
				phone: phone.value,
				email: email.value,
			};
		}
	};
}
</script>

<template>
	<div class="invoice-contact-details">
		<p class="direct">If you have any questions about this invoice, please contact:</p>
		<div class="details">
			<input type="text" v-model="name" placeholder="Name" class="input-field" />
			<input type="text" v-model="phone" placeholder="Phone" class="input-field" />
			<input type="email" v-model="email" placeholder="Email" class="input-field" />
		</div>
		<h3>Thank you for your business!</h3>
	</div>
</template>
  
<style lang="scss" scoped>
.invoice-contact-details {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 5px;
		padding: 20px 0;
		.details {
		display: flex;
		gap: 10px;
		@media screen and (max-width: 768px) {
			flex-direction: column;
		}
		}
		.input-field {
			border: none;
			outline: none;
			padding: 5px;
			border-bottom: 1px solid #ccc;
			margin-bottom: 10px;
		}
}
</style>
  