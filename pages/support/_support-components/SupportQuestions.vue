<script setup lang="ts">
import Question from '@/pages/_components/Question.vue';
</script>

<template>
	<section
		class="font-Poppins py-24 md:px-6 lg:px-24"
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
						<template #heading>Is this a one-time cost or monthly?</template>
						<template #text>
							This is the one-time development price. However, we do offer &
							recommend our $500/m maintence plan, which includes the latest
							upgrades & immediate bug fixes.
						</template>
					</Question>
					<Question>
						<template #heading
							>How do you ensure the quality of your projects?</template
						>
						<template #text>
							Our custom AI Agents have a minimum 2-week live testing period,
							this ensures you are comfortable with the system and that any
							issues are resolved quickly.
						</template>
					</Question>
					<Question>
						<template #heading>What is your development process like?</template>
						<template #text>
							We provide a very transparent development process. This will
							include weekly update calls to ensure we are consitent with your
							expectations.
						</template>
					</Question>
				</div>
				<div class="flex flex-col gap-5 *:w-full">
					<Question>
						<template #heading>Does this connect with my CRM?</template>
						<template #text>
							Yes, we will build a custom automation to your AI Agent that can
							send or retreive data from your CRM.
						</template>
					</Question>
					<Question>
						<template #heading>How long does it take?</template>
						<template #text>
							Our base package is a 30 day program, this consists of 2-weeks of
							development and 2-weeks of testing. Depending on the complexity of
							your Agent this timeframe can increase.
						</template>
					</Question>
					<Question>
						<template #heading
							>How often will I receive updates on the project?</template
						>
						<template #text>
							During the development process you will receive weekly updates. If
							you choose to accept our maintence plan and we will monitor your
							system at all times.
						</template>
					</Question>
				</div>
			</div>
		</div>
	</section>
</template>
