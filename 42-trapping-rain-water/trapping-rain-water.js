/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let maxl=0
    let maxlarr=[]
    for(let i=0;i<height.length;i++){
        maxlarr.push(maxl)
        if(height[i]>maxl){
            maxl=height[i]
        }
    }
    let maxr=0
    let maxrarr=[]
    for(let i=height.length-1;i>-1;i--){
        maxrarr.push(maxr)
        if(height[i]>maxr){
            maxr=height[i]
        }
    }
    maxrarr=maxrarr.reverse()
    let water=0
    for(let i=1;i<height.length-1;i++){
        let onpointwater=Math.min(maxlarr[i],maxrarr[i])-height[i]
        if(onpointwater>0){
            water+=onpointwater
        }
    }
    return water
};