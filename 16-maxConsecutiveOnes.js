// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6

// i am using a siliding window approach

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var longestOnes = function (nums, k) {
    let left = 0; let right = 0; let zeroes = 0; let ones = 0;

    while (right < nums.length) {
        if (nums[right] === 0) {
            zeroes++
        }

        while(zeroes > k){
            if(nums[left] === 0) zeroes--;
            left++;
        }
        ones = Math.max(ones, right - left + 1);
        right++
    }
    return ones;

};

console.log(longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)); // 10
console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)); // 6
console.log(longestOnes([0, 0, 0, 0], 0)); // 0
console.log(longestOnes([0, 0, 1, 1, 1, 0, 0], 0)); // 0