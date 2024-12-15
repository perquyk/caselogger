<template>
    <div
        class="col-span-12 grid grid-cols-12"
        id="main tests"
        v-if="
            formStore.main == 'Telenet Coax' ||
            formStore.main == 'Voo Coax' ||
            formStore.main == 'Mobile' ||
            formStore.main == 'GPON' ||
            formStore.main == 'VDSL'
        "
    >
        <span class="col-span-12 px-3">Main</span>
        <FormInput
            class="col-span-6"
            label="Speed Down"
            v-model="formStore.mainSpeedDown"
        />
        <FormInput
            class="col-span-6"
            label="Speed Up"
            v-model="formStore.mainSpeedUp"
        />
    </div>
    <div
        class="col-span-12 grid grid-cols-12"
        id="backup tests"
        v-if="
            formStore.backup == 'ZTE' ||
            formStore.backup == 'Ext. Antenne + SIC' ||
            formStore.backup == 'VDSL' ||
            formStore.backup == 'Nokia 5G'
        "
    >
        <span class="col-span-12 px-3">Backup</span>
        <FormInput
            class="col-span-6"
            label="Speed Down"
            v-model="formStore.buSpeedDown"
        />
        <FormInput
            class="col-span-6"
            label="Speed Up"
            v-model="formStore.buSpeedUp"
        />
        <FormSelect
            class="col-span-4"
            label="Failover Test"
            :options="selectStore.oknok"
            v-model="formStore.failover"
        />
    </div>
</template>

<script lang="ts" setup>
const formStore = useFormStore()
const selectStore = useSelectStore()
</script>

<style></style>
