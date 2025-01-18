<template>
    <div class="col-span-12 grid grid-cols-12">
        <!-- Start Ingress aankomst -->
        <div class="col-span-12 grid grid-cols-12">
            <span class="col-span-12">Aankomst</span>
            <FormSelect
                label="HP aanwezig aan tap?"
                class="col-span-6"
                :options="selectStore.janee"
                v-model="formStore.hpReplace"
            />
            <FormSelect
                label="Heeft klant PWL?"
                class="col-span-6"
                :options="selectStore.janee"
                v-model="formStore.pwl"
            />

            <FormSelect
                label="Ingress aanwezig?"
                class="col-span-4"
                :options="selectStore.janee"
                v-model="formStore.ingress"
            />

            <div class="col-span-8 grid grid-cols-12 gap-2">
                <UButton
                    label="Ingress-meting"
                    class="col-span-6 my-2"
                    variant="outline"
                    leading-icon="material-symbols-question-mark"
                    to="https://comm.unit-t.eu/thehive/article/deviser-ds2460q-startpagina/#Mogelijkheden:~:text=Niet%20van%20toepassing!-,Ingress%20meting,-Deze%20meting%20voer"
                    target="_blank"
                    block
                />
                <UButton
                    label="Powerlines bij Ingress"
                    class="col-span-6 my-2"
                    variant="outline"
                    leading-icon="material-symbols-question-mark"
                    to="https://comm.unit-t.eu/thehive/article/flitsbriefing-klant-veroorzaakt-ingress-case-en-powerline-instructies/?search=powerline+ingress"
                    target="_blank"
                    block
                    v-if="formStore.pwl == 'Ja'"
                />
            </div>
        </div>
        <!-- End Ingress aankomst -->
        <!-- Start TDR -->
        <div class="col-span-12 my-3 grid grid-cols-12">
            <span class="col-span-12">TDR</span>
            <UCheckbox
                label="TDR-meting uitgevoerd?"
                class="col-span-12 my-3"
                v-model="formStore.tdrCheckbox"
            />
            <TdrMeting
                v-if="formStore.tdrCheckbox === true"
                class="col-span-12"
            />
        </div>
        <!-- End TDR -->
        <!-- andere testen start -->
        <div></div>
        <!-- andere testen end -->
        <!-- Start Ingress vertrek -->
        <div class="col-span-12 grid grid-cols-12">
            <span class="col-span-12">Einde Interventie</span>
            <FormSelect
                class="col-span-12"
                label="Ingress opgelost?"
                :options="selectStore.janee"
                v-model="formStore.ingressEnd"
            />
        </div>

        <!-- End Ingress vertrek -->
    </div>
</template>
<script setup>
import TdrMeting from '~/components/Form/Module/tdrMeting.vue'

const selectStore = useSelectStore()
const formStore = useFormStore()
const tdrDone = ref(false)
</script>
