export const getTimelineTime = (date) => {
    if (!date) return Number.NaN;
    const time = new Date(date).getTime();
    return Number.isNaN(time) ? Number.NaN : time;
};

export const isTimelineEntryVisible = (item, index, now = Date.now()) => {
    const startTime = getTimelineTime(item.startDate);
    return index === 0 || Number.isNaN(startTime) || startTime <= now;
};
