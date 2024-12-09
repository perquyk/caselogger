<template>

        <FormTextArea
            label="Testen"
            rows="3"
            v-model="formStore.testen"
            class="col-span-12"
        />
</template>
<script setup>
const formStore = useFormStore()
</script>
