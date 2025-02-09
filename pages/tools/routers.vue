<template>
    <div class="mx-auto grid w-9/12 grid-cols-12 gap-3 p-3">
        <FormDiv title="Router Tools"/>
        <FormDiv class="col-span-12" header="Router Lookup">
            <FormInput
                label="Search Query"
                class="col-span-12"
                v-model="formStore.router"
            />
            <p class="col-span-12 text-sm text-zinc-300 mx-4 mt-1">11-char NSG CPE name, VLAN ID or Router CPE Name</p>
            <div class="col-span-12 flex justify-center gap-3">
                <UButton label="NSG Info" size="xl" :to="nsgInfo + formStore.router" target="_blank" color="blue"/>
                <UButton label="HPE/Cisco Password Lookup" size="xl" :to="pass + formStore.router" target="_blank" color="emerald"/>
                <UButton label="HPE/Cisco Password Decode" size="xl" :to="decode + formStore.router" target="_blank" color="emerald"/>
                <UButton label="Download Directory" size="xl" :to="configLookup + formStore.router" target="_blank" color="emerald"/>
            </div>

        </FormDiv>
        <FormDiv header="Other Router Tools">
            <p class="col-span-12 text-zinc-300 mx-4 mt-1">
                These tools don't work with the above search bar :(<br>
                Here are the links anyway.
            </p>
            <div class="col-span-12 flex justify-center gap-3">
                <UButton label="NSG Config URL" to="https://nas.prd.apps.telenet.be/ipservices/nsg-config-url" size="xl" target="_blank" color="blue"/>
                <UButton label="VDSL Dummy" to="https://nas.prd.apps.telenet.be/ipservices/vdsl-config" size="xl" target="_blank" color="purple"/>
                <UButton label="VDSL Pass / Lijntest" to="https://www.proximus.be/login/nl/?" size="xl" target="_blank" color="purple"/>
            </div>
        </FormDiv>
    </div>
</template>
<script setup>
    let formStore = useFormStore();
    let nsgInfo = "http://helo.inet.telenet.be:7090/NSGINFO.cgi?nsg_name="
    let configLookup = "http://helo.inet.telenet.be:7090/download/"
    let decode = "http://helo.inet.telenet.be:7090/GetConPass.cgi?pass7="
    let pass = "http://helo.inet.telenet.be:7090/GetConPass.cgi?cpe="
</script>