<svelte:head>
	<title>harish ~ vhari.sh</title>
	<meta name="description" content="day dreamer.. in love with everything there is." />
</svelte:head>

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

<style>
	/* ── NEOFETCH ───────────────────────── */
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

	.fetch-title { font-size: 1.4rem; font-weight: 700; margin-bottom: 0.1rem; }
	.fetch-line  { color: var(--border2); margin-bottom: 0.2rem; }
	.fetch-row   { font-size: 0.95rem; }
	.fetch-key   { display: inline-block; min-width: 7ch; font-weight: 500; }

	.fetch-colors { display: flex; gap: 3px; margin-top: 0.6rem; }
	.fetch-colors span { width: 18px; height: 18px; border-radius: 2px; }
	.fetch-colors span:nth-child(1) { background: #f7768e; }
	.fetch-colors span:nth-child(2) { background: #e0af68; }
	.fetch-colors span:nth-child(3) { background: #9ece6a; }
	.fetch-colors span:nth-child(4) { background: #7dcfff; }
	.fetch-colors span:nth-child(5) { background: #7aa2f7; }
	.fetch-colors span:nth-child(6) { background: #bb9af7; }
	.fetch-colors span:nth-child(7) { background: #c0caf5; }
	.fetch-colors span:nth-child(8) { background: #565f89; }

	/* ── SECTIONS ───────────────────────── */
	.pane-section { display: flex; flex-direction: column; gap: 0.8rem; }

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
	.section-link:hover { color: var(--cyan); border-bottom-color: var(--cyan); }

	.section-body {
		color: var(--fg);
		font-size: 0.95rem;
		line-height: 1.8;
		padding-left: 1.2rem;
		border-left: 2px solid var(--border);
	}

	/* ── PROJECTS ───────────────────────── */
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
	.ls-url   { font-size: 0.78rem; flex-shrink: 0; color: var(--comment); transition: color 0.1s; }
	.ls-more  { margin-top: 0.5rem; font-size: 0.8rem; }

	/* ── LINKS ──────────────────────────── */
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

	/* ── CURSOR ─────────────────────────── */
	.cursor-blink {
		color: var(--green);
		animation: blink 1s step-end infinite;
	}
	@keyframes blink {
		0%, 100% { opacity: 1; }
		50%       { opacity: 0; }
	}

	@media (max-width: 600px) {
		.ls-perms, .ls-tags { display: none; }
		.fetch-block { flex-direction: column; gap: 1rem; }
	}
</style>
