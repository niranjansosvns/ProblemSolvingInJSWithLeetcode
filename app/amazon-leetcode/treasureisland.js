var findTreasure = function(grid) {
   
    let queue = [];
    let directions = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1]
    ];
    let rows = grid.length;
    let col = grid[0].length;
    let steps = 0;
    queue.push([0, 0]);
    while (queue.length) {
        steps++;
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let [sr, sc] = queue.shift();
            for (let [dr, dc] of directions) {
                let qr = sr + dr;
                let qc = sc + dc;

                if (qr >= 0 && qr <  rows && qc >= 0 && qc < col) {
                    if (grid[qr][qc] === "X") {
                        return steps;
                    }
                    if (grid[qr][qc] === "O") {
                        grid[qr][qc] = "D";
                        queue.push([qr, qc]);
                    }
                }
            }
        }
    }
    return -1;
}

// const findTreasure = (grid) => {
//     if(!grid || grid.length === 0) return 0;

//     const x = [0, 0];
//     grid.forEach((row, i) => {
//         row.forEach((col, j) => {
//             if(grid[i][j] === 'X') {
//                 x[0] = i;
//                 x[1] = j;
//             }
//         })
//     });

//     const queue = new Array();
//     queue.unshift([...x, 0]);
    
//     while(queue.length) {
//         const [row, col, distance] = queue.pop();
//         for(const dir of directions) {
//             const nextRow = row + dir[0];
//             const nextCol = col + dir[1];

//             if(
//                 nextRow >= 0
//                 && nextRow < grid.length
//                 && nextCol >= 0
//                 && nextCol < grid[0].length
//                 && grid[nextRow][nextCol] === 'O'
//             ) {
//                 grid[nextRow][nextCol] = (distance + 1).toString();
//                 queue.unshift([nextRow, nextCol, distance + 1]);
//             }
//         }
//     }

//     return parseInt(grid[0][0]);
// };