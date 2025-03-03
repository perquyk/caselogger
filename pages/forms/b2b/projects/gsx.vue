<template>
    <div class="mx-auto grid w-9/12 grid-cols-12 gap-3 p-3">
        <FormDiv title="GSX Migration" />
        <FormDiv>
            <p class="col-span-12 mb-3 rounded-lg bg-amber-500/90 text-slate-800 p-3">
                <strong>Opgelet!</strong> Sinds 03/03/2025 is er een nieuwe mailbox voor de mails:
                <a href="mailto:tb-voicemigration@telenetgroup.be" class="font-bold"><em>tb-voicemigration@telenetgroup.be</em></a>
            </p>
            <UButton block class="col-span-12" to="https://comm.unit-t.eu/thehive/article/nieuw-telenet-business-project-gsx-migratie/" label="Project Info"/>
        </FormDiv>
        <FormDiv header="Woli Info" cols="12">
            <FormModuleWoliInfo />
        </FormDiv>
        <FormDiv header="Installatie Info">
            <FormModuleGsxInstallInfo />
        </FormDiv>
        <FormDiv header="Testen"><FormModuleIadTest /></FormDiv>
        <FormDiv header="Extra Materiaal"> Not yet implemented </FormDiv>
        <FormDiv header="Finishing Up"><FormModuleWoliFinish /></FormDiv>
        <FormDiv>
            <FormModuleButtonGroup
                :formData="formData"
                :task="formStore.task"
                taskType="GSX-Migration"
            />
        </FormDiv>
    </div>
</template>

<script setup>
const formStore = useFormStore()
const formData = () => {
    return `Taaktype: Project GSX-Migration
WOLI: ${formStore.task}
Adres: ${formStore.adres}
------------------------------
Omschrijving Taak:
Project GSX Migratie
- Aanwezige IAD-type: ${formStore.gsxOldSetup}

Testen:
Testcalls Argus/Phonerlite: ${formStore.IadTestArgus}
Testcalls PaBX: ${formStore.IadTestPBX}

Issues/Remarks:
${formStore.remarks}

Materiaal:
1x Marakele - ${formStore.hfc}
1x Audiocode ${formStore.gsxInstallType} - ${formStore.voip}


Resultaat:
${formStore.resultaat}

Modemtest:
${formStore.modemtest}
`
}
</script>
