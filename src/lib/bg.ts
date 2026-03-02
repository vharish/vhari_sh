/**
 * Time-of-day background image resolver.
 *
 * Images live in static/bg/ — add any of these files and they'll be picked up automatically:
 *
 *   static/bg/night.jpg       00:00 – 05:59  deep night
 *   static/bg/dawn.jpg        06:00 – 08:59  dawn
 *   static/bg/morning.jpg     09:00 – 11:59  morning
 *   static/bg/day.jpg         12:00 – 16:59  day
 *   static/bg/dusk.jpg        17:00 – 19:59  dusk
 *   static/bg/evening.jpg     20:00 – 23:59  evening / night
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

function slotUrl(slot: Slot): string {
	return `/bg/${slot}.jpg`;
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

/**
 * Resolves the best available background URL for the current time.
 * Tries the ideal slot first, then other slots, then the hard fallback.
 */
export async function resolveBg(): Promise<string> {
	const ideal = currentSlot();

	// Try ideal slot first
	if (await canLoad(slotUrl(ideal))) return slotUrl(ideal);

	// Try remaining slots in fallback order (skip ideal, already tried)
	for (const slot of FALLBACK_ORDER) {
		if (slot === ideal) continue;
		if (await canLoad(slotUrl(slot))) return slotUrl(slot);
	}

	// Hard fallback
	return FALLBACK_URL;
}
