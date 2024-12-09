<template>
    <div>
        <MainContainer title="Extra Tools">
            <p class="p-3">
                Hier zijn wat extra tools die ikzelf handig vind in de field.
            </p>
        </MainContainer>
    </div>
    <div class="mx-auto grid w-9/12 grid-cols-12 gap-3">
        <!-- Add card for each object in appStore -->
        <appCard :cards="applist.applist" />
    </div>
</template>

<script setup>
const applist = useAppStore()
</script>

<style scoped></style>
