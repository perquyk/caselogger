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
            {
                name: 'Antscopy M-v3',
                author: 'Kenny Perquy',
                description:
                    'Voegt kopieer-functie toe aan Ants. Zit ook reeds ingebouwd in Frustrafix. ',
                action: 'Chrome Webstore',
                url: 'https://chromewebstore.google.com/detail/antscopy/ndcgnmdjcfifegkmmlfnjiplbiochjhj?authuser=0&hl=nl',
                icon: 'i-lineicons-chrome',
                img: '/antscopy-logo.png',
            },
            {
                name: 'Caselogger OLD',
                author: 'Kenny Perquy',
                description: 'Oude versie van deze tool.',
                action: 'Go to Caselogger',
                url: 'https://perquyk.org',
                icon: 'i-pepicons-pop-leave',
                img: 'Logo128.png',
            },
        ],
    }),
})
