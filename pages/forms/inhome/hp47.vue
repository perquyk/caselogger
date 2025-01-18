<template>
    <div class="mx-auto grid w-9/12 grid-cols-12 gap-3 p-3">
        <FormDiv title="Project Filter on Tap"/>
        <FormDiv>
            <UButton class="col-span-12" label="Project informatie" block to="https://comm.unit-t.eu/thehive/article/project-filter-on-tap/https://comm.unit-t.eu/thehive/article/project-filter-on-tap/"/>
        </FormDiv>
        <FormDiv header="Klant Informatie">
            <FormModuleKlantInfo/>
        </FormDiv>
        <FormDiv header="Testen">
            <div class="col-span-12">
                - ingressmeting bij aankomst
                --- uitleg ingress via help knop!
            [ ] - PWL?
                    -> if yes: pingtest help button!
            [ ] - TDR?
                    -> if yes: show tdr module!
                - ingressmeting einde interventie
            </div>
        </FormDiv>
        <FormDiv header="Uitgevoerde Acties">
            <FormModuleInhomeActies />
        </FormDiv>
        <FormDiv header="Finishing up">
            <div class="col-span-12">[knop naar pm met melding dat pm moet gemaakt worden en checkbox er naast]</div>
            <FormModuleFinish/>
        </FormDiv>
        <FormDiv>
            <FormModuleButtonGroup :formDate="formData" :task="formStore.task" tasktype="project-hp47"/>
        </FormDiv>
    </div>
</template>
<script setup>
    const formStore = useFormStore();
    const formData = () => {
        return `not yet implemented`;
    }
</script>
<style scoped>
</style>