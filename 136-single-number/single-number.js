/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let f = 0;
    for(let i=0;i<nums.length;i++){
        f=0;
        for(j=0;j<nums.length;j++){
            if(nums[i]===nums[j]){
                f+=1;
            }
        }
        if(f==1){
            return nums[i]
        }
    }
};
