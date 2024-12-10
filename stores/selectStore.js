import { defineStore } from 'pinia'
export const useSelectStore = defineStore('selectStore', {
    state: () => ({
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
    }),
})
