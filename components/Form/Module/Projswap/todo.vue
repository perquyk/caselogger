<template>
    <div class="flex items-start gap-8 col-span-12 my-3">
        <UCheckbox label="Modem Swap" class="col-span-1" v-model="formStore.modemSwapCheck"/>
        <UCheckbox label="Wireless Modem requested?" class="col-span-1" v-model="formStore.wirelessCheck" v-if="formStore.modemSwapCheck"/>
        <UCheckbox label="Bridging needed?" class="col-span-2" v-model="formStore.bridgeCheck" v-if="!formStore.wirelessCheck && formStore.modemSwapCheck"/>
    </div>
    <div class="grid grid-cols-12 col-span-12 my-3">
        <UCheckbox label="NIU Swap" class="col-span-2" v-model="formStore.niuSwapCheck"/>
    </div>
</template>
<script setup>
    const formStore = useFormStore();
</script>