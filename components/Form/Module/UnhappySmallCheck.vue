<template>
    <div class="grid grid-cols-12">
        <FormSelect
            label="CM-Snoer sleutelvast?"
            :options="selectStore.oknok"
            class="col-span-4"
            v-model="formStore.sleutelvast"
        />
        <FormSelect
            label="Connectoren OK??"
            :options="selectStore.oknok"
            class="col-span-4"
            v-model="formStore.conn"
        />
        <FormSelect
            label="CM-snoer vervangen?"
            :options="selectStore.janee"
            class="col-span-4"
            v-model="formStore.cmVervangen"
        />
    </div>
</template>
<script setup>
const formStore = useFormStore()
const selectStore = useSelectStore()
</script>
