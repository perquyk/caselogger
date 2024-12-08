import { defineStore } from 'pinia'
export const useCatsapStore = defineStore('catsap', {
    state: () => ({
        options: [
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
    }),
})
