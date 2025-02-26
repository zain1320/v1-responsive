<script setup lang="ts">
import { Collapse } from 'vue-collapsed';
const isExpanded = ref(false);
</script>

<template>
	<div class="self-start rounded-3xl border border-[#d3d3d3] bg-white p-7">
		<h1
			class="flex cursor-pointer justify-between gap-5 text-sm font-semibold"
			@click="isExpanded = !isExpanded"
		>
			<span>
				<slot name="heading" />
			</span>
			<div class="relative w-10 self-center">
				<div
					class="bg-Black absolute top-1/2 left-1/2 h-[1px] w-4 -translate-x-1/2 -translate-y-1/2 rotate-90 transition duration-300"
					:class="isExpanded && 'rotate-180'"
				/>
				<div
					class="bg-Black absolute top-1/2 left-1/2 h-[1px] w-4 -translate-x-1/2 -translate-y-1/2"
				/>
			</div>
		</h1>
		<Collapse :when="isExpanded">
			<p class="mt-7 max-w-[90%] font-semibold">
				<slot name="text" />
			</p>
		</Collapse>
	</div>
</template>
