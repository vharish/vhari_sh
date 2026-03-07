/**
 * Time-of-day background image resolver.
 */
export const SCENE_MODE: SceneMode = 'depth-layers';

export type SceneMode = 'depth-layers' | 'radial-spotlight';

// ============================================================
// Automatic BG Discovery
// ============================================================
//
// Drop any image into src/lib/assets/bg/{slot}/
// Vite will automatically find it and include it in the pool.

type Slot = 'night' | 'dawn' | 'morning' | 'day' | 'dusk' | 'evening';

// Vite glob to find all images in the bg directory
const RAW_IMAGES = import.meta.glob('$lib/assets/bg/**/*.{jpg,jpeg,png,webp,avif}', {
	eager: true,
	query: '?url',
	import: 'default'
}) as Record<string, string>;

// Group the resolved URLs by slot
const SLOT_POOLS: Record<Slot, string[]> = {
	night:   [],
	dawn:    [],
	morning: [],
	day:     [],
	dusk:    [],
	evening: [],
};

// Parse the paths and fill the pools
// e.g. /src/lib/assets/bg/night/1.jpg -> slot: 'night', url: '/_app/immutable/assets/1.abc.jpg'
for (const [path, url] of Object.entries(RAW_IMAGES)) {
	const parts = path.split('/');
	// path is like "/src/lib/assets/bg/night/1.jpg"
	// so parts[parts.length - 2] should be "night"
	const slotName = parts[parts.length - 2] as Slot;
	if (SLOT_POOLS[slotName]) {
		SLOT_POOLS[slotName].push(url);
	}
}

console.log('[BG] Pools initialized:', SLOT_POOLS);

const FALLBACK_ORDER: Slot[] = ['evening', 'night', 'dusk', 'dawn', 'morning', 'day'];

export interface BgResult {
	url: string;
	slot: Slot;
	sceneMode: SceneMode;
}

const SCHEDULE: { from: number; to: number; slot: Slot }[] = [
	{ from:  0, to:  5, slot: 'night'   },
	{ from:  6, to:  8, slot: 'dawn'    },
	{ from:  9, to: 11, slot: 'morning' },
	{ from: 12, to: 16, slot: 'day'     },
	{ from: 17, to: 19, slot: 'dusk'    },
	{ from: 20, to: 23, slot: 'evening' },
];

function currentSlot(): Slot {
	const h = new Date().getHours();
	return SCHEDULE.find(({ from, to }) => h >= from && h <= to)!.slot;
}

function getRandomImage(slot: Slot): string | null {
	const pool = SLOT_POOLS[slot];
	if (!pool || pool.length === 0) return null;
	return pool[Math.floor(Math.random() * pool.length)];
}

const SESSION_KEY = 'vhari-bg-v4';

/** Read cached result from sessionStorage (same-session navigations). */
export function getCachedBg(): BgResult | null {
	try {
		const raw = sessionStorage.getItem(SESSION_KEY);
		if (!raw) return null;
		const cached = JSON.parse(raw) as BgResult;
		// If the hour has changed such that we are in a new slot, 
		// invalidate the cache to force a re-resolution.
		if (cached.slot !== currentSlot()) return null;
		return cached;
	} catch {
		return null;
	}
}

function cacheBg(result: BgResult) {
	try {
		sessionStorage.setItem(SESSION_KEY, JSON.stringify(result));
	} catch { /* ignore */ }
}

export async function resolveBg(force = false): Promise<BgResult> {
	const h = new Date().getHours();
	const ideal = currentSlot();
	
	console.log(`[BG] Resolving. Hour: ${h}, Ideal Slot: ${ideal}`);

	// Return cached value instantly if available (avoids re-probe on navigation)
	const cached = force ? null : getCachedBg();
	if (cached) {
		console.log(`[BG] Using cached result: ${cached.url}`);
		return cached;
	}

	const idealUrl = getRandomImage(ideal);
	if (idealUrl) { 
		console.log(`[BG] Found ideal match in "${ideal}": ${idealUrl}`);
		const r = { url: idealUrl, slot: ideal, sceneMode: SCENE_MODE }; 
		cacheBg(r); 
		return r; 
	}

	console.log(`[BG] No images in "${ideal}". Trying fallbacks...`);

	// Fallback to other slots if the current one is empty
	for (const slot of FALLBACK_ORDER) {
		if (slot === ideal) continue;
		const url = getRandomImage(slot);
		if (url) { 
			console.log(`[BG] Fallback found in "${slot}": ${url}`);
			const r = { url, slot: ideal, sceneMode: SCENE_MODE }; 
			cacheBg(r); 
			return r; 
		}
	}

	console.log(`[BG] No images found anywhere.`);
	const fallback = { url: '', slot: ideal, sceneMode: SCENE_MODE };
	cacheBg(fallback);
	return fallback;
}





