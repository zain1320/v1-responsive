<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
</script>

<template>
	<section class="mt-32 pb-14 pt-20">
		<div
			class="container"
			data-aos="fade-up"
			data-aos-offset="400"
			data-aos-duration="1000"
		>
			<div
				class="flex items-center justify-start gap-5 max-sm:flex-col md:items-center md:justify-between"
			>
				<h1 class="text-2xl font-semibold max-sm:mb-5 max-sm:ml-16 md:text-4xl">
					Let's
					<span
						class="border-l-[4px] border-[#3a2db6] bg-gradient-to-r from-[#1023d052] to-[#3734980a] pl-[8px] pr-[8px]"
					>
						Connect
					</span>
				</h1>
				<p class="text-start font-medium max-sm:pl-10 sm:max-w-72">
					We're here to answer your questions and discuss how we can help you
					achieve your goals.
				</p>
			</div>
			<div
				class="mt-16 overflow-x-scroll rounded-3xl bg-[#fbfbfb] py-6 max-sm:pl-6"
			>
				<CalendlyInlineWidget :url="runtimeConfig.public.calendly" />
			</div>
		</div>
	</section>
</template>
