<script lang="ts" setup>
import AgentAdjectives from './_voice-components/AgentAdjectives.vue';
import AgentConnect from './_voice-components/AgentConnect.vue';
import AgentContact from './_voice-components/AgentContact.vue';
import AgentHero from './_voice-components/AgentHero.vue';
import AgentPricing from './_voice-components/AgentPricing.vue';
import DesignedBusiness from './_voice-components/DesignedBusiness.vue';
const isFooterInView = ref(false);
</script>

<template>
	<!-- eslint-disable vue/no-multiple-template-root -->
	<Navbar v-if="false":show-navbar="isFooterInView" />
	<AgentHero />
	<AgentAdjectives />
	<DesignedBusiness />
	<AgentPricing />
	<AgentConnect />
	<AgentContact v-if="false" />
	<Footer @is-in-view="(value: boolean) => (isFooterInView = !value)" />
</template>
