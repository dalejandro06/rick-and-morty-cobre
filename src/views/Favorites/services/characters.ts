import { StorageClient } from '@/shared/storageClient';

export const getStoredFavorites = async () => {
	const data = StorageClient.getItem('favorites');
	return data ? JSON.parse(data) : [];
};
