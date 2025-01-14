<template>
    <div class="grid grid-cols-12">
        <FormSelect
            label="TDR-meting uitgevoerd?"
            :options="selectStore.janee"
            class="col-span-4"
            v-model="formStore.tdrDone"
        />
        <FormInput
            class="col-span-4"
            label="Tap > NIU Lengte"
            v-model="formStore.tapniulength"
            suffix="meter"
        />
        <FormInput
            class="col-span-4"
            label="Tap > NIU Events"
            v-model="formStore.tapniuevents"
        />

        <FormSelect
            label="Vp"
            :options="selectStore.vp"
            class="col-span-4"
            v-model="formStore.vp"
        />
        <FormInput
            class="col-span-4"
            label="NIU > Tap Lengte"
            v-model="formStore.niutaplength"
            suffix="meter"
        />
        <FormInput
            class="col-span-4"
            label="NIU > Tap Events"
            v-model="formStore.niutapevents"
        />
    </div>
</template>
<script setup>
const formStore = useFormStore()
const selectStore = useSelectStore()
</script>
