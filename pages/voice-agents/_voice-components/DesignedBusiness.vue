<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
</script>

<template>
	<div class="py-5 md:py-16">
		<div
			id="pricing"
			class="container mt-20"
			data-aos="fade-up"
			data-aos-offset="400"
			data-aos-duration="1000"
		>
			<h1
				class="mb-14 text-center text-2xl font-semibold max-sm:mx-auto md:mb-24 md:w-full md:text-5xl"
			>
				Designed for any
				<span
					class="border-l-[4px] border-[#3a2db6] bg-gradient-to-r from-[#1023d052] to-[#3734980a] pl-[8px] pr-[8px]"
					>Business</span
				>
			</h1>
			<div
				id="pricing"
				class="mt-5 rounded-[32px] border border-gray-100 bg-[#fbfbfb] p-3"
			>
				<div class="rounded-[20px] border border-gray-100 bg-white p-6">
					<h1 class="mb-7 text-3xl font-semibold max-sm:text-2xl">
						Inbound Phone Agent
					</h1>
					<p class="font-medium">
						Inbound AI Phone Agents are virtual systems that use artificial
						intelligence, including natural language processing and speech
						recognition, to handle incoming customer calls. They can interpret
						caller queries, provide relevant responses, and resolve issues
						without the need for human agents. These systems help businesses
						improve efficiency, reduce operational costs, and offer 24/7
						customer support.
					</p>
				</div>
			</div>
			<div
				id="pricing"
				class="mt-5 rounded-[32px] border border-gray-100 bg-[#fbfbfb] p-3"
			>
				<div class="rounded-[20px] border border-gray-100 bg-white p-6">
					<h1 class="mb-7 text-3xl font-semibold max-sm:text-2xl">
						Outbound Phone Agent
					</h1>
					<p class="font-medium">
						Outbound AI Phone Agents are AI-driven systems that autonomously
						initiate phone calls to customers for tasks like appointment
						reminders. They use natural language processing and speech synthesis
						to engage in conversations, answer questions, and record responses.
						These agents help businesses maintain consistent communication with
						customers.
					</p>
				</div>
			</div>
			<div
				class="rounded-4xl container mt-6 flex flex-col items-center justify-between gap-5 bg-white px-6 py-6 md:mt-10 md:flex-row md:px-10 md:py-10"
			>
				<h1 class="text-xl font-semibold md:text-2xl">
					Book Our AI Agent Discovery Call Today.
				</h1>
				<a
					target="_blank"
					:href="runtimeConfig.public.calendly"
					class="cursor-pointer"
				>
					<Button class="flex items-center gap-3">
						<Icon
							name="mynaui:telephone"
							size="20"
						/>
						Book A Call
					</Button>
				</a>
			</div>
		</div>
	</div>
</template>
