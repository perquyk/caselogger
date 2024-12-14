<template>
    <FormTextArea
        class="col-span-12"
        label="Acties"
        v-model="formStore.acties"
    />
    <FormSelect
        v-if="formStore.managed == 'Managed'"
        class="col-span-12"
        label="Router"
        v-model="formStore.router"
        :options="selectStore.router"
    />
    <FormSelect
        v-if="
            formStore.main == 'VDSL' ||
            formStore.main == 'Telenet Coax' ||
            formStore.main == 'Mobile'
        "
        class="col-span-4"
        label="Modem Type"
        v-model="formStore.modemtype"
        :options="
            formStore.main == 'VDSL'
                ? selectStore.modemtype.vdsl
                : formStore.main == 'Telenet Coax'
                  ? selectStore.modemtype.tlnCoax
                  : formStore.main == 'Mobile'
                    ? selectStore.modemtype.mob
                    : ''
        "
    />
    <FormInput
        class="col-span-4"
        v-if="
            formStore.main == 'Telenet Coax' ||
            formStore.main == 'VDSL' ||
            formStore.main == 'GPON' ||
            (formStore.main == 'Mobile' && formStore.modemtype != 'Coiler/NGIS')
        "
        :label="
            formStore.main == 'Telenet Coax'
                ? 'HFC MAC'
                : formStore.main == 'Mobile'
                  ? 'IMEI'
                  : 'CID'
        "
        v-model="formStore.hfc"
    />
    <FormSelect
        class="col-span-4"
        v-if="formStore.main == 'Telenet Coax'"
        v-model="formStore.niu"
        :options="selectStore.niu"
        label="NIU"
    />
</template>

<script setup>
const formStore = useFormStore()
const selectStore = useSelectStore()
</script>
