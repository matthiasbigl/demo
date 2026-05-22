<script lang="ts">
	import { Star } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';

	const testimonials = [
		{
			quote: '„Schnelle Ausführung, sauber gearbeitet und der Preis hat absolut gestimmt. Herr Hasan Koc war extrem engagiert und der Erdaushub war rasch erledigt. Würde ich jederzeit wieder buchen!"',
			name: 'Michael R.',
			location: 'Wien 22'
		},
		{
			quote: '„Unser Poolaushub war in nur zwei Tagen fertig. Das Team agierte hochprofessionell, ging extrem schonend mit dem Rasen um und hat perfekte Böschungssicherungen hinterlassen. Sehr zufrieden!"',
			name: 'Familie Bauer',
			location: 'Klosterneuburg'
		},
		{
			quote: '„Einsatz von Kleinbagger im Kleingarten — hat sensationell geklappt. DEDE Erdbau passte perfekt durch das schmale Gartentor. Hasan war persönlich vor Ort und hat alles super koordiniert."',
			name: 'Petra K.',
			location: 'Wien 14'
		}
	];
</script>

<section id="referenzen" class="py-24 lg:py-32 relative max-w-[1400px] mx-auto px-6 lg:px-12" aria-label="Erfahrungsberichte unserer Kunden">
	<div class="absolute top-[20%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-brand-teal/5 filter blur-[150px] pointer-events-none"></div>

	<div class="mb-16 lg:mb-20 text-left max-w-2xl">
		<div use:reveal class="flex items-center gap-2 mb-3">
			<div class="w-8 h-[1px] bg-brand-teal"></div>
			<span class="font-mono text-xs font-bold uppercase tracking-widest text-brand-teal">Feedback</span>
		</div>
		<h2 use:reveal={{ delay: 50 }} class="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter text-white mb-4">Kundenstimmen</h2>
		<p use:reveal={{ delay: 100 }} class="text-brand-muted text-base leading-relaxed">
			Zufriedene Bauherren sind unsere beste Referenz. Entdecken Sie Berichte von privaten und gewerblichen Auftraggebern.
		</p>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
		{#each testimonials as t, i}
			<div
				use:reveal={{ delay: 100 + i * 50 }}
				class="bg-brand-card/40 border border-brand-border/60 rounded-3xl p-8 hover:bg-brand-card/90 transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1 shadow-md"
			>
				<div class="flex flex-col gap-6">
					<div class="flex items-center gap-1 text-brand-teal">
						{#each Array(5) as _}
							<Star class="w-4 h-4 fill-brand-teal stroke-none" />
						{/each}
					</div>
					<blockquote class="text-zinc-300 font-sans text-sm leading-relaxed italic">{t.quote}</blockquote>
				</div>
				<div class="mt-8 pt-6 border-t border-brand-border flex flex-col">
					<span class="font-outfit text-sm font-bold text-white">{t.name}</span>
					<span class="font-mono text-[0.68rem] text-brand-muted uppercase tracking-widest mt-0.5">{t.location}</span>
				</div>
			</div>
		{/each}
	</div>
</section>
