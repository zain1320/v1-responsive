<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
</script>

<template>
	<section
		class="pb-10 pt-20 md:px-24"
		data-aos="fade-up"
		data-aos-offset="400"
		data-aos-duration="1000"
	>
		<div class="container">
			<div
				class="mt-16 flex items-start justify-start gap-5 max-sm:flex-col md:items-center md:justify-between"
			>
				<h1 class="text-xl font-semibold max-sm:mb-5 max-sm:ml-16 md:text-4xl">
					Let's
					<span
						class="border-l-[4px] border-[#2310d0] bg-gradient-to-r from-[#1023d052] to-[#3734980a] pl-[8px] pr-[8px]"
					>
						Connect
					</span>
				</h1>
				<p
					class="text-start text-[15px] font-medium max-sm:pl-10 max-sm:pr-8 md:max-w-72"
				>
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
