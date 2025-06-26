<template>
	<main class="Home">
		<div class="Home__search">
			<CharacterSearch v-model="searchModel" />
		</div>
		<h1 class="Home__title">{{ $t('home.title') }}</h1>
		<LoadingSkeleton v-if="characterStore.loading" />
		<div v-else class="Home__characters">
			<CharacterCard
				:is-favorite="isFavorite(character)"
				v-for="character in characterStore.characters"
				:key="character.id"
				:character="character"
				showSaveBtn
				@save-favorite="favoritesStore.toggleFavorite(character)"
			/>
		</div>
		<div class="Home__Pagination">
			<CustomPagination
				:current-page="characterStore.paginationInfo.currentPage"
				:total-pages="characterStore.paginationInfo.totalPages"
				@prev="characterStore.onPrevPage"
				@next="characterStore.onNextPage"
			/>
		</div>
	</main>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useCharactersStore } from './store/useCharactersStore';
import CharacterCard from '../../components/CharacterCard.vue';
import CustomPagination from './components/CustomPagination.vue';
import CharacterSearch from './components/CharacterSearch.vue';
import { debounce } from '@/utils/debounce';
import LoadingSkeleton from './components/LoadingSkeleton.vue';
import { useFavoritesStore } from '@/stores/useFavoritesStore';
import type { ICharacter } from '@/shared/entities';

const searchModel = ref('');
const characterStore = useCharactersStore();
const favoritesStore = useFavoritesStore();

watch(searchModel, () => {
	debounce(() => characterStore.handleSearch(searchModel.value), 300)();
});

onMounted(async () => {
	await characterStore.setCharacters();
	await favoritesStore.getFavorites();
});

const isFavorite = (character: ICharacter) => {
	return favoritesStore.favorites.some((item) => item.id === character.id);
};
</script>

<style scoped lang="scss">
.Home {
	margin: 1em;
	&__title {
		margin-bottom: 1em;
		width: 100%;
		text-align: center;
	}

	&__characters {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
	}
}
</style>
