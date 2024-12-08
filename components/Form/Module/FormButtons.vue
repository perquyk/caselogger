<template>
    <div class="flex items-center justify-around gap-5">
        <ButtonCopy @click="useCopy('test')" />
        <ButtonDownload @click="useDownload('test')" />
    </div>
</template>
<script setup lang="ts">
import ButtonCopy from '~/components/Form/ButtonCopy.vue'
import ButtonDownload from '~/components/Form/ButtonDownload.vue'
</script>
