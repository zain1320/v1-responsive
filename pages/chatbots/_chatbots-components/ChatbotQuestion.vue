<script setup lang="ts">
import Question from '@/pages/_components/Question.vue';
</script>

<template>
	<section
		class="font-Poppins bg-gray-100 py-24 md:px-6 lg:px-24"
		data-aos="fade-up"
		data-aos-offset="400"
		data-aos-duration="1000"
	>
		<div class="container">
			<h1 class="text-center text-xl font-semibold md:text-start md:text-4xl">
				Common Questions
			</h1>
			<div class="mt-20 grid gap-5 md:grid-cols-2">
				<div class="flex flex-col gap-5 *:w-full">
					<Question>
						<template #heading>What types of AI Agents do you offer?</template>
						<template #text>
							We provide two types of AI Agents. AI Voice Agents & AI Text
							Chatbots.
						</template>
					</Question>
					<Question>
						<template #heading
							>How do you ensure the quality of your projects?</template
						>
						<template #text>
							We have a minimum 2 week testing period for our AI Agents. Our
							packages range from 2 weeks of testing to 6 weeks of testing.
							<br />
							<br />
							If you opt for our maintenance package, you will receive immediate
							upgrades & bug fixes.
						</template>
					</Question>
					<Question>
						<template #heading>What is your development process like?</template>
						<template #text>
							Our process involves initial consultation, planning, design,
							development, testing, and deployment. We follow agile
							methodologies to ensure flexibility and responsiveness.
						</template>
					</Question>
				</div>
				<div class="flex flex-col gap-5 *:w-full">
					<Question>
						<template #heading>How do you handle project timelines?</template>
						<template #text>
							We create detailed project timelines with clear milestones. Our
							project deadlines are met by coordinating all phases of the
							development process.
						</template>
					</Question>
					<Question>
						<template #heading
							>How often will I receive updates on the project?</template
						>
						<template #text>
							We will have at least 1 call per week to discuss the status of the
							project during its development & testing phase.
						</template>
					</Question>
				</div>
			</div>
		</div>
	</section>
</template>
