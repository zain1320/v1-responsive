<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();

const isMounted = ref(false);

onMounted(() => {
	setTimeout(() => {
		isMounted.value = true;
	}, 500);
});
</script>

<template>
	<div class="py-0.1 container flex flex-col items-center font-Poppins text-Black transition duration-300"
		:class="isMounted ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'">
		<NuxtLink to="/">
			<img src="/images/pacifiq_logo.png" alt=""
				class="h-auto max-w-[325px] cursor-pointer transition-all hover:scale-[120%]" />
		</NuxtLink>
		<h3 class="my-5 mt-10 font-medium sm:text-lg sm:font-semibold">
			Helping Businesses Transition to AI
		</h3>
		<h1 class="max-w-2xl px-3 text-center font-Poppins text-[44px] sm:text-7xl font-bold leading-snug">
			Building
			<span
				class="border-l-[4px] inline-block border-[#2310d0] bg-gradient-to-r from-[#1023d052] to-[#3734980a] pl-[8px] pr-[8px]">
				AI Agents
			</span>
			that do real work.
		</h1>
		<div class="mt-5 gap-3 *:my-3 max-sm:w-full max-sm:*:mx-auto sm:flex">
			<a class="block max-sm:w-full max-sm:*:w-full" :href="runtimeConfig.public.calendly" target="_blank">
				<Button class="text-base font-medium flex items-center gap-2">
					<Icon name="mynaui:telephone" size="18" />
					Book A Call
				</Button>
			</a>
			<a class="block max-sm:w-full max-sm:*:w-full" href="#services">
				<Button is-light class="max-sm:text-start">Our Services</Button>
			</a>
			<a class="block max-sm:w-full max-sm:*:w-full" href="#ai-agents">
				<Button is-light class="max-sm:text-start">What are AI Agents?</Button>
			</a>
			<a class="block max-sm:w-full max-sm:*:w-full" href="tel:+16476915367">
				<Button is-light
					class="rounded-full text-base font-medium bg-green-500 px-7 py-2 sm:font-bold text-white shadow-md transition duration-300 ease-in-out hover:bg-green-600">Try
					it out now!
				</Button>
			</a>
		</div>
	</div>
</template>
