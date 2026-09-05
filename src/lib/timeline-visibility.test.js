import test from "node:test";
import assert from "node:assert/strict";

import { isTimelineEntryVisible } from "./timeline-visibility.js";

test("future timeline entries stay locked until their start date", () => {
    const now = new Date("2026-09-05T12:00:00+08:00").getTime();
    const futureEntry = { startDate: "2026-09-10T15:25:00+08:00" };

    assert.equal(isTimelineEntryVisible(futureEntry, 1, now), false);
    assert.equal(isTimelineEntryVisible(futureEntry, 0, now), true);
});

test("entries without a start date remain visible", () => {
    const now = new Date("2026-09-05T12:00:00+08:00").getTime();
    const openEntry = { startDate: undefined };

    assert.equal(isTimelineEntryVisible(openEntry, 1, now), true);
});
