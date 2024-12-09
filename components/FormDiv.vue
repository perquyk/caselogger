<template>
    <div :class="className">
        <div v-if="props.title">
            <h2 class="text-2xl">{{ title }}</h2>
        </div>

        <div v-else>
            <slot />
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    cols: {
        type: Number,
        default: 12,
    },
    rows: {
        type: Number,
        default: 1,
    },
    title: {
        type: String,
        Boolean,
        default: false,
    },
})
const className = `col-span-${props.cols} row-span-${props.rows} rounded-lg bg-gray-800 p-5`
</script>
