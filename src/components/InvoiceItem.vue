<script setup>
defineProps({
	item: {
		type: Object,
		required: true,
	},
});
</script>

<template>
	<div class="invoice-row">
		<div class="invoice-description">{{ item.description }}</div>
		<div class="invoice-cell">{{ item.taxed ? 'Yes' : 'No' }}</div>
		<div class="invoice-cell">{{ item.amount }}</div>
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
</style>