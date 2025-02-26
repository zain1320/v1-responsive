<script setup lang="ts">
import ServicesImage from './ServicesImage.vue';

const runtimeConfig = useRuntimeConfig();
</script>

<template>
	<div class="rounded-4xl container mt-10 border border-gray-100 rounded-3xl bg-white pb-10" data-aos="fade-up"
		data-aos-offset="400" data-aos-duration="1000">
		<div id="services"
			class="flex flex-col items-center justify-between gap-3 py-8 sm:items-start md:flex-row md:items-center">
			<h1 class="text-3xl font-semibold md:text-4xl">Our Services</h1>
			<p class="rounded-full bg-[#10d07f1a] px-4 py-1.5 font-semibold text-[#0a955a]">
				3 services
			</p>
		</div>
		<div class="grid gap-5 *:min-h-[420px]">
			<ServicesImage image="/images/voice-agent.jpg" url="/voice-agents" class="md:col-start-1 md:-col-end-1">
				<template #heading>AI Voice Agents</template>
				<template #paragraph>
					Next Level AI Voice Agents For Automated Inbound and Outbound Phone
					Calls
				</template>
			</ServicesImage>
			<ServicesImage image="/images/chatbot-stock.jpg" url="/chatbots" class="md:col-start-2 md:col-end-3">
				<template #heading>AI Text Chatbots</template>
				<template #paragraph>
					AI Text Agents for Your Website, Social Media, Emails, SMS & More.
				</template>
			</ServicesImage>
			<ServicesImage image="/images/headphone.webp" url="/support" class="md:col-start-1 md:col-end-3">
				<template #heading>Support And Maintainance</template>
				<template #paragraph>
					Regular updates, performance boosts, and fixes to keep your agents
					running smoothly.
				</template>
			</ServicesImage>
		</div>
		<div id="ai-agents" class="mt-5 rounded-[32px] border border-gray-100 bg-[#fbfbfb] p-3">
			<div class="rounded-[20px] border border-gray-100 bg-white p-6">
				<h1 class="mb-7 sm:text-3xl font-semibold max-sm:max-w-64 max-sm:text-2xl">
					What Are AI Agents?
				</h1>
				<p class="font-medium sm:font-semibold">
					AI agents are like digital employees, capable of handling tasks
					autonomously to drive business growth. Examples include AI phone
					agents that can handle call inquiries, website chatbots for customer
					support, and email agents for sales and support. These agents interact
					with stakeholders, providing efficient and scalable solutions to
					enhance business operations.
				</p>
			</div>
		</div>
		<div class="mt-5 rounded-[32px] border border-gray-100 bg-[#fbfbfb] p-3">
			<div class="rounded-[20px] border border-gray-100 bg-white p-6">
				<h1 class="mb-7 text-3xl font-semibold max-sm:max-w-64 max-sm:text-2xl">
					Unsure how AI could be used in your business?
				</h1>
				<p class="font-medium sm:font-semibold">
					If you're unsure how AI could benefit your business, feel free to book
					a 30-minute or 1-hour consultation session with Zain. During the
					session, you'll learn how we've successfully implemented AI in
					businesses similar to yours, providing insights to help you make a
					more informed decision.
				</p>
				<a :href="runtimeConfig.public.calendly" target="_blank" class="cursor-pointer max-sm:mx-auto">
					<Button class="mt-10 flex items-center gap-1 max-sm:text-base">
						<Icon name="bi:rocket-takeoff" class="shrink-0" />
						<span class="font-medium"> Book 1:1 Consultation Session </span>
					</Button>
				</a>
			</div>
		</div>
	</div>
</template>
