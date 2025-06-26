<template>
	<div class="FavoritesView">
		<h1>{{ $t('favorites.title') }}</h1>
		<p>{{ $t('favorites.empty') }}</p>
	</div>
</template>

<style scoped lang="scss">
.FavoritesView {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 2rem;
	text-align: center;

	h1 {
		margin-bottom: 1rem;
		color: #2c3e50;
	}

	p {
		color: #666;
		font-size: 1.1rem;
	}
}
</style>
