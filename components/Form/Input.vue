<template>
    <div
        class="mx-3 my-2 flex justify-between gap-2 rounded-md border border-gray-900"
    >
        <label
            class="px-3 py-2 text-center text-sm text-gray-300"
            :for="label"
            >{{ label }}</label
        >
        <input
            type="text"
            class="w-full flex-1 rounded-r-md bg-gray-900 px-2"
            :name="label"
            :id="label"
            :modelValue="label"
            @input="$emit('update:modelValue', $event.target.value)"
        />
        <label
            v-if="suffix"
            class="self-center px-3 py-2 text-center text-sm text-gray-300"
            :for="suffix"
            >{{ suffix }}</label
        >
    </div>
</template>
<script setup>
defineProps({
    label: {
        type: String,
        default: 'input-label',
    },
    modelValue: {
        type: String,
        default: '',
    },
    suffix: {
        type: String,
        Boolean,
        default: false,
    },
})
</script>
