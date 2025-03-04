// There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.

// You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.

// im gonna push the first element into a new array;
// add every nth element to the n+1th element
// push it to new array

// 0ms runtime - speed beat 100%.
// 53.64 MB - Beats 14.87%

/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let newArr = [];
    newArr.push(gain[0]);

    for (let i=0; i<gain.length-1; i++){
        newArr.push(newArr[i]+gain[i+1])
    }
    newArr.unshift(0)
    return newArr.sort((a,b)=>(a-b)).reverse()[0]
};

console.log(largestAltitude([-5,1,5,0,-7])) // 1 [0,-5,-4,1,1,-6]
console.log(largestAltitude([52,-91,72])) // 52
console.log(largestAltitude([-4,-3,-2,-1,4,3,2])) // 0 [0,-4,-7,-9,-10,-6,-3,-1]