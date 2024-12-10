<template>
    <FormTextArea
        label="Materialen nodig"
        class="col-span-12"
        v-model="formStore.materiaal"
    />
    <FormTextArea
        label="Issues/Remarks"
        class="col-span-6"
        v-model="formStore.remarks"
    />
    <FormTextArea
        label="Resultaat"
        class="col-span-6"
        v-model="formStore.resultaat"
    />
</template>

<script setup>
const formStore = useFormStore()
</script>

<style></style>
