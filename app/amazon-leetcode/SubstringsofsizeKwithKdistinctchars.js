/*
Given a string s and an int k, return all unique substrings of s of size k with k distinct characters.

Example 1:

Input: s = "abcabc", k = 3
Output: ["abc", "bca", "cab"]
Example 2:

Input: s = "abacab", k = 3
Output: ["bac", "cab"]
Example 3:

Input: s = "awaglknagawunagwkwagl", k = 4
Output: ["wagl", "aglk", "glkn", "lkna", "knag", "gawu", "awun", "wuna", "unag", "nagw", "agwk", "kwag"]
Explanation: 
Substrings in order are: "wagl", "aglk", "glkn", "lkna", "knag", "gawu", "awun", "wuna", "unag", "nagw", "agwk", "kwag", "wagl" 
"wagl" is repeated twice, but is included in the output once.
Constraints:

The input string consists of only lowercase English letters [a-z]
0 ≤ k ≤ 26
*/

function uniqueSubstrings(s, k) {
    const set = new Set();
    const map = {};
    let l = 0;
    let r = 0;
  
    for (let r = 0; r < s.length; r++) {
      if (map[s[r]] == null) map[s[r]] = 0;
      map[s[r]]++;
      while (map[s[r]] > 1) {
        map[s[l]]--;
        l++;
      }
      if (r - l + 1 === k) {
        set.add(s.slice(l, r + 1));
        map[s[l]]--;
        l++;
      }
    }
  
    return Array.from(set);
  }
  
  console.log(uniqueSubstrings('abcabc', 3));
  console.log(uniqueSubstrings('abacab', 3));
  console.log(uniqueSubstrings('awaglknagawunagwkwagl', 4));