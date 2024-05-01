/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let i=0
    let j= word.indexOf(ch)

    if(j === -1) return word;

    while(i<=j) {
        if(word[i]!==word[j]) {
            word = word.slice(0,i) + word[j] + word.slice(i+1,j) + word[i] + word.slice(j+1)
        }
        i++
        j--
    }

    return word
};