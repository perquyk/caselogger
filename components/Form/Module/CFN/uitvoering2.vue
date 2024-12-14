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
        v-if="formStore.main == 'VDSL' || formStore.main == 'Telenet Coax'"
        class="col-span-4"
        label="Modem Type"
        v-model="formStore.modemtype"
        :options="
            formStore.main == 'VDSL'
                ? selectStore.modemtype.vdsl
                : formStore.main == 'Telenet Coax'
                  ? selectStore.modemtype.tlnCoax
                  : ''
        "
    />
</template>

<script setup>
const formStore = useFormStore()
const selectStore = useSelectStore()
const formSelector = () => {
    return ''
}
</script>
