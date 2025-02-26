<script setup lang="ts">
const form = reactive({
	name: '',
	email: '',
	message: ''
});
</script>

<template>
	<div class="bg-gray-200 pb-40 md:px-6 lg:px-24">
		<section
			class="container rounded-4xl pb-8"
			data-aos="fade-up"
			data-aos-offset="400"
			data-aos-duration="1000"
		>
			<div class="">
				<div class="font-Poppins rounded-4xl bg-[#fbfbfb] p-5 px-10">
					<h1 class="text-Black my-5 text-2xl font-semibold">
						Send us a message
					</h1>
					<input
						v-model="form.name"
						type="text"
						class="w-full rounded-2xl border border-[#d1d1d1] bg-[#f4f4f4] p-4 px-6 outline-none placeholder:text-sm focus:border-[#bbbbbb]"
						placeholder="Full name"
					/>
					<input
						v-model="form.email"
						type="email"
						class="my-3 w-full rounded-2xl border border-[#d1d1d1] bg-[#f4f4f4] p-4 px-6 outline-none placeholder:text-sm focus:border-[#bbbbbb]"
						placeholder="Email"
					/>
					<textarea
						v-model="form.message"
						class="w-full rounded-2xl border border-[#d1d1d1] bg-[#f4f4f4] p-4 px-6 outline-none placeholder:text-sm focus:border-[#bbbbbb]"
						placeholder="How can we help you"
					/>
					<button
						class="bg-Black mt-3 block w-full cursor-pointer rounded-full py-4 text-center font-semibold text-white"
					>
						Send a Message
					</button>
				</div>
			</div>
		</section>
	</div>
</template>
