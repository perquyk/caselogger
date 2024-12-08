<template>
    <div class="flex items-center justify-between bg-gray-800 px-5 py-3">
        <!--left side-->
        <div class="text-xl"><NuxtLink to="/"> Caselogger </NuxtLink></div>

        <!--Right side-->
        <div>
            <UDropdown
                :items="inhomeLinks"
                :popper="{ placement: 'bottom-start' }"
                mode="click"
                ><UButton label="inHome" variant="ghost" color="white"
            /></UDropdown>
        </div>
    </div>
</template>
<script setup>
const inhomeLinks = [[{ label: 'Install', to: '/forms/inhome/install' }]]
</script>
