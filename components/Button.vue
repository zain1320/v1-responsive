<script setup lang="ts">
const props = defineProps<{ isLight?: boolean }>();
</script>

<template>
	<button
		class="cursor-pointer rounded-full px-10 py-5 font-semibold transition-all duration-300 hover:px-14"
		:class="
			!props.isLight
				? 'bg-Black text-white'
				: 'text-Black hover:bg-Black bg-gray-200 hover:text-white'
		"
	>
		<slot />
	</button>
</template>
