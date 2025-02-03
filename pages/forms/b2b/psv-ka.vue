<template>
    <div class="mx-auto grid w-9/12 grid-cols-12 gap-3 p-3">
        <FormDiv title="PSV KA" />
        <FormDiv>
            <div class="col-span-12 flex gap-3 justify-between items-center">

                <div class="flex gap-3 justify-between items-center">
                    <UButton size="xl" to="https://agsportal.prd.apps.telenet.be/arcgis/apps/webappviewer/index.html?id=7bcc197b9891413a93f6313d614e5b47&" label="NetVision" color="blue" target="_blank"/>
                    <UButton size="xl" to="https://agsportal.prd.apps.telenet.be/arcgis/apps/webappviewer/index.html?id=ff22c86440624c77a8c87a01204c757d&" label="GIS" color="blue" target="_blank"/>
                </div>
                <div class="flex gap-3">
                    <UButton size="xl" to="https://comm.unit-t.eu/thehive/article/tb-psv-template-ka-fpb/" label="PSV Templates" color="blue" target="_blank"/>
                    <UButton size="xl" to="https://comm.unit-t.eu/thehive/article/psv-ka-tips-tricks/?search=psv+ka" label="PSV KA: Tips & Tricks" color="blue" target="_blank"/>
                </div>
            </div>
        </FormDiv>
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
