/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  points.sort(([a], [b]) => a - b)
  
  let count = 1
  let [min, max] = points[0]
  let i = 1

  while (i < points.length) {
    const [currentMin, currentMax] = points[i]
    i++

    if (currentMin > max) {
      min = currentMin
      max = currentMax
      count++
      continue
    }

    min = Math.max(min, currentMin)
    max = Math.min(max, currentMax)
  }

  return count
};
