<template>
    <div>
        <h3>Klant Info</h3>
        <div class="grid grid-cols-12 gap-2">
            <FormInput
                class="col-span-6"
                label="Task"
                v-model="formStore.task"
            />
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
    </div>
</template>
<script setup>
const formStore = useFormStore()
</script>
