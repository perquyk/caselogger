<template>
    <div class="grid">
        <h3 class="col-span-12 px-5 text-xl">Acties Drop</h3>
        <FormSelect
            label="Connector tap vervangen?"
            :options="unhappyStore.connTapReplace"
            class="col-span-4"
            v-model="formStore.connTapReplace"
        />
        <FormSelect
            label="Connector NIU vervangen?"
            :options="unhappyStore.connNIUReplace"
            class="col-span-4"
            v-model="formStore.connNIUReplace"
        />
        <FormSelect
            label="Verlengstuk vervangen?"
            :options="unhappyStore.verlengReplace"
            class="col-span-4"
            v-model="formStore.verlengReplace"
        />
        <FormSelect
            label="Drop vervangen?"
            :options="unhappyStore.dropReplace"
            class="col-span-4"
            v-model="formStore.dropReplace"
        />
        <FormSelect
            label="HP47?"
            :options="unhappyStore.hpReplace"
            class="col-span-4"
            v-model="formStore.hpReplace"
        />
        <FormSelect
            label="Ingress nadien gemeten?"
            :options="unhappyStore.ingress"
            class="col-span-4"
            v-model="formStore.ingress"
        />
    </div>
</template>
<script setup>
const formStore = useFormStore()
const unhappyStore = useUnhappyStore()
</script>
