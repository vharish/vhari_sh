export interface MusicItem {
	id: string;
	provider: 'bandcamp';
	url: string;
	tags: string[];
}

export const musicLibrary: MusicItem[] = [
	{
		id: '2614333897',
		provider: 'bandcamp',
		url: 'https://devilishmerry.bandcamp.com/album/the-ghost-of-his-former-self',
		tags: ['appalachian folk', 'folk', 'irish', 'folklore fusion', 'non-traditional', 'traditional', 'pittsburgh'],
	},
	{
		id: '1680418897',
		provider: 'bandcamp',
		url: 'https://mymorningjacket.bandcamp.com/album/peacelands',
		tags: ['rock', 'louisville'],
	},
	{
		id: '3171436298',
		provider: 'bandcamp',
		url: 'https://vyletpony.bandcamp.com/album/monarch-of-monsters',
		tags: ['electronic', 'pop', 'r&b', 'rock', 'no wave', 'noise rock', 'pony music', 'post grunge', 'post punk', 'progressive rock', 'symphonic', 'portland'],
	},
	{
		id: '1828228714',
		provider: 'bandcamp',
		url: 'https://anginedepoitrine.bandcamp.com/album/vol-ii',
		tags: ['rock', 'boss', 'dead drums', 'loops', 'mantra rock', 'math rock', 'microtonal', 'microtonal guitar', 'microtonal music', 'psychedelic rock', 'rc-500', 'rock experimental', 'saguenay'],
	},
	{
		id: '3618667075',
		provider: 'bandcamp',
		url: 'https://yinyin.bandcamp.com/album/yatta',
		tags: ['asian', 'funk', 'rock', 'disco', 'groove', 'japanese', 'morricone', 'mystical', 'south east asia', 'surf', 'maastricht'],
	},
	{
		id: '3569197254',
		provider: 'bandcamp',
		url: 'https://denzelcurrymusic.bandcamp.com/album/king-of-the-mischievous-south-vol-2',
		tags: ['hip hop', 'hip-hop/rap', 'rap', 'underground', 'miami'],
	},
	{
		id: '2592622849',
		provider: 'bandcamp',
		url: 'https://denzelcurrymusic.bandcamp.com/album/strictly-4-the-scythe',
		tags: ['hip-hop', 'rap', 'southern'],
	},
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
];
