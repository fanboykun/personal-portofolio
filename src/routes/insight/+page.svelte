<script>
	import aboutPicture from '$lib/assets/profile-3.jpg'
	import { educations } from '$lib/data/data'
	import Saos from 'saos';
	function typewriter(node, { speed = 1 }) {
		const valid = (
			node.childNodes.length === 1 &&
			node.childNodes[0].nodeType === Node.TEXT_NODE
		);

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent;
		const duration = text.length / (speed * 0.01);

		return {
			duration,
			tick: t => {
				const i = Math.trunc(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}
</script>
<svelte:head>
	<title>Portofolio | About</title>
</svelte:head>
<div class="sm:px-8 mt-16 sm:mt-18">
	<div class="mx-auto max-w-7xl lg:px-8">
		<div class="relative px-4 sm:px-8 lg:px-12">
			<div class="mx-auto max-w-2xl lg:max-w-5xl">
				<div class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
					<div class="lg:pl-20">
						<div class="max-w-xs px-2.5 lg:max-w-none">
							<Saos animation={'rotate-in-2-fwd-cw 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'} once={true}>
								<img
									alt="..."
									loading="lazy"
									width="800"
									height="800"
									decoding="async"
									data-nimg="1"
									class="aspect-square rotate-3 rounded-2xl w-full h-full bg-zinc-100 object-cover dark:bg-zinc-800"
									sizes="(min-width: 1024px) 32rem, 20rem"
									src={aboutPicture}
									style="color: transparent;"
								/>
							</Saos>
						</div>
					</div>
					<Saos animation={'fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'} once={true}>
						<div class="lg:pl-20">
							<div class="rounded-2xl border border-zinc-100 dark:border-zinc-700/40 p-6 mt-8">
								<h2 class="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
									<svg
										viewBox="0 0 24 24"
										fill="none"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
										aria-hidden="true"
										class="h-6 w-6 flex-none"
										><path
											d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
											class="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
										/><path
											d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
											class="stroke-zinc-400 dark:stroke-zinc-500"
										/></svg
									><span class="ml-3">Educations</span>
								</h2>
								<ol class="mt-6 space-y-4">
									{#each educations as education, index (education.id)}
										<li class="flex gap-4">
											<dl class="flex flex-auto flex-wrap gap-x-2">
												<dt class="sr-only">{education.name}</dt>
												<dd
													class="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100"
												>
												{education.place}
												</dd>
												<dt class="sr-only">Major</dt>
												<dd class="text-xs text-zinc-500 dark:text-zinc-400">{education.description}</dd>
												<dt class="sr-only">Date</dt>
												<dd
													class="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
													aria-label="2019 until Present"
												>
													<time datetime="{education.start_date}">{education.start_date}</time> <span aria-hidden="true">—</span>
													<time datetime="{education.end_date}">{education.end_date}</time>
												</dd>
											</dl>
										</li>
									{/each}
							
								</ol>
							</div>
						</div>
					</Saos>
					<div class="lg:order-first lg:row-span-2">
						<h1 class="text-4xl font-mono font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
							<p in:typewriter>
								I’m Irfan Ramadhan. Enthusiast Backend Developer.
							</p>
						</h1>
						<div class="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
							<Saos animation={'fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'} once={true}>
								<p>
									As i already finished my study, now i am officially have a bachelor degree in information system. <span class="text-zinc-800 dark:text-zinc-100 sm:text-2xl font-mono">Irfan Ramadhan, S.Kom</span>
								</p>
							</Saos>
							<Saos animation={'fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'} once={true}>
								<p>
									With an extensive skill set in programming, I possess a diverse range of technical abilities that allow me to navigate through the intricacies of software development. From backend development, where I architect the core functionality of applications, to fullstack development, where I can seamlessly bridge the gap between the server and the user interface, I am well-versed in multiple layers of the development stack.
								</p>
							</Saos>
							<Saos animation={'fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'} once={true}>
								<p>
									What truly sets me apart is my unwavering passion for programming. It goes beyond the lines of code and extends into a genuine curiosity and excitement for the craft. I am constantly seeking out new challenges and opportunities to push the boundaries of what can be achieved through programming. The thrill of solving complex problems, optimizing performance, and creating elegant and efficient solutions is what drives me forward.
								</p>
							</Saos>
							<Saos animation={'fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'} once={true}>
								<p>
									I believe that programming is not just about writing code; it is about finding innovative ways to leverage technology to improve people's lives. It's about transforming ideas into tangible digital experiences that make a meaningful impact. Whether it's developing a user-friendly e-commerce platform, designing a robust database system, or implementing cutting-edge technologies like machine learning, my passion lies in crafting solutions that are both functional and delightful.
								</p>
							</Saos>
							<Saos animation={'fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'} once={true}>
								<p>
									To stay at the forefront of the ever-evolving programming landscape, I am committed to continuous learning and self-improvement. I actively explore new frameworks, programming languages, and tools, embracing them as opportunities to enhance my skills and expand my knowledge. This dedication to growth enables me to adapt quickly to emerging trends and deliver solutions that are not only current but also future-proof.
								</p>
							</Saos>
							<Saos animation={'fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'} once={true}>
								<p>
									In summary, I am a skilled and passionate programmer who thrives on the challenges of software development. With a deep-rooted curiosity and a commitment to continuous improvement, I strive to create exceptional digital experiences that leave a lasting impression on users and drive positive change in the world.
								</p>
							</Saos>
							<Saos animation={'fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'} once={true}>
								<p>
									In addition, it's worth mentioning that as a driven and ambitious individual, I am currently pursuing my college education, further honing my programming skills and knowledge in the field of information systems. Being a college student allows me to combine theoretical learning with practical application, ensuring that I stay up-to-date with the latest industry trends and best practices in programming.
								</p>
							</Saos>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>