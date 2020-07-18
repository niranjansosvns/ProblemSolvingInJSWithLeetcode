var findMedianSortedArrays = function(nums1, nums2) {
    var arr1 = nums1.length > 0 ? nums1 : []
    var arr2 = nums2.length > 0 ? nums2 : []
    var netArr = arr1.concat(arr2)
    if(netArr.length > 0){
        // sorting
        var sortArr = netArr.sort()
        var Arr = sortArr.sort(function(a, b){return a-b}); 
        var lengthArr = sortArr.length
        
        if(lengthArr == 1){
            return sortArr[0]
        }
        
        // even        
        if(lengthArr % 2 == 0){
            var i = lengthArr 
            var realInd = i- 1 
            var median = realInd/2
            var _1indx = median + 0.5
            var _2indx = median - 0.5
            var medianArrr = sortArr[_1indx] + sortArr[_2indx]
			console.log(medianArrr/2)
            return medianArrr/2
        }
        // odd
        else{
            var i = lengthArr - 1
            var index = i/2
            console.log(Arr[index]);
            return Arr[index]
            
        }   
    }
};
nums1 = [1, 3]
nums2 = [2]
findMedianSortedArrays(nums1, nums2);

// var findMedianSortedArrays = function(nums1, nums2) {
//     var nums = nums1.concat(nums2);
    
//     function quickSort(arr){
//         //如果数组<=1,则直接返回
//         if(arr.length<=1){return arr;}
//         var pivotIndex=Math.floor(arr.length/2);
//         //找基准，并把基准从原数组删除
//         var pivot=arr.splice(pivotIndex,1)[0];
//         //定义左右数组
//         var left=[];
//         var right=[];

//         //比基准小的放在left，比基准大的放在right
//         for(var i=0;i<arr.length;i++){
//             if(arr[i]<=pivot){
//                 left.push(arr[i]);
//             }else{
//                 right.push(arr[i]);
//             }
//         }
//         //递归
//         return quickSort(left).concat([pivot],quickSort(right));
//     }
//     nums = quickSort(nums);
    
//     var numLength = nums.length;
    
//     if(numLength % 2 == 0){
//         let len = numLength/2;
//         return (nums[len-1]+nums[len])/2;
//     }else{
//         let len1 = (numLength/2)-0.5;
//         return nums[len1];
//     }
    
// };