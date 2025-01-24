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
        <FormDiv>
            <FormModuleButtonGroup
                :formData="formData"
                :task="formStore.task"
                taskType="ProjSwap"
            />
        </FormDiv>
    </div>
</template>
<script setup>
    const formStore = useFormStore();
    const formData = () => {
        return `Taaktype: ${taskType()}
WOLI: ${formStore.task}
Adres: ${formStore.adres}
------------------------------
${situatie()}

${acties()}

${materiaal()}

Remark/Issues:
${formStore.remarks}

Resultaat:
${formStore.resultaat}

Modemtest:
${formStore.modemtest}
`
    }
    const taskType = () => {
        if(formStore.modemSwapCheck && !formStore.niuSwapCheck){
            return "Project Modem D3.1 Swap"
        }
        if(!formStore.modemSwapCheck && formStore.niuSwapCheck){
            return "Project 85MHz NIU Swap"
        }
        if(formStore.modemSwapCheck && formStore.niuSwapCheck){
            return "Project Modem D3.1 Swap + 85MHz NIU Swap"
        }
    }
    const situatie = () => {
        let output = `Omschrijving taak:`;
        if(formStore.modemSwapCheck){
            output += `
  - Modem swap naar D3.1`;
            if(formStore.wirelessCheck){
                output += ` Wireless (op vraag van WOLI)`
            }
            if(formStore.bridgeCheck){
                output += ` -> Mac-bridging nodig`
            }
        }
        if(formStore.niuSwapCheck){
            output += `
  - NIU`
        }
        return output;
    };
    const acties = () => {
        let output = `Acties:`;
        if(formStore.modemSwapped){
            output += `
  - Modem geswapt naar ${formStore.modemtype} (${formStore.hfc})`
        }
        if(formStore.niuSwapped){
            output += `
  - NIU geswapt naar ${formStore.niu}`
        }
        return output;
    };
    const materiaal = () => {
        let output = `Materiaal:`;
        if(formStore.modemtype){
            output += `
  - 1x ${formStore.modemtype} - ${formStore.hfc}`
        }
        if(formStore.niu){
            output += `
  - 1x ${formStore.niu}`
        }
        return output;
    };
</script>