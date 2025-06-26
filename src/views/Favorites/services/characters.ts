import type { ICharacter } from '@/shared/entities';
import { StorageClient } from '@/shared/storageClient';

export const getStoredFavorites = async (): Promise<ICharacter[]> => {
	const data = StorageClient.getItem('favorites');
	return data ? JSON.parse(data) : [];
};

export const saveFavoriteCharacter = async (character: ICharacter[]) => {
	const data = JSON.stringify(character);
	StorageClient.setItem('favorites', data);
	return getStoredFavorites();
};
