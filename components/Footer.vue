<script setup lang="ts">
const footerRef = ref();
const emits = defineEmits<{ (id: 'isInView', value: boolean): void }>();

const isFooterVisible = useElementVisibility(footerRef, {
	rootMargin: '-100px'
});

watch(
	isFooterVisible,
	(isVisisble) => {
		emits('isInView', isVisisble);
	},
	{
		immediate: true
	}
);
</script>

<template>
	<footer
		ref="footerRef"
		class="bg-Black py-5"
	>
		<div
			class="container flex flex-col justify-between gap-16 max-md:items-center md:flex-row"
		>
			<img
				src="/images/pacifiq_logo_white.png"
				alt=""
				class="mt-1 w-52 md:self-start"
			/>
			<div class="max-w-[350px]">
				<div class="grid grid-cols-2 md:grid-cols-[100px_200px]">
					<div>
						<ul
							class="space-y-3 text-xl text-white *:cursor-pointer *:transition *:duration-300 *:hover:opacity-80"
						>
							<li>
								<a href="#services"> Services </a>
							</li>
							<li><a href="#pricing">Pricing</a></li>
						</ul>
					</div>
				</div>
				<p class="mt-10 text-sm text-[#9b9a99] max-md:text-center">
					© PACIFIQ AI 2025, All rights reserved. Kidd Terrace, Toronto, ON
					M3J3S9, Canada
				</p>
			</div>
		</div>
	</footer>
</template>
