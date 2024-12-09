<template>
    <div class="grid">
        <h3 class="col-span-12 px-5 text-xl">Bij vertrek</h3>
        <FormTextArea
            label="PNM"
            class="col-span-6"
            v-model="formStore.vertrekPnm"
        />
        <FormTextArea
            label="Resultaat"
            class="col-span-6"
            v-model="formStore.resultaat"
        />
    </div>
</template>
<script setup>
const formStore = useFormStore()
</script>
