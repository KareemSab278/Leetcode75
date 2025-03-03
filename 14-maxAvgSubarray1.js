// Input: nums = [12,-5,-6,50,3], k = 4
// Output: 12.75000

// im gonna use the sliding window alg here lol

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findMaxAverage = function (nums, k) {
    let sum = 0;
    let output = [];

    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }

    output.push(sum);

    for (let i = k; i < nums.length; i++) {
        sum += nums[i] - nums[i - k]; // this is the sliding window
        output.push(sum);
    }

    return Math.max(...output) / k;
};

console.log(findMaxAverage([12, -5, -6, 50, 3], 4)); // 12.75
