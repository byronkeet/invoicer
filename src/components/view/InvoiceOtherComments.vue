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
	<div v-if="props" class="other-comments">
		<h3>Other comments</h3>
		<ul class="details">
			<li v-for="(comment, index) in data.comments" :key="index">
			{{ index + 1 }}. {{ comment }}
			</li>
		</ul>
	</div>
</template>


<style lang="scss" scoped>
.other-comments {
	width: 60%;
	@media screen and (max-width: 768px) {
		width: 100%;
		margin-top: 20px;
	}
	margin-bottom: 20px;
	h3 {
		background-color: #3b4e87;
		color: white;
		margin-bottom: 5px;
		padding-left: 10px;
	}
	.details {
		padding-left: 10px;
		display: flex;
		flex-direction: column;
		font-size: 12px;
		line-height: 1.5;
		border: 1px solid #ccc;
		border-top: 0;
		min-height: 100px;
		list-style: none;
	}
}
</style>