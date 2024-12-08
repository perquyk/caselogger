import { defineStore } from 'pinia'
export const useUnhappyStore = defineStore('unhappyStore', {
    state: () => ({
        sleutelvast: ['OK', 'NOK'],
        conn: ['OK', 'NOK'],
        cmVervangen: ['Ja', 'Nee'],
        tdrDone: ['Ja', 'Nee'],
        vp: ['0.66', '0.85'],
        connTapReplace: ['Ja', 'Nee'],
        connNIUReplace: ['Ja', 'Nee'],
        verlengReplace: ['Ja', 'Nee', 'NVT'],
        dropReplace: ['Ja', 'Nee'],
        hpReplace: ['Ja', 'Nee'],
        ingress: ['Ja', 'Nee', 'NVT'],
    }),
})
