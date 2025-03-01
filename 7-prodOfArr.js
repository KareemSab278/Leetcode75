//skip the current elem and add up all other elem and replace the current elem in O(n) time complexity
//suffix[i] = product of all emel after i
//prefix[i] = product of all emel before i
//product[i] = prefix[i] * suffix[i]

// accepted - this was a hard one. i cried.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let prefix = [1];
    let suffix = [];
    let output = [];

    suffix[(nums.length-1)] = 1; 
    for (let i = nums.length - 2; i >= 0; i--) {
        suffix[i] = nums[i + 1] * suffix[i + 1];
    }

    for (let i = 1; i < nums.length; i++) {
        prefix[i] = nums[i - 1] * prefix[i - 1];
    }

    for (let i = 0; i < nums.length; i++) {
        output[i] = prefix[i] * suffix[i];
    }

    return output;
};

console.log(productExceptSelf([1, 2, 3, 4]));        // Output: [24, 12, 8, 6]
console.log(productExceptSelf([-1, 1, 0, -3, 3]));   // Output: [0, 0, 9, 0, 0]