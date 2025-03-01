// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// 73 / 74 testcases passed


var moveZeroes = function(nums) {
    let zeroCount = 0;

    for (let i = 0; i < nums.length; i++) {
        let left = i // first element
        let right = i+1 // next element
        if(nums.length === 1){
            return nums
        }

        if (left === 0 && left > right) {
            left++, right++
            // swap right and left
            [nums[left], nums[right]] = [nums[right], nums[left]];
        } else if (left===0 && right === 0){
            left++, right++
            [nums[right], nums[left]] = [nums[left], nums[right]];
        }

        if (nums.includes(0)) {
            nums.splice(nums.indexOf(0), 1)
            zeroCount++
        }
    }

    for(let i=0;i<zeroCount; i++){
        nums.push(0)
    }

    for(let i=0;i<nums.length; i++){
        if(nums[i] === undefined){
            nums.splice(i,1)
        }
    }

    


    return nums
}

console.log(moveZeroes([0,1,0,3,12]))// [1,3,12,0,0]
console.log(moveZeroes([0,0]))// [0,0]
console.log(moveZeroes([0,0,0,0,0,0,1,1,1]))// [0,0]

