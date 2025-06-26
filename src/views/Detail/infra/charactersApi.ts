import { ApiClient } from '@/shared/ApiClient';
import type { ICharacter } from '@/shared/entities';

export const fetchCharacterById = async (id: string) => {
	const data = await ApiClient.get<ICharacter>(`/character/${id}`);
	return data.data;
};
