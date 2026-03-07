<script lang="ts">
	import { musicLibrary } from '$lib/music';

	const allTags = [...new Set(musicLibrary.flatMap(m => m.tags))].sort();
	let activeTag = $state<string | null>(null);
	const filteredMusic = $derived(
		activeTag ? musicLibrary.filter(m => m.tags.includes(activeTag!)) : musicLibrary
	);

	function playAlbum(id: string) {
		localStorage.setItem('vhari-now-playing', id);
		window.dispatchEvent(new CustomEvent('play-track', { detail: id }));
	}

	function galleryEmbed(id: string) {
		return `https://bandcamp.com/EmbeddedPlayer/album=${id}/size=large/bgcol=16213e/linkcol=7dcfff/minimal=true/transparent=true/`;
	}

</script>

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

<section class="pane-section">
	<div class="filter-bar">
		<button
			class="filter-btn"
			class:active={activeTag === null}
			onclick={() => activeTag = null}
		>all</button>
		{#each allTags as tag}
			<button
				class="filter-btn"
				class:active={activeTag === tag}
				onclick={() => activeTag = tag}
			>{tag}</button>
		{/each}
	</div>
</section>

<section class="pane-section">
	<div class="album-grid">
		{#each filteredMusic as item (item.id)}
			<button class="album-card" onclick={() => playAlbum(item.id)}>
				<div class="album-cover">
					<iframe
						src={galleryEmbed(item.id)}
						title={item.id}
						loading="lazy"
						seamless
					></iframe>
					<div class="click-shield"></div>
				</div>
				<div class="album-tags">
					{#each item.tags as tag}
						<span class="tag">{tag}</span>
					{/each}
				</div>
			</button>
		{/each}
	</div>
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

	.filter-bar {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
		padding: 0.5rem 0;
	}

	.filter-btn {
		background: transparent;
		border: 1px solid var(--border2);
		color: var(--comment);
		padding: 4px 12px;
		font-family: inherit;
		font-size: 0.8rem;
		border-radius: 3px;
		cursor: pointer;
		transition: all 0.1s;
	}
	.filter-btn:hover {
		border-color: var(--blue);
		color: var(--blue);
	}
	.filter-btn.active {
		background: var(--blue);
		border-color: var(--blue);
		color: var(--bg);
	}

	.album-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
		gap: 1.5rem;
	}

	.album-card {
		background: rgba(12, 14, 28, 0.85);
		border: 1px solid var(--border2);
		border-radius: 4px;
		padding: 0.6rem;
		cursor: pointer;
		transition: all 0.15s;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.album-card:hover {
		border-color: var(--blue);
		box-shadow: 0 0 18px rgba(122, 162, 247, 0.1);
	}

	.album-cover {
		position: relative;
		width: 100%;
		aspect-ratio: 1;
		border-radius: 2px;
		overflow: hidden;
		background: var(--bg1);
	}
	.album-cover iframe {
		width: 100%;
		height: 100%;
		border: none;
	}
	.click-shield {
		position: absolute;
		inset: 0;
		z-index: 1;
		cursor: pointer;
	}

	.album-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.25rem;
	}

	.tag {
		font-size: 0.65rem;
		color: var(--comment);
		background: rgba(255, 255, 255, 0.05);
		padding: 2px 6px;
		border-radius: 2px;
	}
</style>
