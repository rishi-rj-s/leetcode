/**
 * @param {string[]} strs
 * @return {string}
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) {
        return "";
    }

    let prefix = strs[0];

    for (let word of strs) {
        while (word.indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
            if (prefix === '') return ''
        }
    }
    return prefix;
};