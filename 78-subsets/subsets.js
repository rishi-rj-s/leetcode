/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [];
    function helper(arr, i){
        if(i >= nums.length){
            res.push(arr);
            return;
        }
        helper(arr, i + 1);
        helper([...arr, nums[i]], i + 1);
    }
    helper([], 0);
    return res;
};