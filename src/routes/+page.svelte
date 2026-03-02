<svelte:head>
	<title>Harish — vhari.sh</title>
	<meta name="description" content="Day dreamer. In love with everything there is." />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=VT323&family=Inconsolata:wght@400;700&display=swap" rel="stylesheet" />
</svelte:head>

<div class="site-wrapper">
	<!-- scanline overlay -->
	<div class="scanlines" aria-hidden="true"></div>

	<!-- noise texture -->
	<div class="noise" aria-hidden="true"></div>

	<main>
		<div class="frame">

			<header class="header">
				<div class="header-top">
					<span class="tag">&lt;personal&gt;</span>
					<span class="blink">█</span>
				</div>
				<h1 class="name">HARISH</h1>
				<div class="tagline-wrap">
					<span class="tagline-prefix">~$</span>
					<p class="tagline">day dreamer.. in love with everything there is.</p>
				</div>
			</header>

			<div class="divider">
				<span>————————————————————————————————</span>
			</div>

			<section class="links-section">
				<a
					href="https://github.com/vharish"
					target="_blank"
					rel="noopener noreferrer"
					class="link-item"
				>
					<span class="link-arrow">&gt;&gt;</span>
					<span class="link-label">github</span>
					<span class="link-url">github.com/vharish</span>
				</a>
			</section>

			<footer class="footer">
				<span class="footer-text">vhari.sh — est. 2026</span>
				<span class="footer-text">made with love &amp; zero apologies</span>
			</footer>

		</div>
	</main>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=VT323&family=Inconsolata:wght@400;700&display=swap');

	:global(*, *::before, *::after) {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	:global(body) {
		background: #0a0a0a;
		overflow-x: hidden;
	}

	.site-wrapper {
		min-height: 100vh;
		background: #0a0a0a;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2rem;
	}

	/* scanlines */
	.scanlines {
		position: fixed;
		inset: 0;
		background: repeating-linear-gradient(
			0deg,
			transparent,
			transparent 2px,
			rgba(0, 0, 0, 0.15) 2px,
			rgba(0, 0, 0, 0.15) 4px
		);
		pointer-events: none;
		z-index: 10;
	}

	/* noise */
	.noise {
		position: fixed;
		inset: -50%;
		width: 200%;
		height: 200%;
		background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
		opacity: 0.035;
		pointer-events: none;
		z-index: 9;
		animation: noise-shift 8s steps(2) infinite;
	}

	@keyframes noise-shift {
		0%   { transform: translate(0, 0); }
		25%  { transform: translate(-1%, 1%); }
		50%  { transform: translate(1%, -1%); }
		75%  { transform: translate(-1%, -1%); }
		100% { transform: translate(0, 0); }
	}

	main {
		position: relative;
		z-index: 20;
		width: 100%;
		max-width: 680px;
	}

	.frame {
		border: 2px solid #ff2d55;
		box-shadow:
			0 0 0 1px #0a0a0a,
			0 0 0 3px #ff2d55,
			0 0 40px rgba(255, 45, 85, 0.15),
			inset 0 0 40px rgba(255, 45, 85, 0.03);
		padding: 3rem 3.5rem;
		position: relative;
		animation: fadein 0.8s ease forwards;
	}

	/* corner decorations */
	.frame::before,
	.frame::after {
		content: '◈';
		position: absolute;
		font-size: 1rem;
		color: #ff2d55;
		line-height: 1;
	}
	.frame::before { top: -0.6rem; left: -0.6rem; }
	.frame::after  { bottom: -0.6rem; right: -0.6rem; }

	@keyframes fadein {
		from { opacity: 0; transform: translateY(12px); }
		to   { opacity: 1; transform: translateY(0); }
	}

	/* header */
	.header {
		margin-bottom: 2.5rem;
	}

	.header-top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1.2rem;
	}

	.tag {
		font-family: 'Inconsolata', monospace;
		font-size: 0.8rem;
		color: #ff2d55;
		letter-spacing: 0.05em;
		opacity: 0.7;
	}

	.blink {
		font-family: 'VT323', monospace;
		font-size: 1.2rem;
		color: #ff2d55;
		animation: blink 1.1s step-end infinite;
	}

	@keyframes blink {
		0%, 100% { opacity: 1; }
		50%       { opacity: 0; }
	}

	.name {
		font-family: 'Bebas Neue', sans-serif;
		font-size: clamp(5rem, 18vw, 9rem);
		line-height: 0.88;
		color: #f5f0e8;
		letter-spacing: 0.02em;
		text-shadow:
			4px 4px 0px #ff2d55,
			8px 8px 0px rgba(255, 45, 85, 0.2);
		margin-bottom: 1.4rem;
	}

	.tagline-wrap {
		display: flex;
		align-items: baseline;
		gap: 0.6rem;
	}

	.tagline-prefix {
		font-family: 'VT323', monospace;
		font-size: 1.4rem;
		color: #ff2d55;
		flex-shrink: 0;
	}

	.tagline {
		font-family: 'Inconsolata', monospace;
		font-size: 1.05rem;
		color: #c8bfb0;
		letter-spacing: 0.02em;
		line-height: 1.5;
	}

	/* divider */
	.divider {
		font-family: 'Inconsolata', monospace;
		font-size: 0.75rem;
		color: #ff2d55;
		opacity: 0.4;
		overflow: hidden;
		margin-bottom: 2rem;
		white-space: nowrap;
	}

	/* links */
	.links-section {
		margin-bottom: 2.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
	}

	.link-item {
		display: flex;
		align-items: center;
		gap: 1rem;
		text-decoration: none;
		padding: 0.6rem 0;
		border-bottom: 1px solid rgba(255, 45, 85, 0.15);
		transition: all 0.15s ease;
		group: true;
	}

	.link-item:hover {
		border-bottom-color: #ff2d55;
		padding-left: 0.5rem;
	}

	.link-item:hover .link-arrow {
		color: #fff;
		letter-spacing: 0.15em;
	}

	.link-item:hover .link-label {
		color: #ff2d55;
	}

	.link-arrow {
		font-family: 'VT323', monospace;
		font-size: 1.2rem;
		color: #ff2d55;
		transition: all 0.15s ease;
		width: 2rem;
		flex-shrink: 0;
	}

	.link-label {
		font-family: 'Bebas Neue', sans-serif;
		font-size: 1.4rem;
		color: #f5f0e8;
		letter-spacing: 0.08em;
		min-width: 5rem;
		transition: color 0.15s ease;
	}

	.link-url {
		font-family: 'Inconsolata', monospace;
		font-size: 0.8rem;
		color: #665e52;
		letter-spacing: 0.03em;
	}

	/* footer */
	.footer {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.footer-text {
		font-family: 'Inconsolata', monospace;
		font-size: 0.72rem;
		color: #443d35;
		letter-spacing: 0.05em;
		text-transform: uppercase;
	}

	/* mobile */
	@media (max-width: 480px) {
		.frame {
			padding: 2rem 1.5rem;
		}
		.footer {
			flex-direction: column;
		}
		.link-url {
			display: none;
		}
	}
</style>
