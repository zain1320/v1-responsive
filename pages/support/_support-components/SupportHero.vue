<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
</script>

<template>
	<div class="">
		<div
			class="py-0.1 container flex flex-col items-center font-Poppins text-Black"
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
			<h1
				class="max-w-xl text-center font-Poppins text-4xl font-bold md:text-7xl"
			>
				We'll
				<span
					class="border-l-[4px] border-[#2310d0] bg-gradient-to-r from-[#1023d052] to-[#3734980a] px-2 py-0 text-center font-Poppins"
				>
					support
				</span>
				you all the way.
			</h1>
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
	</div>
</template>
