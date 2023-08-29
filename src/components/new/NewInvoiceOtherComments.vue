<script setup>
import { ref, getCurrentInstance } from 'vue';

const comments = ref([]);

const newComment = ref("");

const addComment = () => {
	if (newComment.value.trim() !== "") {
		comments.value.push(newComment.value.trim());
		newComment.value = "";
	}
};

const deleteComment = (index) => {
	comments.value.splice(index, 1);
};

// Expose method to parent
const instance = getCurrentInstance();

if (instance) {
	instance.exposed ={
		getData() {
			return {
				comments: comments.value,
			};
		}
	};
}
</script>

<template>
	<div class="other-comments">
		<h3>Other comments</h3>
		<ul class="details">
			<li v-for="(comment, index) in comments" :key="index">
				{{ index + 1 }}. {{ comment }}
				<button class="delete-comment" @click="deleteComment(index)">X</button>
			</li>
			<div>
			<input type="text" v-model="newComment" placeholder="Add new comment" />
			<button class="add-comment" @click="addComment">Add</button>
		</div>
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

	.delete-comment {
		color: red;
		background: none;
		outline: none;
		border: none;
		margin-left: 10px;
		cursor: pointer;
	}

	.add-comment {
		margin-left: 10px;
		padding: 5px;
		border: 1px solid #ccc;
		border-radius: 5px;
		background-color: #3b4e87;
		color: white;
		font-weight: bold;
		margin-top: 10px;
	}

	input {
		border: none;
		outline: none;
		padding: 5px;
		border-bottom: 1px solid #ccc;
		margin-bottom: 10px;
	}
}
</style>