<template>
    <div class="mx-auto grid w-9/12 grid-cols-12 gap-3 p-3">
        <FormDiv title="inHome Repair"/>

        <FormDiv header="Klant Info">
            <FormModuleKlantInfo />
        </FormDiv>
        <FormDiv header="Situatie">
            <FormModuleRepairSituatie />
        </FormDiv>
        <FormDiv header="Testen">
            <FormModuleRepairTesten />
        </FormDiv>
        <FormDiv header="Acties">
            <FormModuleInhomeActies />
        </FormDiv>
        <FormDiv header="Finishing Up">
            <FormModuleFinish />
        </FormDiv>
        <FormDiv>
            <FormModuleButtonGroup
                :formData="formData"
                :task="formStore.task"
                taskType="repair"
            />
        </FormDiv>
    </div>
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
