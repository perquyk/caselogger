import { defineStore } from 'pinia'
export const useFilterStore = defineStore('filterStore', {
    state: () => ({
        options: [
            { value: 'No Filter', description: 'No Filter' },
            { value: 'Anti-Dief', description: 'Anti-Dief' },
            { value: 'TOF-ITC', description: 'TOF-ITC' },
            { value: 'TOF 5-117', description: 'TOF 5-117' },
            { value: 'HP47', description: 'HP47' },
            { value: 'HP86', description: 'HP86' },
            { value: 'HP110', description: 'HP110' },
            { value: 'RPA12', description: 'RPA12' },
        ],
    }),
})
