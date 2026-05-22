<script lang="ts">
	import { Phone, Mail, MapPin, Award, ArrowRight, ChevronDown } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';

	let formData = $state({ name: '', phone: '', email: '', leistung: '', nachricht: '' });
	let errors = $state({ name: false, phone: false, email: false, leistung: false });
	let submitted = $state(false);
	let sending = $state(false);

	function validate() {
		errors.name = formData.name.trim().length === 0;
		errors.phone = formData.phone.trim().length <= 4;
		errors.email = formData.email !== '' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
		errors.leistung = formData.leistung === '';
		return !errors.name && !errors.phone && !errors.email && !errors.leistung;
	}

	function handleSubmit(e: Event) {
		e.preventDefault();
		if (!validate()) return;
		sending = true;
		setTimeout(() => {
			sending = false;
			submitted = true;
		}, 1200);
	}

	const inputClass = (hasError: boolean) =>
		`bg-brand-card/80 border rounded-lg text-white font-sans text-sm p-3.5 w-full focus:outline-none focus:ring-2 transition-all ${
			hasError
				? 'border-rose-500 ring-2 ring-rose-500/20'
				: 'border-brand-border focus:border-brand-teal focus:ring-brand-teal/20'
		}`;
</script>

<section id="kontakt" class="py-24 lg:py-32 bg-brand-card border-t border-brand-border relative overflow-hidden" aria-label="Kontaktformular und Standorte">
	<div class="absolute top-[20%] left-[-15%] w-[40vw] h-[40vw] rounded-full bg-brand-teal/5 filter blur-[150px] pointer-events-none"></div>

	<div class="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
		<!-- Left: Contact info -->
		<div class="lg:col-span-5 flex flex-col gap-10">
			<div>
				<div use:reveal={{ delay: 50 }} class="flex items-center gap-2 mb-3">
					<div class="w-8 h-[1px] bg-brand-teal"></div>
					<span class="font-mono text-xs font-bold uppercase tracking-widest text-brand-teal">Sprechen Sie uns an</span>
				</div>
				<h2 use:reveal={{ delay: 100 }} class="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter text-white mb-6">Kostenloses<br />Angebot anfordern</h2>
				<p use:reveal={{ delay: 150 }} class="text-brand-muted text-base leading-relaxed">
					Schildern Sie uns kurz Ihr Vorhaben — Sie erhalten binnen 24 Stunden eine professionelle Rückmeldung und ein transparentes Angebot.
				</p>
			</div>

			<div class="flex flex-col gap-6">
				{#each [
					{ icon: Phone, label: 'Telefon', value: '0699 / 18 15 83 73', href: 'tel:+436991815837' },
					{ icon: Mail, label: 'E-Mail', value: 'office@dede-erdbau.at', href: 'mailto:office@dede-erdbau.at' },
					{ icon: MapPin, label: 'Standort', value: 'Wagramerstraße 136A, 1220 Wien', href: null },
					{ icon: Award, label: 'Einsatzgebiet', value: 'Wien & Niederösterreich', href: null }
				] as item, i}
					<div use:reveal={{ delay: 200 + i * 50 }} class="flex items-center gap-4 p-5 rounded-2xl bg-brand-bg/60 border border-brand-border">
						<div class="w-10 h-10 rounded-xl bg-brand-teal/10 border border-brand-teal/20 flex items-center justify-center text-brand-teal shrink-0">
							<item.icon class="w-5 h-5" />
						</div>
						<div class="flex flex-col">
							<span class="font-mono text-[0.62rem] font-bold uppercase tracking-widest text-brand-muted">{item.label}</span>
							{#if item.href}
								<a href={item.href} class="font-outfit text-base font-bold text-white hover:text-brand-teal transition-colors mt-0.5">{item.value}</a>
							{:else}
								<span class="font-outfit text-base font-bold text-white mt-0.5">{item.value}</span>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Right: Form -->
		<div use:reveal={{ delay: 150 }} class="lg:col-span-7 bg-brand-bg/50 border border-brand-border/60 rounded-3xl p-8 lg:p-10">
			{#if submitted}
				<div class="flex flex-col items-center justify-center text-center py-12 px-4">
					<div class="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6 shadow-lg animate-bounce">
						<span class="text-2xl">✓</span>
					</div>
					<h3 class="font-outfit text-2xl font-bold text-white mb-3">Anfrage erfolgreich gesendet!</h3>
					<p class="text-brand-muted text-sm leading-relaxed max-w-[42ch]">
						Vielen Dank für Ihr Vertrauen. Hasan Koc wird Ihre Anfrage persönlich prüfen. Wir kontaktieren Sie innerhalb der nächsten 24 Stunden.
					</p>
				</div>
			{:else}
				<form onsubmit={handleSubmit} class="flex flex-col gap-6" novalidate>
					<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div class="flex flex-col gap-2">
							<label for="name" class="font-outfit text-[0.78rem] font-bold uppercase tracking-wider text-brand-muted">Name <span class="text-brand-teal">*</span></label>
							<input type="text" id="name" bind:value={formData.name} placeholder="Max Mustermann" autocomplete="name" class={inputClass(errors.name)} />
							{#if errors.name}<span class="text-[0.72rem] text-rose-500">Bitte geben Sie Ihren vollständigen Namen an.</span>{/if}
						</div>
						<div class="flex flex-col gap-2">
							<label for="phone" class="font-outfit text-[0.78rem] font-bold uppercase tracking-wider text-brand-muted">Telefonnummer <span class="text-brand-teal">*</span></label>
							<input type="tel" id="phone" bind:value={formData.phone} placeholder="0699 / 123 456" autocomplete="tel" class={inputClass(errors.phone)} />
							{#if errors.phone}<span class="text-[0.72rem] text-rose-500">Bitte geben Sie eine gültige Telefonnummer an.</span>{/if}
						</div>
					</div>

					<div class="flex flex-col gap-2">
						<label for="email" class="font-outfit text-[0.78rem] font-bold uppercase tracking-wider text-brand-muted">E-Mail-Adresse</label>
						<input type="email" id="email" bind:value={formData.email} placeholder="muster@email.at" autocomplete="email" class={inputClass(errors.email)} />
						{#if errors.email}<span class="text-[0.72rem] text-rose-500">Bitte geben Sie eine formell korrekte E-Mail-Adresse ein.</span>{/if}
					</div>

					<div class="flex flex-col gap-2">
						<label for="leistung" class="font-outfit text-[0.78rem] font-bold uppercase tracking-wider text-brand-muted">Gewünschte Leistung <span class="text-brand-teal">*</span></label>
						<div class="relative">
							<select id="leistung" bind:value={formData.leistung} class="{inputClass(errors.leistung)} appearance-none cursor-pointer">
								<option value="">Bitte wählen Sie ein Vorhaben</option>
								<option value="Kelleraushub / Baugrube">Kelleraushub &amp; Baugrube</option>
								<option value="Poolaushub">Poolaushub</option>
								<option value="Kleinbaggerarbeiten">Kleinbaggerarbeiten in Kleingärten</option>
								<option value="Abbruch & Rückbau">Abbruch &amp; Rückbau</option>
								<option value="Sickerschacht / Entwässerung">Sickerschacht &amp; Entwässerung</option>
								<option value="Sonstiges">Sonstiges</option>
							</select>
							<div class="absolute inset-y-0 right-4 flex items-center pointer-events-none text-brand-muted">
								<ChevronDown class="w-4 h-4" />
							</div>
						</div>
						{#if errors.leistung}<span class="text-[0.72rem] text-rose-500">Bitte wählen Sie eine Leistung aus.</span>{/if}
					</div>

					<div class="flex flex-col gap-2">
						<label for="nachricht" class="font-outfit text-[0.78rem] font-bold uppercase tracking-wider text-brand-muted">Projektbeschreibung / Nachricht</label>
						<textarea id="nachricht" bind:value={formData.nachricht} placeholder="Bitte beschreiben Sie kurz Ihr Vorhaben (Maße, Zugänglichkeit, etc.)" class="bg-brand-card/80 border border-brand-border rounded-lg text-white font-sans text-sm p-3.5 min-h-[140px] focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all resize-y"></textarea>
					</div>

					<button
						type="submit"
						disabled={sending}
						class="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-teal hover:bg-brand-tealhover text-white rounded-lg font-outfit text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:-translate-y-1 active:scale-[0.98] w-fit shadow-[0_4px_20px_rgba(0,164,153,0.3)] focus:outline-none focus:ring-2 focus:ring-brand-teal/50 disabled:opacity-70 disabled:cursor-not-allowed disabled:translate-y-0"
					>
						{#if sending}
							<span>Übertrage Anfrage...</span>
							<span class="animate-pulse w-2 h-2 rounded-full bg-white"></span>
						{:else}
							<span>Kostenlos anfragen</span>
							<ArrowRight class="w-4 h-4 transition-transform group-hover:translate-x-1 duration-200" />
						{/if}
					</button>
				</form>
			{/if}
		</div>
	</div>
</section>
