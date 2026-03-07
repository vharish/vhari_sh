<svelte:head>
	<title>music ~ vhari.sh</title>
	<meta name="description" content="Music collection." />
</svelte:head>

<section class="pane-section">
	<h1 class="section-header">
		<span class="c-green">❯</span>
		<span class="c-blue">ls</span>
		<span class="c-fg">~/music/</span>
	</h1>
	<p class="c-comment sub-line"># things i listen to</p>
</section>

<style>
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
</style>
