<template>
    <MainContainer title="inHome Install">
        <ContainerSection>
            <FormModuleKlantInfo />
            <ContDivider />
            <FormModuleInstallSituatie />
            <ContDivider />
            <FormModuleInhomeActies />
            <ContDivider />
            <FormModuleFinish />
            <FormModuleButtonGroup
                :formData="formData"
                :task="formStore.task"
                taskType="install"
            />
        </ContainerSection>
    </MainContainer>
</template>
<script setup>
import ContDivider from '~/components/ContDivider.vue'

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
