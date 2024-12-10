import { defineStore } from 'pinia'
export const useSelectStore = defineStore('selectStore', {
    state: () => ({
        patchLengthOptions: [
            { value: 'nvt', description: 'nvt' },
            { value: 'SC-LC 2m', description: 'SC-LC 2m' },
            { value: 'SC-LC 3m', description: 'SC-LC 3m' },
            { value: 'SC-SC 2m', description: 'SC-SC 2m' },
            { value: 'SC-SC 1m', description: 'SC-SC 1m' },
        ],
        gsxInstallType: [
            { value: 'SIP', description: 'SIP' },
            { value: 'ISDN', description: 'ISDN' },
            { value: 'ISDN-BRI', description: 'ISDN-BRI' },
            { value: 'PRA', description: 'PRA' },
        ],
        gsxOldsetup: [
            { value: 'oneAccess', description: 'oneAccess' },
            { value: 'AudioCodes', description: 'AudioCodes' },
        ],
        oknok: [
            { value: 'OK', description: 'OK' },
            { value: 'NOK', desription: 'NOK' },
        ],
    }),
})
