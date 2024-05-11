// TODO: Medium Problem

/* 

Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
- Each row must contain the digits 1-9 without repetition.
- Each column must contain the digits 1-9 without repetition.
- Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

Note: 
- A Sudoku board (partially filled) could be valid but is not necessarily solvable.
- Only the filled cells need to be validated according to the mentioned rules.

The approach of solving this problem is to have a set which tracks the rows, cols, and boxes along with their values.
- When we encounter a new cell we check if it already in the row, col, box using set.
- If we come across a value that already exist we return false, otherwise we continue adding everything to the set.
- Once all the values are added and no conflicts are found we return with value true in the end.

*/

function isValidSudoku(board: string[][]): boolean {
    const set = new Set(); // We use this for keeping track of unique values.

    for (let row = 0; row < board.length; row++) {
        // Traverse each row
        for (let col = 0; col < board[row]!.length; col++) {
            // Walk over each cell in the current row.
            const curr = board[row]![col]!; // Get the value of the current cell.

            if (curr === ".") continue; // If the cell is empty, skip the iteration.

            const box = 3 * Math.floor(row / 3) + Math.floor(col / 3); // Get the value of the corresponding box.

            const rowValue = `row: ${row}, value: ${curr}`; // We need to store strings to make them unique
            const colValue = `col: ${col}, value: ${curr}`; // since we need to namespace the values using box, col and rows
            const boxValue = `box: ${box}, value: ${curr}`;

            if (set.has(rowValue) || set.has(colValue) || set.has(boxValue)) { // Check if the value exist and return false if conflict
                return false;
            }

            // Add the values to the set if there aren't any conflicts to begin with.
            set.add(rowValue);
            set.add(colValue);
            set.add(boxValue);
        }
    }
    return true; // Return true at the end.
}

const puzzle = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(puzzle));
