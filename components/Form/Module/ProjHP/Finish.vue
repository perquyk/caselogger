<template>
    <div class="col-span-12 mx-3.5 grid grid-cols-12 gap-2">
        <div class="col-span-12 grid grid-cols-12">
            <UButton
                label="PM!"
                class="col-span-3"
                block
                variant="outline"
                color="red"
                to="https://portalft.prd.apps.telenet.be/content/pmelder.php"
                target="_blank"
            />
            <UCheckbox
                label="PM 'HP47 verwijderd' verstuurd?"
                class="col-span-3 mx-3 mt-1"
                v-model="formStore.pmSent"
            />
        </div>
    </div>
</template>
<script setup>
const formStore = useFormStore()
</script>
