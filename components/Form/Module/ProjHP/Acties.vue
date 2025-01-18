<template>
    <div class="col-span-12 mx-3.5 grid grid-cols-12 gap-2">
        <div class="col-span-12 grid grid-cols-12">
            <UCheckbox
                label="HP verwijderd?"
                class="col-span-3"
                v-model="formStore.hpRemove"
            />
            <UCheckbox
                v-if="formStore.hpRemove === true"
                label="PM 'HP verwijderd' verstuurd?"
                class="col-span-6 mx-3 mt-1"
                v-model="formStore.pmSent"
            />
            <UButton
                v-if="formStore.hpRemove === true"
                label="PM!"
                class="col-span-3"
                block
                variant="outline"
                color="red"
                to="https://portalft.prd.apps.telenet.be/content/pmelder.php"
                target="_blank"
            />
        </div>
    </div>
</template>
<script setup>
const formStore = useFormStore()
</script>
