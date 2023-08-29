<script setup>
import { defineProps } from 'vue';

const props = defineProps({
	data: {
		type: Object,
		required: true,
	}
	});
</script>

<template>
	<div v-if="props" class="invoice-contact-details">
		<p class="direct">If you have any questions about this invoice, please contact:</p>
		<div class="details">
			<p class="name">{{ data.name || '[Name]' }}</p>
			<p class="phone">{{ data.phone || '[Phone]' }}</p>
			<p class="email">{{ data.email || '[Email]' }}</p>
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
	}
}
</style>