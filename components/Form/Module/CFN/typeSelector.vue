<template>
    <FormSelect
        label="CFN Type"
        class="col-span-12"
        :options="selectStore.managed"
        v-model="formStore.managed"
    />
    <div
        v-if="formStore.managed === 'Managed'"
        id="managed"
        class="col-span-12 grid grid-cols-12"
    >
        <FormSelect
            class="col-span-4"
            label="Main"
            v-model="formStore.main"
            :options="selectStore.main"
        />
        <FormSelect
            class="col-span-4"
            label="Profiel"
            v-model="formStore.profiel"
            :options="profileChoice()"
        />
        <FormSelect
            class="col-span-4"
            label="Backup"
            v-model="formStore.backup"
            :options="selectStore.backup"
        />
        <FormSelect
            class="col-span-4"
            label="Catsap"
            v-model="formStore.catsap"
            :options="selectStore.catsapOptions"
        />
        <FormSelect
            class="col-span-4"
            label="Filter"
            v-model="formStore.filter"
            :options="selectStore.filterOptions"
        />
        <FormInput
            label="Streetping"
            class="col-span-4"
            v-model="formStore.streetping"
        />
    </div>
    <div
        v-else-if="formStore.managed === 'Unmanaged'"
        id="unmanaged"
        class="col-span-12 grid grid-cols-12"
    >
        <FormSelect
            class="col-span-6"
            label="Main"
            v-model="formStore.main"
            :options="selectStore.main"
        />
        <FormSelect
            class="col-span-6"
            label="Profiel"
            v-model="formStore.profiel"
            :options="profileChoice()"
        />
        <FormSelect
            class="col-span-4"
            label="Catsap"
            v-model="formStore.catsap"
            :options="selectStore.catsapOptions"
        />
        <FormSelect
            class="col-span-4"
            label="Filter"
            v-model="formStore.filter"
            :options="selectStore.filterOptions"
        />
        <FormInput
            label="Streetping"
            class="col-span-4"
            v-model="formStore.streetping"
        />
    </div>
    <div v-else></div>
</template>

<script setup>
const selectStore = useSelectStore()
const formStore = useFormStore()
const profileChoice = () => {
    switch (formStore.main) {
        case 'Telenet Coax':
            return selectStore.profiel.tlnCoax
        case 'VDSL':
            return selectStore.profiel.vdsl
        case 'GPON':
            return selectStore.profiel.gpon
        case 'VOO Coax':
            return selectStore.profiel.vooCoax
        case 'Mobile':
            return selectStore.profiel.mob
    }
}
</script>
