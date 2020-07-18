/*
Given a string s and an int k, return an int representing the number of substrings (not unique) of s with exactly k distinct characters. If the given string doesn't have k distinct characters, return 0.
https://leetcode.com/problems/subarrays-with-k-different-integers

Example 1:

Input: s = "pqpqs", k = 2
Output: 7
Explanation: ["pq", "pqp", "pqpq", "qp", "qpq", "pq", "qs"]
Example 2:

Input: s = "aabab", k = 3
Output: 0
Constraints:

The input string consists of only lowercase English letters [a-z]
0 ≤ k ≤ 26
*/
function SubstringsKDistinct(str, k) {

    let start = 0;
    let end = 0;
    let result = [];

    let len = str.length;

    while (start < len && end < len) {

        while (end <= len) {
            if(str.slice(start, end).length > 1){
                let set = new Set(str.slice(start, end));
                if ( set.size == k) {
                    result.push(str.slice(start, end))
                }
            }
            end++
        }

        start++;
        end = start

    }

    return result.length
}


let s = "pqpqs", k = 2;
console.log(SubstringsKDistinct(s,2))

s = "aabab", k = 3
console.log(SubstringsKDistinct(s,3))
