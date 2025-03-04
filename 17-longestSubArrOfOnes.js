
//========================== Steps to solve the problem ===========================//
// create a while loop to check if right is less than the length of the arr.
// write an if condition to check if right is zero, if it is then increment zero counter;
// then create a nested while loop to check the opposite condition of the previous one.

// i still struggle with sliding windows but im starting to understand it a bit

/**
 * @param {number[]} nums
 * @return {number}
 */

var longestSubarray = function (nums) {
    zeroes = 0; left = 0; right = 0; output = 0;


    while (right < nums.length) { //start at left and expand right.
        if(nums[right]===0){ zeroes++; } // im counting the zeroes so far because ill need it for whats next

        while (zeroes > 1){
            if(nums[left]===0){ zeroes--; }
            left++
        }


        output = Math.max(output, right - left );
        right++
    }
    
    return output;

    // if right === 0, then count the length of the subarray from left to right minus 1.
};

console.log(longestSubarray([1, 1, 0, 1])) // 3
console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1])) // 5
console.log(longestSubarray([1, 1, 1])) // 2