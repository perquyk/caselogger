<template>
    <div class="mx-auto grid w-9/12 grid-cols-12 gap-3 p-3">
        <FormDiv title="PSV KA" />
        <FormDiv header="Woli Info">
            <FormModuleWoliInfo />
        </FormDiv>
        <FormDiv header="Finishing up">
            <FormModulePSVfinish />
        </FormDiv>
        <FormDiv>
            <FormModuleButtonGroup
                :formData="formData"
                :task="formStore.task"
                taskType="PSV-KA"
            />
        </FormDiv>
    </div>
</template>

<script setup>
const formStore = useFormStore()
const formData = () => {
    return `Taaktype: PSV KA
WOLI: ${formStore.task}
Adres: ${formStore.adres}
____________________________________________________________
Omschrijving Taak:
Uitvoeren PSV KA voor ${formStore.adres}
    
Issues/Remarks:
${formStore.remarks}

Nodige Materialen voor Build:
${formStore.materiaal}

Resultaat:
${formStore.resultaat}`
}
</script>
