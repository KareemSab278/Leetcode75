// each senator can ban the next senator to the right from voting
// if a senator is banned, they can't vote
// this is done with a queue

// Input: senate = "RDD"
// Output: "Dire"

// i was only getting 71/83 of the testcases to pass.
// i had to look at the solutions to understand the problem unfortunately. 
// god i feel dumb.

/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    let rad = [];
    let dire = [];

    for (let i = 0; i < senate.length; i++) {
        if (senate[i] === 'R') {
            rad.push(i);
        } else {
            dire.push(i);
        }
    }
    while (rad.length > 0 && dire.length > 0) {
        let r = rad.shift();
        let d = dire.shift();
        if (r < d) {
            rad.push(r + senate.length); // add the next index to the end of the array
        } else {
            dire.push(d + senate.length); // add the next index to the end of the array
        }
    }
    if (rad.length > 0) {
        return 'Radiant';
    } else {
        return 'Dire';
    }
}

console.log(predictPartyVictory('RD')); // Radiant
console.log(predictPartyVictory('RDD')); // Dire