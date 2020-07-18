function minRope(arr){
    return arr.sort((a,b) => a-b).reduce((acc, n, i) => {
      if(i == 0) {acc.prev = n; return acc; }; 
      const sum = acc.prev + n;
      acc.prev = sum;
      acc.total += sum;
      return acc;
    }, {prev: 0, total: 0}).total;
  };
//   if we can sort in O(NlogN) (since Node8 sorts in O(NLogN) time, then here is a JavaScript solution