function twoSumUniquePairs(nums,target){
    const complements = {}
    let output = 0
    for(num of nums){
      if(!complements[num]){
        complements[num] = 1
      }
        if(complements[target-num] && complements[num]=== 1 && complements[target-num] === 1){
          complements[target-num]++
          output++
        }
    }
  console.log(output);
    return output
  }
  
  nums = [1, 1, 2, 45, 46, 46], target = 47;
  twoSumUniquePairs(nums,target);

  /*
  Given an int array nums and an int target, find how many unique pairs in the array such that their sum is equal to target. Return the number of pairs.

Example 1:

Input: nums = [1, 1, 2, 45, 46, 46], target = 47
Output: 2
Explanation:
1 + 46 = 47
2 + 45 = 47
Example 2:

Input: nums = [1, 1], target = 2
Output: 1
Explanation:
1 + 1 = 2
  */