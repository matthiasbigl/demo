<script lang="ts">
	import { ArrowRight, Phone, Award } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';
</script>

<section class="relative min-h-[100dvh] flex items-center pt-[72px] overflow-hidden" aria-label="Einführung">
	<!-- Background glow -->
	<div class="absolute top-[20%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-brand-teal/5 filter blur-[150px] pointer-events-none"></div>

	<div class="max-w-[1400px] mx-auto w-full px-6 lg:px-12 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
		<!-- Left Column -->
		<div class="lg:col-span-7 flex flex-col justify-center text-left">
			<!-- Badge -->
			<div use:reveal class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-card border border-brand-border w-fit mb-6 shadow-sm">
				<span class="relative flex h-2 w-2">
					<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
					<span class="relative inline-flex rounded-full h-2 w-2 bg-brand-teal"></span>
				</span>
				<span class="font-mono text-[0.68rem] font-bold uppercase tracking-wider text-brand-muted">Wien &amp; Umgebung · Seit 2005</span>
			</div>

			<!-- Heading -->
			<h1 use:reveal={{ delay: 100 }} class="font-outfit text-4xl sm:text-5xl xl:text-[4rem] font-black leading-[1.05] tracking-tighter text-white mb-6">
				Ihr Spezialist für<br />
				<span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-cyan-400 italic">Baggerarbeiten</span><br />
				&amp; Erdarbeiten in Wien
			</h1>

			<!-- Paragraph -->
			<p use:reveal={{ delay: 200 }} class="font-sans text-base sm:text-lg text-brand-muted leading-relaxed max-w-[55ch] mb-10">
				Von der präzisen Baugrube bis zum perfekten Poolaushub — DEDE Erdbau erledigt Ihre Erdarbeiten kompetent, pünktlich und zum garantierten Festpreis.
			</p>

			<!-- Buttons -->
			<div use:reveal={{ delay: 300 }} class="flex flex-wrap gap-4 items-center mb-12">
				<a
					href="#kontakt"
					class="group inline-flex items-center gap-2.5 px-6 py-4 font-outfit text-sm font-bold uppercase tracking-wider text-white bg-brand-teal hover:bg-brand-tealhover rounded-lg transition-all duration-300 hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] shadow-[0_8px_25px_-5px_rgba(0,164,153,0.4)] hover:shadow-[0_12px_35px_rgba(0,164,153,0.5)] focus:outline-none focus:ring-2 focus:ring-brand-teal/50"
				>
					Kostenloses Angebot
					<ArrowRight class="w-4 h-4 transition-transform group-hover:translate-x-1 duration-200" />
				</a>

				<a
					href="tel:+436991815837"
					class="inline-flex items-center gap-2.5 px-6 py-4 font-outfit text-sm font-bold uppercase tracking-wider text-brand-muted hover:text-white rounded-lg border border-brand-border hover:border-brand-subtle bg-brand-card/30 hover:bg-brand-card/80 transition-all duration-300 hover:-translate-y-0.5"
				>
					<Phone class="w-4 h-4 text-brand-teal" />
					0699 / 18 15 83 73
				</a>
			</div>

			<!-- Stats -->
			<div use:reveal={{ delay: 400 }} class="grid grid-cols-3 gap-6 pt-8 border-t border-brand-border/60 max-w-lg">
				<div class="flex flex-col">
					<span class="font-mono text-2xl sm:text-3xl font-medium text-white">20+</span>
					<span class="font-outfit text-[0.68rem] text-brand-muted uppercase tracking-wider font-semibold mt-1">Jahre Erfahrung</span>
				</div>
				<div class="flex flex-col pl-4 border-l border-brand-border">
					<span class="font-mono text-2xl sm:text-3xl font-medium text-white">500+</span>
					<span class="font-outfit text-[0.68rem] text-brand-muted uppercase tracking-wider font-semibold mt-1">Projekte</span>
				</div>
				<div class="flex flex-col pl-4 border-l border-brand-border">
					<span class="font-mono text-2xl sm:text-3xl font-medium text-white">1220</span>
					<span class="font-outfit text-[0.68rem] text-brand-muted uppercase tracking-wider font-semibold mt-1">Wien &amp; NÖ</span>
				</div>
			</div>
		</div>

		<!-- Right Column: Image -->
		<div
			use:reveal={{ delay: 200 }}
			class="lg:col-span-5 relative w-full h-[320px] sm:h-[420px] lg:h-[550px] rounded-3xl overflow-hidden border border-brand-border/60 group shadow-2xl"
		>
			<img
				class="w-full h-full object-cover object-center filter brightness-90 saturate-[0.85] transition-transform duration-700 group-hover:scale-105"
				src="https://dede-erdbau.at/wp-content/uploads/2023/04/iStock-1445026365-jpg.webp"
				alt="Bagger bei Erdarbeiten in Wien"
				loading="eager"
			/>
			<div class="absolute inset-0 bg-gradient-to-r from-brand-bg via-transparent to-transparent lg:from-transparent"></div>
			<div class="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent opacity-90"></div>

			<!-- Floating badge -->
			<div class="absolute bottom-6 right-6 z-10 bg-brand-card/90 backdrop-blur-md border border-brand-border rounded-2xl p-4 flex items-center gap-3.5 shadow-lg transition-transform duration-300 hover:translate-y-[-2px]">
				<div class="w-10 h-10 rounded-xl bg-brand-teal/20 border border-brand-teal/30 flex items-center justify-center text-brand-teal">
					<Award class="w-5 h-5" />
				</div>
				<div class="flex flex-col">
					<span class="font-mono text-lg font-bold text-brand-teal leading-none">2005</span>
					<span class="font-outfit text-[0.68rem] font-semibold text-brand-muted uppercase tracking-wider mt-0.5">Gegründet in Wien</span>
				</div>
			</div>
		</div>
	</div>
</section>
