<template>
    <div class="flex gap-2 p-3 text-2xl">
        <div v-if="logo"><img :src="logo" alt="header logo" /></div>
        <slot />
    </div>
</template>
<script setup>
defineProps({
    logo: {
        type: String,
        Boolean,
        default: false,
    },
})
</script>
