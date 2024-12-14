<template>
    <FormTextArea
        class="col-span-12"
        label="Acties"
        v-model="formStore.acties"
    />
    <FormSelect
        class="col-span-4"
        label="Modem Type"
        v-model="formStore.modemtype"
    />
    <FormInput class="col-span-4" :label="MacLabel()" v-model="formStore.hfc" />

    <FormSelect
        class="col-span-4"
        label="NIU"
        v-model="formStore.niu"
        :options="selectStore.niu"
    />
    <FormSelect
        class="col-span-12"
        label="Router"
        v-model="formStore.router"
        :options="selectStore.router"
        v-if="showRouter()"
    />
</template>

<script setup>
const formStore = useFormStore()
const selectStore = useSelectStore()
const showRouter = () => {
    if (formStore.managed === 'Managed') {
        return true
    } else {
        return false
    }
}
let modemType = () => {
    switch (formStore.main) {
        case 'Telenet Coax':
            return selectStore.modemtype.tlnCoax
        case 'VDSL':
            return selectStore.modemtype.vdsl
        case 'gpon':
            return selectStore.modemtype.gpon
        case 'VOO Coax':
            return selectStore.modemtype.vooCoax
        case 'Mobile':
            return selectStore.modemtype.mob
    }
}
const MacLabel = () => {
    switch (formStore.modemtype) {
        case 'D3.1 ERT':
            return 'HFC-MAC'
        case 'AMOD 3':
        case 'AMOD 4':
            return 'CID'
        case 'ZTE':
        case 'Nokia 5G':
            return 'IMEI'
        case 'Coiler/NGIS':
            return ''
        default:
            return 'SN'
    }
}
</script>
