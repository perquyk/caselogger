<template>
        <FormTextArea
            label="Situatie"
            rows="3"
            v-model="formStore.omschrijving"
            class="col-span-12"
        />
</template>
<script setup>
const formStore = useFormStore()
</script>
