<template>
	<div class="FavoritesView">
		<CharacterCard
			:show-save-btn="false"
			v-for="character in favoritesStore.favorites"
			:key="character.id"
			:character="character"
			:is-favorite="false"
		/>
		<div v-if="favoritesStore.favorites.length === 0" class="FavoritesView__empty">
			No tienes favoritos guardados.
		</div>
	</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import CharacterCard from '@/components/CharacterCard.vue';
import { useFavoritesStore } from '@/stores/useFavoritesStore';

const favoritesStore = useFavoritesStore();

onMounted(async () => {
	await favoritesStore.getFavorites();
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
