// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

var gcdOfStrings = function (str1, str2) {
    // we know that string 1 is always gonna be longer than string 2

    let arr = [];
    //compare str1 and str2 in iteration.

    for (let i = 0; i < str1.length; i++) {
        if (str2[i] === str1[i]) {
            arr.push(str2[i]); //add similar letter from each iteration to arr
        } 
        output = arr.join('')  
    }
    if(arr.length === 0){
        return ''
    }
    
    if (output[1] === output[3] || output[0] === output[2]) {return output[0] + output[3]}
    
    else{ 
    return output}
    //if iteration is undefined (exceeds length) or is not equal then return the arr.joined
};

console.log(gcdOfStrings('acac', 'ac'))
