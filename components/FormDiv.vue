<template>
    <div :class="className">
        <div v-if="props.title">
            <h2 class="p-3 text-2xl">{{ title }}</h2>
        </div>

        <div v-else>
            <div
                v-if="props.header"
                class="rounded-t-lg bg-gray-700/25 px-3 py-2"
            >
                {{ header }}
            </div>
            <div class="grid grid-cols-12 p-3"><slot /></div>
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
    header: {
        type: String,
        Boolean,
        default: false,
    },
})
const className = `col-span-${props.cols} row-span-${props.rows} bg-gray-800 rounded-lg`
</script>
