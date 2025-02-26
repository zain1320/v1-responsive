<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
</script>

<template>
	<div class="">
		<div
			id="pricing"
			class="container py-36 md:px-8 md:pt-48 lg:px-24"
			data-aos="fade-up"
			data-aos-offset="400"
			data-aos-duration="1000"
		>
			<h1
				class="text-center text-3xl font-semibold max-sm:pb-20 md:mb-24 md:text-start md:text-5xl"
			>
				Support
				<span
					class="border-l-[4px] border-[#2310d0] bg-gradient-to-r from-[#1023d052] to-[#3734980a] pl-[8px] pr-[8px]"
					>Packages</span
				>
			</h1>
			<div class="rounded-[32px] border border-[#eee] bg-[#fbfbfb] p-3 pb-10">
				<div class="rounded-[20px] border border-[#f4f4f4] bg-[#ffffff] p-8">
					<div
						class="mb-4 flex flex-col items-center justify-between gap-3 md:flex-row md:justify-normal"
					>
						<h2 class="text-xl font-semibold">Support & Maintenance</h2>
						<p
							class="rounded-full bg-[#1026d01a] px-3 py-1.5 text-sm font-semibold text-[#0a2395]"
						>
							Suitable For Custom AI Agents
						</p>
					</div>
					<h1 class="mb-6 text-2xl font-semibold md:w-[70%]">
						Multiple packages to support your custom AI Agent.
					</h1>
					<div class="my-4 mt-10 flex items-center gap-2">
						<span class="leading text-[15px] font-semibold">Ranging From</span>
						<h2 class="mb-1 text-3xl font-semibold">$500 - $2,500/month</h2>
					</div>
					<a
						target="_blank"
						:href="runtimeConfig.public.calendly"
					>
						<button
							class="flex cursor-pointer items-center gap-2 rounded-full border border-[#fbfbfb] bg-black px-8 py-4 font-semibold text-white transition-all duration-200 hover:px-10"
						>
							<img
								src="https://cdn.prod.website-files.com/66b3f7d1ff69e1e7133402fc/66b3f7d1ff69e1e71334038a_Rocket%20Launch.svg"
								alt=""
								class=""
							/>
							Get Started
						</button>
					</a>
				</div>
				<div class="mt-6 grid grid-cols-1 px-5 sm:grid-cols-2">
					<div class="flex items-start">
						<div class="mr-2 mt-2 h-[7px] w-[7px] rounded-full bg-[#b8b8b8]" />
						<div class="font-semibold md:w-[70%]">24/7 Monitoring</div>
					</div>
					<div class="flex items-start">
						<p class="mr-2 mt-2 h-[7px] w-[7px] rounded-full bg-[#b8b8b8]" />
						<p class="font-semibold md:w-[70%]">Latest AI Upgrades</p>
					</div>
				</div>
				<div class="mt-2 grid grid-cols-1 px-5 sm:grid-cols-2">
					<div class="flex items-center">
						<p class="mr-2 h-[7px] w-[7px] rounded-full bg-[#b8b8b8]" />
						<p class="font-semibold md:w-[70%]">24/7 Priority Support</p>
					</div>
					<div class="mt-2 flex items-start max-sm:mb-1">
						<p class="mr-2 mt-2 h-[7px] w-[7px] rounded-full bg-[#b8b8b8]" />
						<p class="font-semibold md:w-[70%]">Data Analysis</p>
					</div>
					<div class="flex items-center">
						<p class="mr-2 h-[7px] w-[7px] rounded-full bg-[#b8b8b8]" />
						<p class="font-semibold md:w-[70%]">Monthly Update Calls</p>
					</div>
					<div class="mt-2 flex items-center">
						<p class="mr-2 h-[7px] w-[7px] rounded-full bg-[#b8b8b8]" />
						<p class="font-semibold md:w-[70%]">Custom Dashboard</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
