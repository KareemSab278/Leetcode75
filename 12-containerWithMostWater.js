// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49

// all testcases passed

/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let area = 0;
    
    while (left < right) {
        let width = right - left;
        let minHeight = Math.min(height[left], height[right]);
        let newArea = width * minHeight;
        
        if (newArea > area) {
            area = newArea;
        }

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return area;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
console.log(maxArea([4, 3, 2, 1, 4]))
console.log(maxArea([1, 1])) // expected 1
console.log(maxArea([1, 2])) // expected 1