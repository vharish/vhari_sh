<svelte:head>
	<title>projects ~ vhari.sh</title>
	<meta name="description" content="Things I've built." />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap" rel="stylesheet" />
</svelte:head>

<div class="term">

	<!-- TOP BAR -->
	<header class="topbar">
		<div class="topbar-left">
			<a href="/" class="tb-back">← ~/</a>
			<span class="tb-sep">│</span>
			<span class="tb-path"><span class="c-green">harish</span><span class="c-dim">@</span><span class="c-blue">vhari.sh</span><span class="c-dim">:</span><span class="c-yellow">~/projects</span></span>
		</div>
		<div class="topbar-right">
			<span class="c-dim">vhari.sh/projects</span>
		</div>
	</header>

	<!-- MAIN -->
	<main class="main">

		<!-- page heading -->
		<div class="page-heading">
			<p class="prompt-line">
				<span class="c-green">❯</span>
				<span class="c-blue">ls</span>
				<span class="c-fg">-la ~/projects/</span>
			</p>
			<p class="c-dim sub-line"># things I've built to learn, explore, or scratch an itch</p>
		</div>

		<!-- project grid -->
		<div class="projects-grid">

			<article class="project-card">
				<div class="card-header">
					<div class="card-title-row">
						<span class="card-perms c-dim">drwxr-xr-x</span>
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
							<span class="meta-key c-dim">built with</span>
							<span class="meta-val">
								<span class="tag">vanilla-js</span>
								<span class="tag">svg</span>
								<span class="tag">css</span>
							</span>
						</div>
						<div class="meta-row">
							<span class="meta-key c-dim">why</span>
							<span class="meta-val c-fg">to figure out what all the knobs do</span>
						</div>
						<div class="meta-row">
							<span class="meta-key c-dim">status</span>
							<span class="meta-val"><span class="c-green">●</span> <span class="c-fg">active</span></span>
						</div>
					</div>
				</div>

				<div class="card-footer">
					<div class="card-preview">
						<div class="preview-art dj-art">
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
				</div>
			</article>

			<!-- placeholder for next project -->
			<article class="project-card card-placeholder">
				<div class="card-body">
					<p class="c-dim placeholder-text">
						<span class="c-green"># </span>next project loading..
					</p>
				</div>
			</article>

		</div>

	</main>

	<!-- STATUSBAR -->
	<footer class="statusbar">
		<div class="sb-left">
			<span class="sb-mode">NORMAL</span>
			<span class="sb-sep c-dim">│</span>
			<span class="c-fg">~/projects</span>
		</div>
		<div class="sb-right">
			<span class="c-dim">1 project</span>
			<span class="sb-sep c-dim">│</span>
			<a href="/" class="c-blue sb-home">← home</a>
		</div>
	</footer>

</div>

<style>
	:root {
		--bg:      #1a1b2e;
		--bg1:     #16213e;
		--bg2:     #0f3460;
		--border:  #292e42;
		--border2: #3b4261;
		--fg:      #c0caf5;
		--dim:     #565f89;
		--blue:    #7aa2f7;
		--green:   #9ece6a;
		--cyan:    #7dcfff;
		--yellow:  #e0af68;
		--red:     #f7768e;
		--purple:  #bb9af7;
		--font:    'JetBrains Mono', 'Fira Code', monospace;
	}

	:global(*, *::before, *::after) { box-sizing: border-box; margin: 0; padding: 0; }

	:global(html, body) {
		height: 100%;
		background: var(--bg);
		color: var(--fg);
		font-family: var(--font);
		font-size: 15px;
		line-height: 1.6;
	}

	.c-fg     { color: var(--fg); }
	.c-blue   { color: var(--blue); }
	.c-green  { color: var(--green); }
	.c-yellow { color: var(--yellow); }
	.c-dim    { color: var(--dim); }

	/* LAYOUT */
	.term {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	/* TOP BAR */
	.topbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: var(--bg1);
		border-bottom: 1px solid var(--border);
		padding: 0 1.5rem;
		height: 28px;
		flex-shrink: 0;
		font-size: 0.82rem;
		user-select: none;
	}

	.topbar-left, .topbar-right {
		display: flex;
		align-items: center;
		gap: 0.6rem;
	}

	.tb-back {
		color: var(--blue);
		text-decoration: none;
		transition: color 0.1s;
	}

	.tb-back:hover { color: var(--cyan); }

	.tb-sep { color: var(--border2); }

	/* MAIN */
	.main {
		flex: 1;
		padding: 3rem 4rem;
		max-width: 1200px;
		width: 100%;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	/* PAGE HEADING */
	.page-heading {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
	}

	.prompt-line {
		display: flex;
		gap: 0.5rem;
		font-size: 1.2rem;
		font-weight: 500;
	}

	.sub-line {
		font-size: 0.88rem;
		padding-left: 1.2rem;
	}

	/* PROJECTS GRID */
	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));
		gap: 1.5rem;
	}

	/* PROJECT CARD */
	.project-card {
		border: 1px solid var(--border);
		background: var(--bg1);
		display: flex;
		flex-direction: column;
		transition: border-color 0.15s;
	}

	.project-card:hover {
		border-color: var(--border2);
	}

	.card-placeholder {
		border-style: dashed;
		opacity: 0.4;
	}

	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 1.2rem 0.8rem;
		border-bottom: 1px solid var(--border);
	}

	.card-title-row {
		display: flex;
		align-items: baseline;
		gap: 0.6rem;
	}

	.card-perms {
		font-size: 0.78rem;
	}

	.card-name {
		font-size: 1.3rem;
		font-weight: 700;
	}

	.card-links {
		display: flex;
		gap: 0.6rem;
	}

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

	.link-arrow {
		font-size: 0.9rem;
	}

	.card-body {
		padding: 1.2rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		flex: 1;
	}

	.card-desc {
		font-size: 0.92rem;
		line-height: 1.75;
		color: var(--fg);
	}

	.card-meta {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		padding-top: 0.5rem;
		border-top: 1px solid var(--border);
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
	}

	.tag {
		font-size: 0.72rem;
		color: var(--purple);
		border: 1px solid var(--border2);
		padding: 0 5px;
		border-radius: 2px;
	}

	/* CARD PREVIEW — CSS art */
	.card-footer {
		border-top: 1px solid var(--border);
		padding: 1rem 1.2rem;
		background: var(--bg);
	}

	.preview-art {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 80px;
	}

	/* DJ controller art */
	.dj-deck {
		display: flex;
		gap: 1.5rem;
		align-items: center;
	}

	.dj-platter {
		width: 60px;
		height: 60px;
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
		height: 16px;
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
		height: 28px;
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
		border: 1px solid var(--dim);
	}

	.knob:nth-child(3) { background: var(--blue); opacity: 0.7; }
	.knob:nth-child(4) { background: var(--green); opacity: 0.7; }

	.placeholder-text {
		font-size: 0.9rem;
		padding: 1rem 0;
	}

	/* STATUS BAR */
	.statusbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: var(--bg2);
		padding: 0 1.5rem;
		height: 26px;
		flex-shrink: 0;
		font-size: 0.78rem;
		border-top: 1px solid var(--border);
		user-select: none;
	}

	.sb-left, .sb-right {
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

	.sb-sep { color: var(--border2); }

	.sb-home {
		text-decoration: none;
		transition: color 0.1s;
	}

	.sb-home:hover { color: var(--cyan); }

	/* RESPONSIVE */
	@media (max-width: 700px) {
		.main {
			padding: 2rem 1.2rem;
		}

		.projects-grid {
			grid-template-columns: 1fr;
		}

		.card-perms {
			display: none;
		}
	}
</style>
