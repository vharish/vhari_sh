<script lang="ts">
	import { onMount } from 'svelte';
	import { resolveBg } from '$lib/bg';

	// ✏️ UPDATE THIS to change the album — paste any Bandcamp album embed ID here.
	// To find it: go to the album page → Share / Embed → Embed this album → copy the number after "album=" in the src URL.
	const bandcampAlbumId = '1168728865';
	const bandcampEmbedUrl = `https://bandcamp.com/EmbeddedPlayer/album=${bandcampAlbumId}/size=large/bgcol=16213e/linkcol=7dcfff/tracklist=true/transparent=true/`;

	let clockText  = $state('');
	let bgUrl      = $state('');
	let bgImgMode  = $state<'vertical' | 'regular'>('regular');
	let sceneMode  = $state<'depth-layers' | 'radial-spotlight'>('depth-layers');
	let bgReady    = $state(false);

	function updateClock() {
		clockText = new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
	}

	onMount(async () => {
		updateClock();
		const interval = setInterval(updateClock, 1000);

		const resolved = await resolveBg();
		bgUrl     = resolved.url;
		bgImgMode = resolved.imgMode;
		sceneMode = resolved.sceneMode;
		requestAnimationFrame(() => { bgReady = true; });

		return () => clearInterval(interval);
	});
</script>

<svelte:head>
	<title>harish ~ vhari.sh</title>
	<meta name="description" content="day dreamer.. in love with everything there is." />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400&display=swap" rel="stylesheet" />
</svelte:head>

<!-- time-of-day background -->
<div class="scene" class:mode-depth-layers={sceneMode === 'depth-layers'} class:mode-radial-spotlight={sceneMode === 'radial-spotlight'}>
	<div class="scene-bg scene-bg-top"
		class:ready={bgReady}
		class:vertical={bgImgMode === 'vertical'}
		style={bgUrl ? `background-image: url('${bgUrl}')` : ''}
	></div>

	<!-- CRT screen: topbar + scrollable content + statusbar -->
	<div class="crt">

		<!-- scanline overlay -->
		<div class="crt-scanlines" aria-hidden="true"></div>

		<!-- TOP BAR -->
		<header class="topbar">
			<div class="topbar-left">
				<span class="tb-session">tmux: harish@vhari.sh</span>
				<span class="tb-sep">│</span>
				<span class="tb-window active-window">0: ~</span>
				<a href="/projects" class="tb-window">1: projects</a>
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

			<!-- neofetch-style block -->
			<section class="fetch-block">
				<div class="fetch-art" aria-hidden="true">
<pre class="ascii-art">
 ██╗  ██╗
 ██║  ██║
 ███████║
 ██╔══██║
 ██║  ██║
 ╚═╝  ╚═╝</pre>
				</div>
				<div class="fetch-info">
					<p class="fetch-title"><span class="c-green">harish</span><span class="c-fg">@</span><span class="c-blue">vhari.sh</span></p>
					<p class="fetch-line">─────────────────────</p>
					<p class="fetch-row"><span class="c-blue fetch-key">os</span><span class="c-comment">: </span><span class="c-fg">human, running 24/7</span></p>
					<p class="fetch-row"><span class="c-blue fetch-key">shell</span><span class="c-comment">: </span><span class="c-fg">fish + tmux + neovim</span></p>
					<p class="fetch-row"><span class="c-blue fetch-key">uptime</span><span class="c-comment">: </span><span class="c-fg">since the big bang</span></p>
					<p class="fetch-row"><span class="c-blue fetch-key">mood</span><span class="c-comment">: </span><span class="c-fg">dreaming, always</span></p>
					<p class="fetch-row"><span class="c-blue fetch-key">loves</span><span class="c-comment">: </span><span class="c-fg">everything there is</span></p>
					<div class="fetch-colors">
						<span></span><span></span><span></span><span></span>
						<span></span><span></span><span></span><span></span>
					</div>
				</div>
			</section>

			<!-- about -->
			<section class="pane-section">
				<h2 class="section-header">
					<span class="c-green">❯</span>
					<span class="c-blue">cat</span>
					<span class="c-fg">about.txt</span>
				</h2>
				<div class="section-body">
					<p>Hi. I'm Harish.</p>
					<br/>
					<p>I spend most of my time thinking about things that don't need to be thought about, building things that might not need to be built, and falling in love with ideas the moment they appear.</p>
					<br/>
					<p>This is my corner of the internet. I made it for me. You're welcome here though.</p>
					<br/>
					<p><span class="c-green">❯</span> <span class="cursor-blink">▋</span></p>
				</div>
			</section>

			<!-- projects -->
			<section class="pane-section">
				<h2 class="section-header">
					<span class="c-green">❯</span>
					<span class="c-blue">ls</span>
					<a href="/projects" class="c-fg section-link">-la ~/projects/</a>
				</h2>
				<div class="section-body projects-list">
					<div class="ls-header">
						<span class="c-comment">total 1</span>
					</div>
					<a href="https://dj.vhari.sh" target="_blank" rel="noopener noreferrer" class="ls-row">
						<span class="ls-perms c-comment">drwxr-xr-x</span>
						<span class="ls-name"><span class="c-green">dj/</span></span>
						<span class="ls-desc c-fg">DDJ-400 interactive controller map — built to learn to DJ</span>
						<span class="ls-tags">
							<span class="tag">vanilla-js</span>
							<span class="tag">svg</span>
						</span>
						<span class="ls-url c-blue">dj.vhari.sh ↗</span>
					</a>
					<p class="ls-more"><span class="c-comment"># more incoming..</span></p>
				</div>
			</section>

			<!-- links -->
			<section class="pane-section">
				<h2 class="section-header">
					<span class="c-green">❯</span>
					<span class="c-blue">cat</span>
					<span class="c-fg">links.md</span>
				</h2>
				<div class="section-body links-list">
					<a href="https://github.com/vharish" target="_blank" rel="noopener noreferrer" class="link-line">
						<span class="c-comment">──</span>
						<svg class="link-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
							<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
						</svg>
						<span class="c-blue link-label">github</span>
						<span class="c-comment link-url">github.com/vharish</span>
					</a>
				</div>
			</section>

		</main>

		<!-- STATUS BAR -->
		<footer class="statusbar">
			<div class="sb-left">
				<span class="sb-mode">NORMAL</span>
				<span class="sb-sep">│</span>
				<span class="c-fg">~/vhari.sh</span>
			</div>
			<div class="sb-center">
				<span class="c-comment">day dreamer.. in love with everything there is.</span>
			</div>
			<div class="sb-right">
				<span class="c-comment">made with love &amp; zero apologies</span>
				<span class="sb-sep">│</span>
				<span class="c-fg">est. 2026</span>
			</div>
		</footer>

	</div><!-- /.crt -->

	<!-- SIDEBAR — floats outside the CRT -->
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
		overflow: hidden; /* scene handles scroll */
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

	/* bg image layer */
	.scene-bg-top {
		position: absolute;
		inset: 0;
		background-size: cover;
		background-position: center;
		pointer-events: none;
		z-index: 0;
		opacity: 0;
		transition: opacity 1.2s ease-in-out;
	}

	.scene-bg-top.ready { opacity: 1; }

	/* ============================================
	   MODE: depth-layers
	   Full-bleed image. Three-zone darkness overlay:
	   edges ~85% dark, center ~55% dark, thin bright strip far left.
	   CRT becomes semi-transparent so image breathes through.
	   ============================================ */

	/* zone overlay: dark edges, slightly lighter center */
	.mode-depth-layers::before {
		content: '';
		position: absolute;
		inset: 0;
		z-index: 1;
		pointer-events: none;
		background:
			/* left bright sliver — barely darkened */
			linear-gradient(to right, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.15) 3%, transparent 12%),
			/* left-to-center darkening band */
			linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0.4) 50%, transparent 70%),
			/* right edge dark */
			linear-gradient(to left, rgba(0,0,0,0.8) 0%, transparent 35%),
			/* top/bottom vignette */
			radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.75) 100%);
	}

	/* ============================================
	   MODE: radial-spotlight
	   Heavy dark vignette, lighter halo behind the CRT.
	   ============================================ */
	.mode-radial-spotlight::before {
		content: '';
		position: absolute;
		inset: 0;
		z-index: 1;
		pointer-events: none;
		background: radial-gradient(
			ellipse 55% 70% at 50% 50%,
			rgba(0,0,0,0.35) 0%,
			rgba(0,0,0,0.6) 50%,
			rgba(0,0,0,0.88) 100%
		);
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
		background: rgba(20, 21, 38, 0.72); /* semi-transparent so bg image bleeds through subtly */
		border-radius: 8px;
		border: 1px solid var(--border2);
		/* phosphor glow */
		box-shadow:
			0 0 0 1px rgba(122,162,247,0.1),
			0 0 20px rgba(122,162,247,0.08),
			0 0 60px rgba(122,162,247,0.06),
			0 0 120px rgba(100,120,220,0.05),
			inset 0 0 40px rgba(0,0,0,0.3);
		overflow: hidden;
	}

	/* scanlines */
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
		gap: 2.5rem;
		position: relative;
		z-index: 5;
		/* custom scrollbar */
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

	/* ============================================
	   SIDEBAR — floats outside the CRT
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
	   NEOFETCH BLOCK
	   ============================================ */
	.fetch-block {
		display: flex;
		gap: 2.5rem;
		align-items: flex-start;
	}

	.ascii-art {
		color: var(--blue);
		font-size: 1rem;
		line-height: 1.2;
		font-weight: 700;
		white-space: pre;
		text-shadow: 0 0 20px rgba(122,162,247,0.5);
		flex-shrink: 0;
	}

	.fetch-info {
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
		padding-top: 0.2rem;
	}

	.fetch-title {
		font-size: 1.4rem;
		font-weight: 700;
		margin-bottom: 0.1rem;
	}

	.fetch-line { color: var(--border2); margin-bottom: 0.2rem; }

	.fetch-row { font-size: 0.95rem; }

	.fetch-key {
		display: inline-block;
		min-width: 7ch;
		font-weight: 500;
	}

	.fetch-colors {
		display: flex;
		gap: 3px;
		margin-top: 0.6rem;
	}

	.fetch-colors span {
		width: 18px;
		height: 18px;
		border-radius: 2px;
	}

	.fetch-colors span:nth-child(1) { background: #f7768e; }
	.fetch-colors span:nth-child(2) { background: #e0af68; }
	.fetch-colors span:nth-child(3) { background: #9ece6a; }
	.fetch-colors span:nth-child(4) { background: #7dcfff; }
	.fetch-colors span:nth-child(5) { background: #7aa2f7; }
	.fetch-colors span:nth-child(6) { background: #bb9af7; }
	.fetch-colors span:nth-child(7) { background: #c0caf5; }
	.fetch-colors span:nth-child(8) { background: #565f89; }

	/* ============================================
	   SECTIONS
	   ============================================ */
	.pane-section {
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
	}

	.section-header {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 1.05rem;
		font-weight: 500;
		user-select: none;
	}

	.section-link {
		text-decoration: none;
		border-bottom: 1px dashed var(--border2);
		transition: color 0.1s, border-color 0.1s;
	}

	.section-link:hover {
		color: var(--cyan);
		border-bottom-color: var(--cyan);
	}

	.section-body {
		color: var(--fg);
		font-size: 0.95rem;
		line-height: 1.8;
		padding-left: 1.2rem;
		border-left: 2px solid var(--border);
	}

	/* ============================================
	   PROJECTS
	   ============================================ */
	.ls-header { font-size: 0.8rem; margin-bottom: 0.3rem; }

	.ls-row {
		display: flex;
		align-items: baseline;
		gap: 1rem;
		flex-wrap: wrap;
		text-decoration: none;
		padding: 0.35rem 0.5rem;
		margin: 0 -0.5rem;
		border-radius: 3px;
		transition: background 0.1s;
		font-size: 0.88rem;
	}

	.ls-row:hover { background: var(--border); }
	.ls-row:hover .ls-url { color: var(--cyan); }

	.ls-perms { font-size: 0.78rem; flex-shrink: 0; }
	.ls-name  { font-weight: 700; flex-shrink: 0; min-width: 8ch; }
	.ls-desc  { flex: 1; min-width: 0; }

	.ls-tags  { display: flex; gap: 0.3rem; flex-shrink: 0; }

	.tag {
		font-size: 0.72rem;
		color: var(--purple);
		border: 1px solid var(--border2);
		padding: 0 5px;
		border-radius: 2px;
	}

	.ls-url {
		font-size: 0.78rem;
		flex-shrink: 0;
		color: var(--comment);
		transition: color 0.1s;
	}

	.ls-more { margin-top: 0.5rem; font-size: 0.8rem; }

	/* ============================================
	   LINKS
	   ============================================ */
	.link-line {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		text-decoration: none;
		padding: 0.3rem 0;
		font-size: 0.9rem;
		color: var(--fg);
		transition: color 0.1s;
	}

	.link-line:hover .link-label { color: var(--cyan); }
	.link-line:hover .link-icon  { color: var(--cyan); }

	.link-icon  { color: var(--blue); flex-shrink: 0; transition: color 0.1s; }
	.link-label { font-weight: 500; transition: color 0.1s; }
	.link-url   { font-size: 0.78rem; margin-left: 0.3rem; }

	/* ============================================
	   CURSOR
	   ============================================ */
	.cursor-blink {
		color: var(--green);
		animation: blink 1s step-end infinite;
	}

	@keyframes blink {
		0%, 100% { opacity: 1; }
		50%       { opacity: 0; }
	}

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

	.si-val a {
		color: var(--blue);
		text-decoration: none;
	}

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
		.ls-perms, .ls-tags { display: none; }
		.sb-center { display: none; }
		.fetch-block { flex-direction: column; gap: 1rem; }
	}
</style>
