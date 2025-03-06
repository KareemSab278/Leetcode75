// okay so this question was super confusing until i read the hints:
// Hint 1
// Create an array sumLeft where sumLeft[i] is the sum of all the numbers to the left of index i.
// Hint 2
// Create an array sumRight where sumRight[i] is the sum of all the numbers to the right of index i.
// Hint 3
// For each index i, check if sumLeft[i] equals sumRight[i]. If so, return i. If no such i is found, return -1.

/**
 * @param {number[]} nums
 * @return {number}
 */

var pivotIndex = function(nums) {
    let totalSum = nums.reduce((acc, num) => acc + num, 0);
    let leftSum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (leftSum === totalSum - leftSum - nums[i]) {
            return i;
        }
        leftSum += nums[i];
    }
    return -1;
};

console.log(pivotIndex([1,7,3,6,5,6]))
console.log(pivotIndex([1,2,3]))
console.log(pivotIndex([2,1,-1]))