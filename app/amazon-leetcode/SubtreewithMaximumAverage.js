/*
Given an N-ary tree, find the subtree with the maximum average. Return the root of the subtree.
A subtree of a tree is the node which have at least 1 child plus all its descendants. The average value of a subtree is the sum of its values, divided by the number of nodes.

Example 1:

Input:
		 20
	   /   \
	 12     18
  /  |  \   / \
11   2   3 15  8

Output: 18
Explanation:
There are 3 nodes which have children in this tree:
12 => (11 + 2 + 3 + 12) / 4 = 7
18 => (18 + 15 + 8) / 3 = 13.67
20 => (12 + 11 + 2 + 3 + 18 + 15 + 8 + 20) / 8 = 11.125

18 has the maximum average so output 18.
*/

// //O(n) Java script version
// count the sum and number of nodes in a given TreeNode;
function count(root) {
    let sum=0;
    let number=0;
    if (root==null) {
        return {sum, number};
    }

    sum+=root.val;
    number++;
if(root.children)
  {
    let childCount={};
    for (let i=0;i< root.children.length;i++) {
      let child=root.children[i];
        childCount[child]=childCount[child]+count(child) || 1;
        sum+=childCount['sum'] || 1;
        number+=childCount['number'] ||1;
    }
  }
    return {sum,number};
}

function  solution(root) {
     let rootCount=count(root);

    let rootAVG= rootCount['sum']/ rootCount['number'];
    
    let ans=root;
    let curMaxAVG=rootAVG;
    
    let childOfMaxAVG;
    let childCount={};
    if( root.children){
    for (let i=0;i< root.children.length;i++) {
      let child=root.children[i];
        childOfMaxAVG=solution(child);
        childCount=count(childOfMaxAVG);
        if (childCount['sum']/ childCount['number']>curMaxAVG) {
            curMaxAVG= childCount['sum']/ childCount['number'];
            ans=childOfMaxAVG;
        }
    }
    }

    return ans;
}


  const main = () => {
         let root1 = {
          val:1,
           children: [
            {
             val:-5,
              children:[{val:1},{val:2}]
             },{
               val:13,
            children:[{val:4},{val:-2}]
            },{
              val:4
            }
           ]        
                  }
    
     let root = {
           val:1,
           children: [{val:-5},{val:21},{val:5},{val:-1} ] }
     
        
         console.log( solution(root).val);
 };

main();
