/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    let i,k=0;
    k = parseInt(n*((n+1)/2))
    let t = 0,j;
    for(j=1;j<=n;j++){
        k -= j;
        if(k == t){
            return j;
        }else{
            t += j;
        }
    }
    return -1
};