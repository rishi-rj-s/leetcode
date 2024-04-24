/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
     if (n < 3) {
        return n === 0 ? 0 : 1;
    }

    let [a, b, c] = [0, 1, 1];

    for (i = 2; i < n; i++) {
        [a, b, c] = [b, c, a + b + c];
    }

    return c;
};