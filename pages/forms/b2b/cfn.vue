<template>
    <div class="mx-auto grid w-9/12 grid-cols-12 gap-3 p-3">
        <FormDiv title="Corporate Fibernet" />
        <FormDiv header="Woli Info">
            <FormModuleWoliInfo />
        </FormDiv>
        <!-- Dynamic CFN Chooser -->
        <FormDiv header="Product Selector">
            <FormModuleCFNTypeSelector />
        </FormDiv>
        <FormDiv header="Uitvoering">
            <FormModuleCFNUitvoering />
        </FormDiv>

        <FormDiv header="Testen">
            <FormModuleCFNTesten />
        </FormDiv>

        <FormDiv header="Testen">
            Managed = speedtest <br />
            unmanaged = speedtest <br />
            + backup = speed + ping
        </FormDiv>

        <FormDiv header="Mobile Info">
            MSISDN: <br />
            if ZTE/nokia: IMEI nummer external LTE modem:<br />
            Externe antenne: ja/nee<br />
            Behaalde dekking (RSRP waarde) op de router:<br />
        </FormDiv>

        <FormDiv header="Finishing Up">
            <p class="col-span-12 px-3 text-xs text-gray-400">
                Enkel extra materiaal dient hieronder nog ingegeven te worden.
            </p>
            <FormModuleFinish />
        </FormDiv>
        <FormDiv>
            <FormModuleButtonGroup
                :formData="formData"
                :task="formStore.task"
                taskType="PSV-KA"
            />
        </FormDiv>
    </div>
</template>

<script setup>
const formStore = useFormStore()
const formData = () => {
    return ''
}
</script>
