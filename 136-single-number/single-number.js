/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result;
    nums.forEach(num => {
        let count = 0;
        nums.forEach(innerNum => {
            if (num === innerNum) {
                count++;
            }
        });
        if (count === 1) {
            result = num;
        }
    });
    return result;
};
