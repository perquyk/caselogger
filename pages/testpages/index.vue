<template>
    <div class="mx-auto grid w-9/12 grid-cols-12 gap-3 p-3">
        <ul class="max-w-full">
            <li>int test</li>
            <li>NIU type dropdown, default "niet veranderd"</li>
            <li>
                modem: checkbox >> if true >> dropdown for type >> input for MAC
            </li>
            <li>
                stb: checkbox >> if true >> input qty >> input CAID + checkbox
                for remote/cable
            </li>
        </ul>
        <FormDiv header="Materiaal">
            <FormModuleInhomeMaterial />
        </FormDiv>
    </div>
</template>

<script setup></script>

<style></style>
