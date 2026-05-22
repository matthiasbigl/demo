<script lang="ts">
	import { onMount } from 'svelte';
	import { Phone, Menu, X } from '@lucide/svelte';

	let menuOpen = $state(false);
	let scrolled = $state(false);

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 40;
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function closeMenu() {
		menuOpen = false;
	}
</script>

<nav
	class="fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center justify-between px-6 lg:px-12 border-b border-brand-border backdrop-blur-xl transition-all duration-300"
	class:bg-brand-bg--80={!scrolled}
	class:bg-brand-bg--95={scrolled}
	class:shadow-lg={scrolled}
	style="background-color: {scrolled ? 'rgba(12,14,14,0.95)' : 'rgba(12,14,14,0.80)'}"
>
	<!-- Logo -->
	<a href="#" class="flex items-center gap-3 group transition-transform duration-300 hover:scale-[1.01]">
		<img
			src="https://dede-erdbau.at/wp-content/uploads/2022/03/DEDE-Final-Logo-Transp.png"
			alt="DEDE Erdbau Logo"
			class="h-10 w-auto filter brightness-105"
		/>
		<div class="hidden sm:flex flex-col">
			<span class="font-outfit font-extrabold text-[1.1rem] leading-tight tracking-tight text-white group-hover:text-brand-teal transition-colors"
				>DEDE ERDBAU</span
			>
			<span class="font-mono text-[0.62rem] leading-none tracking-widest text-brand-muted">WIEN &amp; UMGEBUNG</span>
		</div>
	</a>

	<!-- Desktop Links -->
	<ul class="hidden md:flex items-center gap-8 font-outfit text-sm font-semibold tracking-wider uppercase">
		<li><a href="#leistungen" class="text-brand-muted hover:text-white transition-colors duration-200">Leistungen</a></li>
		<li><a href="#ueber-uns" class="text-brand-muted hover:text-white transition-colors duration-200">Über uns</a></li>
		<li><a href="#referenzen" class="text-brand-muted hover:text-white transition-colors duration-200">Referenzen</a></li>
		<li><a href="#kontakt" class="text-brand-muted hover:text-white transition-colors duration-200">Kontakt</a></li>
	</ul>

	<!-- CTA & Hamburger -->
	<div class="flex items-center gap-4">
		<a
			href="tel:+436991815837"
			class="hidden lg:flex items-center gap-2 font-mono text-xs text-brand-muted hover:text-brand-teal transition-colors duration-200"
		>
			<Phone class="w-3.5 h-3.5 text-brand-teal" />
			<span>0699 / 18 15 83 73</span>
		</a>

		<a
			href="#kontakt"
			class="relative inline-flex items-center justify-center px-5 py-2.5 font-outfit text-xs font-bold uppercase tracking-wider text-white bg-brand-teal hover:bg-brand-tealhover rounded-lg transition-all duration-300 hover:-translate-y-[1px] active:scale-[0.98] shadow-[0_4px_20px_-4px_rgba(0,164,153,0.3)] hover:shadow-[0_8px_30px_rgba(0,164,153,0.4)] focus:outline-none focus:ring-2 focus:ring-brand-teal/50"
		>
			Angebot anfragen
		</a>

		<button
			onclick={() => (menuOpen = !menuOpen)}
			class="flex md:hidden p-2 text-brand-muted hover:text-white transition-colors focus:outline-none"
			aria-label="Hauptmenü öffnen"
		>
			{#if menuOpen}
				<X class="w-6 h-6" />
			{:else}
				<Menu class="w-6 h-6" />
			{/if}
		</button>
	</div>
</nav>

<!-- Mobile Navigation Drawer -->
<div
	class="fixed inset-0 z-40 backdrop-blur-2xl border-b border-brand-border flex flex-col justify-center px-8 py-20 transition-all duration-500 md:hidden"
	style="background-color: rgba(12,14,14,0.95); transform: {menuOpen ? 'translateY(0)' : 'translateY(-100%)'}; opacity: {menuOpen ? '1' : '0'}; pointer-events: {menuOpen ? 'auto' : 'none'}"
>
	<ul class="flex flex-col gap-8 font-outfit text-2xl font-bold uppercase tracking-wide">
		<li><a href="#leistungen" onclick={closeMenu} class="text-brand-muted hover:text-brand-teal transition-colors duration-200">Leistungen</a></li>
		<li><a href="#ueber-uns" onclick={closeMenu} class="text-brand-muted hover:text-brand-teal transition-colors duration-200">Über uns</a></li>
		<li><a href="#referenzen" onclick={closeMenu} class="text-brand-muted hover:text-brand-teal transition-colors duration-200">Referenzen</a></li>
		<li><a href="#kontakt" onclick={closeMenu} class="text-brand-muted hover:text-brand-teal transition-colors duration-200">Kontakt</a></li>
	</ul>
	<div class="mt-12 pt-8 border-t border-brand-border/60 flex flex-col gap-4">
		<a href="tel:+436991815837" class="flex items-center gap-3 font-mono text-sm text-brand-muted hover:text-brand-teal transition-colors duration-200">
			<Phone class="w-4 h-4 text-brand-teal" />
			<span>0699 / 18 15 83 73</span>
		</a>
		<a href="mailto:office@dede-erdbau.at" class="flex items-center gap-3 font-mono text-sm text-brand-muted hover:text-brand-teal transition-colors duration-200">
			<span class="w-4 h-4 text-brand-teal">✉</span>
			<span>office@dede-erdbau.at</span>
		</a>
	</div>
</div>
