function findCriticalNodes(numNodes, edges){
    var criticalNodes = [];
    for (let i=0; i<numNodes; i++){
    var graph = getGraph(numNodes, edges);
    delete graph[i];
    for (var index in graph){
    if(graph[index].indexOf(i)!=-1){
    graph[index].splice(graph[index].indexOf(i),1);
    // 1 is the number of items to be deleted from the specified index
    }
    }
    console.log("Iteration for "+ i);
    console.log(graph);
    if(!isGraphConnected(graph)){
    criticalNodes.push(i);
    }
    // break;
    }
    console.log(criticalNodes);
    }
    
    function getGraph(numNodes, edges){
    var graph = {};
    for (let i=0; i<numNodes; i++){
    graph[i]=[];
    };
    edges.forEach(edge =>{
    graph[edge[0]].push(edge[1]);
    graph[edge[1]].push(edge[0]);
    });
    console.log("Initial state:");
    console.log(graph);
    return graph;
    }
    
    function isGraphConnected(graph){
    var traversed = [];
    start = null;
    for (var index in graph){
    start = parseInt(index);
    // console.log("start "+start);
    break;
    }
    function dfs(node){
    traversed.push(node);
    // console.log(graph[node]);
    // for(let i=0; i<graph[node].length;i++){
    // let edge = graph[node][i];
    // // console.log("Edge: "+edge);
    // // console.log("traversed.indexOf(edge)"+traversed.indexOf(edge));
    // // console.log("Traversed:"+traversed);
    // if(traversed.indexOf(edge)==-1){
    // dfs(edge);
    // }
    // }
    graph[node].forEach(edge=>{
    if(traversed.indexOf(edge)==-1){
    dfs(edge);
    }
    })
    }
    dfs(start);
    return traversed.length==Object.keys(graph).length;
    }
    findCriticalNodes(7, [[0, 1], [0, 2], [1, 3], [2, 3], [2, 5], [5, 6], [3, 4]]);