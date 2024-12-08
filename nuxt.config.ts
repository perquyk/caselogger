// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: [
        '@nuxt/ui',
        ['@pinia/nuxt', { autoImports: ['defineStore', 'acceptHMRUpdate'] }],
    ],
    imports: {
        dirs: ['stores'],
    },
    colorMode: {
        preference: 'dark',
    },
    nitro: {
        preset: 'node-server',
    },
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1.0',
            title: 'Caselogger',
        },
    },
})
