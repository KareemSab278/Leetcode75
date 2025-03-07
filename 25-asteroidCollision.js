// if two asteroids meet, the smaller one explodes.
// the negative and positive show their directions

// if the left is less than the right then they both stay
// if the left is greater than the right then the right is destroyed

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack = [];
    // for (let i = 0; i < asteroids.length; i++) {
    //     if (asteroids[i] < asteroids[i + 1]) {
    //         stack.push(asteroids[i], asteroids[i + 1])
    //     } else if (asteroids[i] + asteroids[i + 1] === 0) {
    //         stack = []
    //     } else if (asteroids[i] > asteroids[i + 1]) {
    //         stack.push(asteroids[i])
    //     }
    //     return stack
    // }

    for (let i = 0; i < asteroids.length; i++) {
        let m = stack.length - 1;
        if (stack.length === 0 || stack[m] < 0 || asteroids[i] > 0) {
            stack.push(asteroids[i]);
        } else if (stack[m] === Math.abs(asteroids[i])) {
            stack.pop();
        } else if (stack[m] < Math.abs(asteroids[i])) {
            stack.pop();
            i--;
        }

    }
    return stack;
};

console.log(asteroidCollision([5, 10, -5]))
console.log(asteroidCollision([8, -8]))
console.log(asteroidCollision([10, 2, -5]))
console.log(asteroidCollision([-2, -1, 1, 2]))