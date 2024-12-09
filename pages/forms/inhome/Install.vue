<template>
    <div class="mx-auto grid w-9/12 grid-cols-12 gap-3 p-3">
        <FormDiv title="inHome Install" />
        <FormDiv header="Klant Info">
            <FormModuleKlantInfo />
        </FormDiv>
        <FormDiv header="Situatie bij aankomst" cols="12">
            <FormModuleInstallSituatie />
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
                taskType="install"
            />
        </FormDiv>
    </div>
</template>

<script setup>
const formStore = useFormStore()
const formData = () => {
    return `Taaktype: inHome Install
TaakID: ${formStore.task}
Klantnummer: ${formStore.klantnummer}
Adres: ${formStore.adres}
------------------------------
Omschrijving Taak:
${formStore.omschrijving}

Testen bij aankomst:
Catsap: ${formStore.catsap}
Filter: ${formStore.filter}
Streetping: ${formStore.streetping}

Acties:
${formStore.acties}

Materiaal:
${formStore.materiaal}

Resultaat:
${formStore.resultaat}

Modemtest:
${formStore.modemtest}
`
}
</script>
