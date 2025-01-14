<template>
    <div class="grid grid-cols-12">
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
