/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let m = [];
    let i = 0;

    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        m.push(intervals[i]);
        i++;
    }

    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval = [Math.min(newInterval[0], intervals[i][0]), Math.max(newInterval[1], intervals[i][1])];
        i++;
    }
    m.push(newInterval);

    while (i < intervals.length) {
        m.push(intervals[i]);
        i++;
    }

    return m;
};