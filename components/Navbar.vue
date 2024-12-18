<template>
    <div
        class="sticky top-0 flex items-center justify-between bg-gray-800 px-5 py-3"
    >
        <!--left side-->
        <div class="text-xl">
            <NuxtLink to="/" class="flex items-center justify-start gap-2"
                ><img src="/Logo32.png" alt="logo" /><span>Caselogger</span>
            </NuxtLink>
        </div>

        <!--Right side-->
        <div>
            <div class="hidden lg:block">
                <UDropdown
                    :items="inhomeLinks"
                    :popper="{ placement: 'bottom-start' }"
                    mode="click"
                    ><UButton label="inHome" variant="ghost" color="white"
                /></UDropdown>
                <UDropdown
                    :items="ftthLinks"
                    :popper="{ placement: 'bottom-start' }"
                    mode="click"
                    ><UButton label="FTTH" variant="ghost" color="white"
                /></UDropdown>
                <UDropdown
                    :items="b2bLinks"
                    :popper="{ placement: 'bottom-start' }"
                    mode="click"
                    ><UButton label="B2B" variant="ghost" color="white"
                /></UDropdown>
                <UDropdown
                    :items="b2bProjectLinks"
                    :popper="{ placement: 'bottom-start' }"
                    mode="click"
                    ><UButton
                        label="B2B Projects"
                        variant="ghost"
                        color="white"
                /></UDropdown>
                <UButton variant="ghost" color="white" to="/extra"
                    >Other Tools</UButton
                >
                <UButton
                    variant="outline"
                    color="green"
                    to="mailto:support@kperquy.atlassian.net?cc=perquy.k@gmail.com,kenny.perquy@unit-t.eu&subject=Caselogger%20-%20Feedback&body=Type%20of%20feedback%20(bug%2C%20idea%2C%20issue...)%3A%0D%0A%0D%0AMessage%3A%0D%0A%0D%0AImages%3A"
                    label="Feedback"
                />
            </div>
            <div class="lg:hidden">
                <UDropdown
                    :items="allLinks"
                    :popper="{ placement: 'bottom-start' }"
                    mode="click"
                >
                    <UButton
                        variant="outline"
                        color="primary"
                        icon="i-pajamas-hamburger"
                        size="xl"
                    />
                </UDropdown>
            </div>
        </div>
    </div>
</template>
<script setup>
const inhomeLinks = [
    [
        { label: 'Install', to: '/forms/inhome/install' },
        { label: 'Repair', to: '/forms/inhome/repair' },
    ],
    [{ label: 'Project Unhappy Drop', to: '/forms/inhome/unhappy-drop' }],
]
const ftthLinks = [[{ label: 'RFoG Install', to: '/forms/ftth/rfog-install' }]]
const b2bLinks = [
    [
        { label: 'CFN', to: '/forms/b2b/cfn' },
        { label: 'PSV KA', to: '/forms/b2b/psv-ka' },
    ],
]
const b2bProjectLinks = [[{ label: 'GSX', to: '/forms/b2b/projects/gsx' }]]
const allLinks = [
    [
        { label: 'inHome', disabled: true },
        { label: 'Install', to: '/forms/inhome/install' },
        { label: 'Repair', to: '/forms/inhome/repair' },
        {
            label: 'Project Unhappy Drop',
            to: '/forms/inhome/unhappy-drop',
        },
    ],
    [
        { label: 'FTTH', disabled: true },
        { label: 'RFoG Install', to: '/forms/ftth/rfog-install' },
    ],
    [
        { label: 'B2B', disabled: true },
        { label: 'CFN', to: '/forms/b2b/cfn' },
        { label: 'PSV KA', to: '/forms/b2b/psv-ka' },
    ],
    [
        { label: 'B2B Projects', disabled: true },
        { label: 'GSX', to: '/forms/b2b/projects/gsx' },
    ],
    [
        { label: 'Other Stuff', disabled: true },
        { label: 'Extra Tools', to: '/extra' },
        {
            label: 'Feedback',
            to: 'mailto:support@kperquy.atlassian.net?cc=perquy.k@gmail.com,kenny.perquy@unit-t.eu&subject=Caselogger%20-%20Feedback&body=Type%20of%20feedback%20(bug%2C%20idea%2C%20issue...)%3A%0D%0A%0D%0AMessage%3A%0D%0A%0D%0AImages%3A',
        },
    ],
]
</script>
