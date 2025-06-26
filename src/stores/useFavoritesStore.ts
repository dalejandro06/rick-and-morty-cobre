import type { ICharacter } from '@/shared/entities';
import { getStoredFavorites, saveFavoriteCharacter } from '@/views/Favorites/services/characters';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useFavoritesStore = defineStore('favorites-store', () => {
	const favorites = ref<ICharacter[]>([]);

	const toggleFavorite = async (character: ICharacter) => {
		console.log('character', character);
		const currentFavorites = await getStoredFavorites();

		const isFavoriteStored = currentFavorites.find((favorite) => favorite.id === character.id);

		// Delete favorite from storage
		if (isFavoriteStored) {
			favorites.value = currentFavorites.filter((favorite) => favorite.id !== character.id);
		} else {
			favorites.value.push(character);
			saveFavoriteCharacter(favorites.value);
		}
	};

	return {
		favorites,
		toggleFavorite,
	};
});
