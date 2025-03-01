/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"

var mergeAlternately = function (word1, word2) {
    let mergedString = '';
    let wordLength = 0;

    if (word1.length > word2.length) {
        wordLength += word1.length; // checking the length
    } else {
        wordLength += word2.length;
    }
    for (let i = 0; i < wordLength; i++) {
        mergedString += word1[i]
        mergedString += word2[i]
        if (word1[i] === undefined || word2[i] === undefined) {
            mergedString = mergedString.replace(undefined, '')
        }
    }
    return mergedString
};

console.log(mergeAlternately("a", "pqrs"))