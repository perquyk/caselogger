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
        vp: [
            { value: '', description: '' },
            { value: '0.66', description: '0.66' },
            { value: '0.85', description: '0.85' },
        ],
        hpReplace: [
            { value: '', description: '' },
            { value: 'Niet aanwezig', description: 'Niet aanwezig' },
            { value: 'Verwijderd', description: 'Verwijderd' },
            { value: 'Niet verwijderd', description: 'Niet verwijderd' },
        ],
        managed: [
            { value: '', description: '' },
            { value: 'Managed', description: 'Managed' },
            { value: 'Unmanaged', description: 'Unmanaged' },
        ],
        //still to populate
        main: [
            { value: '', description: '' },
            { value: 'Telenet Coax', description: 'Telenet Coax' },
            { value: 'VDSL', description: 'VDSL' },
            { value: 'GPON', description: 'GPON' },
            { value: 'VOO Coax', description: 'VOO Coax' },
            { value: 'Mobile', description: 'Mobile' },
        ],
        profiel: {
            tlnCoax: [
                { value: '', description: '' },
                { value: '1000/100', description: '1000/100' },
                { value: '750/75', description: '750/75' },
                { value: '500/50', description: '500/50' },
                { value: '240/40', description: '240/40' },
            ],
            vooCoax: [
                { value: '', description: '' },
                { value: '400/20', description: '400/20' },
                { value: '200/20', description: '200/20' },
                { value: '150/10', description: '150/10' },
            ],
            mob: [
                { value: '', description: '' },
                { value: '1000/100', description: '1000/100' },
                { value: '500/50', description: '500/50' },
                { value: '240/40', description: '240/40' },
                { value: '90/20', description: '90/20' },
            ],

            vdsl: [{ value: 'VDSL', description: 'VDSL' }],
            gpon: [{ value: 'GPON', description: 'GPON' }],
        },

        backup: [
            { value: '', description: '' },
            { value: 'ZTE', description: 'ZTE' },
            { value: 'Ext. Antenne + SIC', description: 'Ext. Antenne + SIC' },
            { value: 'Nokia 5g', description: 'Nokia 5G' },
            { value: 'VDSL', description: 'VDSL' },
        ],
    }),
})
