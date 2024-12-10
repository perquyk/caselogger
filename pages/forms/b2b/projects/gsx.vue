<template>
    <div class="mx-auto grid w-9/12 grid-cols-12 gap-3 p-3">
        <FormDiv title="GSX Migration" />
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
                :task="useFormStore.task"
                taskType="GSX-Migration"
            />
        </FormDiv>
    </div>
</template>

<script setup>
const formStore = useFormStore()
const formData = () => {
    return `Taaktype: Project GSX-Migration
WOLI:
Adres:
------------------------------
Omschrijving Taak:
Project GSX Migratie
- Aanwezige IAD-type: 

Testen:
Testcalls Argus/Phonerlite:
Testcalls PaBX:

Issues/Remarks:


Materiaal:
1x Marakele - 
1x Audiocode - 

Resultaat:


Modemtest:`
}
</script>
