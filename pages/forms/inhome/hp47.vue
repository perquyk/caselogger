<template>
    <div class="mx-auto grid w-9/12 grid-cols-12 gap-3 p-3">
        <FormDiv title="Project Filter on Tap" />
        <FormDiv>
            <UButton
                class="col-span-12"
                label="Project informatie"
                block
                to="https://comm.unit-t.eu/thehive/article/project-filter-on-tap/https://comm.unit-t.eu/thehive/article/project-filter-on-tap/"
                target="_blank"
            />
        </FormDiv>
        <FormDiv header="Klant Informatie">
            <FormModuleKlantInfo />
        </FormDiv>
        <FormDiv header="Testen">
            <FormModuleProjHPTests />
        </FormDiv>
        <FormDiv header="Uitgevoerde Acties">
            <FormModuleInhomeActies />
            <FormModuleProjHPActies />

        </FormDiv>
        <FormDiv header="Finishing up">
            <FormModuleFinish />
        </FormDiv>
        <FormDiv>
            <FormModuleButtonGroup
                :formData="formData"
                :task="formStore.task"
                tasktype="project-hp47"
            />
        </FormDiv>
    </div>
</template>
<script setup>
const formStore = useFormStore()
const formData = () => {
    return `Taaktype: Project Filter on Tap
Klantnummer: ${formStore.klantnummer}
Task: ${formStore.task}
Adres: ${formStore.adres}
--------------------------------------
Omschrijving Taak:
Project Filter on Tap. Klant zijn installatie zou ingress veroorzaken op het net.
Technieker is ter plaatse om de ingress te localiseren en op te lossen.

Situatie bij aankomst:
Filter aanwezig op tap: ${formStore.hpReplace}
Klant heeft powerlines: ${formStore.pwl}

Testen:
Ingress vastgesteld bij aankomst: ${formStore.ingress}
${tdr()}
Ingress vastgesteld na acties: ${formStore.ingressEnd}

Acties:
${formStore.acties}
${hpActions()}

Materiaal:
${formStore.materiaal}

Resultaat:
${formStore.resultaat}

Modemtest:
${formStore.modemtest}
`
}

const tdr = () => {
    if (!formStore.tdrCheckbox) {
        return ``
    } else {
        return `TDR-meting uitgevoerd:
- Vp: ${formStore.vp}
- Tap > NIU: ${formStore.tapniulength} meter - Events: ${formStore.tapniuevents}
- NIU > Tap: ${formStore.niutaplength} meter - Events: ${formStore.niutapevents}
`
    }
}
const hpActions = () => {
    let output = ``;
    if (formStore.hpRemove === 'false'){
        output += `HP verwijderd: Nee`
    } else {
        output +=  `HP verwijderd: Ja
PM verstuurd: ${pmSent()}`
    }
    return output
}

const pmSent = () => {
    if (!formStore.pmSent) {
        return `Nee`
    }else{return `Ja`}
}
</script>
<style scoped></style>
