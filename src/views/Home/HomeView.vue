<template>
	<main class="Home">
		<div class="Home__search">
			<CharacterSearch v-model="searchModel" />
		</div>
		<h1 class="Home__title">{{ $t('home.title') }}</h1>
		<LoadingSkeleton v-if="store.loading" />
		<div v-else class="Home__characters">
			<CharacterCard
				:is-favorite="false"
				v-for="character in store.characters"
				:key="character.id"
				:image="character.image"
				:specimen="character.species"
				:name="character.name"
				:state="character.status"
				:gender="character.gender"
				:id="character.id"
				showSaveBtn
			/>
		</div>
		<div class="Home__Pagination">
			<CustomPagination
				:current-page="store.paginationInfo.currentPage"
				:total-pages="store.paginationInfo.totalPages"
				@prev="store.onPrevPage"
				@next="store.onNextPage"
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

const searchModel = ref('');
const store = useCharactersStore();

watch(searchModel, () => {
	debounce(() => store.handleSearch(searchModel.value), 300)();
});

onMounted(async () => {
	await store.setCharacters();
});
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
