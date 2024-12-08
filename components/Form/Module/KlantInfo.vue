<template>
    <div class="mb-3 grid grid-cols-12 gap-2">
        <h3 class="col-span-12 px-5 text-xl">Klant Info</h3>
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
    </div>
</template>
<script setup>
const formStore = useFormStore()
</script>
