<template>
    <div class="mx-auto grid w-9/12 grid-cols-12 gap-3 p-3">
        <FormDiv title="Corporate Fibernet" />
        <FormDiv header="Woli Info">
            <FormModuleWoliInfo />
        </FormDiv>
        <!-- Dynamic CFN Chooser -->
        <FormDiv header="Product Selector">
            <FormModuleCFNTypeSelector />
        </FormDiv>
        <FormDiv header="Uitvoering">
            <FormModuleCFNUitvoering />
        </FormDiv>

        <FormDiv header="Testen">
            <FormModuleCFNTesten />
        </FormDiv>
        <FormDiv
            header="Mobile Info"
            v-if="
                formStore.main == 'Mobile' ||
                formStore.backup == 'ZTE' ||
                formStore.backup == 'Nokia 5G' ||
                formStore.backup == 'Ext. Antennte + SIC'
            "
        >
            <FormModuleCFNMobile />
        </FormDiv>

        <FormDiv header="Finishing Up">
            <p class="col-span-12 px-3 text-xs text-gray-400">
                Enkel extra materiaal dient hieronder nog ingegeven te worden.
            </p>
            <FormModuleFinish />
        </FormDiv>
        <FormDiv>
            <FormModuleButtonGroup
                :formData="formData"
                :task="formStore.task"
                taskType="CFN"
            />
        </FormDiv>
    </div>
</template>

<script setup>
const formStore = useFormStore()
const formData = () => {
    woliInfo()
}
const woliInfo = () => {
    return 'test'
}
</script>
