<template>
    <ul>
        <li v-for="item in changelogStore.changes">
            {{ item.date }} - {{ item.description }}
        </li>
    </ul>
</template>
<script setup>
const changelogStore = useChangeStore()
</script>
