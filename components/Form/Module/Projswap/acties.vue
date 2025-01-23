<template>
    <!-- modem swap actions -->
    <div v-if="formStore.modemSwapCheck" class="grid grid-cols-12 col-span-12 my-3">
        <div class="col-span-12">
            <UCheckbox label="Modem Swapped" v-model="formStore.modemSwapped" />
        </div>
        <div class="col-span-12 grid grid-cols-12" v-if="formStore.modemSwapped">
            <FormSelect label="Modem Type" class="col-span-6" v-model="formStore.modemtype" :options="selectStore.coaxModems"/>
            <FormInput label="HFC-mac" class="col-span-6" v-model="formStore.hfc" />
        </div>
    </div>
    <!-- bridging actions -->
    <div v-if="formStore.bridgeCheck" class="grid grid-cols-12 col-span-12 my-3">
        <UCheckbox label="Mac-bridging OK?" v-model="formStore.bridgeOK" class="col-span-12" />
    </div>
    <!-- niu swap actions -->
    <div v-if="formStore.niuSwapCheck" class="grid grid-cols-12 col-span-12 my-3">
        <div class="col-span-12">
            <UCheckbox label="NIU Swapped" v-model="formStore.niuSwapped"/>
        </div>
        <div class="col-span-12" v-if="formStore.niuSwapped">
            <FormSelect label="NIU type" v-model="formStore.niu" :options="selectStore.niuTypes"/>
        </div>
    </div>

    <div v-if="!formStore.modemSwapCheck && !formStore.bridgeCheck && !formStore.niuSwapCheck" class="col-span-12 my-3">
        No tasks selected in Todo.
    </div>
</template>
<script setup>
    const formStore = useFormStore();
    const selectStore = useSelectStore();
</script>