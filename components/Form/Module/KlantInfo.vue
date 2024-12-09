<template>
        <FormInput class="col-span-6" label="Task" v-model="formStore.task" />
        <FormInput
            class="col-span-6"
            label="Klantnummer"
            v-model="formStore.klantnummer"
        />
        <FormInput
            class="col-span-12"
            label="Adres"
            v-model="formStore.adres"
        />
</template>
<script setup>
const formStore = useFormStore()
</script>
