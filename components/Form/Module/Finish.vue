<template>
    <h3>Finishing up</h3>
    <div class="grid grid-cols-12">
        <FormTextArea
            v-model="formStore.materiaal"
            label="Materiaal"
            class="col-span-12"
        />
        <FormTextArea
            v-model="formStore.resultaat"
            label="Resultaat"
            class="col-span-6"
        />
        <FormTextArea
            v-model="formStore.modemtest"
            label="Modemtest"
            class="col-span-6"
        />
    </div>
</template>
<script setup>
const formStore = useFormStore()
</script>
