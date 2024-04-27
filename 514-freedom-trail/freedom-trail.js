/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function(ring, key) {
    let left = i => i === 0 ? ring.length - 1 : i - 1;
    let right = i => i === ring.length - 1 ? 0 : i + 1;
    let dp = ring.split("").map(() => 0);

    for (let i = key.length - 1; i >= 0; i--) {
        let dp1 = ring.split("").map((x, j) => (x === key[i]) ? dp[j] : Infinity);
        for (let j = 0; j < ring.length * 2; j++) {
            let x = j % ring.length;
            dp1[x] = Math.min(dp1[x], dp1[left(x)] + 1);
            let y = ((ring.length * 2) - 1 - j) % ring.length;
            dp1[y] = Math.min(dp1[y], dp1[right(y)] + 1);
        }
        dp = dp1;
    }
    return dp[0] + key.length;
};