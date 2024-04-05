/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    const stack = [];
    
    for (const char of s) {
        if (stack.length > 0 && Math.abs(char.charCodeAt() - stack[stack.length - 1].charCodeAt()) === 32) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    
    return stack.join('');
};