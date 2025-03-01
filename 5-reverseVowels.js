// Input: s = "IceCreAm"
// Output: "AceCreIm"

// all testcases passed

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let vowels = []
    let word = []
    const sLength = s.length
    for (let i = 0; i < sLength; i++) {
        if (/^[aeiouAEIOU]$/.test(s[i]) === false) {
            word.push(s[i])
        } else { word.push('|') }

        if (/^[aeiouAEIOU]$/.test(s[i]) === true) {
            vowels.push(s[i])
        }
    }
    vowels.reverse()
            
    for (let i = 0; i < word.length; i++) {
            if (word[i] === '|') {
                word[i] = vowels.shift()        // i was stuck here for a fucking hour because i was using word[i] = vowels[j] *cries*
            }
    }
    return word.join('')
};

console.log(reverseVowels('IceCreAm'))
console.log(reverseVowels("leetcode"))