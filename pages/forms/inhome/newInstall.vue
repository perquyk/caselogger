<template>
    <div class="mx-auto grid w-9/12 grid-cols-12 gap-5 p-3">
        <FormDiv title="inHome Install" />
        <FormDiv>
            <FormModuleKlantInfo />
        </FormDiv>
        <FormDiv cols="12">
            <FormModuleInstallSituatie />
        </FormDiv>
        <FormDiv>
            <FormModuleInhomeActies />
        </FormDiv>
        <FormDiv>
            <FormModuleFinish />
        </FormDiv>
        <FormDiv>
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
