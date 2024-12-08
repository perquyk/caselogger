<template>
    <div class="mx-auto my-3 w-9/12 rounded-lg bg-gray-800">
        <ContainerHeader :logo="logo">{{ title }}</ContainerHeader>

        <div>
            <slot />
        </div>
    </div>
</template>
<script setup>
defineProps({
    title: {
        type: String,
        default: 'Title',
    },
    logo: {
        type: String,
        Boolean,
        default: false,
    },
})
</script>
