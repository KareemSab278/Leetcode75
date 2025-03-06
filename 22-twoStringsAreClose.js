// i think i need to fist count how many letters there are in the words. if same then continue else return false
// then i need to sort the occurences of the letters.
// if theres a spare letter in one of the maps then we got a problem
// toherwise just push out the data.

// Input: word1 = "abc", word2 = "bca"
// Output: true

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    let arr1 = [...word1.split('').sort()];
    let arr2 = [...word2.split('').sort()];

    let hashmap1 = new Map()
    let hashmap2 = new Map()
    let count = 1;



    for (let i = 1; i < arr1.length + 1; i++) {
        if (arr1[i] === arr1[i - 1]) {
            count++
            hashmap1.set(arr1[i], count)
        } else {
            hashmap1.set(arr1[i - 1], count); // Store the count of the previous number
            count = 1; // Reset count for the next number
        }
    }
    for (let i = 1; i < arr2.length + 1; i++) {
        if (arr2[i] === arr2[i - 1]) {
            count++
            hashmap2.set(arr2[i], count)
        } else {
            hashmap2.set(arr2[i - 1], count); // Store the count of the previous number
            count = 1; // Reset count for the next number
        }
    }

    // return true
    //i now need to compare the hashmaps together
    // find if all values are equal or not.
    // if not then return false
    // if yes then return true
    let keys1 = [...hashmap1.keys()].sort();
    let keys2 = [...hashmap2.keys()].sort();

    if (hashmap2.size !== hashmap1.size || arr1.length !== arr2.length) {
        return false
    }
    for (let key of hashmap1.keys()) {
        if (!hashmap2.has(key)) return false;
    }

    let freq1 = [...hashmap1.values()].sort((a, b) => a - b);
    let freq2 = [...hashmap2.values()].sort((a, b) => a - b);

    if (freq1.length !== freq2.length) return false;

    for (let i = 0; i < freq1.length; i++) {
        if (freq1[i] !== freq2[i]) return false;
    }

    return true;
};

console.log(closeStrings("abc", "bca"))
console.log(closeStrings("abc", "123"))
console.log(closeStrings("a", "aa"))
console.log(closeStrings("aabbss", "cabbba")) // false