<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
</script>

<template>
	<section
		id="contact-us"
		class="bg-[#f4f4f4] py-5"
		data-aos="fade-up"
		data-aos-offset="400"
		data-aos-duration="1000"
	>
		<div class="container">
			<div class="flex items-center justify-between gap-5 max-sm:flex-col">
				<h1 class="text-4xl font-semibold">
					Let's
					<span
						class="border-l-[4px] border-[#3a2db6] bg-gradient-to-r from-[#1023d052] to-[#3734980a] pl-[8px] pr-[8px]"
					>
						Connect
					</span>
				</h1>
				<p class="max-w-60 font-medium max-sm:text-center">
					We're here to answer your questions and discuss how we can help you
					achieve your goals.
				</p>
			</div>
			<div class="mt-10 overflow-x-scroll rounded-3xl bg-white p-10 sm:mx-5">
				<CalendlyInlineWidget :url="runtimeConfig.public.calendly" />
			</div>
		</div>
	</section>
</template>
