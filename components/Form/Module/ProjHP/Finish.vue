<template>
    <div class="col-span-12 grid grid-cols-12 gap-2">
        <div class="col-span-12 grid grid-cols-12">
            <UButton
                label="PM!"
                class="col-span-3"
                block
                variant="outline"
                color="red"
            />
            <UCheckbox
                label="PM HP47 verwijderd verstuurd?"
                class="col-span-3 mx-3"
                v-model="formStore.pmSent"
            />
        </div>
    </div>
</template>
<script setup>
const formStore = useFormStore()
</script>
