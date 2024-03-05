/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    let prefix = 0;
    let suffix = s.length - 1;

    while (prefix < suffix && s[prefix] === s[suffix]) {
        let char = s[prefix];
        while (prefix <= suffix && s[prefix] === char) {
            prefix++;
        }
        while (suffix >= prefix && s[suffix] === char) {
            suffix--;
        }
    }

    return suffix - prefix + 1;
};