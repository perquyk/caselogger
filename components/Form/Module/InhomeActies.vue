<template>
    <div class="mb-3 grid grid-cols-12 gap-2">
        <h3 class="col-span-12 px-5 text-xl">Acties</h3>

        <FormTextArea
            label="Acties"
            rows="3"
            v-model="formStore.acties"
            class="col-span-12"
        />
    </div>
</template>
<script setup>
const formStore = useFormStore()
</script>
