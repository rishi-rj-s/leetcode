/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function(amount) {
    let sum = amount[0]+amount[1]+amount[2];
    return Math.max.apply(Math, [...amount, Math.floor((sum + 1) / 2)]);
};