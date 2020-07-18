function findPairWithGivenSum(nums, target) {
    let newTarget = target - 30,
    results = []; //60
    for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
    if (nums[i] + nums[j] == newTarget) {
        results.push([i, j]);
    }
    }

    }
    console.log(results);
}
   
var  nums = [1, 10, 25, 35, 60], target = 90;
findPairWithGivenSum(nums, target);