class Graph {
    constructor(n) {
        this.n = n
        this.nodes = []
    }
    
    hasNode(id) {
        return !!this.nodes[id]
    }
    
    addNode(id) {
        this.nodes[id] = new Node(id)
    }
    
    addEdge(id1, id2) {
        this.nodes[id1].addAdjacent(this.nodes[id2])
        this.nodes[id2].addAdjacent(this.nodes[id1])
    }
    
    removeEdge(id1, id2) {
        this.nodes[id1].removeAdjacent(id2)
        this.nodes[id2].removeAdjacent(id1)
    }
    
    isConnected() {
        const bfs = (node) => {
            // search all of the adjacent nodes
            for (const adj of node.adj) {
                // if the node isn't visited or currently queued
                if (!adj.isVisited && !adj.isQueued) {
                    // add to queue
                    q.push(adj)
                    adj.isQueued = true
                }
            }
        }

        // reset the state of all of the nodes
        this.nodes = this.nodes.map(n => {
            n.isVisited = false
            n.isQueued = false
            return n
        })

        // create a queue
        const q = [this.nodes[1]]
        
        // loop until queue is empty
        while (q.length !== 0) {
            // dequeue
            const node = q.shift()
            
            // breadth first search from that node in the graph
            bfs(node)
            
            // declare this node as visited
            node.isVisited = true
        }
        
        // count the number of nodes that were visited during the search
        const visited = this.nodes.reduce((acc, curr) => {
            if (curr.isVisited) {
                return acc + 1
            } else {
                return acc
            }
        }, 0)

        // if all nodes were visited, the graph must be connected
        return visited === this.n
    }
    
    print() {
        for (const id in this.nodes) {
            this.nodes[id].print()
        }
    }
}

class Node {
    constructor(id) {
        this.id = id
        this.adj = []
        this.isVisited = false
        this.isQueued = false
    }
    
    addAdjacent(node) {
        this.adj.push(node)
    }
    
    removeAdjacent(id) {
        this.adj = this.adj.filter(a => a.id !== id)
    }
    
    print() {
        for (const adj of this.adj) {
            console.log(" " + adj.id)
        }
    }
}

const criticalConnections = (n, edges) => {
    const graph = new Graph(n)
    const bridges = []

    // build the graph
    for (const edge of edges) {
        if (!graph.hasNode(edge[0])) graph.addNode(edge[0])
        if (!graph.hasNode(edge[1])) graph.addNode(edge[1])
        graph.addEdge(edge[0], edge[1])
    }

    // go through each edge
    for (const edge of edges) {
        // remove the edge from the graph
        graph.removeEdge(edge[0], edge[1])

        // check if removing the edge causes the graph to disconnect
        const isConnected = graph.isConnected()
        if (!isConnected) {
            // when the graph is disconnected you know that this edge is a bridge
            bridges.push(edge)
        }

        // add the edge back for the next iteration
        graph.addEdge(edge[0], edge[1])
    }

    return bridges
}

const n = 5
const edges = [[1, 2], [1, 3], [3, 4], [1, 4], [4, 5]]
console.log(criticalConnections(n, edges))

/*
Given an underected connected graph with n nodes labeled 1..n. A bridge (cut edge) is defined as an edge which, when removed, makes the graph disconnected (or more precisely, increases the number of connected components in the graph). Equivalently, an edge is a bridge if and only if it is not contained in any cycle. The task is to find all bridges in the given graph. Output an empty list if there are no bridges.

Input:

n, an int representing the total number of nodes.
edges, a list of pairs of integers representing the nodes connected by an edge.
Example 1:

Input: n = 5, edges = [[1, 2], [1, 3], [3, 4], [1, 4], [4, 5]]


Output: [[1, 2], [4, 5]]
Explanation:
There are 2 bridges:
1. Between node 1 and 2
2. Between node 4 and 5
If we remove these edges, then the graph will be disconnected.
If we remove any of the remaining edges, the graph will remain connected.
*/