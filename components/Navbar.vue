<script setup lang="ts">
defineProps<{ showNavbar: boolean }>();
const isNavbarOpen = ref(false);
</script>

<template>
	<Transition>
		<div v-if="showNavbar">
			<nav
				class="fixed bottom-10 left-1/2 z-50 hidden w-[550px] -translate-x-1/2 overflow-hidden rounded-full bg-[#f4f4f4] p-2 md:block"
			>
				<div
					class="flex divide-x-1 divide-[#c4c4c4] overflow-hidden rounded-full border border-[#c4c4c4] bg-white"
				>
					<div
						class="w-fit cursor-pointer px-7 py-5 text-center text-[#8c8b8b] transition-all hover:bg-[#f4f4f4] hover:px-9"
					>
						AI Voice Agents
					</div>
					<div
						class="w-fit cursor-pointer px-7 py-5 text-center text-[#8c8b8b] transition-all hover:bg-[#f4f4f4] hover:px-9"
					>
						AI Text Chatbots
					</div>
					<div
						class="w-fit cursor-pointer px-7 py-5 text-center text-[#8c8b8b] transition-all hover:bg-[#f4f4f4] hover:px-9"
					>
						Contact Us
					</div>
				</div>
			</nav>

			<nav
				class="fixed bottom-10 left-1/2 z-50 hidden -translate-x-1/2 p-1 max-sm:block"
			>
				<div class="rounded-full bg-[#c4c4c4] p-1">
					<div
						class="grid size-14 cursor-pointer place-content-center rounded-full border border-[#c4c4c4] bg-white"
						@click="isNavbarOpen = !isNavbarOpen"
					>
						<Icon
							v-if="!isNavbarOpen"
							name="streamline:interface-setting-menu-1-button-parallel-horizontal-lines-menu-navigation-three-hamburger"
						/>
						<Icon
							v-else
							name="material-symbols:close-rounded"
							size="24"
						/>
					</div>
				</div>
			</nav>

			<div
				v-if="isNavbarOpen"
				class="fixed bottom-32 left-1/2 z-40 -translate-x-1/2 rounded-3xl bg-[#f4f4f4] p-2 md:hidden"
			>
				<div
					class="divide-y-1 divide-[#c4c4c4] overflow-hidden rounded-3xl border border-[#c4c4c4]"
				>
					<div
						class="w-full cursor-pointer bg-white px-5 py-5 text-center text-[#8c8b8b] transition-all hover:bg-[#f4f4f4]"
					>
						AI Voice Agents
					</div>
					<div
						class="w-full cursor-pointer bg-white px-5 py-5 text-center text-[#8c8b8b] transition-all hover:bg-[#f4f4f4]"
					>
						AI Text Chatbots
					</div>
					<div
						class="w-full cursor-pointer bg-white px-5 py-5 text-center text-[#8c8b8b] transition-all hover:bg-[#f4f4f4]"
					>
						Contact Us
					</div>
				</div>
			</div>
		</div>
	</Transition>
</template>

<style>
.v-enter-active,
.v-leave-active {
	transition: opacity 250ms ease-in-out;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>
