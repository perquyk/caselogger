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
        </FormDiv>
        <FormDiv header="Finishing up">
            <FormModuleProjHPFinish />
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
    let output = ``
    output += situatie()
    return output
}

const situatie = () => {
    return `Taaktype: Project Filter on Tap
Klantnummer: ${formStore.klantnummer}
Task: ${formStore.task}
Adres: ${formStore.adres}
--------------------------------------
Omschrijving Taak:
Project Filter on Tap. Klant zijn installatie zou ingress veroorzaken op het net.

Situatie bij aankomst:
Filter aanwezig op tap: ${formStore.hpReplace}
Klant heeft powerlines: ${formStore.pwl}

Testen:
Ingress vastgesteld bij aankomst: ${formStore.ingress}
${tdr()}
Ingress vastgesteld na acties: ${formStore.ingressEnd}

Acties:
${formStore.acties}

PM verstuurd voor verwijdering HP: ${pmSent()}
`
}

const tdr = () => {
    if (!formStore.tdrCheckbox) {
        return ``
    } else {
        return `tdr meting uitgevoerd!`
    }
}
const pmSent = () => {
    if (formStore.pmSent) {
        return 'Ja'
    } else {
        return 'Nee'
    }
}
</script>
<style scoped></style>
