<template>
	<div class="LanguageSwitcher">
		<button
			v-for="locale in availableLocales"
			:key="locale"
			:class="[
				'LanguageSwitcher__button',
				{ 'LanguageSwitcher__button--active': locale === currentLocale },
			]"
			@click="changeLocale(locale)"
		>
			{{ getLocaleName(locale) }}
		</button>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from '@/composables/useI18n';

const { locale, availableLocales, changeLocale } = useI18n();

const currentLocale = computed(() => locale.value);

const getLocaleName = (locale: string) => {
	const names: Record<string, string> = {
		es: 'Español',
		en: 'Ingles',
	};
	return names[locale] || locale;
};
</script>

<style scoped lang="scss">
.LanguageSwitcher {
	display: flex;
	gap: 0.5rem;
	align-items: center;

	&__button {
		padding: 0.5rem 1rem;
		border: 1px solid #e5e7eb;
		background: transparent;
		border-radius: 0.375rem;
		font-size: 0.875rem;
		color: #6b7280;
		cursor: pointer;
		transition: all 0.2s ease-in-out;

		&:hover {
			background-color: #f3f4f6;
			color: #374151;
			border-color: #d1d5db;
		}

		&--active {
			background-color: #3b82f6;
			color: white;
			border-color: #3b82f6;
			box-shadow: 0 2px 4px rgba(59, 130, 246, 0.3);
		}
	}
}
</style>
