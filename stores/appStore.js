import { defineStore } from 'pinia'
export const useAppStore = defineStore('applist', {
    state: () => ({
        applist: [
            {
                name: 'Frustrafix',
                author: 'Kenny Perquy',
                description: 'Voegt knoppen toe aan Smartfix.',
                action: 'Chrome Webstore',
                url: 'https://chromewebstore.google.com/detail/frustrafix/obefljbiiicgmfajdhnpaklocbnlnkaf?authuser=0&hl=nl',
                icon: 'i-lineicons-chrome',
                img: '/frustrafix-logo.png',
            },
            {
                name: 'Antscopy M-v2',
                author: 'Jonathan Geevaert',
                description: 'Voegt functies toe aan Ants',
                action: 'Download',
                url: 'https://www.facebook.com/groups/reptechtelenet/permalink/23891621783817644',
                icon: 'i-material-symbols-download',
                img: '/antscopy-logo.png',
            },
        ],
    }),
})
