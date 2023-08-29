<script setup>
const props = defineProps({
	data: {
		type: Object,
		required: true,
	},
});
</script>

<template>
	<div v-if="props" class="invoice-bill-to">
	  <h3>Bill To</h3>
	  <div class="details">
		<p class="name">{{ data.name || '[name]' }}</p>
		<p class="company-name">{{ data.companyName || '[Company Name]' }}</p>
		<p class="street-address">{{ data.streetAddress || '[Street Address]' }}</p>
		<p class="city">{{ data.city || '[City, ZIP]' }}</p>
		<p class="phone">{{ data.phone || '[000-000-0000]' }}</p>
	  </div>
	</div>
</template>


<style lang="scss" scoped>
.invoice-bill-to {
	width: 30%;
	@media screen and (max-width: 768px) {
		width: 100%;
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
	}
	margin-bottom: 20px;
}
</style>