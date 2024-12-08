import { defineStore } from 'pinia'
export const useFormStore = defineStore('formStore', {
    state: () => ({
        klantnummer: '',
        task: '',
        adres: '',
        omschrijving: '',
        catsap: '',
        filter: '',
        streetping: '',
        acties: '',
        materiaal: '',
        resultaat: '',
        modemtest: '',
    }),
    actions: {
        updateKlantnummer(value) {
            this.klantnummer = value
        },
        updateTask(value) {
            this.task = value
        },
        updateAdres(value) {
            this.adres = value
        },
    },
})
