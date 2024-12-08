<template>
    <div class="mx-3 my-2 flex gap-2 rounded-md border border-gray-900">
        <label class="py-2 pl-3 text-sm text-gray-300" :for="label">{{
            label
        }}</label>
        <select
            type="text"
            class="w-full rounded-r-md bg-gray-900 px-2"
            :name="label"
            :id="label"
            :modelValue="label"
            @input="$emit('update:modelValue', $event.target.value)"
        >
            <option v-for="option in options" :value="option.value">
                {{ option.description }}
            </option>
        </select>
    </div>
</template>
<script setup>
const formStore = useFormStore()
defineProps({
    label: {
        type: String,
        default: 'select',
    },
    options: {
        type: Array(Object),
        default: () => [],
    },
    modelValue: {
        type: String,
        default: '',
    },
})
</script>
