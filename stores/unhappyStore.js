import { defineStore } from 'pinia'
export const useUnhappyStore = defineStore('unhappyStore', {
    state: () => ({
        sleutelvast: [
            { value: '', description: '' },
            { value: 'OK', description: 'OK' },
            { value: 'OK', description: 'NOK' },
        ],
        conn: [
            { value: '', description: '' },
            { value: 'OK', description: 'OK' },
            { value: 'OK', description: 'NOK' },
        ],
        cmVervangen: [
            { value: '', description: '' },
            { value: 'Ja', description: 'Ja' },
            { value: 'Nee', description: 'Nee' },
        ],
        tdrDone: [
            { value: '', description: '' },
            { value: 'Ja', description: 'Ja' },
            { value: 'Nee', description: 'Nee' },
        ],
        vp: [
            { value: '', description: '' },
            { value: '0.66', description: '0.66' },
            { value: '0.85', description: '0.85' },
        ],
        connTapReplace: [
            { value: '', description: '' },
            { value: 'Ja', description: 'Ja' },
            { value: 'Nee', description: 'Nee' },
        ],
        connNIUReplace: [
            { value: '', description: '' },
            { value: 'Ja', description: 'Ja' },
            { value: 'Nee', description: 'Nee' },
        ],
        verlengReplace: [
            { value: '', description: '' },
            { value: 'Ja', description: 'Ja' },
            { value: 'Nee', description: 'Nee' },
            { value: 'NVT', description: 'NVT' },
        ],
        dropReplace: [
            { value: '', description: '' },
            { value: 'Ja', description: 'Ja' },
            { value: 'Nee', description: 'Nee' },
            { value: 'NVT', description: 'NVT' },
        ],
        hpReplace: [
            { value: '', description: '' },
            { value: 'Niet aanwezig', description: 'Niet aanwezig' },
            { value: 'Verwijderd', description: 'Verwijderd' },
            { value: 'Niet verwijderd', description: 'Niet verwijderd' },
        ],
        ingress: [
            { value: '', description: '' },
            { value: 'Ja', description: 'Ja' },
            { value: 'Nee', description: 'Nee' },
            { value: 'NVT', description: 'NVT' },
        ],
    }),
})
