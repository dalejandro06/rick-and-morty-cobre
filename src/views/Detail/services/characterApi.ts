import type { ICharacter } from '@/shared/entities';
import { ApiClient } from '@/shared/ApiClient';

export async function getCharacterById(id: string): Promise<ICharacter> {
	const data = await ApiClient.get<ICharacter>(`/character/${id}`);
	return data.data;
}
