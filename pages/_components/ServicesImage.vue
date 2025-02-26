<script setup lang="ts">
defineProps<{ image: string; url: string }>();
</script>

<template>
	<div
		class="group font-Poppins relative cursor-pointer overflow-hidden rounded-2xl"
		@click="navigateTo(url)"
	>
		<div class="absolute z-[5] h-full w-full">
			<img
				:src="image"
				alt=""
				class="relative h-full w-full object-cover transition group-hover:scale-105"
			/>
			<div class="radial-gradient absolute top-0 z-[6] h-full w-full" />
		</div>
		<div
			class="relative z-10 flex h-full w-full flex-col items-start justify-end p-5 px-7"
		>
			<h1 class="max-w-[25ch] text-2xl font-semibold text-white">
				<slot name="heading" />
			</h1>
			<p class="my-3 max-w-54 text-lg font-semibold text-[#d4d4d4]">
				<slot name="paragraph" />
			</p>
			<NuxtLink
				:to="url"
				class="group/button flex items-center text-lg font-semibold text-white transition"
			>
				<span class="pr-3 transition-all group-hover/button:pr-5">
					Get Started
				</span>
				<Icon
					name="ep:top-right"
					size="14"
				/>
			</NuxtLink>
		</div>
	</div>
</template>

<style>
.radial-gradient {
	background: radial-gradient(
		circle at center right,
		rgba(2, 0, 36, 0) 0%,
		rgba(49, 49, 51, 0.6783088235294117) 50%
	);
}
</style>
