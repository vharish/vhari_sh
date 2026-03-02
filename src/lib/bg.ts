/**
 * Time-of-day background image resolver.
 *
 * ============================================================
 * ✏️  SCENE MODE — change this one line to switch visual style
 * ============================================================
 *
 *   'depth-layers'    — full-bleed image, three zones of darkness,
 *                       semi-transparent CRT so image bleeds through
 *
 *   'radial-spotlight' — dark vignette over image, lighter halo
 *                        behind the CRT, very transparent terminal
 *
 * ============================================================
 */
export const SCENE_MODE: SceneMode = 'depth-layers';

export type SceneMode = 'depth-layers' | 'radial-spotlight';

// ============================================================
// Image resolution
// ============================================================
//
// Drop images in static/bg/ — picked up automatically.
// Format priority: webp → jpg → jpeg → png
//
//   static/bg/bg-{slot}.{ext}           full-bleed, centered
//   static/bg/bg-{slot}-vertical.{ext}  left-aligned (used in vertical layout modes)
//
// Slots: night (0-5) · dawn (6-8) · morning (9-11)
//        day (12-16) · dusk (17-19) · evening (20-23)
//
// Falls back through other slots, then empty (plain dark scene bg).

export type BgImgMode = 'vertical' | 'regular';

export interface BgResult {
	url: string;
	imgMode: BgImgMode;
	sceneMode: SceneMode;
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

export async function resolveBg(): Promise<BgResult> {
	const ideal = currentSlot();

	const idealVertical = await resolveSlot(ideal, true);
	if (idealVertical) return { url: idealVertical, imgMode: 'vertical', sceneMode: SCENE_MODE };

	const idealRegular = await resolveSlot(ideal, false);
	if (idealRegular) return { url: idealRegular, imgMode: 'regular', sceneMode: SCENE_MODE };

	for (const slot of FALLBACK_ORDER) {
		if (slot === ideal) continue;
		const vertUrl = await resolveSlot(slot, true);
		if (vertUrl) return { url: vertUrl, imgMode: 'vertical', sceneMode: SCENE_MODE };
		const regUrl = await resolveSlot(slot, false);
		if (regUrl) return { url: regUrl, imgMode: 'regular', sceneMode: SCENE_MODE };
	}

	return { url: '', imgMode: 'regular', sceneMode: SCENE_MODE };
}
