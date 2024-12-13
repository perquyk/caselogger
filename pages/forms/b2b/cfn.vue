<template>
    <div class="mx-auto grid w-9/12 grid-cols-12 gap-3 p-3">
        <FormDiv title="Corporate Fibernet" />
        <FormDiv header="Woli Info">
            <FormModuleWoliInfo />
        </FormDiv>
        <!-- Dynamic CFN Chooser -->
        <FormDiv> checkbox needs to be put here </FormDiv>
        <FormDiv header="Finishing Up">
            <FormModuleWoliFinish />
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
    return ''
}
</script>
