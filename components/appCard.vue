<template>
    <div v-for="card in cards" class="col-span-4 rounded-lg bg-gray-800 p-3">
        <div class="mb-3 flex justify-between">
            <div>
                <h1 class="text-2xl">{{ card.name }}</h1>
                <p class="mb-3 text-xs text-gray-400">By: {{ card.author }}</p>
                <p class="">{{ card.description }}</p>
            </div>

            <img :src="card.img" />
        </div>
        <UButton
            :label="card.action"
            :icon="card.icon"
            :to="card.url"
            block
            size="xl"
            target="_blank"
        />
    </div>
</template>

<script setup>
defineProps({
    cards: {
        type: Array(Object),
        default: [],
    },
})
</script>

<style></style>
