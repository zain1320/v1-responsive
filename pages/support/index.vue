<script setup lang="ts">
import SupportAdjectives from './_support-components/SupportAdjectives.vue';
import SupportConnect from './_support-components/SupportConnect.vue';
import SupportContact from './_support-components/SupportContact.vue';
import SupportHero from './_support-components/SupportHero.vue';
import SupportPricing from './_support-components/SupportPricing.vue';
import SupportQuestions from './_support-components/SupportQuestions.vue';

const isFooterInView = ref(false);
</script>

<template>
	<!-- eslint-disable vue/no-multiple-template-root -->
	<Navbar v-if="false" :show-navbar="isFooterInView" />
	<SupportHero />
	<SupportAdjectives />
	<SupportPricing />
	<SupportQuestions />
	<SupportConnect />
	<SupportContact v-if="false" />
	<Footer @is-in-view="(value: boolean) => (isFooterInView = !value)" />
</template>
