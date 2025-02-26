<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
</script>
<template>
	<div class="container mx-auto mb-20 mt-8" data-aos="fade-up" data-aos-offset="400" data-aos-duration="1000">
		<div class="mb- flex flex-col items-start justify-between gap-14 md:flex-row md:items-center md:gap-0">
			<h1 class="mx-auto text-2xl font-semibold md:mx-0 md:text-5xl">
				Benefits that Drive Success
			</h1>
			<a :href="runtimeConfig.public.calendly" target="_blank" class="cursor-pointer max-sm:mx-auto">
				<Button class="mb-5 sm:mb-0 flex items-center gap-2">
					<Icon name="mynaui:telephone" size="20" />
					Book A Call
				</Button>
			</a>
		</div>
		<div class="rounded-4xl border border-gray-200 bg-white p-9">
			<div class="grid grid-cols-1 md:grid-cols-2">
				<div class="">
					<div class="first:h-16">
						<img class="w-56" src="/assets/images/pacifiq_logo_small.png" alt="" />
					</div>
					<hr class="mt-8 h-[1px] text-gray-200" />
					<div class="mt-5 flex items-center gap-3">
						<span class="w-7 rounded-[6px] border border-gray-100 text-center">
							<Icon size="12px" name="grommet-icons:checkmark" style="color: black" />
						</span>
						<p class="text-[17px] font-medium">Experienced AI Developers</p>
					</div>
					<hr class="mt-6 h-[1px] text-gray-200" />
					<div class="mt-5 flex items-center gap-3">
						<span class="w-7 rounded-[6px] border border-gray-100 text-center">
							<Icon size="12px" name="grommet-icons:checkmark" style="color: black" />
						</span>
						<p class="text-[17px] font-medium">
							Innovative Development Practices
						</p>
					</div>
					<hr class="mt-6 h-[1px] text-gray-200" />
					<div class="mt-5 flex items-center gap-3">
						<span class="w-7 rounded-[6px] border border-gray-100 text-center">
							<Icon size="12px" name="grommet-icons:checkmark" style="color: black" />
						</span>
						<p class="text-[17px] font-medium">Complete Custom Development</p>
					</div>
					<hr class="mt-6 h-[1px] text-gray-200" />
					<div class="mt-5 flex items-center gap-3">
						<span class="w-7 rounded-[6px] border border-gray-100 text-center">
							<Icon size="12px" name="grommet-icons:checkmark" style="color: black" />
						</span>
						<p class="text-[17px] font-medium">Client-Centric Approach</p>
					</div>
					<hr class="mt-6 h-[1px] text-gray-200" />
					<div class="mt-5 flex items-center gap-3">
						<span class="w-7 rounded-[6px] border border-gray-100 text-center">
							<Icon size="12px" name="grommet-icons:checkmark" style="color: black" />
						</span>
						<p class="text-[17px] font-medium">
							Rigorous Testing and Validation
						</p>
					</div>
					<hr class="mt-6 h-[1px] text-gray-200" />
					<div class="mt-5 flex items-center gap-3">
						<span class="w-7 rounded-[6px] border border-gray-100 text-center">
							<Icon size="12px" name="grommet-icons:checkmark" style="color: black" />
						</span>
						<p class="text-[17px] font-medium">
							Partners With Leading AI Platforms
						</p>
					</div>
				</div>

				<div class="">
					<h1 class="text-xl font-semibold first:h-16 max-md:mt-10">
						Other Development Agencies
					</h1>
					<hr class="mt-[29px] h-[1px] text-gray-200" />
					<div class="mt-5 flex items-center gap-3">
						<span class="w-7 rounded-[6px] border border-gray-100 text-center">
							<Icon size="12px" name="material-symbols:close-rounded" style="color: black" />
						</span>
						<p class="text-[17px] font-medium">Junior Developers</p>
					</div>
					<hr class="mt-6 h-[1px] text-gray-200" />
					<div class="mt-5 flex items-center gap-3">
						<span class="w-7 rounded-[6px] border border-gray-100 text-center">
							<Icon size="12px" name="material-symbols:close-rounded" style="color: black" />
						</span>
						<p class="text-[17px] font-medium">
							Outdated Technologies & Approaches
						</p>
					</div>
					<hr class="mt-6 h-[1px] text-gray-200" />
					<div class="mt-5 flex items-center gap-3">
						<span class="w-7 rounded-[6px] border border-gray-100 text-center">
							<Icon size="12px" name="material-symbols:close-rounded" style="color: black" />
						</span>
						<p class="text-[17px] font-medium">
							Generic / Copy & Paste Solutions
						</p>
					</div>
					<hr class="mt-6 h-[1px] text-gray-200" />
					<div class="mt-5 flex items-center gap-3">
						<span class="w-7 rounded-[6px] border border-gray-100 text-center">
							<Icon size="12px" name="material-symbols:close-rounded" style="color: black" />
						</span>
						<p class="text-[17px] font-medium">Agency-Centric Approach</p>
					</div>
					<hr class="mt-6 h-[1px] text-gray-200" />
					<div class="mt-5 flex items-center gap-3">
						<span class="w-7 rounded-[6px] border border-gray-100 text-center">
							<Icon size="12px" name="material-symbols:close-rounded" style="color: black" />
						</span>
						<p class="text-[17px] font-medium">
							Limited Testing or Inadequate Quality Control
						</p>
					</div>
					<hr class="mt-6 h-[1px] text-gray-200" />
					<div class="mt-5 flex items-center gap-3">
						<span class="w-7 rounded-[6px] border border-gray-100 text-center">
							<Icon size="12px" name="material-symbols:close-rounded" style="color: black" />
						</span>
						<p class="text-[17px] font-medium">
							No Access To Platforms, No Support
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
