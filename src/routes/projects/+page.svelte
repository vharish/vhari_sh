<script lang="ts">
	import { onMount } from 'svelte';
	import { resolveBg } from '$lib/bg';

	const bandcampAlbumId = '1168728865';
	const bandcampEmbedUrl = `https://bandcamp.com/EmbeddedPlayer/album=${bandcampAlbumId}/size=large/bgcol=16213e/linkcol=7dcfff/tracklist=true/transparent=true/`;

	let clockText = $state('');
	let bgUrl   = $state('/bg-nebula.jpg');
	let bgMode  = $state<'vertical' | 'regular'>('regular');
	let bgReady = $state(false);

	function updateClock() {
		clockText = new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
	}

	onMount(async () => {
		updateClock();
		const interval = setInterval(updateClock, 1000);

		const resolved = await resolveBg();
		bgUrl  = resolved.url;
		bgMode = resolved.mode;
		requestAnimationFrame(() => { bgReady = true; });

		return () => clearInterval(interval);
	});
</script>

<svelte:head>
	<title>projects ~ vhari.sh</title>
	<meta name="description" content="Things I've built." />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400&display=swap" rel="stylesheet" />
</svelte:head>

<!-- time-of-day background -->
<div class="scene">
	<div class="scene-bg scene-bg-base" style="background-image: url('/bg-nebula.jpg')"></div>
	<div class="scene-bg scene-bg-top"
		class:ready={bgReady}
		class:vertical={bgMode === 'vertical'}
		style="background-image: url('{bgUrl}')"
	></div>

	<!-- CRT screen -->
	<div class="crt">

		<!-- scanline overlay -->
		<div class="crt-scanlines" aria-hidden="true"></div>

		<!-- TOP BAR -->
		<header class="topbar">
			<div class="topbar-left">
				<span class="tb-session">tmux: harish@vhari.sh</span>
				<span class="tb-sep">│</span>
				<a href="/" class="tb-window">0: ~</a>
				<a href="/projects" class="tb-window active-window">1: projects</a>
				<span class="tb-window">2: music</span>
			</div>
			<div class="topbar-right">
				<span class="tb-info">vhari.sh</span>
				<span class="tb-sep">│</span>
				<span class="tb-time">{clockText}</span>
			</div>
		</header>

		<!-- SCROLLABLE CONTENT -->
		<main class="crt-body">

			<!-- page heading -->
			<section class="pane-section">
				<h1 class="section-header">
					<span class="c-green">❯</span>
					<span class="c-blue">ls</span>
					<span class="c-fg">-la ~/projects/</span>
				</h1>
				<p class="c-comment sub-line"># things I've built to learn, explore, or scratch an itch</p>
			</section>

			<!-- project cards -->
			<section class="pane-section">
				<div class="projects-list">

					<article class="project-card">
						<div class="card-header">
							<div class="card-title-row">
								<span class="card-perms c-comment">drwxr-xr-x</span>
								<h2 class="card-name"><span class="c-green">dj/</span></h2>
							</div>
							<div class="card-links">
								<a href="https://dj.vhari.sh" target="_blank" rel="noopener noreferrer" class="card-link primary">
									<span>dj.vhari.sh</span>
									<span class="link-arrow">↗</span>
								</a>
							</div>
						</div>

						<div class="card-body">
							<p class="card-desc">
								Interactive controller map for the Pioneer DDJ-400. Click any knob, fader, or button to see what it does, how it works, and how it fits into DJ fundamentals. Built while learning to DJ — equal parts reference tool and procrastination.
							</p>

							<div class="card-meta">
								<div class="meta-row">
									<span class="meta-key c-comment">built with</span>
									<span class="meta-val">
										<span class="tag">vanilla-js</span>
										<span class="tag">svg</span>
										<span class="tag">css</span>
									</span>
								</div>
								<div class="meta-row">
									<span class="meta-key c-comment">why</span>
									<span class="meta-val c-fg">to figure out what all the knobs do</span>
								</div>
								<div class="meta-row">
									<span class="meta-key c-comment">status</span>
									<span class="meta-val"><span class="c-green">●</span> <span class="c-fg">active</span></span>
								</div>
							</div>
						</div>

						<div class="card-footer">
							<div class="preview-art">
								<div class="dj-deck">
									<div class="dj-platter">
										<div class="dj-label"></div>
										<div class="dj-needle"></div>
									</div>
									<div class="dj-mixer">
										<div class="fader"></div>
										<div class="fader"></div>
										<div class="knob"></div>
										<div class="knob"></div>
										<div class="knob"></div>
									</div>
									<div class="dj-platter">
										<div class="dj-label"></div>
										<div class="dj-needle"></div>
									</div>
								</div>
							</div>
						</div>
					</article>

					<!-- placeholder -->
					<article class="project-card card-placeholder">
						<div class="card-body">
							<p class="c-comment placeholder-text">
								<span class="c-green"># </span>next project loading..
							</p>
						</div>
					</article>

				</div>
			</section>

		</main>

		<!-- STATUS BAR -->
		<footer class="statusbar">
			<div class="sb-left">
				<span class="sb-mode">NORMAL</span>
				<span class="sb-sep">│</span>
				<span class="c-fg">~/projects</span>
			</div>
			<div class="sb-center">
				<span class="c-comment">things I've built to learn, explore, or scratch an itch</span>
			</div>
			<div class="sb-right">
				<span class="c-comment">1 project</span>
				<span class="sb-sep">│</span>
				<a href="/" class="c-blue sb-home">← home</a>
			</div>
		</footer>

	</div><!-- /.crt -->

	<!-- SIDEBAR — same as homepage -->
	<aside class="sidebar">

		<section class="side-section">
			<h3 class="side-header">
				<span class="c-green">♪</span>
				<span>now_playing</span>
			</h3>
			<div class="side-body player-body">
				<iframe
					src={bandcampEmbedUrl}
					title="Bandcamp player"
					seamless
					class="bandcamp-player"
				></iframe>
			</div>
		</section>

		<div class="side-spacer"></div>

		<section class="side-section">
			<h3 class="side-header">
				<span class="c-green">$</span>
				<span>sys.info</span>
			</h3>
			<div class="side-body sysinfo-body">
				<div class="sysinfo-row">
					<span class="si-key c-comment">location</span>
					<span class="si-val c-fg">Earth, Sol system</span>
				</div>
				<div class="sysinfo-row">
					<span class="si-key c-comment">status</span>
					<span class="si-val"><span class="c-green">●</span> online</span>
				</div>
				<div class="sysinfo-row">
					<span class="si-key c-comment">build</span>
					<span class="si-val c-fg">SvelteKit + Tailwind v4</span>
				</div>
				<div class="sysinfo-row">
					<span class="si-key c-comment">host</span>
					<span class="si-val c-fg">Cloudflare Pages</span>
				</div>
				<div class="sysinfo-row">
					<span class="si-key c-comment">src</span>
					<span class="si-val"><a href="https://github.com/vharish/vhari_sh" target="_blank" rel="noopener noreferrer" class="c-blue">vharish/vhari_sh ↗</a></span>
				</div>
			</div>
		</section>

	</aside>

</div><!-- /.scene -->

<style>
	/* ============================================
	   PALETTE
	   ============================================ */
	:root {
		--bg:      #1a1b2e;
		--bg1:     #16213e;
		--bg2:     #0f3460;
		--border:  #2d3149;
		--border2: #4a527a;
		--fg:      #c0caf5;
		--comment: #8088b3;
		--blue:    #7aa2f7;
		--green:   #9ece6a;
		--cyan:    #7dcfff;
		--yellow:  #e0af68;
		--purple:  #bb9af7;
		--crt-w:   900px;
		--crt-h:   92vh;
		--sidebar-w: 300px;
		--font:    'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace;
	}

	:global(*, *::before, *::after) { box-sizing: border-box; margin: 0; padding: 0; }

	:global(html, body) {
		height: 100%;
		font-family: var(--font);
		font-size: 15px;
		line-height: 1.6;
		overflow: hidden;
		background: #08090f;
	}

	/* ============================================
	   COLOR UTILITIES
	   ============================================ */
	.c-fg      { color: var(--fg); }
	.c-blue    { color: var(--blue); }
	.c-green   { color: var(--green); }
	.c-comment { color: var(--comment); }

	/* ============================================
	   SCENE — full viewport, time-of-day bg
	   ============================================ */
	.scene {
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0;
		position: relative;
		overflow: hidden;
		background: #08090f;
	}

	.scene-bg {
		position: absolute;
		inset: 0;
		background-size: cover;
		background-position: center;
		pointer-events: none;
	}

	.scene-bg-base {
		z-index: 0;
		opacity: 1;
	}

	.scene-bg-top {
		z-index: 1;
		opacity: 0;
		transition: opacity 1.2s ease-in-out;
	}

	.scene-bg-top.ready {
		opacity: 1;
	}

	/* vertical mode — left-aligned portrait image with gradient fade */
	.scene-bg-top.vertical {
		background-size: auto 100%;
		background-position: left center;
		-webkit-mask-image: linear-gradient(to right, black 30%, transparent 70%);
		mask-image: linear-gradient(to right, black 30%, transparent 70%);
	}

	.scene::before {
		content: '';
		position: absolute;
		inset: 0;
		background: radial-gradient(ellipse at center, transparent 40%, rgba(4,4,12,0.7) 100%);
		pointer-events: none;
		z-index: 2;
	}

	/* ============================================
	   CRT SCREEN
	   ============================================ */
	.crt {
		position: relative;
		z-index: 3;
		width: var(--crt-w);
		height: var(--crt-h);
		display: flex;
		flex-direction: column;
		background: rgba(20, 21, 38, 0.93);
		border-radius: 8px;
		border: 1px solid var(--border2);
		box-shadow:
			0 0 0 1px rgba(122,162,247,0.1),
			0 0 20px rgba(122,162,247,0.08),
			0 0 60px rgba(122,162,247,0.06),
			0 0 120px rgba(100,120,220,0.05),
			inset 0 0 40px rgba(0,0,0,0.3);
		overflow: hidden;
	}

	.crt-scanlines {
		position: absolute;
		inset: 0;
		background: repeating-linear-gradient(
			0deg,
			transparent,
			transparent 2px,
			rgba(0,0,0,0.08) 2px,
			rgba(0,0,0,0.08) 4px
		);
		pointer-events: none;
		z-index: 10;
		border-radius: 8px;
	}

	/* ============================================
	   TOPBAR
	   ============================================ */
	.topbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: rgba(15, 52, 96, 0.6);
		border-bottom: 1px solid var(--border);
		padding: 0 1rem;
		height: 28px;
		flex-shrink: 0;
		font-size: 0.8rem;
		user-select: none;
		position: relative;
		z-index: 5;
	}

	.topbar-left, .topbar-right {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.tb-session  { color: var(--green); font-weight: 500; }
	.tb-sep      { color: var(--border2); }
	.tb-window   { color: var(--comment); padding: 0 0.5rem; cursor: default; text-decoration: none; }
	.active-window { background: rgba(15,52,96,0.8); color: var(--fg); padding: 2px 0.7rem; }
	.tb-info     { color: var(--blue); }
	.tb-time     { color: var(--yellow); font-variant-numeric: tabular-nums; min-width: 7ch; }

	/* ============================================
	   SCROLLABLE BODY
	   ============================================ */
	.crt-body {
		flex: 1;
		overflow-y: auto;
		padding: 2rem 2.5rem;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		position: relative;
		z-index: 5;
		scrollbar-width: thin;
		scrollbar-color: var(--border2) transparent;
	}

	.crt-body::-webkit-scrollbar { width: 4px; }
	.crt-body::-webkit-scrollbar-track { background: transparent; }
	.crt-body::-webkit-scrollbar-thumb { background: var(--border2); border-radius: 2px; }

	/* ============================================
	   STATUS BAR
	   ============================================ */
	.statusbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: rgba(15, 52, 96, 0.7);
		border-top: 1px solid var(--border);
		padding: 0 1rem;
		height: 26px;
		flex-shrink: 0;
		font-size: 0.78rem;
		user-select: none;
		position: relative;
		z-index: 5;
	}

	.sb-left, .sb-right, .sb-center {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.sb-mode {
		background: var(--green);
		color: var(--bg);
		font-weight: 700;
		padding: 0 0.6rem;
		font-size: 0.72rem;
		letter-spacing: 0.05em;
	}

	.sb-sep { color: var(--border2); }

	.sb-home {
		text-decoration: none;
		transition: color 0.1s;
	}

	.sb-home:hover { color: var(--cyan); }

	/* ============================================
	   SIDEBAR
	   ============================================ */
	.sidebar {
		position: relative;
		z-index: 3;
		width: var(--sidebar-w);
		height: var(--crt-h);
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		padding: 1.2rem;
		background: rgba(16, 20, 40, 0.75);
		backdrop-filter: blur(12px);
		border: 1px solid var(--border);
		border-radius: 8px;
		margin-left: 8px;
		overflow-y: auto;
		scrollbar-width: thin;
		scrollbar-color: var(--border2) transparent;
	}

	/* ============================================
	   SECTIONS
	   ============================================ */
	.pane-section {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.section-header {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 1.05rem;
		font-weight: 500;
		user-select: none;
	}

	.sub-line {
		font-size: 0.88rem;
		padding-left: 1.2rem;
	}

	/* ============================================
	   PROJECTS LIST
	   ============================================ */
	.projects-list {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.project-card {
		border: 1px solid var(--border2);
		border-left: 3px solid var(--blue);
		background: rgba(12, 14, 28, 0.85);
		display: flex;
		flex-direction: column;
		border-radius: 4px;
		transition: border-color 0.15s, box-shadow 0.15s;
	}

	.project-card:hover {
		border-color: var(--blue);
		border-left-color: var(--cyan);
		box-shadow: 0 0 18px rgba(122,162,247,0.1);
	}

	.card-placeholder {
		border-style: dashed;
		border-left-style: dashed;
		opacity: 0.35;
	}

	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.8rem 1.2rem;
		background: rgba(15, 52, 96, 0.35);
		border-bottom: 1px solid var(--border2);
	}

	.card-title-row {
		display: flex;
		align-items: baseline;
		gap: 0.6rem;
	}

	.card-perms { font-size: 0.78rem; }

	.card-name {
		font-size: 1.2rem;
		font-weight: 700;
	}

	.card-links { display: flex; gap: 0.6rem; }

	.card-link {
		display: flex;
		align-items: center;
		gap: 0.3rem;
		text-decoration: none;
		font-size: 0.82rem;
		padding: 3px 10px;
		border: 1px solid;
		transition: all 0.1s;
	}

	.card-link.primary {
		color: var(--blue);
		border-color: var(--blue);
	}

	.card-link.primary:hover {
		background: var(--blue);
		color: var(--bg);
	}

	.link-arrow { font-size: 0.9rem; }

	.card-body {
		padding: 1.2rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		flex: 1;
	}

	.card-desc {
		font-size: 0.9rem;
		line-height: 1.75;
		color: var(--fg);
	}

	.card-meta {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		padding-top: 0.5rem;
		border-top: 1px solid var(--border2);
	}

	.meta-row {
		display: flex;
		align-items: baseline;
		gap: 0.8rem;
		font-size: 0.85rem;
	}

	.meta-key {
		min-width: 9ch;
		flex-shrink: 0;
		font-size: 0.78rem;
	}

	.meta-val {
		display: flex;
		flex-wrap: wrap;
		gap: 0.3rem;
		align-items: center;
		color: var(--fg);
	}

	.tag {
		font-size: 0.72rem;
		color: var(--purple);
		border: 1px solid var(--border2);
		padding: 0 5px;
		border-radius: 2px;
	}

	.card-footer {
		border-top: 1px solid var(--border2);
		padding: 0.8rem 1.2rem;
		background: rgba(8, 10, 20, 0.6);
	}

	.preview-art {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 72px;
	}

	.placeholder-text {
		font-size: 0.9rem;
		padding: 0.8rem 0;
	}

	/* ============================================
	   DJ controller CSS art
	   ============================================ */
	.dj-deck {
		display: flex;
		gap: 1.5rem;
		align-items: center;
	}

	.dj-platter {
		width: 56px;
		height: 56px;
		border-radius: 50%;
		border: 2px solid var(--border2);
		background: radial-gradient(circle, var(--bg1) 30%, var(--bg) 31%, var(--border) 50%, var(--bg) 51%);
		position: relative;
		animation: spin 4s linear infinite;
		flex-shrink: 0;
	}

	.dj-label {
		position: absolute;
		inset: 25%;
		border-radius: 50%;
		background: var(--blue);
		opacity: 0.6;
	}

	.dj-needle {
		position: absolute;
		top: -4px;
		right: 8px;
		width: 2px;
		height: 14px;
		background: var(--yellow);
		transform-origin: bottom center;
		transform: rotate(20deg);
	}

	@keyframes spin {
		from { transform: rotate(0deg); }
		to   { transform: rotate(360deg); }
	}

	.dj-mixer {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 6px;
		flex-shrink: 0;
	}

	.fader {
		width: 4px;
		height: 26px;
		background: var(--border2);
		border-radius: 2px;
		position: relative;
	}

	.fader::after {
		content: '';
		position: absolute;
		width: 12px;
		height: 5px;
		background: var(--fg);
		border-radius: 1px;
		left: -4px;
		top: 30%;
	}

	.fader:last-of-type::after { top: 55%; }

	.knob {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: var(--border2);
		border: 1px solid var(--comment);
	}

	.knob:nth-child(3) { background: var(--blue); opacity: 0.7; }
	.knob:nth-child(4) { background: var(--green); opacity: 0.7; }

	/* ============================================
	   SIDEBAR INTERNALS
	   ============================================ */
	.side-section { display: flex; flex-direction: column; gap: 0.6rem; }

	.side-header {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.85rem;
		font-weight: 500;
		color: var(--fg);
		border-bottom: 1px solid var(--border2);
		padding-bottom: 0.4rem;
		user-select: none;
	}

	.side-header span:first-child { color: var(--green); }

	.side-body { font-size: 0.85rem; }
	.side-spacer { flex: 1; }

	.player-body { padding: 0; }

	.bandcamp-player {
		display: block;
		width: 100%;
		height: 500px;
		border: 1px solid var(--border);
	}

	.sysinfo-body { display: flex; flex-direction: column; gap: 0.25rem; }

	.sysinfo-row { display: flex; gap: 0.5rem; font-size: 0.82rem; }

	.si-key { min-width: 9ch; flex-shrink: 0; font-size: 0.78rem; }

	.si-val { color: var(--fg); }

	.si-val a { color: var(--blue); text-decoration: none; }
	.si-val a:hover { text-decoration: underline; }

	/* ============================================
	   RESPONSIVE
	   ============================================ */
	@media (max-width: 1260px) {
		.sidebar { display: none; }
		.crt { border-radius: 8px; }
	}

	@media (max-width: 960px) {
		:root {
			--crt-w: 100vw;
			--crt-h: 100vh;
		}

		.crt {
			border-radius: 0;
			border: none;
		}

		.scene::before { display: none; }
	}

	@media (max-width: 600px) {
		.crt-body { padding: 1.5rem 1rem; }
		.card-perms { display: none; }
		.sb-center { display: none; }
	}
</style>
