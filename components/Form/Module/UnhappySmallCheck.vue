<template>
    <div class="grid grid-cols-12">
        <h3 class="col-span-12 px-5 text-xl">Tijdens Interventie</h3>
        <FormSelect
            label="CM-Snoer sleutelvast?"
            :options="unhappyStore.sleutelvast"
            class="col-span-4"
            v-model="formStore.sleutelvast"
        />
        <FormSelect
            label="Connectoren OK??"
            :options="unhappyStore.conn"
            class="col-span-4"
            v-model="formStore.conn"
        />
        <FormSelect
            label="CM-snoer vervangen?"
            :options="unhappyStore.cmVervangen"
            class="col-span-4"
            v-model="formStore.cmVervangen"
        />
    </div>
</template>
<script setup>
const formStore = useFormStore()
const unhappyStore = useUnhappyStore()
</script>
