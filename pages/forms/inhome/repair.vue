<template>
    <MainContainer title="inHome Repair">
        <ContainerSection>
            <FormModuleKlantInfo />
            <ContDivider />
            <FormModuleRepairSituatie />
            <ContDivider />
            <FormModuleRepairTesten />
            <ContDivider />
            <FormModuleInhomeActies />
            <ContDivider />
            <FormModuleFinish />
            <FormModuleButtonGroup
                :formData="formData"
                :task="formStore.task"
                taskType="repair"
            />
        </ContainerSection>
    </MainContainer>
</template>
<script setup>
const formStore = useFormStore()
const formData = () => {
    return `Taaktype: inhome Repair
TaakID: ${formStore.task}
Klantnummer: ${formStore.klantnummer}
Adres: ${formStore.adres}
------------------------------
Situatie bij aankomst:
${formStore.omschrijving}

Testen:
${formStore.testen}

Acties:
${formStore.acties}

Materiaal:
${formStore.materiaal}

Resultaat:
${formStore.resultaat}

Modemtest:
${formStore.modemtest}`
}
</script>
