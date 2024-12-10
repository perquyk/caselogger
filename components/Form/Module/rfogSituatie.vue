<template>
    <FormTextArea
        label="Omschrijving taak"
        class="col-span-12"
        v-model="formStore.omschrijving"
    />
    <FormSelect
        label="Length"
        :options="selectStore.patchLengthOptions"
        class="col-span-4"
        v-model="formStore.patchlength"
    />
    <FormInput
        label="Patch Positie MDR"
        class="col-span-4"
        v-model="formStore.mdrpos"
    />

    <FormInput
        label="Patch Positie Rechts"
        class="col-span-4"
        v-model="formStore.rechtspos"
    />
</template>
<script setup>
const selectStore = useSelectStore()
const formStore = useFormStore()
</script>
