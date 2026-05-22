<script lang="ts">
	import { CheckCircle } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';

	const reasons = [
		{
			num: '01',
			title: 'Wien kennt uns seit 2005',
			text: 'Über zwei Jahrzehnte erfolgreiche Projekte in Wien und Niederösterreich — wir kennen die Wiener Geologie und Bauauflagen im Detail.'
		},
		{
			num: '02',
			title: 'Moderner Maschinenpark',
			text: 'Gepflegte, hocheffiziente Bagger- und Transporttechnik gewährleistet reibungslose, pünktliche Projektabwicklungen — selbst auf Kleinstflächen.'
		},
		{
			num: '03',
			title: 'Fixer Ansprechpartner',
			text: 'Inhaber Hasan Koc ist Ihr direkter Partner auf der Baustelle. Keine anonyme Hotline, sondern schnelle Entscheidungen vom Chef persönlich.'
		},
		{
			num: '04',
			title: 'Transparente Festpreise',
			text: 'Detaillierte Festpreis-Angebote vor Projektstart ohne versteckte Zusatzposten. Sie zahlen exakt das, was vereinbart wurde.'
		}
	];
</script>

<section id="ueber-uns" class="py-24 lg:py-32 bg-brand-card border-y border-brand-border relative overflow-hidden" aria-label="Unsere Werte und Erfahrung">
	<div class="absolute top-[10%] left-[-20%] w-[40vw] h-[45vw] rounded-full bg-brand-teal/5 filter blur-[150px] pointer-events-none"></div>

	<div class="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
		<!-- Image side -->
		<div class="lg:col-span-6 relative w-full flex items-center justify-center">
			<div use:reveal={{ delay: 100 }} class="relative max-w-md md:max-w-xl lg:max-w-none w-full">
				<img
					class="w-full aspect-[4/3] object-cover rounded-3xl shadow-xl filter brightness-[0.85] saturate-[0.85] border border-brand-border"
					src="https://dede-erdbau.at/wp-content/uploads/2023/05/iStock-1129841733-640x427.webp"
					alt="DEDE Erdbau Team bei der präzisen Arbeit"
					loading="lazy"
				/>
				<div class="absolute -bottom-6 -right-4 md:-right-6 bg-brand-teal text-white rounded-2xl px-6 py-5 shadow-2xl flex flex-col items-center justify-center text-center select-none border border-teal-400/20 transform hover:scale-105 transition-transform duration-300">
					<span class="font-mono text-3xl md:text-4xl font-black leading-none text-white">20+</span>
					<span class="font-outfit text-[0.68rem] font-bold uppercase tracking-widest text-white/90 mt-1">Jahre Erfahrung</span>
				</div>
			</div>
		</div>

		<!-- Content side -->
		<div class="lg:col-span-6 flex flex-col justify-center">
			<div class="mb-10">
				<div use:reveal class="flex items-center gap-2 mb-3">
					<div class="w-8 h-[1px] bg-brand-teal"></div>
					<span class="font-mono text-xs font-bold uppercase tracking-widest text-brand-teal">Unsere Alleinstellungsmerkmale</span>
				</div>
				<h2 use:reveal={{ delay: 100 }} class="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter text-white">Zuverlässig. Erfahren. Fair.</h2>
			</div>

			<div class="flex flex-col divide-y divide-brand-border/60">
				{#each reasons as reason, i}
					<div use:reveal={{ delay: 150 + i * 50 }} class="flex gap-5 py-6 items-start">
						<span class="font-mono text-sm font-bold text-brand-teal pt-0.5 select-none">{reason.num}</span>
						<div class="flex flex-col gap-1">
							<h3 class="font-outfit text-lg font-bold text-white flex items-center gap-2">
								<CheckCircle class="w-4 h-4 text-brand-teal shrink-0" />
								{reason.title}
							</h3>
							<p class="text-brand-muted text-sm leading-relaxed max-w-[52ch]">{reason.text}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
