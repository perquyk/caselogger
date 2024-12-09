<template>
        <FormTextArea
            label="Acties"
            rows="3"
            v-model="formStore.acties"
            class="col-span-12"
        />
</template>
<script setup>
const formStore = useFormStore()
</script>
