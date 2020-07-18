function shortestPath(grid) {
    let queue = [];
    let directions = [
      [-1, 0],
      [1, 0],
      [0, 1],
      [0, -1]
    ];
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === "S") {
          queue.push([i, j]);
        }
      }
    }
    while (queue.length !== 0) {
      count++;
      let size = queue.length;
      for (let i = 0; i < size; i++) {
        let [startR, startC] = queue.shift();
        for (let [dr, dc] of directions) {
          let r = startR + dr;
          let c = startC + dc;
  
          if (r >= 0 && r < grid.length && c >= 0 && c < grid[0].length) {
            if (grid[r][c] === "X") {
              return count;
            }
            if (grid[r][c] !== "D") {
              // We mark it as D, so next iteration can't come. 
              // In multi source BFS, if paths overlap, that means
              // there is a faster path that already visited the spot.
             grid[r][c] = "D";
              queue.push([r, c]);
            }
          }
        }
      }
    }
    return -1;
  }
  let input = [
    ["S", "O", "O", "S", "S"],
    ["D", "O", "D", "O", "D"],
    ["O", "O", "O", "O", "X"],
    ["X", "D", "D", "O", "O"],
    ["X", "D", "D", "D", "O"]
  ];
  
  console.log(shortestPath(input));