

// ill have to call it a day on this. been busy and am very new to hashmaps and hashsets. only did 2 today which is kinda upsetting lol.

// for this one i think ill use another hash map
// Input: arr = [1,2,2,1,1,3]
// Output: true

// /**
//  * @param {number[]} arr
//  * @return {boolean}
//  */
// var uniqueOccurrences = function(arr) {
//     let set1 = new Set(arr); // i add everything in the set which should filter any duplicates
//     return set1.size > 0
// };

// console.log(uniqueOccurrences([1,2,2,1,1,3]))
// console.log(uniqueOccurrences([1,2]))


// this whole time i misnderstood the question omg
// i was checking if there were duplicates when i was supposed to check if the number of occurrences of each number was unique

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    let map1 = new Map();

    for (let i = 0; i<arr.length; i++){
    }

    return map1
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]))
console.log(uniqueOccurrences([1, 2]))
