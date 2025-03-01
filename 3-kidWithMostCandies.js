// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true] 

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let oldCandies = [...candies] //extracted candies data.
    let sortedCandies = candies.sort((a,b)=>{return b-a})
    let max = sortedCandies[0]
    let result = []
    let allCandies = oldCandies.map((candy)=> candy+extraCandies)
    for(let i=0; i<candies.length; i++){
        if(allCandies[i] >= max){
            result.push(true)}else{
                result.push(false)
            }
    }
    return result

};

console.log(kidsWithCandies([2,3,5,1,3], 3))
console.log(kidsWithCandies([4,2,1,1,2], 1))
console.log(kidsWithCandies([12,1,12], 10))