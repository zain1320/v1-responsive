<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
</script>

<template>
	<div
		class="container flex flex-col items-center pb-40 pt-4 font-Poppins text-Black md:pb-28"
	>
		<NuxtLink to="/">
			<img
				src="/images/pacifiq_logo.png"
				alt=""
				class="h-auto max-w-[325px] cursor-pointer transition-all hover:scale-[120%]"
			/>
		</NuxtLink>
		<h3 class="my-5 mt-10 text-lg font-semibold">
			Helping Businesses Transition to AI
		</h3>
		<div class="flex flex-col items-center">
			<h1
				class="max-w-sm text-center font-Poppins text-4xl font-bold leading-snug md:text-7xl"
			>
				Advanced
			</h1>
			<span
				class="max-w-xl whitespace-nowrap border-l-[4px] border-[#2310d0] bg-gradient-to-r from-[#1023d052] to-[#3734980a] pl-[8px] pr-[8px] text-center font-Poppins text-5xl font-bold leading-snug md:text-7xl"
			>
				AI Text Chatbots
			</span>
		</div>
		<div class="mt-5 gap-3 *:my-3 max-sm:w-full max-sm:*:mx-auto sm:flex">
			<a
				class="block max-sm:w-full max-sm:*:w-full"
				:href="runtimeConfig.public.calendly"
				target="_blank"
			>
				<Button
					class="inline-flex items-center justify-center gap-2 shadow-lg shadow-gray-300 max-sm:w-full"
				>
					<Icon
						name="mynaui:telephone"
						size="20"
					/>
					Book A Call</Button
				>
			</a>
			<a
				class="block max-sm:w-full max-sm:*:w-full"
				href="#pricing"
			>
				<Button
					is-light
					class="max-sm:mt-3 max-sm:w-full max-sm:text-start"
					>Discover Pricing</Button
				>
			</a>
		</div>
	</div>
</template>
