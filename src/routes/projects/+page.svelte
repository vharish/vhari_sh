<svelte:head>
	<title>projects ~ vhari.sh</title>
	<meta name="description" content="Things I've built." />
</svelte:head>

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
						<div class="dj-platter"><div class="dj-label"></div><div class="dj-needle"></div></div>
						<div class="dj-mixer">
							<div class="fader"></div>
							<div class="fader"></div>
							<div class="knob"></div>
							<div class="knob"></div>
							<div class="knob"></div>
						</div>
						<div class="dj-platter"><div class="dj-label"></div><div class="dj-needle"></div></div>
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

<style>
	/* ── SECTIONS ───────────────────────── */
	.pane-section { display: flex; flex-direction: column; gap: 0.5rem; }

	.section-header {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 1.05rem;
		font-weight: 500;
		user-select: none;
	}

	.sub-line { font-size: 0.88rem; padding-left: 1.2rem; }

	/* ── PROJECT CARDS ──────────────────── */
	.projects-list { display: flex; flex-direction: column; gap: 1.5rem; }

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
	.card-title-row { display: flex; align-items: baseline; gap: 0.6rem; }
	.card-perms     { font-size: 0.78rem; }
	.card-name      { font-size: 1.2rem; font-weight: 700; }
	.card-links     { display: flex; gap: 0.6rem; }

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
	.card-link.primary             { color: var(--blue); border-color: var(--blue); }
	.card-link.primary:hover       { background: var(--blue); color: var(--bg); }
	.link-arrow { font-size: 0.9rem; }

	.card-body {
		padding: 1.2rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		flex: 1;
	}
	.card-desc { font-size: 0.9rem; line-height: 1.75; color: var(--fg); }

	.card-meta {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		padding-top: 0.5rem;
		border-top: 1px solid var(--border2);
	}
	.meta-row { display: flex; align-items: baseline; gap: 0.8rem; font-size: 0.85rem; }
	.meta-key { min-width: 9ch; flex-shrink: 0; font-size: 0.78rem; }
	.meta-val { display: flex; flex-wrap: wrap; gap: 0.3rem; align-items: center; color: var(--fg); }

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
	.placeholder-text { font-size: 0.9rem; padding: 0.8rem 0; }

	/* ── DJ ART ─────────────────────────── */
	.dj-deck { display: flex; gap: 1.5rem; align-items: center; }

	.dj-platter {
		width: 56px; height: 56px;
		border-radius: 50%;
		border: 2px solid var(--border2);
		background: radial-gradient(circle, var(--bg1) 30%, var(--bg) 31%, var(--border) 50%, var(--bg) 51%);
		position: relative;
		animation: spin 4s linear infinite;
		flex-shrink: 0;
	}
	.dj-label  { position: absolute; inset: 25%; border-radius: 50%; background: var(--blue); opacity: 0.6; }
	.dj-needle {
		position: absolute; top: -4px; right: 8px;
		width: 2px; height: 14px;
		background: var(--yellow);
		transform-origin: bottom center;
		transform: rotate(20deg);
	}

	@keyframes spin {
		from { transform: rotate(0deg); }
		to   { transform: rotate(360deg); }
	}

	.dj-mixer  { display: flex; flex-direction: column; align-items: center; gap: 6px; flex-shrink: 0; }

	.fader {
		width: 4px; height: 26px;
		background: var(--border2);
		border-radius: 2px;
		position: relative;
	}
	.fader::after {
		content: '';
		position: absolute;
		width: 12px; height: 5px;
		background: var(--fg);
		border-radius: 1px;
		left: -4px; top: 30%;
	}
	.fader:last-of-type::after { top: 55%; }

	.knob {
		width: 10px; height: 10px;
		border-radius: 50%;
		background: var(--border2);
		border: 1px solid var(--comment);
	}
	.knob:nth-child(3) { background: var(--blue);  opacity: 0.7; }
	.knob:nth-child(4) { background: var(--green); opacity: 0.7; }

	@media (max-width: 600px) {
		.card-perms { display: none; }
	}
</style>
