<template>
    <div
        class="mx-3 my-2 flex items-center justify-normal gap-2 rounded-md border border-gray-900"
    >
        <label
            class="w-fit py-2 pl-3 text-center text-sm text-gray-300"
            :for="label"
            >{{ label }}</label
        >
        <textarea
            class="w-full rounded-r-md bg-gray-900 px-2"
            :name="label"
            :id="label"
            :rows="rows"
            :modelValue="label"
            @input="$emit('update:modelValue', $event.target.value)"
        ></textarea>
    </div>
</template>
<script setup>
defineProps({
    label: {
        type: String,
        default: 'input-label',
    },
    rows: {
        type: Number,
        default: 3,
    },
    modelValue: {
        type: String,
        default: '',
    },
})
</script>
