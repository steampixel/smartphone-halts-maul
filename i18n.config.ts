import config from '~/config.json';

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'de',
    messages: {
        de: config.messages.de,
        en: config.messages.en,
    }
}))