/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function(arr, k) {
    let l = 0, r = 1;
    while (true) {
        const m = (l + r) / 2;
        let count = 0, a = 0, b = 1;
        for (let i = 0, j = 1; i < arr.length - 1; i++) {
            while (j < arr.length && arr[i] / arr[j] > m) j++;
            count += arr.length - j;
            if (arr[i] / arr[j] > a / b) [a, b] = [arr[i], arr[j]];
        }
        if (count < k) l = m;
        else if (count > k) r = m;
        else return [a, b];
    }
};