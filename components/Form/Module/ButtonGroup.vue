<template>
    <div class="col-span-12 flex items-center justify-center gap-10">
        <FormButtonCopy @click="useCopy(formData)" />
        <FormButtonDownload @click="useDownload(formData, task, taskType)" />
    </div>
</template>
<script setup>
defineProps({
    formData: {
        type: Function,
        default: () => {
            alert('Something went wrong. please try again')
        },
    },
    task: {
        type: String,
        default: '',
    },
    taskType: {
        type: String,
        default: '',
    },
})
</script>
