/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let a  = 0;
    for(let i=0; i<nums.length; i++) {
        a ^= nums[i];
    }
    a = a.toString(2);
    k = k.toString(2);

    if(a.length < k.length) {
        a = '0'.repeat(k.length - a.length) + a;
    } else if (a.length > k.length) {
        k = '0'.repeat(a.length - k.length) + k;
    }

    let res = 0;
    for(let i=0; i<a.length; i++) {
        if(a[i] != k[i]) res++;
    }
    return res;
};