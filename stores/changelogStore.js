import { defineStore } from 'pinia'
export const useChangeStore = defineStore('changeStore', {
    state: () => ({
        changes: [
            { date: '8/12/2024', description: 'Added repair form' },
            {
                date: '8/12/2024',
                description: 'Added changelog and basic structure to homepage',
            },
            { date: '8/12/2024', description: 'First form created' },
        ],
    }),
})
