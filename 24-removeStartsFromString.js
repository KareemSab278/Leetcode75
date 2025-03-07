// i need to remove all the stars from the string
// from what i see, this could be a recursion problem but im not sure...

// Input: s = "leet**cod*e"
// Output: "lecoe"
// Explanation: Performing the removals from left to right:
// - The closest character to the 1st star is 't' in "leet**cod*e". s becomes "lee*cod*e".
// - The closest character to the 2nd star is 'e' in "lee*cod*e". s becomes "lecod*e".
// - The closest character to the 3rd star is 'd' in "lecod*e". s becomes "lecoe".
// There are no more stars, so we return "lecoe".

// from what i see the first star and lemenet behind it is removed, then the next star and element behind it is removed and so on
// i think i can use a stack to solve this problem

// or i could simply add the elements to a new string and skip the stars...
// HMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM

// why was this considered a medium problem? this was easy???

/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '*') {
            stack.pop();
            continue;
        }
        stack.push(s[i]);
    }
    return stack.join('');
};

console.log(removeStars("leet**cod*e")); // lecoe
console.log(removeStars("a*")); // ""