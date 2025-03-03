// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6

// do a sliding window and replace any zero with a one in the window depending on how many k zeros are int he window
// return the total ones in the window to an array.
// return Math.max(array)

// i know how to do it but have no clue how to code it. im tired.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
   
};

console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3)); // 10
console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2)); // 6