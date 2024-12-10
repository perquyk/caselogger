<template>
    <FormSelect
        label="Testcalls Argus/Softphone"
        class="col-span-6"
        :options="selectStore.oknok"
        v-model="formStore.IadTestArgus"
    />
    <FormSelect
        label="Testcalls PaBX"
        class="col-span-6"
        :options="selectStore.oknok"
        v-model="formStore.IadTestPBX"
    />
</template>

<script lang="ts" setup>
const formStore = useFormStore()
const selectStore = useSelectStore()
</script>

<style></style>
