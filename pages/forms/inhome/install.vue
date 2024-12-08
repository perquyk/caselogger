<template>
    <div class="mx-auto my-3 w-9/12 rounded-lg bg-gray-800 p-3">
        <h2 class="text-2xl">inHome Install</h2>
        <FormModuleKlantInfo />
        <FormModuleInstallSituatie />
        <FormModuleInhomeActies />
        <FormModuleFinish />
        <FormModuleButtonGroup
            :formData="formData"
            :task="formStore.task"
            taskType="install"
        />
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
