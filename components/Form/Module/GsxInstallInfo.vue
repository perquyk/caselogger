<template>
    <FormSelect
        label="Installatie Type"
        class="col-span-6"
        :options="selectStore.gsxInstallType"
        v-model="formStore.gsxInstallType"
    />
    <FormSelect
        label="Oude Setup"
        class="col-span-6"
        :options="selectStore.gsxOldsetup"
        v-model="formStore.gsxOldSetup"
    />
    <FormInput label="Modem-HFC" class="col-span-6" v-model="formStore.hfc" />
    <FormInput label="VOIP MAC" class="col-span-6" v-model="formStore.voip" />
</template>

<script setup>
const formStore = useFormStore()
const selectStore = useSelectStore()
</script>
