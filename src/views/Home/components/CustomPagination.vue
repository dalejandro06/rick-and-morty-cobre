<template>
	<div class="CustomPagination">
		<button @click="$emit('prev')" :disabled="currentPage <= 1">
			{{ $t('home.pagination.previous') }}
		</button>
		<span>{{ $t('home.pagination.page', { current: currentPage, total: totalPages }) }}</span>
		<button @click="$emit('next')" :disabled="currentPage >= totalPages">
			{{ $t('home.pagination.next') }}
		</button>
	</div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

defineProps<{
	currentPage: number;
	totalPages: number;
}>();

defineEmits(['prev', 'next']);
</script>

<style scoped lang="scss">
.CustomPagination {
	display: flex;
	align-items: center;
	gap: 1rem;
	justify-content: center;
	margin: 1em 0;

	button {
		background: none;
		border: 1px solid #ccc;
		padding: 0.5em 1.2em;
		border-radius: 6px;
		font-size: 1em;
		color: #333;
		transition:
			background 0.2s,
			border-color 0.2s,
			color 0.2s;
		cursor: pointer;

		&:disabled {
			opacity: 0.5;
			cursor: not-allowed;
		}

		&:hover:not(:disabled) {
			background: #f5f5f5;
			border-color: #888;
			color: #111;
		}
	}
}
</style>
