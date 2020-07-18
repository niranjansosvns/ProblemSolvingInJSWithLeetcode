var copyRandomList = function(head) {
    const map = new Map();
    
    function copy(node)   {
      if (node == null) return null;
      if (map.get(node) != null) return map.get(node);
  
      const n = new Node(node.val);
      map.set(node, n);
  
      n.next = copy(node.next);
      n.random = copy(node.random);
      return n;
    }
    console.log(head);
    return copy(head);
};

var  head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
copyRandomList(head);
// expected output 
// [[7,null],[13,0],[11,4],[10,2],[1,0]]