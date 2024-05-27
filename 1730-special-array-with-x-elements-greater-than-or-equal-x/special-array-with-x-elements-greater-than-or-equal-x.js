/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
  nums.sort((a, b) => a - b);

        let start = 0;
        let end = nums.length;

        while (start <= end) {
            let mid = start + Math.floor((end - start) / 2);
            let ans = count(nums, mid);

            if (ans === mid) return mid;
            else if (ans > mid) start = mid + 1;
            else end = mid - 1;
        }

        return -1;
};

function count(nums, target) {
    let ans = 0;
    for (let num of nums) {
        if (num >= target) ans++;
    }
    return ans;
}
