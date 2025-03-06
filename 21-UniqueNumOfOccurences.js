// THIS TOOK ME FOREVER TO LEARN - IM NEW TO HASHMAPS XD

// ill have to call it a day on this. been busy and am very new to hashmaps and hashsets. only did 2 today which is kinda upsetting lol.

// for this one i think ill use another hash map
// Input: arr = [1,2,2,1,1,3]
// Output: true

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    arr.sort((a, b) => (a - b)) // i sorted the array
    let hashmap = new Map()
    let count = 1;

    // kareem, here is how to add k:v pairs you dumass:
    // hashmap.set('key', 1)
    // hashmap.set('key', 1)

    // kareem, here is how you iterate:
    // for (let [key, value] of hashMap) {
    //     console.log(key, value);
    // }

    // i need to go over an array. count how many occurences there are in the array per item!
    for (let i = 1; i < arr.length + 1; i++) {
        if (arr[i] === arr[i - 1]) {
            count++
            hashmap.set(arr[i], count)
        } else {
            hashmap.set(arr[i - 1], count); // Store the count of the previous number
            count = 1; // Reset count for the next number
        }
    }

    let iteration = []
    iteration.push(...hashmap.values());
    iteration.sort((a, b) => (a - b))

    for (let i = 0; i < iteration.length; i++) {
        if (iteration[i] === iteration[i + 1]) {
            return false
        }
    }
    return true
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3])) // true
console.log(uniqueOccurrences([1, 2])) //false
console.log(uniqueOccurrences([26, 2, 16, 16, 5, 5, 26, 2, 5, 20, 20, 5, 2, 20, 2, 2, 20, 2, 16, 20, 16, 17, 16, 2, 16, 20, 26, 16])) // false