<script lang="ts">
	import { onMount } from 'svelte';

	// ✏️ UPDATE THIS to change the album — paste any Bandcamp album embed ID here.
	// To find it: go to the album page → Share / Embed → Embed this album → copy the number after "album=" in the src URL.
	const bandcampAlbumId = '1168728865';
	const bandcampEmbedUrl = `https://bandcamp.com/EmbeddedPlayer/album=${bandcampAlbumId}/size=large/bgcol=1a1b2e/linkcol=7aa2f7/tracklist=true/transparent=true/`;

	let clockText = $state('');

	function updateClock() {
		clockText = new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
	}

	onMount(() => {
		updateClock();
		const interval = setInterval(updateClock, 1000);
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

<div class="term">

	<!-- TOP BAR — like a tmux status bar -->
	<header class="topbar">
		<div class="topbar-left">
			<span class="tb-session">tmux: harish@vhari.sh</span>
			<span class="tb-sep">│</span>
			<span class="tb-window active-window">0: ~</span>
			<span class="tb-window">1: projects</span>
			<span class="tb-window">2: music</span>
		</div>
		<div class="topbar-right">
			<span class="tb-info">vhari.sh</span>
			<span class="tb-sep">│</span>
			<span class="tb-time">{clockText}</span>
		</div>
	</header>

	<!-- MAIN PANE AREA -->
	<div class="panes">

		<!-- LEFT / MAIN PANE -->
		<main class="pane pane-main">

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

			<!-- about section -->
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

			<!-- projects section -->
			<section class="pane-section">
				<h2 class="section-header">
					<span class="c-green">❯</span>
					<span class="c-blue">ls</span>
					<span class="c-fg">-la ~/projects/</span>
				</h2>
				<div class="section-body projects-list">
					<div class="ls-header">
						<span class="c-comment">total 1</span>
					</div>
					<a href="https://dj.vhari.sh" target="_blank" rel="noopener noreferrer" class="ls-row">
						<span class="ls-perms c-comment">drwxr-xr-x</span>
						<span class="ls-name">
							<span class="c-green">dj/</span>
						</span>
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

			<!-- links section -->
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

		<!-- RIGHT PANE — sidebar -->
		<aside class="pane pane-side">

			<!-- now playing -->
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

			<!-- system info widget -->
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
						<span class="si-val c-blue"><a href="https://github.com/vharish/vhari_sh" target="_blank" rel="noopener noreferrer">vharish/vhari_sh ↗</a></span>
					</div>
				</div>
			</section>

		</aside>

	</div>

	<!-- BOTTOM STATUS BAR -->
	<footer class="statusbar">
		<div class="sb-left">
			<span class="sb-mode">NORMAL</span>
			<span class="sb-sep">│</span>
			<span class="sb-file c-fg">~/vhari.sh</span>
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

</div>

<style>
	/* ============================================
	   TOKYO NIGHT PALETTE
	   ============================================ */
	:root {
		--bg:      #1a1b2e;
		--bg1:     #16213e;
		--bg2:     #0f3460;
		--border:  #292e42;
		--border2: #3b4261;
		--fg:      #c0caf5;
		--fg-dim:  #565f89;
		--comment: #565f89;
		--blue:    #7aa2f7;
		--green:   #9ece6a;
		--cyan:    #7dcfff;
		--yellow:  #e0af68;
		--red:     #f7768e;
		--purple:  #bb9af7;
		--font:    'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace;
	}

	/* ============================================
	   RESET
	   ============================================ */
	:global(*, *::before, *::after) { box-sizing: border-box; margin: 0; padding: 0; }

	:global(html, body) {
		height: 100%;
		background: var(--bg);
		color: var(--fg);
		font-family: var(--font);
		font-size: 14px;
		line-height: 1.6;
		overflow-x: hidden;
	}

	/* ============================================
	   COLOR UTILITIES
	   ============================================ */
	.c-fg      { color: var(--fg); }
	.c-blue    { color: var(--blue); }
	.c-green   { color: var(--green); }
	.c-comment { color: var(--comment); }

	/* ============================================
	   TERMINAL WRAPPER
	   ============================================ */
	.term {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		width: 100%;
	}

	/* ============================================
	   TOP BAR (tmux style)
	   ============================================ */
	.topbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: var(--bg1);
		border-bottom: 1px solid var(--border);
		padding: 0 1rem;
		height: 28px;
		flex-shrink: 0;
		font-size: 0.8rem;
		user-select: none;
	}

	.topbar-left, .topbar-right {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.tb-session {
		color: var(--green);
		font-weight: 500;
	}

	.tb-sep {
		color: var(--border2);
	}

	.tb-window {
		color: var(--comment);
		padding: 0 0.5rem;
		cursor: default;
	}

	.active-window {
		background: var(--bg2);
		color: var(--fg);
		padding: 2px 0.7rem;
	}

	.tb-info {
		color: var(--blue);
	}

	.tb-time {
		color: var(--yellow);
		font-variant-numeric: tabular-nums;
		min-width: 7ch;
	}

	/* ============================================
	   PANES
	   ============================================ */
	.panes {
		display: grid;
		grid-template-columns: 1fr 340px;
		flex: 1;
		min-height: 0;
	}

	/* pane border separator */
	.pane-side {
		border-left: 1px solid var(--border);
	}

	.pane {
		display: flex;
		flex-direction: column;
		overflow-y: auto;
		padding: 2rem 2.5rem;
		gap: 2.5rem;
	}

	.pane-side {
		padding: 1.5rem 1.5rem;
		gap: 2rem;
		background: var(--bg1);
		display: flex;
		flex-direction: column;
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
		font-size: 0.85rem;
		line-height: 1.2;
		font-weight: 700;
		white-space: pre;
		text-shadow: 0 0 20px rgba(122,162,247,0.4);
		flex-shrink: 0;
	}

	.fetch-info {
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
		padding-top: 0.2rem;
	}

	.fetch-title {
		font-size: 1.1rem;
		font-weight: 700;
		margin-bottom: 0.1rem;
	}

	.fetch-line {
		color: var(--border2);
		margin-bottom: 0.2rem;
	}

	.fetch-row {
		font-size: 0.85rem;
	}

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
		font-size: 0.9rem;
		font-weight: 400;
		user-select: none;
	}

	.section-body {
		color: var(--fg);
		font-size: 0.9rem;
		line-height: 1.75;
		padding-left: 1.2rem;
		border-left: 2px solid var(--border);
	}

	/* ============================================
	   PROJECTS (ls -la style)
	   ============================================ */
	.ls-header {
		font-size: 0.8rem;
		margin-bottom: 0.3rem;
	}

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

	.ls-row:hover {
		background: var(--border);
	}

	.ls-row:hover .ls-url {
		opacity: 1;
	}

	.ls-perms {
		font-size: 0.78rem;
		flex-shrink: 0;
	}

	.ls-name {
		font-weight: 700;
		flex-shrink: 0;
		min-width: 8ch;
	}

	.ls-desc {
		flex: 1;
		min-width: 0;
	}

	.ls-tags {
		display: flex;
		gap: 0.3rem;
		flex-shrink: 0;
	}

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
		opacity: 0.5;
		transition: opacity 0.1s;
	}

	.ls-more {
		margin-top: 0.5rem;
		font-size: 0.8rem;
	}

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
		transition: color 0.1s;
		color: var(--fg);
	}

	.link-line:hover .link-label { color: var(--cyan); }
	.link-line:hover .link-icon  { color: var(--cyan); }

	.link-icon {
		color: var(--blue);
		flex-shrink: 0;
		transition: color 0.1s;
	}

	.link-label {
		font-weight: 500;
		transition: color 0.1s;
	}

	.link-url {
		font-size: 0.78rem;
		margin-left: 0.3rem;
	}

	/* ============================================
	   CURSOR BLINK
	   ============================================ */
	.cursor-blink {
		animation: blink 1s step-end infinite;
		color: var(--green);
	}

	@keyframes blink {
		0%, 100% { opacity: 1; }
		50%       { opacity: 0; }
	}

	/* ============================================
	   SIDEBAR SECTIONS
	   ============================================ */
	.side-section {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
	}

	.side-header {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.8rem;
		font-weight: 500;
		color: var(--comment);
		text-transform: lowercase;
		letter-spacing: 0.05em;
		user-select: none;
		border-bottom: 1px solid var(--border);
		padding-bottom: 0.4rem;
	}

	.side-header span:first-child {
		color: var(--green);
	}

	.side-body {
		font-size: 0.85rem;
	}

	/* bandcamp player */
	.player-body {
		padding: 0;
	}

	.bandcamp-player {
		display: block;
		width: 100%;
		height: 500px;
		border: 1px solid var(--border);
	}

	.side-spacer {
		flex: 1;
	}

	/* sysinfo */
	.sysinfo-body {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.sysinfo-row {
		display: flex;
		gap: 0.5rem;
		font-size: 0.82rem;
	}

	.si-key {
		min-width: 9ch;
		flex-shrink: 0;
		font-size: 0.78rem;
	}

	.si-val {
		color: var(--fg);
	}

	.si-val a {
		color: var(--blue);
		text-decoration: none;
	}

	.si-val a:hover {
		text-decoration: underline;
	}

	/* ============================================
	   STATUS BAR (vim style)
	   ============================================ */
	.statusbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: var(--bg2);
		padding: 0 1rem;
		height: 26px;
		flex-shrink: 0;
		font-size: 0.78rem;
		border-top: 1px solid var(--border);
		user-select: none;
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
		padding: 0 0.5rem;
		font-size: 0.72rem;
		letter-spacing: 0.05em;
	}

	.sb-sep {
		color: var(--border2);
	}

	/* ============================================
	   RESPONSIVE
	   ============================================ */
	@media (max-width: 900px) {
		.panes {
			grid-template-columns: 1fr;
		}

		.pane-side {
			border-left: none;
			border-top: 1px solid var(--border);
		}

		.fetch-block {
			flex-direction: column;
			gap: 1rem;
		}
	}

	@media (max-width: 600px) {
		.pane {
			padding: 1.5rem 1rem;
		}

		.ls-perms, .ls-tags {
			display: none;
		}

		.topbar-right .tb-info,
		.sb-center {
			display: none;
		}
	}
</style>
