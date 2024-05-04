/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    let ans = 0, l = 0, r = people.length -1;
    people.sort((a,b)=> a-b);
    while( l<=r ){
        if( people[l]+people[r] <= limit){
            ans++;
            l++;
        }else if( people[r] <= limit || (l == r && people[l] <= limit) ){
            ans++;
        }
        r--;
    }
    return ans ;
};