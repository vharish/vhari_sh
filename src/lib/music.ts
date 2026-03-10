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
		url: 'https://shamanismrecords.bandcamp.com/album/psyber-roots',
		tags: ['psy', 'hitech'],
	},
	{
		id: '1959830283',
		provider: 'bandcamp',
		url: 'https://kabeaushe.bandcamp.com/album/kabeaush-presents-iggy-swaggering-ungrateful-incessant-little-peeeaaaaaaa',
		tags: ['electronic', 'experimental', 'weird'],
	},
	{
		id: '1385880338',
		provider: 'bandcamp',
		url: 'https://newagedoom.bandcamp.com/album/angels-against-angels',
		tags: ['drone', 'experimental', 'dark ambient'],
	},
	{
		id: '2592622849',
		provider: 'bandcamp',
		url: 'https://denzelcurrymusic.bandcamp.com/album/strictly-4-the-scythe',
		tags: ['hip-hop', 'rap', 'southern'],
	},
];
