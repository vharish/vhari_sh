<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { resolveBg, getCachedBg } from '$lib/bg';

	// ✏️ UPDATE THIS to change the album
	const bandcampAlbumId = '1168728865';
	const bandcampEmbedUrl = `https://bandcamp.com/EmbeddedPlayer/album=${bandcampAlbumId}/size=large/bgcol=16213e/linkcol=7dcfff/tracklist=true/transparent=true/`;

	let { children } = $props();

	let clockText = $state('');
	const _cached = typeof sessionStorage !== 'undefined' ? getCachedBg() : null;
	let bgUrl     = $state(_cached?.url ?? '');
	let bgImgMode = $state<'vertical' | 'regular'>(_cached?.imgMode ?? 'regular');
	let sceneMode = $state<'depth-layers' | 'radial-spotlight'>(_cached?.sceneMode ?? 'depth-layers');
	let bgReady   = $state(_cached !== null);

	function updateClock() {
		clockText = new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
	}

	onMount(async () => {
		updateClock();
		const interval = setInterval(updateClock, 1000);

		if (!_cached) {
			const resolved = await resolveBg();
			bgUrl     = resolved.url;
			bgImgMode = resolved.imgMode;
			sceneMode = resolved.sceneMode;
			setTimeout(() => { bgReady = true; }, 2000);
		}

		return () => clearInterval(interval);
	});

	// Per-route statusbar text
	const STATUS: Record<string, string> = {
		'/':         'day dreamer.. in love with everything there is.',
		'/projects': 'things I\'ve built to learn, explore, or scratch an itch',
	};

	const PATH_LABEL: Record<string, string> = {
		'/':         '~/vhari.sh',
		'/projects': '~/projects',
	};
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400&display=swap" rel="stylesheet" />
</svelte:head>

<div class="scene"
	class:mode-depth-layers={sceneMode === 'depth-layers'}
	class:mode-radial-spotlight={sceneMode === 'radial-spotlight'}
>
	<div class="scene-bg-top"
		class:ready={bgReady}
		class:vertical={bgImgMode === 'vertical'}
		style={bgUrl ? `background-image: url('${bgUrl}')` : ''}
	></div>

	<!-- CRT -->
	<div class="crt">
		<div class="crt-scanlines" aria-hidden="true"></div>

		<!-- TOPBAR -->
		<header class="topbar">
			<div class="topbar-left">
				<span class="tb-session">tmux: harish@vhari.sh</span>
				<span class="tb-sep">│</span>
				<a href="/"        class="tb-window" class:active-window={$page.url.pathname === '/'}>0: ~</a>
				<a href="/projects" class="tb-window" class:active-window={$page.url.pathname === '/projects'}>1: projects</a>
				<span class="tb-window">2: music</span>
			</div>
			<div class="topbar-right">
				<span class="tb-info">vhari.sh</span>
				<span class="tb-sep">│</span>
				<span class="tb-time">{clockText}</span>
			</div>
		</header>

		<!-- PAGE CONTENT -->
		<main class="crt-body">
			{@render children()}
		</main>

		<!-- STATUSBAR -->
		<footer class="statusbar">
			<div class="sb-left">
				<span class="sb-mode">NORMAL</span>
				<span class="sb-sep">│</span>
				<span class="c-fg">{PATH_LABEL[$page.url.pathname] ?? $page.url.pathname}</span>
			</div>
			<div class="sb-center">
				<span class="c-comment">{STATUS[$page.url.pathname] ?? ''}</span>
			</div>
			<div class="sb-right">
				<span class="c-comment">made with love &amp; zero apologies</span>
				<span class="sb-sep">│</span>
				<span class="c-fg">est. 2026</span>
			</div>
		</footer>
	</div>

	<!-- SIDEBAR — persistent, never remounts -->
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

</div>

<style>
	:root {
		--bg:        #1a1b2e;
		--bg1:       #16213e;
		--bg2:       #0f3460;
		--border:    #2d3149;
		--border2:   #4a527a;
		--fg:        #c0caf5;
		--comment:   #8088b3;
		--blue:      #7aa2f7;
		--green:     #9ece6a;
		--cyan:      #7dcfff;
		--yellow:    #e0af68;
		--purple:    #bb9af7;
		--crt-w:     900px;
		--crt-h:     92vh;
		--sidebar-w: 300px;
		--font:      'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace;
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

	/* colour utils — global so page content can use them */
	:global(.c-fg)      { color: var(--fg); }
	:global(.c-blue)    { color: var(--blue); }
	:global(.c-green)   { color: var(--green); }
	:global(.c-cyan)    { color: var(--cyan); }
	:global(.c-yellow)  { color: var(--yellow); }
	:global(.c-purple)  { color: var(--purple); }
	:global(.c-comment) { color: var(--comment); }
	:global(.tag) {
		font-size: 0.72rem;
		color: var(--purple);
		border: 1px solid var(--border2);
		padding: 0 5px;
		border-radius: 2px;
	}

	/* ── SCENE ─────────────────────────────────── */
	.scene {
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		overflow: hidden;
		background: #08090f;
	}

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

	.scene-bg-top.ready   { opacity: 1; }
	.scene-bg-top.vertical {
		background-size: auto 100%;
		background-position: left center;
	}

	/* depth-layers overlay */
	.mode-depth-layers::before {
		content: '';
		position: absolute;
		inset: 0;
		z-index: 1;
		pointer-events: none;
		background:
			linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)),
			linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.3) 100%);
	}

	/* radial-spotlight overlay */
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

	/* ── CRT ────────────────────────────────────── */
	.crt {
		position: relative;
		z-index: 3;
		width: var(--crt-w);
		height: var(--crt-h);
		display: flex;
		flex-direction: column;
		background: rgba(20, 21, 38, 0.72);
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

	/* ── TOPBAR ─────────────────────────────────── */
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

	.tb-session    { color: var(--green); font-weight: 500; }
	.tb-sep        { color: var(--border2); }
	.tb-window     { color: var(--comment); padding: 0 0.5rem; text-decoration: none; }
	.active-window { background: rgba(15,52,96,0.8); color: var(--fg); padding: 2px 0.7rem; }
	.tb-info       { color: var(--blue); }
	.tb-time       { color: var(--yellow); font-variant-numeric: tabular-nums; min-width: 7ch; }

	/* ── CRT BODY ───────────────────────────────── */
	.crt-body {
		flex: 1;
		overflow-y: auto;
		padding: 2rem 2.5rem;
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
		position: relative;
		z-index: 5;
		scrollbar-width: thin;
		scrollbar-color: var(--border2) transparent;
	}

	.crt-body::-webkit-scrollbar       { width: 4px; }
	.crt-body::-webkit-scrollbar-track { background: transparent; }
	.crt-body::-webkit-scrollbar-thumb { background: var(--border2); border-radius: 2px; }

	/* ── STATUSBAR ──────────────────────────────── */
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

	/* ── SIDEBAR ────────────────────────────────── */
	.sidebar {
		position: relative;
		z-index: 3;
		width: var(--sidebar-w);
		height: var(--crt-h);
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		padding: 1.2rem;
		background: rgba(20, 21, 38, 0.72);
		border: 1px solid var(--border);
		border-radius: 8px;
		margin-left: 8px;
		overflow-y: auto;
		scrollbar-width: thin;
		scrollbar-color: var(--border2) transparent;
	}

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

	.side-body   { font-size: 0.85rem; }
	.side-spacer { flex: 1; }
	.player-body { padding: 0; }

	.bandcamp-player {
		display: block;
		width: 100%;
		height: 500px;
		border: 1px solid var(--border);
	}

	.sysinfo-body { display: flex; flex-direction: column; gap: 0.25rem; }
	.sysinfo-row  { display: flex; gap: 0.5rem; font-size: 0.82rem; }
	.si-key       { min-width: 9ch; flex-shrink: 0; font-size: 0.78rem; }
	.si-val       { color: var(--fg); }
	.si-val a     { color: var(--blue); text-decoration: none; }
	.si-val a:hover { text-decoration: underline; }

	/* ── RESPONSIVE ─────────────────────────────── */
	@media (max-width: 1260px) {
		.sidebar { display: none; }
	}

	@media (max-width: 960px) {
		:root { --crt-w: 100vw; --crt-h: 100vh; }
		.crt  { border-radius: 0; border: none; }
	}

	@media (max-width: 600px) {
		:global(.crt-body) { padding: 1.5rem 1rem; }
		.sb-center { display: none; }
	}
</style>
