export interface MusicItem {
	id: string;
	provider: 'bandcamp';
	url: string;
	tags: string[];
}

export const musicLibrary: MusicItem[] = [
	{
		id: '1168728865',
		provider: 'bandcamp',
		url: 'https://bluemoon.bandcamp.com/album/aurora-2',
		tags: ['ambient', 'drone', 'night'],
	},
	{
		id: '1959830283',
		provider: 'bandcamp',
		url: 'https://kabeaushe.bandcamp.com/album/kabeaush-presents-iggy-swaggering-ungrateful-incessant-little-peeeaaaaaaa',
		tags: ['electronic', 'experimental', 'weird'],
	},
];
