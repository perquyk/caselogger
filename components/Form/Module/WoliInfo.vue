<template>
    <FormInput label="WOLI" class="col-span-6" v-model="formStore.task" />
    <FormInput label="Adres" class="col-span-6" v-model="formStore.adres" />
</template>

<script setup>
const formStore = useFormStore()
</script>

<style></style>
