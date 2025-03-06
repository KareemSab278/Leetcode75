// Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.

// Input: grid = [[3,2,1],[1,7,6],[2,7,7]]
// Output: 1

// 78/80 test cases passed AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH!!!!!!!!!!!!!!!!!!!!!!!!!

// so i am comparing the rows to the columns and returning how many are similar.

// i am meant to use a hashtable but i think it is more straight forward to use a nested loop to compare the rows to the columns.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let count = 0;
    let rows = [];
    let columns = [];
    for (let i = 0; i < grid.length; i++) { // getting the rows
        rows.push(grid[i].join(''));
        let column = '';
        for (let j = 0; j < grid.length; j++) { // getting the columns
            column += grid[j][i];
        }
        columns.push(column);
    };
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < columns.length; j++) { // checking for the number of similar rows and columns
            if (rows[i] === columns[j]) {
                count++;
            }
        }
    }
    // return rows;
    // return columns;
    return count;
}

console.log(equalPairs([
    [3, 2, 1],
    [1, 7, 6],
    [2, 7, 7]
])); // 1

console.log(equalPairs([
    [3, 1, 2, 2],
    [1, 4, 4, 5],
    [2, 4, 2, 2],
    [2, 4, 2, 2]
])); // 3

console.log(equalPairs([
    [11, 1],
    [1, 11]
])); // 1