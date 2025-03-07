// iterate through the string and find the innermost bracket,
// then decode the string inside the bracket and replace the bracket with the decoded string

// iterate through the arrat and find the first closing brakcet. then work backwards to find the opening bracket.
// decode the string between the brackets and replace the brackets with the decoded string.

// Input: s = "3[a2[c]]"
// Output: "accaccacc"

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ']') {
            let temp = '';
            while (stack[stack.length - 1] !== '[') {
                temp = stack.pop() + temp;
            }
            stack.pop();
            let num = '';
            while (stack.length && !isNaN(stack[stack.length - 1])) {
                num = stack.pop() + num;
            }
            stack.push(temp.repeat(num));
        } else {
            stack.push(s[i]);
        }
    }
    return stack.join('');
}



console.log(decodeString("3[a2[c]]")); // accaccacc
console.log(decodeString("3[a]2[bc]")); // aaabcbc