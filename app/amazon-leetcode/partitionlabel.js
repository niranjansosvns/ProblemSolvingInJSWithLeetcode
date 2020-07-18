function partitionLabels(S) {
    const N = S.length;
    const idxs = [];
    const res = [];
  
    for (let i = 0; i < N; i++) {
      idxs[S[i]] = i;
    }
  
    let bound = 0;
    let l = 0;
    for (let r = 0; r < N; r++) {
      bound = Math.max(bound, idxs[S[r]]);
      if (bound === r) {
        res.push(r-l+1);
        l = r+1;
      }
    }
  
    return res;
  }
  