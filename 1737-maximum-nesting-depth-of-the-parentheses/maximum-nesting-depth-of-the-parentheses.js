/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let count = 0;
    let maxNum = 0;
    for (let c of s) {
        if (c === '(') {
            count++;
            if (maxNum < count)
                maxNum = count;
        } else if (c === ')') {
            count--;
        }
    }
    return maxNum;
};