/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
    if (points.length === 1) return 1;
    points.sort((a, b) => a[0] - b[0]);
    let prev = points[0];
    let count = 1;
    for (let i = 1; i < points.length; i++) {
        if (points[i][0] > prev[1]) {
            prev = points[i];
            count++;
        } else prev[1] = Math.min(prev[1], points[i][1]);
    }
    return count;
};