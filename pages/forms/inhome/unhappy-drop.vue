<template>
    <MainContainer title="Project Unhappy Dropcable">
        <ContainerSection>
            <FormModuleKlantInfo />
            <ContDivider />
            <FormModulePnmAankomst />
            <ContDivider />
            <FormModuleUnhappySmallCheck />
            <ContDivider />
            <FormModuleTdrMeting />
            <ContDivider />
            <FormModuleActiesDrop />
            <ContDivider />
            <FormModuleUnhappyEnd />
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
Sleutelvast?: ${formStore.sleutelvast}
Connectoren?: ${formStore.conn}
Coax-Snoer vervangen?: ${formStore.cmVervangen}

TDR-meting drop:
Meting uitgevoerd?: ${formStore.tdrDone}
Vp: ${formStore.vp}
Lengte/events TAP > NIU: ${formStore.tapniulength} meter / events: ${formStore.tapniuevents}
Lengte/events NIU > TAP: ${formStore.niutaplength} meter / events: ${formStore.niutapevents}

Acties drop:
F-conn TAP vervangen?: ${formStore.connTapReplace}
F-conn NIU vervangen?: ${formStore.connNIUReplace}
Verlengstuk vervangen?: ${formStore.verlengReplace}
Drop vervangen?: ${formStore.dropReplace}
HP47 vervangen?: ${formStore.hpReplace}
Ingress nadien gemeten?: ${formStore.ingress}

PNM bij vertrek:
${formStore.vertrekPnm}

Resultaat:
${formStore.resultaat}
`
}
</script>
