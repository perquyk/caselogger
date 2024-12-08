<template>
    <div class="mb-3 grid grid-cols-12">
        <h3 class="col-span-12 px-5 text-xl">Finishing up</h3>

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
