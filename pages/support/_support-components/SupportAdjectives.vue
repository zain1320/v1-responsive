<script setup lang="ts">
import { Vue3Marquee } from 'vue3-marquee';

const _ltrAdjectives = [
	'Dynamic',
	'Customized',
	'Efficient',
	'Versatile',
	'Creative',
	'Innovative',
	'Reliable',
	'Transformative',
	'Predictive',
	'Adaptive',
	'Scalable',
	'Agile',
	'Impactful',
	'Seamless'
];
</script>

<template>
	<div class="my-10">
		<Vue3Marquee
			:duration="19"
			clone
			direction="reverse"
		>
			<div
				class="flex flex-nowrap overflow-hidden *:px-2 *:pt-2 *:pb-3 *:text-6xl *:leading-[1.1] *:font-semibold"
			>
				<h1
					class="border-l-4 border-red-400 bg-gradient-to-r from-red-200 to-red-100"
				>
					Dynamic
				</h1>
				<h1
					class="border-l-4 border-blue-400 bg-gradient-to-r from-blue-200 to-blue-100"
				>
					Customized
				</h1>
				<h1
					class="border-l-4 border-yellow-400 bg-gradient-to-r from-yellow-200 to-yellow-100"
				>
					Efficient
				</h1>
				<h1
					class="border-l-4 border-purple-400 bg-gradient-to-r from-purple-200 to-purple-100"
				>
					Versatile
				</h1>
				<h1
					class="border-l-4 border-orange-400 bg-gradient-to-r from-orange-200 to-orange-100"
				>
					Innovative
				</h1>
				<h1
					class="border-l-4 border-teal-400 bg-gradient-to-r from-teal-200 to-teal-100"
				>
					Seamless
				</h1>
			</div>
		</Vue3Marquee>
		<div class="py-3" />
		<Vue3Marquee
			:duration="19"
			clone
		>
			<div
				class="flex flex-nowrap overflow-hidden *:px-2 *:pt-2 *:pb-3 *:text-6xl *:leading-[1.1] *:font-semibold"
			>
				<h1
					class="border-l-4 border-red-400 bg-gradient-to-r from-red-200 to-red-100"
				>
					Transformative
				</h1>
				<h1
					class="border-l-4 border-blue-400 bg-gradient-to-r from-blue-200 to-blue-100"
				>
					Predictive
				</h1>
				<h1
					class="border-l-4 border-yellow-400 bg-gradient-to-r from-yellow-200 to-yellow-100"
				>
					Adaptive
				</h1>
				<h1
					class="border-l-4 border-purple-400 bg-gradient-to-r from-purple-200 to-purple-100"
				>
					Scalable
				</h1>
				<h1
					class="border-l-4 border-orange-400 bg-gradient-to-r from-orange-200 to-orange-100"
				>
					Agile
				</h1>
				<h1
					class="border-l-4 border-teal-400 bg-gradient-to-r from-teal-200 to-teal-100"
				>
					Impactful
				</h1>
			</div>
		</Vue3Marquee>
	</div>
</template>
