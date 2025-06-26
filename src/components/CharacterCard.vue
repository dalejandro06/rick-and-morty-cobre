<template>
	<article class="CharacterCard">
		<img :src="image" :alt="name" class="CharacterCard__image" width="304" height="304" />
		<h2 class="CharacterCard__title">{{ name }}</h2>
		<div class="CharacterCard__description">
			<p>
				<strong>{{ $t('character.status') }}:</strong> {{ state }}
			</p>
			<p>
				<strong>{{ $t('character.gender') }}:</strong> {{ gender }}
			</p>
			<p>
				<strong>{{ $t('character.species') }}:</strong> {{ specimen }}
			</p>
		</div>
		<div class="CharacterCard__actions">
			<button
				v-if="showSaveBtn"
				:class="[
					'CharacterCard__button--favorite',
					{ 'CharacterCard__button--favorite--active': isFavorite },
				]"
				@click.stop="saveFavorite"
			>
				{{ $t('character.actions.favorite') }}
			</button>
			<RouterLink
				:to="`/detail/${id}`"
				class="CharacterCard__button--detail"
				@click.stop="saveFavorite"
			>
				{{ $t('character.actions.detail') }}
			</RouterLink>
		</div>
	</article>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

const props = defineProps<{
	image: string;
	name: string;
	state: string;
	gender: string;
	specimen: string;
	id: number;
	showSaveBtn: boolean;
	isFavorite?: boolean;
}>();

const emit = defineEmits(['save-favorite']);

function saveFavorite() {
	emit('save-favorite', {
		id: props.id,
		name: props.name,
		image: props.image,
		status: props.state,
		gender: props.gender,
		species: props.specimen,
		location: { name: '' }, // Default empty location since it's not provided
	});
}
</script>

<style scoped lang="scss">
.CharacterCard {
	color: inherit;
	border-radius: 1rem;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
	border: 1px solid var(--color-border, #e0e0e0);
	padding: 1.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	transition: all 0.3s;

	&:hover {
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
		border: 1.5px solid var(--color-border-hover, #cccccc);
		background-color: antiquewhite;
		transform: scale(1.09);
	}

	&__image {
		object-fit: cover;
		margin-bottom: 1rem;
		border: 2px solid var(--color-border, #e0e0e0);
	}

	&__title {
		font-size: 1.5rem;
		margin-bottom: 0.75rem;
		color: var(--color-heading, #2c3e50);
		text-align: center;
	}

	&__actions {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
		justify-content: space-between;
		width: 100%;
	}

	&__description {
		font-size: 1rem;
		color: var(--color-text, #2c3e50);
		text-align: left;
		width: 100%;
	}

	&__button--favorite,
	&__button--detail {
		margin-top: 1rem;
		padding: 0.5rem 1rem;
		border: none;
		border-radius: 0.5rem;
		background-color: #ffcc00;
		text-align: center;
		font-size: 0.9rem;
		color: #2c3e50;
		font-weight: bold;
		cursor: pointer;
		transition: background 0.2s;
		text-decoration: none;

		&:hover {
			background-color: #ffd700;
		}
	}

	&__button--favorite--active {
		background-color: #ff9800;
		color: #fff;
		border: 2px solid #ff9800;
	}
}
</style>
