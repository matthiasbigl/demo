<script lang="ts">
	import { ArrowRight, Droplet, Spade, Hammer, Droplets } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';
</script>

<section id="leistungen" class="py-24 lg:py-32 relative max-w-[1400px] mx-auto px-6 lg:px-12" aria-label="Unsere Leistungen">
	<div class="absolute bottom-[20%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-brand-teal/5 filter blur-[150px] pointer-events-none"></div>

	<!-- Section Header -->
	<div class="mb-16 lg:mb-20 text-left max-w-2xl">
		<div use:reveal class="flex items-center gap-2 mb-3">
			<div class="w-8 h-[1px] bg-brand-teal"></div>
			<span class="font-mono text-xs font-bold uppercase tracking-widest text-brand-teal">Unsere Kompetenzen</span>
		</div>
		<h2 use:reveal={{ delay: 50 }} class="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter text-white mb-4">Unsere Leistungen</h2>
		<p use:reveal={{ delay: 100 }} class="text-brand-muted text-base leading-relaxed">
			Vom engsten Kleingarten in Wien bis hin zur gewerblichen Großbaugrube. Wir besitzen den optimalen Maschinenpark und die nötige Expertise.
		</p>
	</div>

	<!-- Bento Grid -->
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
		<!-- Featured Card -->
		<div
			use:reveal={{ delay: 100 }}
			class="lg:col-span-2 lg:row-span-2 relative min-h-[420px] rounded-3xl overflow-hidden border border-brand-border/60 group bg-brand-card shadow-lg flex flex-col justify-end"
		>
			<div class="absolute inset-0">
				<img
					src="https://dede-erdbau.at/wp-content/uploads/2023/04/iStock-1129582636-jpg-720x370.webp"
					alt="Großbagger bei Kelleraushub und Baugrube"
					class="w-full h-full object-cover object-center filter brightness-50 saturate-[0.8] transition-transform duration-700 group-hover:scale-105"
					loading="lazy"
				/>
				<div class="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/40 to-transparent"></div>
			</div>
			<div class="relative p-8 z-10 flex flex-col gap-4">
				<span class="font-mono text-[0.65rem] font-bold uppercase tracking-wider text-brand-teal bg-brand-teal/10 border border-brand-teal/20 px-3 py-1 rounded-full w-fit">Schwerpunkt</span>
				<h3 class="font-outfit text-2xl sm:text-3xl font-extrabold text-white leading-tight">Kelleraushub &amp; Baugrube</h3>
				<p class="text-brand-muted text-sm leading-relaxed max-w-[50ch]">
					Präziser Aushub für Keller, Kleingartenhäuser und gewerbliche Fundamente. Wir übernehmen die fachgerechte Böschungs- und Baugrubensicherung inklusive des gesamten Abtransports und der Entsorgung des Erdmaterials.
				</p>
				<a href="#kontakt" class="group/btn mt-2 inline-flex items-center gap-2 text-brand-teal hover:text-white text-xs font-bold uppercase tracking-wider transition-colors duration-200">
					Projekt anfragen
					<ArrowRight class="w-4 h-4 transition-transform group-hover/btn:translate-x-1.5 duration-200" />
				</a>
			</div>
		</div>

		<!-- Poolaushub -->
		<div use:reveal={{ delay: 150 }} class="bg-brand-card/50 border border-brand-border/60 rounded-3xl p-8 hover:bg-brand-card transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between">
			<div class="flex flex-col gap-6">
				<div class="w-12 h-12 rounded-2xl bg-brand-teal/10 border border-brand-teal/20 flex items-center justify-center text-brand-teal transition-transform duration-300 group-hover:scale-110">
					<Droplet class="w-6 h-6" />
				</div>
				<div class="flex flex-col gap-2">
					<h3 class="font-outfit text-xl font-bold text-white leading-tight">Poolaushub</h3>
					<p class="text-brand-muted text-xs sm:text-sm leading-relaxed">Zentimetergenauer Aushub für Pools, Schwimmbecken und Biotope. Inklusive Böschungsschutz und fachgerechtem Erdaushub-Abtransport.</p>
				</div>
			</div>
			<a href="#kontakt" class="group/btn mt-8 inline-flex items-center gap-1.5 text-brand-teal hover:text-white text-xs font-bold uppercase tracking-wider transition-colors duration-200">
				Anfragen <ArrowRight class="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1 duration-200" />
			</a>
		</div>

		<!-- Kleinbaggerarbeiten -->
		<div use:reveal={{ delay: 200 }} class="bg-brand-card/50 border border-brand-border/60 rounded-3xl p-8 hover:bg-brand-card transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between">
			<div class="flex flex-col gap-6">
				<div class="w-12 h-12 rounded-2xl bg-brand-teal/10 border border-brand-teal/20 flex items-center justify-center text-brand-teal transition-transform duration-300 group-hover:scale-110">
					<Spade class="w-6 h-6" />
				</div>
				<div class="flex flex-col gap-2">
					<h3 class="font-outfit text-xl font-bold text-white leading-tight">Kleinbaggerarbeiten</h3>
					<p class="text-brand-muted text-xs sm:text-sm leading-relaxed">Spezialisiert auf engste Gärten und extrem schmale Zufahrten. Unsere emissionsarmen Minibagger passen durch fast jedes Gartentor.</p>
				</div>
			</div>
			<a href="#kontakt" class="group/btn mt-8 inline-flex items-center gap-1.5 text-brand-teal hover:text-white text-xs font-bold uppercase tracking-wider transition-colors duration-200">
				Anfragen <ArrowRight class="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1 duration-200" />
			</a>
		</div>

		<!-- Abbruch & Rückbau -->
		<div use:reveal={{ delay: 250 }} class="bg-brand-card/50 border border-brand-border/60 rounded-3xl p-8 hover:bg-brand-card transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between">
			<div class="flex flex-col gap-6">
				<div class="w-12 h-12 rounded-2xl bg-brand-teal/10 border border-brand-teal/20 flex items-center justify-center text-brand-teal transition-transform duration-300 group-hover:scale-110">
					<Hammer class="w-6 h-6" />
				</div>
				<div class="flex flex-col gap-2">
					<h3 class="font-outfit text-xl font-bold text-white leading-tight">Abbruch &amp; Rückbau</h3>
					<p class="text-brand-muted text-xs sm:text-sm leading-relaxed">Sicherer, staubgeschützter Abbruch von Kleingartenhäusern, Mauern, Garagen und massiven Betonfundamenten inklusive Bauschutttrennung.</p>
				</div>
			</div>
			<a href="#kontakt" class="group/btn mt-8 inline-flex items-center gap-1.5 text-brand-teal hover:text-white text-xs font-bold uppercase tracking-wider transition-colors duration-200">
				Anfragen <ArrowRight class="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1 duration-200" />
			</a>
		</div>

		<!-- Sickerschacht -->
		<div use:reveal={{ delay: 300 }} class="bg-brand-card/50 border border-brand-border/60 rounded-3xl p-8 hover:bg-brand-card transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between">
			<div class="flex flex-col gap-6">
				<div class="w-12 h-12 rounded-2xl bg-brand-teal/10 border border-brand-teal/20 flex items-center justify-center text-brand-teal transition-transform duration-300 group-hover:scale-110">
					<Droplets class="w-6 h-6" />
				</div>
				<div class="flex flex-col gap-2">
					<h3 class="font-outfit text-xl font-bold text-white leading-tight">Sickerschacht</h3>
					<p class="text-brand-muted text-xs sm:text-sm leading-relaxed">Herstellung normgerechter Sickerschächte, Rigolen und Grabensysteme zur autarken Regenwasserversickerung auf Ihrem Grundstück.</p>
				</div>
			</div>
			<a href="#kontakt" class="group/btn mt-8 inline-flex items-center gap-1.5 text-brand-teal hover:text-white text-xs font-bold uppercase tracking-wider transition-colors duration-200">
				Anfragen <ArrowRight class="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1 duration-200" />
			</a>
		</div>
	</div>
</section>
