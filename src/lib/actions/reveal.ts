export function reveal(node: HTMLElement, options: { delay?: number } = {}) {
	node.classList.add('reveal-on-scroll');
	if (options.delay) {
		node.style.transitionDelay = `${options.delay}ms`;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('revealed');
					observer.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
