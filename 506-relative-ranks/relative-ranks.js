/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    //Create a new array which is exact copy the given array
    let arr = score.slice(0);
    //Sort the created array descending order
    arr.sort((a, b) => b-a);

    //Create a hashmap to store their score alongside the its place or award as a string value
    let hash = new Map();
    let n = arr.length;

    //Loop through the given array and save their place or award from the hashmap to a new result array declared with string
    for(let i=0; i<n; i++) {
        if(i==0) hash.set(arr[i], "Gold Medal");
        else if(i==1) hash.set(arr[i], "Silver Medal");
        else if(i==2) hash.set(arr[i], "Bronze Medal");
        else hash.set(arr[i], (i+1).toString());
    }
    for(let i=0; i<n; i++) {
        score[i] = hash.get(score[i]);
    }
    //Return the result
    return score;
};