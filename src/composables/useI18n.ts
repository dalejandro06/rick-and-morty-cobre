import { useI18n as useVueI18n } from 'vue-i18n';

export function useI18n() {
	const { locale, availableLocales } = useVueI18n();

	const changeLocale = (newLocale: string) => {
		if (availableLocales.value.includes(newLocale)) {
			locale.value = newLocale;
		}
	};

	return {
		locale,
		availableLocales,
		changeLocale,
	};
}
