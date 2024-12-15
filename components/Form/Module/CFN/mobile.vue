<template>
    <FormInput label="MSISDN" class="col-span-4" v-model="formStore.msisdn" />
    <FormInput
        v-if="formStore.backup == 'ZTE' || formStore.backup == 'Nokia 5G'"
        label="IMEI Backup"
        class="col-span-4"
        v-model="formStore.backupIMEI"
    />
    <FormInput class="col-span-4" label="RSRP" v-model="formStore.rsrp" />
</template>

<script lang="ts" setup>
const formStore = useFormStore()
</script>

<style></style>
