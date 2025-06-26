<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
	<div class="App">
		<header class="App__header">
			<nav class="App__nav">
				<RouterLink to="/" class="App__nav-link">Home</RouterLink>
				<RouterLink to="/favorites" class="App__nav-link">Favoritos</RouterLink>
			</nav>
		</header>
		<RouterView />
	</div>
</template>

<style lang="scss" scoped>
.App {
	margin: 1.5rem;
	padding: 1.5rem;

	&__header {
		display: flex;
		justify-content: center;
		margin-bottom: 2rem;
		padding: 1rem 0;
		border-bottom: 2px solid #e5e7eb;
	}

	&__nav {
		display: flex;
		gap: 1rem;
		align-items: center;
	}

	&__nav-link {
		display: inline-block;
		padding: 0.75rem 1.5rem;
		background-color: transparent;
		color: #6b7280;
		text-decoration: none;
		border-radius: 0.5rem;
		font-weight: 500;
		transition: all 0.2s ease-in-out;
		border: 2px solid transparent;

		&:hover {
			background-color: #f3f4f6;
			color: #374151;
			border-color: #d1d5db;
		}

		&:active {
			background-color: #e5e7eb;
		}

		&.router-link-active {
			background-color: #3b82f6;
			color: white;
			border-color: #3b82f6;
			box-shadow: 0 2px 4px rgba(59, 130, 246, 0.3);
		}
	}
}
</style>
