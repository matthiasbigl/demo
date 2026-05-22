<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Marquee from '$lib/components/Marquee.svelte';
	import Leistungen from '$lib/components/Leistungen.svelte';
	import UeberUns from '$lib/components/UeberUns.svelte';
	import Referenzen from '$lib/components/Referenzen.svelte';
	import Kontakt from '$lib/components/Kontakt.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>DEDE Erdbau – Baggerarbeiten &amp; Erdarbeiten in Wien</title>
	<meta name="description" content="Professionelle Baggerarbeiten und Erdarbeiten in Wien seit 2005. Poolaushub, Kelleraushub, Abbruch, Kleinbaggerarbeiten. Jetzt Angebot anfordern." />
</svelte:head>

<Navbar />
<main>
	<Hero />
	<Marquee />
	<Leistungen />
	<UeberUns />
	<Referenzen />
	<Kontakt />
</main>
<Footer />
