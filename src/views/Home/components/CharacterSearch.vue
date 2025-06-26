<template>
	<div class="character-search">
		<input
			v-model="model"
			type="text"
			:placeholder="$t('home.search.placeholder')"
			class="character-search__input"
		/>
	</div>
</template>

<script setup lang="ts">
const model = defineModel();
</script>

<style scoped lang="scss">
.character-search {
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 1rem;

	&__input {
		width: 100%;
		max-width: 400px;
		padding: 0.5rem 1rem;
		border: 1px solid #ccc;
		border-radius: 4px;
		font-size: 1rem;
		outline: none;
		transition: border-color 0.2s;

		&:focus {
			border-color: #42b983;
		}
	}
}
</style>
