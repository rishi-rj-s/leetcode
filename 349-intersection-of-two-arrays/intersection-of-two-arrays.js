/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let s1 = new Set(nums1);
    let s2 = new Set(nums2);
    return Array.from(new Set([...s1].filter(x => s2.has(x))));
};