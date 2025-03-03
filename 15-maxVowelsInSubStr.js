//Input: s = "abciiidef", k = 3
// Output: 3

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    let vowels = 'aeiou';
    let maxVowelCount = 0;
    let currentVowelCount = 0;

    for (let i = 0; i < k; i++) {
        if (vowels.includes(s[i])) {
            currentVowelCount++;
        }
    }

    //============ Sliding Window Logic ============//

    maxVowelCount = currentVowelCount;

    for (let i = k; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            currentVowelCount++;
        }
        if (vowels.includes(s[i - k])) {
            currentVowelCount--;
        }
        maxVowelCount = Math.max(maxVowelCount, currentVowelCount);
    }

    return maxVowelCount;
};

console.log(maxVowels("abciiidef", 3)) // i am expecting 3
console.log(maxVowels("leetcode", 3)) // i am expecting 2
console.log(maxVowels("aeiou", 2)) // i am expecting 2