<template>
    <div class="mb-3 grid grid-cols-12 gap-2">
        <FormTextArea
            label="PNM"
            :rows="3"
            v-model="formStore.aankomstPNM"
            class="col-span-12"
        />
    </div>
</template>
<script setup>
const formStore = useFormStore()
</script>
