<template>
	<div class="FavoritesView">
		<CharacterCard
			:show-save-btn="false"
			v-for="character in favorites"
			:key="character.id"
			:character="character"
			:is-favorite="false"
		/>
		<div v-if="favorites.length === 0" class="FavoritesView__empty">
			No tienes favoritos guardados.
		</div>
	</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import CharacterCard from '@/components/CharacterCard.vue';
import type { ICharacter } from '@/shared/entities';
import { getStoredFavorites } from './services/characters';

const favorites = ref<ICharacter[]>([]);

onMounted(() => {
	getStoredFavorites().then((data) => (favorites.value = data));
});
</script>

<style>
.FavoritesView {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	margin: 3rem 0;
	gap: 3rem;
}
.FavoritesView__empty {
	grid-column: 1 / -1;
	text-align: center;
	color: #888;
	font-size: 1.2rem;
}
</style>
