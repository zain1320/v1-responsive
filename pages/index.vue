<script setup lang="ts">
import Hero from './_components/Hero.vue';
import Adjectives from './_components/Adjectives.vue';
import Benifits from './_components/Benifits.vue';
import CommonQuestions from './_components/CommonQuestions.vue';
import OurServices from './_components/OurServices.vue';
import ServiceCards from './_components/ServiceCards.vue';
import Connect from './_components/Connect.vue';
import Contact from './_components/Contact.vue';

const isFooterInView = ref(false);
</script>

<template>
	<!-- eslint-disable vue/no-multiple-template-root -->
	<Navbar v-if="false" :show-navbar="isFooterInView" />
	<Hero />
	<Adjectives />
	<ServiceCards />
	<Benifits />
	<OurServices />
	<CommonQuestions />
	<Connect />
	<Contact v-if="false"/>
	<Footer @is-in-view="(value: boolean) => (isFooterInView = !value)" />
</template>
