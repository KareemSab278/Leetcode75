// need to count the sets of zeros and then compare how many sets to n.
// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false


// 113 / 130 testcases passed

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    let countZero = 0;
    flowerbed.join('').split('1').join('');
    for(let i=0; i<flowerbed.length;i++){
        if (flowerbed[i] + flowerbed[i+1] === 0) {
            countZero++;
        }
    }
    console.log(countZero)
    if (countZero >= n*2 || countZero ===1 && n === 1){return true}else{return false}
};

console.log(canPlaceFlowers([1,0,0,0,0,1], 2)); // false
console.log(canPlaceFlowers([1,0,0,0,1], 2)); // false
console.log(canPlaceFlowers([1,0,1,0,1,0,1], 1)); // false
console.log(canPlaceFlowers([0,0,1,0,1], 1)); // true
console.log(canPlaceFlowers([1,0,0,0,1], 1)); // true
console.log(canPlaceFlowers([1,0,0,0,1,0,0], 2)); // true




