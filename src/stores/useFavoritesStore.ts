import type { ICharacter } from '@/shared/entities';
import { getStoredFavorites, saveFavoriteCharacter } from '@/views/Favorites/services/characters';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useFavoritesStore = defineStore('favorites-store', () => {
	const favorites = ref<ICharacter[]>([]);

	const getFavorites = async () => {
		const storedFavorites = await getStoredFavorites();
		favorites.value = storedFavorites;
	};

	const toggleFavorite = async (character: ICharacter) => {
		const currentFavorites = await getStoredFavorites();
		const isFavoriteStored = currentFavorites.some((favorite) => favorite.id === character.id);
		if (isFavoriteStored) {
			favorites.value = currentFavorites.filter((favorite) => favorite.id !== character.id);
		} else {
			favorites.value = [...currentFavorites, character];
		}
		saveFavoriteCharacter(favorites.value);
	};

	return {
		favorites,
		toggleFavorite,
		getFavorites,
	};
});
