<template>
    <div class="grid">
        <h3 class="col-span-12 px-5 text-xl">Situatie bij aankomst:</h3>

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
            :options="filterStore.options"
            class="col-span-4"
            v-model="formStore.filter"
        />
        <FormInput
            label="Streetping"
            class="col-span-4"
            v-model="formStore.streetping"
        />
    </div>
</template>
<script setup>
const filterStore = useFilterStore()
const catsapStore = useCatsapStore()
const formStore = useFormStore()
</script>
