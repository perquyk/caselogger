import { defineStore } from 'pinia'
export const useSelectStore = defineStore('selectStore', {
    state: () => ({
        catsapOptions: [
            { value: '', description: '' },
            { value: 1, description: '1 - Active Cable Customer' },
            { value: 2, description: '2 - Former Cable Customer' },
            { value: 3, description: '3 - No Dropcable (cable in street)' },
            { value: 4, description: '4 - No Service (No cable in street)' },
            { value: 5, description: '5 - Rijgnet' },
            {
                value: 6,
                description: '6 - Dropcable Finished (Ready for connection',
            },
            {
                value: 7,
                description: '7 - Dropcable Placed (Not ready for connection)',
            },
        ],
        filterOptions: [
            { value: '', description: '' },
            { value: 'No Filter', description: 'No Filter' },
            { value: 'Anti-Dief', description: 'Anti-Dief' },
            { value: 'TOF-ITC', description: 'TOF-ITC' },
            { value: 'TOF 5-117', description: 'TOF 5-117' },
            { value: 'HP47', description: 'HP47' },
            { value: 'HP86', description: 'HP86' },
            { value: 'HP110', description: 'HP110' },
            { value: 'RPA12', description: 'RPA12' },
        ],
        patchLengthOptions: [
            { value: '', description: '' },
            { value: 'nvt', description: 'nvt' },
            { value: 'SC-LC 2m', description: 'SC-LC 2m' },
            { value: 'SC-LC 3m', description: 'SC-LC 3m' },
            { value: 'SC-SC 2m', description: 'SC-SC 2m' },
            { value: 'SC-SC 1m', description: 'SC-SC 1m' },
        ],
        gsxInstallType: [
            { value: '', description: '' },
            { value: 'SIP', description: 'SIP' },
            { value: 'ISDN', description: 'ISDN' },
            { value: 'ISDN-BRI', description: 'ISDN-BRI' },
            { value: 'PRA', description: 'PRA' },
        ],
        gsxOldsetup: [
            { value: '', description: '' },
            { value: 'oneAccess', description: 'oneAccess' },
            { value: 'AudioCodes', description: 'AudioCodes' },
        ],
        oknok: [
            { value: '', description: '' },
            { value: 'OK', description: 'OK' },
            { value: 'NOK', description: 'NOK' },
        ],
        vp: [
            { value: '', description: '' },
            { value: '0.66', description: '0.66' },
            { value: '0.85', description: '0.85' },
        ],
        janee: [
            { value: '', description: '' },
            { value: 'Ja', description: 'Ja' },
            { value: 'Nee', description: 'Nee' },
        ],
        janeenvt: [
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
    }),
})
