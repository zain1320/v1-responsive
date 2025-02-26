<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
</script>

<template>
	<div class="">
		<div
			id="pricing"
			class="container py-36 md:px-24 md:pt-48"
			data-aos="fade-up"
			data-aos-offset="400"
			data-aos-duration="1000"
		>
			<h1
				class="text-center text-2xl font-semibold max-sm:pb-20 md:mb-24 md:text-start md:text-5xl"
			>
				Chatbot
				<span
					class="border-l-[4px] border-[#2310d0] bg-gradient-to-r from-[#1023d052] to-[#3734980a] pl-[8px] pr-[8px]"
					>Pricing</span
				>
			</h1>
			<div class="rounded-[32px] border border-[#eee] bg-[#fbfbfb] p-3 pb-10">
				<div class="rounded-[20px] border border-[#f4f4f4] bg-[#ffffff] p-7">
					<div
						class="mb-4 flex items-center justify-between gap-3 md:justify-normal"
					>
						<h2 class="text-xl font-medium">AI Text Chatbots</h2>
						<p
							class="rounded-full bg-[#101ad01a] px-3 py-1 text-sm font-semibold text-[#0a1f95]"
						>
							Website/Social Media
						</p>
					</div>
					<h1 class="mb-6 text-2xl font-semibold md:w-[70%]">
						Next-Level Customer Engagement.
					</h1>
					<div class="my-4 mt-10 flex items-end gap-1">
						<h2 class="pb-3 text-2xl font-semibold">
							Starting From CAD $499
							<span class="leading text-xl font-semibold text-[#8b8b8b]"
								>setup&nbsp;fee</span
							>
						</h2>
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
				<div class="mt-6 grid grid-cols-1 gap-2 px-5 sm:grid-cols-2">
					<div class="flex items-start">
						<div class="mr-2 mt-2 h-[7px] w-[7px] rounded-full bg-[#b8b8b8]" />
						<div class="font-semibold md:w-[70%]">Advanced Automations</div>
					</div>
					<div class="flex items-start">
						<p class="mr-2 mt-2 h-[7px] w-[7px] rounded-full bg-[#b8b8b8]" />
						<p class="font-semibold md:w-[70%]">Social Media Integrations</p>
					</div>
				</div>
				<div class="mt-1 grid grid-cols-1 gap-2 px-5 sm:grid-cols-2">
					<div class="flex items-center">
						<p class="mr-2 h-[7px] w-[7px] rounded-full bg-[#b8b8b8]" />
						<p class="font-semibold md:w-[70%]">Rigorous Testing</p>
					</div>
					<div class="flex items-center">
						<p class="mr-2 h-[7px] w-[7px] rounded-full bg-[#b8b8b8]" />
						<p class="font-semibold md:w-[70%]">Latest AI Models</p>
					</div>
				</div>
				<div class="mt-2 flex items-center px-5">
					<p class="mr-2 h-[7px] w-[7px] rounded-full bg-[#b8b8b8]" />
					<p class="font-semibold md:w-[70%]">24/7 Priority Support</p>
				</div>
			</div>
			<div class="mt-7 rounded-[32px] border border-gray-100 bg-[#fbfbfb] p-3">
				<div class="rounded-[20px] border border-gray-100 bg-white p-6">
					<h1
						class="mb-7 text-3xl font-semibold max-sm:max-w-64 max-sm:text-2xl"
					>
						Unsure how AI could be used in your business?
					</h1>
					<p class="font-semibold">
						If you're unsure how AI could benefit your business, feel free to
						book a 30-minute or 1-hour consultation session with Zain. During
						the session, you'll learn how we've successfully implemented AI in
						businesses similar to yours, providing insights to help you make a
						more informed decision.
					</p>
					<a
						target="_blank"
						:href="runtimeConfig.public.calendly"
						class="cursor-pointer"
					>
						<Button class="mt-10 flex items-center gap-3">
							<img
								src="https://cdn.prod.website-files.com/66b3f7d1ff69e1e7133402fc/66b3f7d1ff69e1e713340363_Phone.svg"
								alt=""
							/>
							<span class="shrink-1"> Book 1:1 Consultation Session </span>
						</Button>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>
