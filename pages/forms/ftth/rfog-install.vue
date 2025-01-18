<template>
    <div class="mx-auto grid w-9/12 grid-cols-12 gap-3 p-3">
        <FormDiv title="RFoG Install" />
        <FormDiv header="Klant Info">
            <FormModuleKlantInfo />
        </FormDiv>
        <FormDiv header="Situatie bij aankomst" cols="12">
            <FormModuleRfogSituatie />
        </FormDiv>
        <FormDiv header="Acties" cols="12">
            <FormModuleInhomeActies />
        </FormDiv>
        <FormDiv header="Finishing up">
            <FormModuleFinish />
        </FormDiv>
        <FormDiv header="">
            <FormModuleButtonGroup
                :formData="formData"
                :task="formStore.task"
                taskType="rfog-install"
            />
        </FormDiv>
    </div>
</template>

<script setup>
const formStore = useFormStore()
const formData = () => {
    return `Taaktype: FTTH - RFoG Install
TaakID: ${formStore.task}
Klantnummer: ${formStore.klantnummer}
Adres: ${formStore.adres}
------------------------------
Omschrijving Taak:
${formStore.omschrijving}

Acties:
${formStore.acties}

Materiaal:
${formStore.materiaal}

Resultaat:
${formStore.resultaat}

Patch informatie:
- lengte patchsnoer: ${formStore.patchlength}
- patchpositie: ${formStore.mdrpos} - ${formStore.rechtspos}

Modemtest:
${formStore.modemtest}
`
}
</script>
