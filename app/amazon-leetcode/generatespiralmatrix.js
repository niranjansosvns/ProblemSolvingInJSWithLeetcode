function generateMatrix(n) {
    const matrix = [...Array(n)].map(() => Array(n).fill(null));
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];  // right, down, left, up
    const steps = [n, n - 1];
  
    let num = 1;
    let dir = 0;
    let x = 0;
    let y = -1;
  
    while (steps[dir % 2] > 0) {
      for (let i = 0; i < steps[dir % 2]; i++) {
        x += dirs[dir][0];
        y += dirs[dir][1];
        matrix[x][y] = num++;
      }
  
      steps[dir % 2]--;
      dir = (dir + 1) % 4;
    }
  
    return matrix;
  }
  /*
  Given a positive integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

Example:

Input: 3
Output:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
  */