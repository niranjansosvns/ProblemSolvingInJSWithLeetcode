/*
Given a matrix with r rows and c columns, find the maximum score of a path starting at [0, 0] and ending at [r-1, c-1]. The score of a path is the minimum value in that path. For example, the score of the path 8 → 4 → 5 → 9 is 4.

Don't include the first or final entry. You can only move either down or right at any point in time.

Example 1:

Input:
[[5, 1],
 [4, 5]]

Output: 4
Explanation:
Possible paths:
5 → 1 → 5 => min value is 1
5 → 4 → 5 => min value is 4
Return the max value among minimum values => max(4, 1) = 4.
Example 2:

Input:
[[1, 2, 3]
 [4, 5, 1]]

Output: 4
Explanation:
Possible paths:
1-> 2 -> 3 -> 1
1-> 2 -> 5 -> 1
1-> 4 -> 5 -> 1
So min of all the paths = [2, 2, 4]. Note that we don't include the first and final entry.
Return the max of that, so 4.
*/
const maxminpath = (arr) => {
    let dp = new Array(arr.length).fill(0).map( x=>new Array(arr[0].length).fill(0))
    dp[0][0] = arr[0][0]
    for(let i=0; i<arr.length; i++){
        for(let j =0; j<arr[i].length; j++){
            if(i == 0 && j-1>=0){
                dp[i][j] = Math.min(arr[i][j], dp[i][j-1])
            }
            if(j == 0 && i-1 >= 0){
                dp[i][j] = Math.min(arr[i][j], dp[i-1][j])
            }
            if(i-1 >= 0 && j-1 >= 0){
                let top = Math.min(dp[i-1][j], arr[i][j])
                let left = Math.min(dp[i][j-1], arr[i][j])
                dp[i][j] = Math.max(top, left)
            }
        }
    }
    
    console.log(dp[dp.length-1][dp[0].length-1]);
    return dp[dp.length-1][dp[0].length-1]
}
maxminpath([[5, 1],
 [4, 5]])