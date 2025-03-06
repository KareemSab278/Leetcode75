// okay so i can tell that this problem requires a hash set
// Input: nums1 = [1,2,3], nums2 = [2,4,6]
// Output: [[1,3],[4,6]]

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);

    let arr1 = []
    let arr2 = []

    for(let i=0; i<nums1.length; i++){
        if(!set2.has(nums1[i]) && !arr1.includes(nums1[i])){ // had to use jipiti here because i was getting duplicates and didnt know how to solve that.
            arr1.push(nums1[i])
        }
    }
    
    for(let i=0; i<nums2.length; i++){
        if(!set1.has(nums2[i]) && !arr2.includes(nums2[i])){
            arr2.push(nums2[i])
        }
    }
    return [arr1, arr2]
};

console.log(findDifference([1,2,3], [2,4,6]))
console.log(findDifference([1,2,3,3], [1,1,2,2]))