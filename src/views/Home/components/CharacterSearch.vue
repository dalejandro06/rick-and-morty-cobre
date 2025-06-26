<template>
	<div class="character-search">
		<input
			v-model="model"
			type="text"
			placeholder="Buscar personaje..."
			class="character-search__input"
		/>
	</div>
</template>

<script setup lang="ts">
const model = defineModel();
</script>

<style scoped>
.character-search {
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 1rem;
}

.character-search__input {
	width: 100%;
	max-width: 400px;
	padding: 0.5rem 1rem;
	border: 1px solid #ccc;
	border-radius: 4px;
	font-size: 1rem;
	outline: none;
	transition: border-color 0.2s;
}

.character-search__input:focus {
	border-color: #42b983;
}
</style>
