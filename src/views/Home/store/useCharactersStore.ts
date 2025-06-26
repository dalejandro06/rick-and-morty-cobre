import type { ICharacter } from '@/shared/entities';
import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';
import { getCharacters, searchCharacters } from '../services/characterApi';

export const useCharactersStore = defineStore('character-store', () => {
	const characters = ref<ICharacter[] | null>(null);
	const loading = ref(false);
	const paginationInfo = reactive({
		currentPage: 1,
		totalPages: 0,
	});

	const setCharacters = async (pageNumber: number = 1) => {
		loading.value = true;
		try {
			const data = await getCharacters(pageNumber);
			characters.value = data.results;
			paginationInfo.totalPages = data.info.pages;
			paginationInfo.currentPage = pageNumber;
		} catch (error) {
			console.log('error', error);
		} finally {
			loading.value = false;
		}
	};

	const onNextPage = async () => {
		if (paginationInfo.currentPage < paginationInfo.totalPages) {
			await setCharacters(paginationInfo.currentPage + 1);
		}
	};

	const onPrevPage = async () => {
		if (paginationInfo.currentPage > 1) {
			await setCharacters(paginationInfo.currentPage - 1);
		}
	};

	const handleSearch = async (value: string) => {
		if (value.trim() === '') {
			await setCharacters();
			return;
		}
		loading.value = true;
		try {
			const data = await searchCharacters(value);
			characters.value = data.results;
			paginationInfo.totalPages = data.info.pages;
			paginationInfo.currentPage = 1;
		} catch {
			characters.value = [];
			paginationInfo.totalPages = 0;
		} finally {
			loading.value = false;
		}
	};

	return {
		characters,
		loading,
		setCharacters,
		onNextPage,
		onPrevPage,
		paginationInfo,
		handleSearch,
	};
});
