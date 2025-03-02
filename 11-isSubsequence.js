// Input: s = "abc", t = "ahbgdc"
// Output: true

// position is the position of the character in the string
// if the i is the charachter im looking for then return true and change position of charachter
// else false?

// passed all test cases but i think it took longer because i split the string arguments lol

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let arrT = t.split('');
    let arrS = s.split('');
    let position = 0;

    for (let i = 0; i < arrT.length; i++) {
        if (arrS[position] === arrT[i]) {
            position++;
        }
        if (position === arrS.length) {
            return true;
        }
    }

    return position === arrS.length;
};

console.log(isSubsequence("axc", "ahbgdc")); // false
console.log(isSubsequence("abc", "ahbgdc")); // true
