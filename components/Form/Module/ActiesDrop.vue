<template>
    <div class="grid grid-cols-12">
        <FormSelect
            label="Connector tap vervangen?"
            :options="selectStore.janee"
            class="col-span-4"
            v-model="formStore.connTapReplace"
        />
        <FormSelect
            label="Connector NIU vervangen?"
            :options="selectStore.janee"
            class="col-span-4"
            v-model="formStore.connNIUReplace"
        />
        <FormSelect
            label="Verlengstuk vervangen?"
            :options="selectStore.janeenvt"
            class="col-span-4"
            v-model="formStore.verlengReplace"
        />
        <FormSelect
            label="Drop vervangen?"
            :options="selectStore.janeenvt"
            class="col-span-4"
            v-model="formStore.dropReplace"
        />
        <FormSelect
            label="HP47?"
            :options="selectStore.hpReplace"
            class="col-span-4"
            v-model="formStore.hpReplace"
        />
        <FormSelect
            label="Ingress nadien gemeten?"
            :options="selectStore.janeenvt"
            class="col-span-4"
            v-model="formStore.ingress"
        />
    </div>
</template>
<script setup>
const formStore = useFormStore()
const selectStore = useSelectStore()
</script>
