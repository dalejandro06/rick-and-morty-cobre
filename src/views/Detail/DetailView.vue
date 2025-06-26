<template>
	<div class="DetailView">
		<div v-if="loading" class="DetailView__loading">{{ $t('detail.loading') }}</div>
		<div v-else-if="character" class="DetailView__card">
			<img :src="character.image" :alt="character.name" class="DetailView__image" />
			<h2 class="DetailView__name">{{ character.name }}</h2>
			<p class="DetailView__species">{{ character.species }}</p>
			<p class="DetailView__gender">{{ character.gender }}</p>
		</div>
		<div v-else class="DetailView__not-found">{{ $t('detail.notFound') }}</div>
	</div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { getCharacterById } from './services/characterApi';
import type { ICharacter } from '@/shared/entities';

const route = useRoute();
const character = ref<ICharacter | null>(null);
const loading = ref(false);

onMounted(async () => {
	try {
		if (route.params.id && typeof route.params.id === 'string') {
			loading.value = true;
			const data = await getCharacterById(route.params.id);
			character.value = data;
		}
	} catch (error) {
		console.log('error', error);
	} finally {
		loading.value = false;
	}
});
</script>

<style scoped lang="scss">
.DetailView {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 2rem;

	&__loading {
		margin-top: 2rem;
		color: #888;
	}

	&__not-found {
		margin-top: 2rem;
		color: #888;
	}

	&__card {
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #fff;
		border-radius: 12px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
		padding: 2rem 2.5rem;
		min-width: 260px;
	}

	&__image {
		width: 120px;
		height: 120px;
		border-radius: 50%;
		object-fit: cover;
		margin-bottom: 1rem;
	}

	&__name {
		margin: 0.5rem 0 0.2rem 0;
		font-size: 1.5rem;
		font-weight: 600;
	}

	&__species,
	&__gender {
		margin: 0.1rem 0;
		color: #666;
		font-size: 1rem;
	}
}
</style>
