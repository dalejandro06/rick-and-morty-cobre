import { createI18n } from 'vue-i18n';
import es from './locales/es.json';
import en from './locales/en.json';

export default createI18n({
	legacy: false,
	globalInjection: true,
	locale: 'es',
	fallbackLocale: 'en',
	messages: {
		es,
		en,
	},
});
