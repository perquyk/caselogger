<template>
    <MainContainer title="Project Unhappy Dropcable">
        <ContainerSection>
            <FormModuleKlantInfo />
            <ContDivider />
            <FormModulePnmAankomst />
            <ContDivider />
            <FormModuleUnhappySmallCheck />
            <FormModuleButtonGroup
                :formData="formData"
                :task="formStore.task"
                taskType="install"
            />
        </ContainerSection>
    </MainContainer>
</template>
<script setup>
const formStore = useFormStore()
const formData = () => {
    return `Taaktype: Project Unhappy Dropcable
TaakID: ${formStore.task}
Klantnummer: ${formStore.klantnummer}
Adres: ${formStore.adres}
------------------------------
PNM bij aankomst:
${formStore.aankomstPNM}

Tijdens Interventie:
Sleutelvast?:
Connectoren?:
Coax-Snoer vervangen?:

TDR-meting drop:
Meting uitgevoerd?:
Vp:
Lengte/events TAP > NIU: meter / events:
Lengte/events NIU > TAP: meter / events:

Acties drop:
F-conn TAP vervangen?:
F-conn NIU vervangen?:
Verlengstuk vervangen?:
Drop vervangen?:
HP47 vervangen?:
Ingress nadien gemeten?:

PNM bij vertrek:

Resultaat:

`
}
</script>
