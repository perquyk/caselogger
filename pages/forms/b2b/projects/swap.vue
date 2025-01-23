<template>
    <div class="mx-auto grid w-9/12 grid-cols-12 gap-3 p-3">
        <FormDiv title="Project Modem 3.1 Swap / NIU 85MHz Swap" />
        <FormDiv header="Task Info">
            <FormModuleWoliInfo/>
        </FormDiv>
        <FormDiv header="To do">
            <FormModuleProjswapTodo class="col-span-12"/>
        </FormDiv>
        <FormDiv header="Acties">
            <FormModuleProjswapActies class="col-span-12"/>
        </FormDiv>
        <FormDiv header="Finishing up">
            <FormModuleWoliFinish/>
        </FormDiv>
    </div>
</template>
<script setup>

</script>