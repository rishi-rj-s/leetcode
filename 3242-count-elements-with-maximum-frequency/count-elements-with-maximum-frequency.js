/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let map = new Map();
    for(let num of nums){
        map.set(num, (map.get(num) || 0) + 1);
    }
    let max = 0;
    for(let frequency of map.values()){
        max = Math.max(max, frequency);
    }
    let res = 0;
        for(let frequency of map.values()){
         if(frequency === max){
             res += frequency;
         }
        }
    return res;
};