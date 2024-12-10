import { defineStore } from 'pinia'
export const useChangeStore = defineStore('changeStore', {
    state: () => ({
        changes: [
            { data: '11/12/2024', description: 'Added PSV KA Form' },
            { date: '10/12/2024', description: 'Added RFoG and GSX Forms' },
            {
                date: '9/12/2024',
                description: 'Added Project Unhappy Dropcable form',
            },
            { date: '8/12/2024', description: 'Added repair form.' },
            {
                date: '8/12/2024',
                description: 'Added changelog and basic structure to homepage',
            },
            { date: '8/12/2024', description: 'First form created' },
        ],
    }),
})
