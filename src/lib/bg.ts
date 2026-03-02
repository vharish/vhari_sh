/**
 * Time-of-day background image resolver.
 *
 * Drop images in static/bg/ — they're picked up automatically.
 * Format priority: webp → jpg → jpeg → png (first found wins)
 *
 * Regular (full-bleed, centered):
 *   static/bg/bg-night.{webp,jpg,jpeg,png}
 *   static/bg/bg-dawn.{webp,jpg,jpeg,png}
 *   static/bg/bg-morning.{webp,jpg,jpeg,png}
 *   static/bg/bg-day.{webp,jpg,jpeg,png}
 *   static/bg/bg-dusk.{webp,jpg,jpeg,png}
 *   static/bg/bg-evening.{webp,jpg,jpeg,png}
 *
 * Vertical (left-aligned, gradient fade to right):
 *   static/bg/bg-night-vertical.{webp,jpg,jpeg,png}
 *   static/bg/bg-dawn-vertical.{webp,jpg,jpeg,png}
 *   ... same pattern for all slots
 *
 * If a vertical image exists for the slot, it takes priority over the regular one.
 * Falls back through other slots, then /bg-nebula.jpg.
 */

export const FALLBACK_URL = '/bg-nebula.jpg';

export type BgMode = 'vertical' | 'regular';

export interface BgResult {
	url: string;
	mode: BgMode;
}

type Slot = 'night' | 'dawn' | 'morning' | 'day' | 'dusk' | 'evening';

const SCHEDULE: { from: number; to: number; slot: Slot }[] = [
	{ from:  0, to:  5, slot: 'night'   },
	{ from:  6, to:  8, slot: 'dawn'    },
	{ from:  9, to: 11, slot: 'morning' },
	{ from: 12, to: 16, slot: 'day'     },
	{ from: 17, to: 19, slot: 'dusk'    },
	{ from: 20, to: 23, slot: 'evening' },
];

const FALLBACK_ORDER: Slot[] = ['evening', 'night', 'dusk', 'dawn', 'morning', 'day'];

const FORMATS = ['webp', 'jpg', 'jpeg', 'png'] as const;

function currentSlot(): Slot {
	const h = new Date().getHours();
	return SCHEDULE.find(({ from, to }) => h >= from && h <= to)!.slot;
}

function slotUrls(slot: Slot, vertical = false): string[] {
	const suffix = vertical ? '-vertical' : '';
	return FORMATS.map(ext => `/bg/bg-${slot}${suffix}.${ext}`);
}

function canLoad(url: string): Promise<boolean> {
	return new Promise((resolve) => {
		const img = new Image();
		img.onload  = () => resolve(true);
		img.onerror = () => resolve(false);
		img.src = url;
	});
}

async function resolveSlot(slot: Slot, vertical = false): Promise<string | null> {
	const results = await Promise.all(
		slotUrls(slot, vertical).map(url => canLoad(url).then(ok => ok ? url : null))
	);
	return results.find(r => r !== null) ?? null;
}

/**
 * Resolves the best background for the current time.
 * Prefers vertical image → regular image, for the ideal slot first, then fallbacks.
 */
export async function resolveBg(): Promise<BgResult> {
	const ideal = currentSlot();

	// Try ideal slot: vertical first, then regular
	const idealVertical = await resolveSlot(ideal, true);
	if (idealVertical) return { url: idealVertical, mode: 'vertical' };

	const idealRegular = await resolveSlot(ideal, false);
	if (idealRegular) return { url: idealRegular, mode: 'regular' };

	// Try fallback slots
	for (const slot of FALLBACK_ORDER) {
		if (slot === ideal) continue;

		const vertUrl = await resolveSlot(slot, true);
		if (vertUrl) return { url: vertUrl, mode: 'vertical' };

		const regUrl = await resolveSlot(slot, false);
		if (regUrl) return { url: regUrl, mode: 'regular' };
	}

	return { url: FALLBACK_URL, mode: 'regular' };
}
