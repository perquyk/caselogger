import { defineStore } from 'pinia'
export const useSelectStore = defineStore('selectStore', {
    state: () => ({
        coaxModems: [
            { value: '', description: '' },
            { value: 'D3.1 ERT', description: 'D3.1 ERT' },
            { value: 'D3.1 HGW', description: 'D3.1 HGW' },
            { value: 'D3.1 WIFI6', description: 'D3.1 WIFI6' },
            { value: 'D3.0 HGW', description: 'D3.0 HGW' },
        ],
        niuTypes: [
            { value: '', description: '' },
            { value: 'Mampaey - 85MHz Garage 2-Data', description: 'Mampaey - 85MHz Garage 2-Data' },
            { value: 'Wall Outlet 85MHz', description: 'Wall Outlet 85MHz' },
            { value: '85MHz 4-Data', description: '85MHz 4-Data' },
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
            { value: 'Nokia 5G', description: 'Nokia 5G' },
            { value: 'VDSL', description: 'VDSL' },
        ],
        niu: [
            { value: 'Onveranderd', description: 'Onveranderd' },
            { value: '85MHz 2-Data', description: '85MHz 2-Data' },
            { value: '85MHz 4-Data', description: '85MHz 4-Data' },
            { value: '65MHz 4-Data', description: '65MHz 4-Data' },
        ],
        router: [
            { value: '', description: '' },
            { value: 'HPE MSR2003', description: 'HPE MSR2003' },
            { value: 'HPE MSR3012', description: 'HPE MSR3012' },
            { value: 'HPE MSR 985x', description: 'HPE MSR 985x' },
            { value: 'Telco', description: 'Telco' },
        ],
        modemtype: {
            tlnCoax: [
                { value: '', description: '' },
                { value: 'D3.1 ERT', description: 'D3.1 ERT' },
            ],
            vdsl: [
                { value: '', description: '' },
                { value: 'AMOD 3', description: 'AMOD 3' },
                { value: 'AMOD 4', description: 'AMOD 4' },
            ],
            gpon: [{ value: 'nvt', description: 'nvt' }],
            vooCoax: [{ value: 'nvt', decription: 'nvt' }],
            mob: [
                { value: '', description: '' },
                { value: 'ZTE', description: 'ZTE' },
                { value: 'Nokia 5G', description: 'Nokia 5G' },
                { value: 'Coiler/NGIS', description: 'Coiler/NGIS' },
            ],
        },
    }),
})
