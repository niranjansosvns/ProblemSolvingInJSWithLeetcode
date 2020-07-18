function minCost(N, edges, newEdges) {
    let n = N;
  
    const parents = [];
    for (let i = 0; i < N; i++) parents.push(i);
  
    function find(u) {
      if (u !== parents[u]) parents[u] = find(parents[u]); // path compression
      return parents[u];
    }
  
    function union(u, v) {
      const p1 = find(u);
      const p2 = find(v);
  
      if (p1 !== p2) {
        parents[p1] = p2; // or parents[p2] = p1 which does not matter
        n--;
      }
    }
  
    for (let [u, v] of edges) union(u, v);
    newEdges.sort((a, b) => (a[2] - b[2]));
  
    let res = 0;
    for (const [u, v, cost] of newEdges) {
      if (find(u) !== find(v)) {
        union(u, v);
        res += cost;
      }
    }
    return n === 1 ? res : -1;
  }
  
  console.log(minCost(6, [[1, 4], [4, 5], [2, 3]], [[1, 2, 5], [1, 3, 10], [1, 6, 2], [5, 6, 5]]));

  /*
  Given an undirected graph with n nodes labeled 1..n. Some of the nodes are already connected. The i-th edge connects nodes edges[i][0] and edges[i][1] together. Your task is to augment this set of edges with additional edges to connect all the nodes. Find the minimum cost to add new edges between the nodes such that all the nodes are accessible from each other.

Input:

n, an int representing the total number of nodes.
edges, a list of integer pair representing the nodes already connected by an edge.
newEdges, a list where each element is a triplet representing the pair of nodes between which an edge can be added and the cost of addition, respectively (e.g. [1, 2, 5] means to add an edge between node 1 and 2, the cost would be 5).
Example 1:

Input: n = 6, edges = [[1, 4], [4, 5], [2, 3]], newEdges = [[1, 2, 5], [1, 3, 10], [1, 6, 2], [5, 6, 5]]
Output: 7
Explanation:
There are 3 connected components [1, 4, 5], [2, 3] and [6].
We can connect these components into a single component by connecting node 1 to node 2 and node 1 to node 6 at a minimum cost of 5 + 2 = 7.
  */