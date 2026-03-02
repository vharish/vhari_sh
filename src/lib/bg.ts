/**
 * Time-of-day background image resolver.
 *
 * Images live in static/bg/ — add any of these files and they'll be picked up automatically:
 *
 *   static/bg/bg-night.{webp,jpg,png}       00:00 – 05:59  deep night
 *   static/bg/bg-dawn.{webp,jpg,png}        06:00 – 08:59  dawn
 *   static/bg/bg-morning.{webp,jpg,png}     09:00 – 11:59  morning
 *   static/bg/bg-day.{webp,jpg,png}         12:00 – 16:59  day
 *   static/bg/bg-dusk.{webp,jpg,png}        17:00 – 19:59  dusk
 *   static/bg/bg-evening.{webp,jpg,png}     20:00 – 23:59  evening / night
 *
 * Format priority: webp → jpg → png (first one found wins)
 *
 * If the image for the current slot is missing, falls back through the list
 * until it finds one that loads, then falls back to FALLBACK_URL.
 */

export const FALLBACK_URL = '/bg-nebula.jpg';

type Slot = 'night' | 'dawn' | 'morning' | 'day' | 'dusk' | 'evening';

const SCHEDULE: { from: number; to: number; slot: Slot }[] = [
	{ from:  0, to:  5, slot: 'night'   },
	{ from:  6, to:  8, slot: 'dawn'    },
	{ from:  9, to: 11, slot: 'morning' },
	{ from: 12, to: 16, slot: 'day'     },
	{ from: 17, to: 19, slot: 'dusk'    },
	{ from: 20, to: 23, slot: 'evening' },
];

// Slot order to try as fallbacks (roughly "closest aesthetically")
const FALLBACK_ORDER: Slot[] = ['evening', 'night', 'dusk', 'dawn', 'morning', 'day'];

function currentSlot(): Slot {
	const h = new Date().getHours();
	return SCHEDULE.find(({ from, to }) => h >= from && h <= to)!.slot;
}

const FORMATS = ['webp', 'jpg', 'png'] as const;

function slotUrls(slot: Slot): string[] {
	return FORMATS.map(ext => `/bg/bg-${slot}.${ext}`);
}

/** Returns true if the image at `url` loads successfully. */
function canLoad(url: string): Promise<boolean> {
	return new Promise((resolve) => {
		const img = new Image();
		img.onload  = () => resolve(true);
		img.onerror = () => resolve(false);
		img.src = url;
	});
}

/** Tries each format URL in priority order, returns first that loads or null. */
async function resolveSlot(slot: Slot): Promise<string | null> {
	for (const url of slotUrls(slot)) {
		if (await canLoad(url)) return url;
	}
	return null;
}

/**
 * Resolves the best available background URL for the current time.
 * Tries the ideal slot first (webp → jpg → png), then other slots, then the hard fallback.
 */
export async function resolveBg(): Promise<string> {
	const ideal = currentSlot();

	const idealUrl = await resolveSlot(ideal);
	if (idealUrl) return idealUrl;

	// Try remaining slots in fallback order (skip ideal, already tried)
	for (const slot of FALLBACK_ORDER) {
		if (slot === ideal) continue;
		const url = await resolveSlot(slot);
		if (url) return url;
	}

	// Hard fallback
	return FALLBACK_URL;
}
