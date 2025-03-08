// i could not understand this question for the life of me.
// looking up solutions made me even more confused.
// i need to come back to this one.
// i will be skipping this one for now.
// the question itself legitimately makes no sense to me.

function reverseKElements(queue, k) {
    let newQueue = [];
    for (let i = 0; i < k; i++) {
        newQueue.unshift(queue.shift());
    }
    return newQueue.concat(queue);
}

// console.log(reverseKElements([1, 2, 3, 4, 5], 3))