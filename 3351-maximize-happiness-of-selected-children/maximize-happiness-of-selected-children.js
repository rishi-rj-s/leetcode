/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
    // Sort the array in descending order using sort and a comparison function
    happiness.sort((a, b) => b - a);

    let selected = 0;
    let happinessScore = 0;

    // Iterate over the sorted happiness values
    for (let score of happiness) {
        if (selected === k) {
            break; // Stop if 'k' elements have been selected
        }
        // Calculate and add the adjusted happiness value if it's positive
        happinessScore += Math.max(0, score - selected);
        selected++;
    }

    return happinessScore;
};