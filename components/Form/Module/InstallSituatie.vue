<template>
    <FormTextArea
        label="Omschrijving taak"
        class="col-span-12"
        v-model="formStore.omschrijving"
    />
    <FormSelect
        label="Catsap"
        :options="catsapStore.options"
        class="col-span-4"
        v-model="formStore.catsap"
    />

    <FormSelect
        label="Filter"
        :options="selectStore.filterOptions"
        class="col-span-4"
        v-model="formStore.filter"
    />
    <FormInput
        label="Streetping"
        class="col-span-4"
        v-model="formStore.streetping"
    />
</template>
<script setup>
const selectStore = useSelectStore()
const catsapStore = useCatsapStore()
const formStore = useFormStore()
</script>
