import { ApiClient } from '@/shared/ApiClient';
import type { ApiResponse } from './apiTypes';

export async function getCharacters(page: number = 1) {
	const data = await ApiClient.get<ApiResponse>(`/character?page=${page}`);
	// mapper
	return data.data;
}

export async function searchCharacters(characterName: string) {
	const data = await ApiClient.get<ApiResponse>(`/character?name=${characterName}`);
	// mapper
	return data.data;
}
