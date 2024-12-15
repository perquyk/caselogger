<template>
    <div class="mx-auto grid w-9/12 grid-cols-12 gap-3 p-3">
        <FormDiv title="Corporate Fibernet" />
        <FormDiv header="Woli Info">
            <FormModuleWoliInfo />
        </FormDiv>
        <!-- Dynamic CFN Chooser -->
        <FormDiv header="Product Selector">
            <FormModuleCFNTypeSelector />
        </FormDiv>
        <FormDiv header="Uitvoering">
            <FormModuleCFNUitvoering />
        </FormDiv>

        <FormDiv header="Testen">
            <FormModuleCFNTesten />
        </FormDiv>
        <FormDiv
            header="Mobile Info"
            v-if="
                formStore.main == 'Mobile' ||
                formStore.backup == 'ZTE' ||
                formStore.backup == 'Nokia 5G' ||
                formStore.backup == 'Ext. Antennte + SIC'
            "
        >
            <FormModuleCFNMobile />
        </FormDiv>

        <FormDiv header="Finishing Up">
            <p class="col-span-12 px-3 text-xs text-gray-400">
                Enkel extra materiaal dient hieronder nog ingegeven te worden.
            </p>
            <FormModuleFinish />
        </FormDiv>
        <FormDiv>
            <FormModuleButtonGroup
                :formData="formData"
                :task="formStore.task"
                taskType="CFN"
            />
        </FormDiv>
    </div>
</template>

<script setup>
const formStore = useFormStore()
const formData = () => {
    return woliInfo() + situatie() + uitvoering() + testen() + materiaal()
}
const woliInfo = () => {
    return `Taaktype: ${formStore.managed} Corporate Fibernet
WOLI: ${formStore.task}
Adres: ${formStore.adres}
--------------------------------------`
}

const situatie = () => {
    let output = `
Omschrijving Taak:
Installatie ${formStore.managed} Corporate Fibernet

Main: ${formStore.main}
Profiel: ${formStore.profiel}`
    if (formStore.managed == 'Managed') {
        if (formStore.backup != '') {
            output += `
Backup: ${formStore.backup}`
        }
    }

    output += `

Catsap-status bij aankomst: ${formStore.catsap}
Filter-status bij aankomst: ${formStore.filter}
Streetping bij aankomst: ${formStore.streetping}`

    return output
}
const uitvoering = () => {
    let output = `

Acties:
${formStore.acties}
`
    if (formStore.managed == 'Managed') {
        output += `
Geinstalleerde Router: ${formStore.router}`
    }
    if (formStore.main == 'Telenet Coax') {
        output += `
Geinstalleerde Modem: ${formStore.modemtype} - ${formStore.hfc}`
    }
    if (formStore.main == 'VDSL') {
        output += `
Geinstalleerde Modem: ${formStore.modemtype}
CID: ${formStore.hfc}`
    }
    if (formStore.main == 'GPON') {
        output += `
CID: ${formStore.hfc}`
    }
    if (formStore.main == 'Mobile') {
        if (formStore.modemtype == 'ZTE' || formStore.modemtype == 'Nokia 5G') {
            output += `
Geinstalleerde Modem: ${formStore.modemtype}
IMEI: ${formStore.hfc}`
        } else if (formStore.modemtype == 'Coiler/NGIS') {
            output += `Backup geplaatst via Externe Antenne`
        }
    }

    return output
}
const testen = () => {
    let output = `

Testen:
    `
    if (formStore.main != '') {
        output += `
Speedtest Main: ${formStore.mainSpeedDown}/${formStore.mainSpeedUp}`
    }
    if (formStore.backup != '') {
        output += `
Speedtest Backup: ${formStore.buSpeedDown}/${formStore.buSpeedUp}
Fail-over Test" ${formStore.failover}`
    }
    if (
        formStore.main == 'Mobile' ||
        formStore.backup == 'ZTE' ||
        formStore.backup == 'Nokia 5G' ||
        formStore.backup == 'Coiler/NGIS'
    ) {
        output += `
        
        RSRP: ${formStore.rsrp}
        MSISDN: ${formStore.msisdn}`
    }

    return output
}
const materiaal = () => {
    let output = `

Materiaal:`
    if (formStore.modemtype != '') {
        output += `
- ${formStore.modemtype}`
        if (
            formStore.hfc != '' &&
            formStore.modemtype != 'VDSL' &&
            formStore.modemtype != 'GPON' &&
            formStore.modemtype != 'Coiler/NGIS'
        ) {
            output += ` - ${formStore.hfc}`
        }
    }
    if (formStore.router != '') {
        output += `
- ${formStore.router}`
    }
    if (formStore.niu != '' && formStore.niu != 'Onveranderd') {
        output += `
- ${formStore.niu}`
    }
    if (
        formStore.backup != '' &&
        formStore.backup != 'Coiler/NGIS' &&
        formStore.backup != 'VDSL'
    ) {
        output += `
- ${formStore.backup} - ${formStore.backupIMEI}`
    }
    if (formStore.backup == 'VDSL') {
        output += `
- AMOD 4`
    }

    return output
}
const resultaat = () => {
    const output = `

Resultaat:
${formStore.resultaat}

Modemtest:
${formStore.modemtest}`
    return output
}
</script>
