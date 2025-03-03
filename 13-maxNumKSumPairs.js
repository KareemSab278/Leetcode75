// Input: nums = [1,2,3,4], k = 5
// Output: 2
// all tests passed

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let left = 0;
    let right = nums.length - 1;
    let count = 0;
   
    nums.sort((a, b) => a - b);

    while (left < right) {
        if (nums[left] + nums[right] === k) {
            count++;
            left++;
            right--;
        } else if (nums[left] + nums[right] < k) {
            left++;
        } else {
            right--;
        }
    }

    return count;
};

console.log(maxOperations([1, 2, 3, 4], 5)); // 2 Pass
console.log(maxOperations([3, 1, 3, 4, 3], 6)); // 1 Pass
console.log(maxOperations([1, 1, 1, 1], 2)); // 2 Pass
console.log(maxOperations([2, 2, 2, 2], 4)); // 2 Pass
console.log(maxOperations([5, 5, 5, 5], 10)); // 2 Pass
console.log(maxOperations([1, 2, 3], 6)); // 0 Pass
console.log('-----------------------')
console.log(maxOperations([1, 5, 7, 1], 8)); // 2 fail
console.log(maxOperations([10, 5, 7, 3, 8, 5], 10)); // 2 Fail
console.log(maxOperations([1, 2, 3, 4, 5], 9)); // 1 Fail
console.log(maxOperations([4,4,1,3,1,3,2,2,5,5,1,5,2,1,2,3,5,4], 2)) // 2 Fail