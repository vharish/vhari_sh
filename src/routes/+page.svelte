<script lang="ts">
	// ✏️ UPDATE THIS to change the album — paste any Bandcamp album embed ID here.
	// To find it: go to the album page → Share / Embed → Embed this album → copy the number after "album=" in the src URL.
	const bandcampAlbumId = '1168728865';
	const bandcampEmbedUrl = `https://bandcamp.com/EmbeddedPlayer/album=${bandcampAlbumId}/size=large/bgcol=000000/linkcol=ff00cc/tracklist=false/transparent=true/`;
</script>

<svelte:head>
	<title>HARISH :: vhari.sh :: WELCOME TO MY PAGE !!</title>
	<meta name="description" content="day dreamer.. in love with everything there is." />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=VT323&family=Press+Start+2P&family=Courier+Prime:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
</svelte:head>

<div class="page">

	<!-- tiled star background -->
	<div class="bg-stars" aria-hidden="true"></div>

	<!-- marquee ticker at top -->
	<div class="ticker-wrap" aria-hidden="true">
		<div class="ticker">
			<span>✦ WELCOME TO MY PAGE ✦ YOU ARE VISITOR #000,001 ✦ BEST VIEWED IN NETSCAPE NAVIGATOR 4.0 ✦ 800x600 RESOLUTION RECOMMENDED ✦ THIS PAGE IS UNDER ETERNAL CONSTRUCTION ✦ DO NOT ADJUST YOUR MONITOR ✦ WELCOME TO MY PAGE ✦ YOU ARE VISITOR #000,001 ✦ BEST VIEWED IN NETSCAPE NAVIGATOR 4.0 ✦ 800x600 RESOLUTION RECOMMENDED ✦ THIS PAGE IS UNDER ETERNAL CONSTRUCTION ✦ DO NOT ADJUST YOUR MONITOR ✦</span>
		</div>
	</div>

	<div class="layout">

		<!-- LEFT COLUMN -->
		<aside class="col-left">

			<!-- spinning globe / CSS art -->
			<div class="widget globe-widget">
				<div class="widget-titlebar">
					<span class="titlebar-dots"><i></i><i></i><i></i></span>
					<span class="titlebar-text">spinning_globe.exe</span>
				</div>
				<div class="widget-body globe-body">
					<div class="globe">
						<div class="globe-ring r1"></div>
						<div class="globe-ring r2"></div>
						<div class="globe-ring r3"></div>
						<div class="globe-core"></div>
						<div class="globe-shine"></div>
					</div>
					<p class="globe-label">[ LIVE FROM EARTH ]</p>
				</div>
			</div>

			<!-- under construction -->
			<div class="widget construction-widget">
				<div class="widget-titlebar">
					<span class="titlebar-dots"><i></i><i></i><i></i></span>
					<span class="titlebar-text">notice.txt</span>
				</div>
				<div class="widget-body">
					<div class="construction-stripes" aria-hidden="true"></div>
					<p class="construction-text">⚠ UNDER<br/>CONSTRUCTION ⚠</p>
					<p class="construction-sub">always.</p>
				</div>
			</div>

			<!-- web ring -->
			<div class="widget webring-widget">
				<div class="widget-titlebar">
					<span class="titlebar-dots"><i></i><i></i><i></i></span>
					<span class="titlebar-text">webring</span>
				</div>
				<div class="widget-body webring-body">
					<p class="webring-title">✦ DREAMERS RING ✦</p>
					<div class="webring-nav">
						<span class="webring-btn">◄ prev</span>
						<span class="webring-center">[ you ]</span>
						<span class="webring-btn">next ►</span>
					</div>
					<p class="webring-count">ring members: ∞</p>
				</div>
			</div>

		</aside>

		<!-- MAIN COLUMN -->
		<main class="col-main">

			<!-- hero -->
			<div class="hero-wrap">
				<div class="hero-flicker" aria-hidden="true">HARISH</div>
				<h1 class="hero-name">HARISH</h1>
				<div class="hero-sub">
					<span class="hero-cursor">▌</span>
					<span class="hero-tagline">day dreamer.. in love with everything there is.</span>
				</div>
			</div>

			<!-- about window -->
			<div class="window about-window">
				<div class="window-titlebar">
					<span class="win-title">📄 about_me.txt — Notepad</span>
					<span class="win-controls"><span>_</span><span>□</span><span>✕</span></span>
				</div>
				<div class="window-menubar">
					<span>File</span><span>Edit</span><span>View</span><span>Help</span>
				</div>
				<div class="window-body">
					<p>Hi. I'm Harish.</p>
					<br/>
					<p>I spend most of my time thinking about things that don't need to be thought about, building things that might not need to be built, and falling in love with ideas the moment they appear.</p>
					<br/>
					<p>This is my corner of the internet. I made it for me. You're welcome here though.</p>
					<br/>
					<p class="blink-text">█</p>
				</div>
			</div>

			<!-- links window -->
			<div class="window links-window">
				<div class="window-titlebar">
					<span class="win-title">🔗 links.html — Internet Explorer</span>
					<span class="win-controls"><span>_</span><span>□</span><span>✕</span></span>
				</div>
				<div class="window-body links-body">
					<a href="https://github.com/vharish" target="_blank" rel="noopener noreferrer" class="link-row">
						<span class="link-icon">
							<!-- github icon inline svg -->
							<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
								<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
							</svg>
						</span>
						<span class="link-text">github.com/vharish</span>
						<span class="link-arrow-anim">→</span>
					</a>
				</div>
			</div>

			<!-- projects window -->
			<div class="window projects-window">
				<div class="window-titlebar">
					<span class="win-title">📁 projects/ — File Manager</span>
					<span class="win-controls"><span>_</span><span>□</span><span>✕</span></span>
				</div>
				<div class="window-menubar">
					<span>File</span><span>View</span><span>Go</span><span>Help</span>
				</div>
				<div class="window-body projects-body">
					<div class="projects-toolbar">
						<span class="projects-path">C:\HARISH\PROJECTS\</span>
					</div>
					<div class="projects-grid">

						<a href="https://dj.vhari.sh" target="_blank" rel="noopener noreferrer" class="project-card">
							<div class="project-icon">
								<div class="project-icon-art dj-icon">
									<span class="dj-disc">◉</span>
									<span class="dj-lines">
										<i></i><i></i><i></i>
									</span>
								</div>
							</div>
							<div class="project-info">
								<p class="project-name">DDJ-400 Guide</p>
								<p class="project-desc">Interactive controller map for learning to DJ. Built to figure out what all the knobs do.</p>
								<div class="project-tags">
									<span class="tag">vanilla js</span>
									<span class="tag">svg</span>
									<span class="tag">learning</span>
								</div>
								<span class="project-url">dj.vhari.sh ↗</span>
							</div>
						</a>

					</div>
					<p class="projects-footer">1 object(s) &nbsp;|&nbsp; more incoming</p>
				</div>
			</div>

		</main>

		<!-- RIGHT COLUMN -->
		<aside class="col-right">

			<!-- visitor counter -->
			<div class="widget counter-widget">
				<div class="widget-titlebar">
					<span class="titlebar-dots"><i></i><i></i><i></i></span>
					<span class="titlebar-text">counter.cgi</span>
				</div>
				<div class="widget-body counter-body">
					<p class="counter-label">YOU ARE VISITOR</p>
					<div class="counter-digits">
						<span>0</span><span>0</span><span>0</span><span>0</span><span>4</span><span>2</span>
					</div>
					<p class="counter-sub">since the big bang</p>
				</div>
			</div>

			<!-- now playing -->
			<div class="widget now-playing-widget">
				<div class="widget-titlebar">
					<span class="titlebar-dots"><i></i><i></i><i></i></span>
					<span class="titlebar-text">♪ now playing</span>
				</div>
				<div class="widget-body now-playing-body">
					<iframe
						src={bandcampEmbedUrl}
						title="Bandcamp player"
						seamless
						class="bandcamp-player"
					></iframe>
				</div>
			</div>

			<!-- best viewed badge -->
			<div class="widget badge-widget">
				<div class="widget-body badge-body">
					<div class="badge netscape-badge">
						<span class="badge-icon">N</span>
						<span class="badge-text">Best viewed in<br/>Netscape Navigator<br/>at 800×600</span>
					</div>
					<div class="badge ie-badge">
						<span class="badge-icon">e</span>
						<span class="badge-text">Also works in<br/>Internet Explorer<br/>probably</span>
					</div>
				</div>
			</div>

		</aside>

	</div>

	<!-- bottom ticker -->
	<div class="ticker-wrap ticker-bottom" aria-hidden="true">
		<div class="ticker ticker-reverse">
			<span>★ HARISH ★ VHARI.SH ★ EST. 2026 ★ MADE WITH LOVE AND ZERO APOLOGIES ★ NO COOKIES TRACKED ★ NO DATA SOLD ★ JUST VIBES ★ HARISH ★ VHARI.SH ★ EST. 2026 ★ MADE WITH LOVE AND ZERO APOLOGIES ★ NO COOKIES TRACKED ★ NO DATA SOLD ★ JUST VIBES ★</span>
		</div>
	</div>

</div>

<style>
	/* ============================================
	   RESET & BASE
	   ============================================ */
	:global(*, *::before, *::after) { box-sizing: border-box; margin: 0; padding: 0; }

	:global(body) {
		background: #1a0030;
		overflow-x: hidden;
		cursor: crosshair;
	}

	/* ============================================
	   PAGE WRAPPER
	   ============================================ */
	.page {
		min-height: 100vh;
		position: relative;
		font-family: 'Courier Prime', monospace;
		color: #f0e6ff;
	}

	/* ============================================
	   TILED STAR BACKGROUND
	   ============================================ */
	.bg-stars {
		position: fixed;
		inset: 0;
		z-index: 0;
		background-color: #1a0030;
		background-image:
			radial-gradient(1px 1px at 10% 15%, #fff 0%, transparent 100%),
			radial-gradient(1px 1px at 25% 40%, #ffe0ff 0%, transparent 100%),
			radial-gradient(1.5px 1.5px at 40% 10%, #fff 0%, transparent 100%),
			radial-gradient(1px 1px at 55% 60%, #e0cfff 0%, transparent 100%),
			radial-gradient(1px 1px at 70% 25%, #fff 0%, transparent 100%),
			radial-gradient(1.5px 1.5px at 80% 70%, #ffd0ff 0%, transparent 100%),
			radial-gradient(1px 1px at 90% 45%, #fff 0%, transparent 100%),
			radial-gradient(1px 1px at 15% 80%, #e8d5ff 0%, transparent 100%),
			radial-gradient(1px 1px at 60% 85%, #fff 0%, transparent 100%),
			radial-gradient(2px 2px at 35% 55%, #ffccff 0%, transparent 100%),
			radial-gradient(1px 1px at 85% 15%, #fff 0%, transparent 100%),
			radial-gradient(1px 1px at 5%  50%, #ddd 0%, transparent 100%),
			/* subtle purple mesh */
			radial-gradient(ellipse at 20% 50%, rgba(120,0,200,0.3) 0%, transparent 60%),
			radial-gradient(ellipse at 80% 20%, rgba(200,0,120,0.2) 0%, transparent 50%),
			radial-gradient(ellipse at 60% 80%, rgba(0,100,200,0.15) 0%, transparent 50%);
		pointer-events: none;
	}

	/* twinkling stars */
	.bg-stars::after {
		content: '';
		position: absolute;
		inset: 0;
		background-image:
			radial-gradient(1px 1px at 20% 30%, #fff 0%, transparent 100%),
			radial-gradient(1px 1px at 45% 70%, #ffd0ff 0%, transparent 100%),
			radial-gradient(1px 1px at 75% 50%, #fff 0%, transparent 100%),
			radial-gradient(1px 1px at 92% 80%, #e8d5ff 0%, transparent 100%),
			radial-gradient(1px 1px at 8%  20%, #fff 0%, transparent 100%);
		animation: twinkle 3s ease-in-out infinite alternate;
	}

	@keyframes twinkle {
		from { opacity: 0.4; }
		to   { opacity: 1; }
	}

	/* ============================================
	   TICKER
	   ============================================ */
	.ticker-wrap {
		position: relative;
		z-index: 100;
		background: #ff00cc;
		overflow: hidden;
		padding: 6px 0;
		border-bottom: 2px solid #ff66ee;
		border-top: 2px solid #ff66ee;
	}

	.ticker-bottom {
		background: #00ccff;
		border-color: #66eeff;
		margin-top: 0;
	}

	.ticker {
		display: flex;
		white-space: nowrap;
		animation: ticker-scroll 30s linear infinite;
	}

	.ticker-reverse {
		animation: ticker-scroll-rev 25s linear infinite;
	}

	.ticker span {
		font-family: 'Press Start 2P', monospace;
		font-size: 0.55rem;
		color: #fff;
		letter-spacing: 0.05em;
		text-shadow: 1px 1px 0 rgba(0,0,0,0.4);
		padding-right: 2rem;
	}

	.ticker-bottom span { color: #001a2e; }

	@keyframes ticker-scroll {
		from { transform: translateX(0); }
		to   { transform: translateX(-50%); }
	}
	@keyframes ticker-scroll-rev {
		from { transform: translateX(-50%); }
		to   { transform: translateX(0); }
	}

	/* ============================================
	   LAYOUT
	   ============================================ */
	.layout {
		position: relative;
		z-index: 10;
		display: grid;
		grid-template-columns: 200px 1fr 200px;
		gap: 1rem;
		padding: 1.5rem;
		max-width: 1100px;
		margin: 0 auto;
	}

	/* ============================================
	   WIDGETS (left/right sidebar panels)
	   ============================================ */
	.widget {
		background: rgba(10, 0, 30, 0.85);
		border: 2px solid #9900ff;
		box-shadow: 0 0 12px rgba(153,0,255,0.4), inset 0 0 20px rgba(153,0,255,0.05);
		margin-bottom: 1rem;
	}

	.widget-titlebar {
		background: linear-gradient(90deg, #9900ff, #ff00cc);
		padding: 4px 8px;
		display: flex;
		align-items: center;
		gap: 6px;
	}

	.titlebar-dots {
		display: flex;
		gap: 4px;
	}
	.titlebar-dots i {
		display: block;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: #ffcc00;
		border: 1px solid rgba(0,0,0,0.3);
	}
	.titlebar-dots i:first-child { background: #ff5f56; }
	.titlebar-dots i:last-child  { background: #27c93f; }

	.titlebar-text {
		font-family: 'Courier Prime', monospace;
		font-size: 0.75rem;
		font-weight: 700;
		color: #fff;
		letter-spacing: 0.03em;
	}

	.widget-body {
		padding: 0.8rem;
	}

	/* --- globe --- */
	.globe-body {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		padding: 1rem 0.8rem;
	}

	.globe {
		width: 80px;
		height: 80px;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.globe-core {
		width: 70px;
		height: 70px;
		border-radius: 50%;
		background: radial-gradient(circle at 35% 35%, #0066ff, #003399 50%, #000066);
		box-shadow: 0 0 20px rgba(0,102,255,0.6), inset 0 0 15px rgba(0,0,60,0.5);
		position: absolute;
		animation: globe-rotate 6s linear infinite;
	}

	.globe-shine {
		width: 70px;
		height: 70px;
		border-radius: 50%;
		background: radial-gradient(circle at 30% 25%, rgba(255,255,255,0.35) 0%, transparent 55%);
		position: absolute;
		pointer-events: none;
	}

	.globe-ring {
		position: absolute;
		border-radius: 50%;
		border: 1px solid rgba(0,200,255,0.5);
		animation: globe-ring-spin 4s linear infinite;
	}
	.r1 { width: 80px; height: 20px; top: 25px; animation-duration: 3s; }
	.r2 { width: 60px; height: 80px; left: 10px; animation-duration: 5s; animation-direction: reverse; }
	.r3 { width: 80px; height: 40px; top: 20px; animation-duration: 7s; }

	@keyframes globe-rotate {
		from { box-shadow: 0 0 20px rgba(0,102,255,0.6), inset 0 0 15px rgba(0,0,60,0.5); filter: hue-rotate(0deg); }
		to   { box-shadow: 0 0 30px rgba(0,200,255,0.8), inset 0 0 15px rgba(0,0,60,0.5); filter: hue-rotate(360deg); }
	}
	@keyframes globe-ring-spin {
		from { transform: rotateX(70deg) rotateZ(0deg); }
		to   { transform: rotateX(70deg) rotateZ(360deg); }
	}

	.globe-label {
		font-family: 'Courier Prime', monospace;
		font-size: 0.75rem;
		font-weight: 700;
		color: #00ccff;
		text-align: center;
		letter-spacing: 0.05em;
		text-shadow: 0 0 6px #00ccff;
	}

	/* --- construction --- */
	.construction-widget .widget-body {
		padding: 0;
		overflow: hidden;
	}

	.construction-stripes {
		height: 12px;
		background: repeating-linear-gradient(
			45deg,
			#ffcc00,
			#ffcc00 8px,
			#1a0030 8px,
			#1a0030 16px
		);
	}

	.construction-text {
		font-family: 'Press Start 2P', monospace;
		font-size: 0.7rem;
		color: #ffcc00;
		text-align: center;
		padding: 0.7rem 0.5rem 0.3rem;
		line-height: 1.8;
		text-shadow: 0 0 8px #ffcc00;
		animation: construction-flash 1.5s ease-in-out infinite alternate;
	}

	.construction-sub {
		font-family: 'Courier Prime', monospace;
		font-size: 0.85rem;
		color: #9977cc;
		text-align: center;
		padding-bottom: 0.7rem;
		font-style: italic;
	}

	@keyframes construction-flash {
		from { text-shadow: 0 0 8px #ffcc00; }
		to   { text-shadow: 0 0 20px #ffcc00, 0 0 40px #ff8800; }
	}

	/* --- web ring --- */
	.webring-body {
		text-align: center;
	}

	.webring-title {
		font-family: 'Courier Prime', monospace;
		font-size: 0.8rem;
		font-weight: 700;
		color: #ff66ff;
		letter-spacing: 0.05em;
		margin-bottom: 0.6rem;
		text-shadow: 0 0 8px #ff00ff;
	}

	.webring-nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 0.4rem;
	}

	.webring-btn {
		font-family: 'Courier Prime', monospace;
		font-size: 0.8rem;
		font-weight: 700;
		color: #00ccff;
		cursor: pointer;
		transition: color 0.1s;
	}
	.webring-btn:hover { color: #fff; }

	.webring-center {
		font-family: 'VT323', monospace;
		font-size: 1rem;
		color: #ffcc00;
	}

	.webring-count {
		font-family: 'Courier Prime', monospace;
		font-size: 0.8rem;
		color: #664488;
	}

	/* --- visitor counter --- */
	.counter-body {
		text-align: center;
		padding: 0.8rem 0.5rem;
	}

	.counter-label {
		font-family: 'Courier Prime', monospace;
		font-size: 0.8rem;
		font-weight: 700;
		color: #ff66ff;
		margin-bottom: 0.5rem;
		letter-spacing: 0.05em;
	}

	.counter-digits {
		display: flex;
		justify-content: center;
		gap: 3px;
		margin-bottom: 0.4rem;
	}

	.counter-digits span {
		font-family: 'VT323', monospace;
		font-size: 2rem;
		background: #000;
		color: #ff0066;
		padding: 2px 6px;
		border: 1px solid #660033;
		text-shadow: 0 0 8px #ff0066;
		min-width: 1.4rem;
		text-align: center;
		line-height: 1;
	}

	.counter-sub {
		font-family: 'Courier Prime', monospace;
		font-size: 0.8rem;
		color: #664466;
		font-style: italic;
	}

	/* --- bandcamp player --- */
	.now-playing-body {
		padding: 0;
	}

	.bandcamp-player {
		display: block;
		width: 100%;
		height: 240px;
		border: none;
	}

	/* --- badges --- */
	.badge-widget {
		border-color: #ffcc00;
		box-shadow: 0 0 10px rgba(255,204,0,0.3);
	}

	.badge-body {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 0.6rem;
	}

	.badge {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		padding: 0.4rem;
		border: 1px solid;
	}

	.netscape-badge {
		background: linear-gradient(135deg, #003399, #0055cc);
		border-color: #0077ff;
	}

	.ie-badge {
		background: linear-gradient(135deg, #002244, #004488);
		border-color: #0044aa;
	}

	.badge-icon {
		font-family: 'Bebas Neue', sans-serif;
		font-size: 1.5rem;
		color: #fff;
		line-height: 1;
		width: 1.8rem;
		text-align: center;
	}

	.badge-text {
		font-family: 'Courier Prime', monospace;
		font-size: 0.72rem;
		font-weight: 700;
		color: #cce4ff;
		line-height: 1.6;
	}

	/* ============================================
	   MAIN COLUMN — HERO
	   ============================================ */
	.col-main {
		position: relative;
	}

	.hero-wrap {
		position: relative;
		margin-bottom: 1.5rem;
		text-align: center;
		padding: 1.5rem 1rem 1rem;
	}

	/* glitchy ghost text behind */
	.hero-flicker {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: 'Bebas Neue', sans-serif;
		font-size: clamp(5rem, 13vw, 8rem);
		color: transparent;
		-webkit-text-stroke: 1px rgba(255, 0, 204, 0.3);
		animation: glitch-ghost 4s steps(1) infinite;
		pointer-events: none;
		user-select: none;
	}

	@keyframes glitch-ghost {
		0%   { transform: translate(0,0);       -webkit-text-stroke-color: rgba(255,0,204,0.3); }
		20%  { transform: translate(-4px, 2px); -webkit-text-stroke-color: rgba(0,255,255,0.4); }
		21%  { transform: translate(0,0); }
		70%  { transform: translate(0,0); }
		71%  { transform: translate(4px,-2px);  -webkit-text-stroke-color: rgba(255,255,0,0.4); }
		72%  { transform: translate(0,0); }
		100% { transform: translate(0,0); }
	}

	.hero-name {
		font-family: 'Bebas Neue', sans-serif;
		font-size: clamp(5rem, 13vw, 8rem);
		line-height: 0.9;
		color: #fff;
		letter-spacing: 0.04em;
		text-shadow:
			0 0 30px rgba(255,0,204,0.8),
			0 0 60px rgba(153,0,255,0.5),
			4px 0 0 #ff00cc,
			-4px 0 0 #00ccff;
		animation: name-glitch 6s steps(1) infinite;
		position: relative;
		z-index: 2;
	}

	@keyframes name-glitch {
		0%, 19%, 22%, 69%, 72%, 100% {
			text-shadow: 0 0 30px rgba(255,0,204,0.8), 0 0 60px rgba(153,0,255,0.5), 4px 0 0 #ff00cc, -4px 0 0 #00ccff;
			transform: translate(0);
		}
		20% {
			text-shadow: -4px 0 #ff00cc, 4px 0 #00ccff, 0 0 30px rgba(255,0,204,0.8);
			transform: translate(3px, -2px);
		}
		21% {
			text-shadow: 4px 0 #ff00cc, -4px 0 #00ccff, 0 0 30px rgba(153,0,255,0.8);
			transform: translate(-3px, 2px);
		}
		70% {
			text-shadow: -2px 0 #ffff00, 2px 0 #ff00cc, 0 0 40px rgba(255,255,0,0.6);
			transform: translate(2px, 0);
		}
		71% {
			text-shadow: 0 0 30px rgba(255,0,204,0.8), 0 0 60px rgba(153,0,255,0.5);
			transform: translate(0);
		}
	}

	.hero-sub {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		margin-top: 0.8rem;
	}

	.hero-cursor {
		font-family: 'VT323', monospace;
		font-size: 1.4rem;
		color: #ff00cc;
		animation: blink-cursor 1s step-end infinite;
		text-shadow: 0 0 8px #ff00cc;
	}

	@keyframes blink-cursor {
		0%, 100% { opacity: 1; }
		50%       { opacity: 0; }
	}

	.hero-tagline {
		font-family: 'Courier Prime', monospace;
		font-size: 1rem;
		color: #d4aaff;
		font-style: italic;
		letter-spacing: 0.02em;
		text-shadow: 0 0 10px rgba(212,170,255,0.5);
	}

	/* ============================================
	   WINDOWS (Win98 style)
	   ============================================ */
	.window {
		background: #c0c0c0;
		border: 2px solid;
		border-color: #fff #808080 #808080 #fff;
		box-shadow: 2px 2px 0 #000, inset 1px 1px 0 #dfdfdf;
		margin-bottom: 1.2rem;
	}

	.window-titlebar {
		background: linear-gradient(90deg, #000080, #1084d0);
		padding: 3px 6px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		user-select: none;
	}

	.win-title {
		font-family: 'Courier Prime', monospace;
		font-size: 0.8rem;
		font-weight: 700;
		color: #fff;
		letter-spacing: 0.02em;
	}

	.win-controls {
		display: flex;
		gap: 2px;
	}

	.win-controls span {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 14px;
		height: 12px;
		background: #c0c0c0;
		border: 1px solid;
		border-color: #fff #808080 #808080 #fff;
		font-size: 0.5rem;
		color: #000;
		cursor: pointer;
		line-height: 1;
	}

	.window-menubar {
		background: #c0c0c0;
		padding: 2px 8px;
		display: flex;
		gap: 1rem;
		border-bottom: 1px solid #808080;
	}

	.window-menubar span {
		font-family: 'Courier Prime', monospace;
		font-size: 0.8rem;
		color: #000;
		cursor: pointer;
	}
	.window-menubar span:hover { background: #000080; color: #fff; padding: 1px 3px; }

	.window-body {
		padding: 1rem 1.2rem;
		background: #fff;
		font-family: 'Courier Prime', monospace;
		font-size: 0.85rem;
		color: #000;
		line-height: 1.7;
		border: 1px inset #808080;
		margin: 4px;
	}

	.blink-text {
		color: #000;
		animation: blink-cursor 1s step-end infinite;
		display: inline;
	}

	/* links window */
	.links-body {
		padding: 0.6rem 0.8rem;
	}

	.link-row {
		display: flex;
		align-items: center;
		gap: 0.8rem;
		text-decoration: none;
		padding: 0.5rem;
		transition: background 0.1s;
		color: #000080;
	}

	.link-row:hover {
		background: #000080;
		color: #fff;
	}

	.link-row:hover .link-icon { color: #fff; }
	.link-row:hover .link-url  { color: #aaddff; }
	.link-row:hover .link-arrow-anim { opacity: 1; transform: translateX(4px); }

	.link-icon {
		color: #000080;
		flex-shrink: 0;
		transition: color 0.1s;
	}

	.link-text {
		font-family: 'Press Start 2P', monospace;
		font-size: 0.5rem;
		flex: 1;
		letter-spacing: 0.03em;
	}

	.link-arrow-anim {
		font-size: 1rem;
		opacity: 0;
		transform: translateX(0);
		transition: all 0.15s ease;
	}

	/* ============================================
	   RESPONSIVE
	   ============================================ */
	@media (max-width: 800px) {
		.layout {
			grid-template-columns: 1fr;
			padding: 0.8rem;
		}

		.col-left, .col-right {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 0.8rem;
		}

		.col-left .widget, .col-right .widget {
			margin-bottom: 0;
		}

		.hero-name {
			font-size: clamp(4rem, 20vw, 6rem);
		}
	}

	@media (max-width: 480px) {
		.col-left, .col-right {
			grid-template-columns: 1fr;
		}

		.ticker span {
			font-size: 0.45rem;
		}
	}

	/* ============================================
	   PROJECTS WINDOW
	   ============================================ */
	.projects-body {
		padding: 0;
		background: #fff;
	}

	.projects-toolbar {
		background: #c0c0c0;
		border-bottom: 1px solid #808080;
		padding: 3px 8px;
	}

	.projects-path {
		font-family: 'Courier Prime', monospace;
		font-size: 0.8rem;
		font-weight: 700;
		color: #000;
		letter-spacing: 0.02em;
	}

	.projects-grid {
		padding: 0.8rem;
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
	}

	.project-card {
		display: flex;
		gap: 0.8rem;
		align-items: flex-start;
		text-decoration: none;
		padding: 0.6rem;
		border: 1px solid transparent;
		transition: all 0.1s;
		color: #000;
	}

	.project-card:hover {
		background: #000080;
		border-color: #0000cc;
		color: #fff;
	}

	.project-card:hover .project-desc,
	.project-card:hover .projects-footer,
	.project-card:hover .project-url { color: #aaddff; }

	.project-card:hover .tag {
		background: #0000aa;
		color: #88ccff;
		border-color: #4488ff;
	}

	.project-card:hover .dj-disc { color: #ff88ff; text-shadow: 0 0 8px #ff88ff; }
	.project-card:hover .dj-lines i { background: #88ffff; }

	.project-icon {
		flex-shrink: 0;
		width: 48px;
		height: 48px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.project-icon-art {
		width: 44px;
		height: 44px;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	/* DJ icon — turntable-ish */
	.dj-icon {
		flex-direction: column;
		gap: 3px;
	}

	.dj-disc {
		font-size: 1.6rem;
		color: #9900ff;
		line-height: 1;
		animation: spin-disc 3s linear infinite;
		display: block;
		text-shadow: 0 0 6px rgba(153,0,255,0.5);
	}

	@keyframes spin-disc {
		from { transform: rotate(0deg); }
		to   { transform: rotate(360deg); }
	}

	.dj-lines {
		display: flex;
		gap: 2px;
		align-items: flex-end;
		height: 10px;
	}

	.dj-lines i {
		display: block;
		width: 3px;
		background: #ff00cc;
		border-radius: 1px;
	}

	.dj-lines i:nth-child(1) { height: 6px;  animation: bar-bounce 0.5s ease-in-out infinite alternate; }
	.dj-lines i:nth-child(2) { height: 10px; animation: bar-bounce 0.5s ease-in-out infinite alternate 0.1s; }
	.dj-lines i:nth-child(3) { height: 7px;  animation: bar-bounce 0.5s ease-in-out infinite alternate 0.2s; }

	@keyframes bar-bounce {
		from { transform: scaleY(0.4); }
		to   { transform: scaleY(1); }
	}

	.project-info {
		flex: 1;
		min-width: 0;
	}

	.project-name {
		font-family: 'Press Start 2P', monospace;
		font-size: 0.7rem;
		color: inherit;
		margin-bottom: 0.4rem;
		letter-spacing: 0.03em;
	}

	.project-desc {
		font-family: 'Courier Prime', monospace;
		font-size: 0.78rem;
		color: #333;
		line-height: 1.5;
		margin-bottom: 0.5rem;
	}

	.project-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.3rem;
		margin-bottom: 0.4rem;
	}

	.tag {
		font-family: 'Courier Prime', monospace;
		font-size: 0.72rem;
		color: #660099;
		background: #eeddff;
		border: 1px solid #cc99ff;
		padding: 1px 5px;
		letter-spacing: 0.03em;
	}

	.project-url {
		font-family: 'Courier Prime', monospace;
		font-size: 0.7rem;
		color: #0000ee;
		text-decoration: underline;
	}

	.projects-footer {
		font-family: 'Courier Prime', monospace;
		font-size: 0.75rem;
		color: #444;
		padding: 4px 8px;
		border-top: 1px solid #c0c0c0;
		background: #c0c0c0;
		letter-spacing: 0.03em;
	}
</style>
