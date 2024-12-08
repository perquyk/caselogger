<template>
    <h3>Acties</h3>
    <div>
        <FormTextArea label="Acties" rows="3" v-model="formStore.acties" />
    </div>
</template>
<script setup>
const formStore = useFormStore()
</script>
