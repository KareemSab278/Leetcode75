// Input: ["a","a","b","b","c","c","c"]
// Output: ["a","2","b","2","c","3"]


// this one was an utter fail but i got it right here in vscode. I'm not sure why it didn't work in LeetCode...

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let result = [];
    let group = [];
    let output = [];

    for (let i = 0; i < chars.length; i++) {
        if (i === 0 || chars[i] === chars[i - 1]) {
            group.push(chars[i]);
        } else {
            result.push(group);
            group = [chars[i]];
        }
    }
    result.push(group);

    for (let i = 0; i < result.length; i++) {
        output.push(result[i][0])
        output.push(result[i].length.toString())
    }
    for (o of output) {
        if (o === (1).toString()) {
            output.splice(1, 1)
        }
    }
    chars = output;
    return chars;
};

console.log(compress(["a", "a", "b", "b", "c", "c", "c"]))
console.log(compress(["a"]))
console.log(compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]))