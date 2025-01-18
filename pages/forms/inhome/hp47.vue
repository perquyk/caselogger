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
                :formDate="formData"
                :task="formStore.task"
                tasktype="project-hp47"
            />
        </FormDiv>
    </div>
</template>
<script setup>
const formStore = useFormStore()
const formData = () => {
    return `not yet implemented`
}
</script>
<style scoped></style>
