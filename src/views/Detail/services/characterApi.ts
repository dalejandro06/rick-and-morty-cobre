import type { ICharacter } from '@/shared/entities';
import { fetchCharacterById } from '../infra/charactersApi';

export async function getCharacterById(id: string): Promise<ICharacter> {
	const data = await fetchCharacterById(id);
	return data;
}
