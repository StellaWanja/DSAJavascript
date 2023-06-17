//N.B -> A tree is not necessarily a BST, so is unsorted

class BinaryTreeNode{
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

//A Tree Data Structure can be traversed in following ways:
//1. Depth First Search or DFS
//   a) Inorder Traversal
//   b) Preorder Traversal
//   c) Postorder Traversal
//2. Level Order Traversal or Breadth First Search or BFS
//3. Boundary Traversal
//4. Diagonal Traversal

//Space complexity is dependent on amount of nodes you need to traverse

// BREADTH FIRST TRAVERSAL
// Traverse across first before traversing to the children (level order)
// a) Iteration method for breadth first traversal
// uses queue data structure to traverse - FIFO
//           A
//          /  \
//         B    C
//       /  \    \
//      D   E     F
// add A to queue and remove
// then traverse and add B and C to the queue
// remove B and C from the queue respectively
// add D, E and F and remove them respectively
// will be a,b,c,d,e,f

const breadthFirstTraversal = (root) => {
    if (root === null) return [];
    const result = [];
    const queue = [root];
    while (queue.length > 0) {
      const current = queue.shift();
      result.push(current.data);
      if (current.left !== null) queue.push(current.left);
      if (current.right !== null) queue.push(current.right);
    }
    return result;
};

// b) Recursion method for BFS
// N.B -> BFS has no recursion since recursion requires using a call stack (stack dsa) and BFS uses a queue

//DEPTH FIRST TRAVERSAL
// Traverse from root to left node and all its children before moving to the right node
// a) Iteration method for depth first traversal
// uses stack data structure style to traverse - LIFO
//           A
//          /  \
//         B    C
//       /  \    \
//      D   E     F
// First A will be pushed to the stack and popped out
// Then B and C will be pushed to the stack in the order of C and B(right node then left node)
// B will be popped out, then traverse its children D and E
// E will be pushed to stack first then D, and pop out D then E respectively
// then go back to remaining C in the stack and pop it out
// then traverse to F and pop
// So traversal in depth first = A,B,D,E,C,F
const depthFirstTraversal = (root) => {
    if (root === null) return [];
  
    const result = [];
    const stack = [root]; // the stack stores the values of a level, with push and pop based on whether its left or right
    while (stack.length > 0) {
      const current = stack.pop(); //pop out current value
      result.push(current.data); //and push to result array
  
      //if node has children, push to stack right node first then left node
      // to allow for popping left node first before right node since stack will hold values of same level
      if (current.right) stack.push(current.right);
      if (current.left) stack.push(current.left);
    }
    return result;
};
// b) depth first traveral using recursion
const depthFirstTraversalRecursion = (root) => {
    if (root === null) return [];
    const leftValues = depthFirstTraversalRecursion(root.left);
    const rightValues = depthFirstTraversalRecursion(root.right);
    return [root.data, ...leftValues, ...rightValues];
};

// 1) PREORDER TRAVERSAL (Root, Left, Right) - similar to the DFS methods shown above
// Traverse from the root to the left subtree then to the right subtree
//           A
//          /  \
//         B    C
//       /  \  / \
//      D   E  F  G
//Traversal = A,B,D,E,C,F,G
//used to create a copy of the tree and to get prefix expressions on an expression tree
const preOrderTraversal = (root) => {
    if(root === null) return null;
    let result = [];
    let current = root;
    const traverse = (node) => {
        result.push(node.data);
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
    }
    traverse(current);
    return result;
}
//or 
const preOrder = (root) => {
    if (root === null) return [];
    console.log(root.data);
    preOrder(root.left);
    preOrder(root.right);
};

// 2) POSTORDER TRAVERSAL (Left, Right, Root)
// Traverse from the left subtree to the right subtree then to the root
//           A
//          /  \
//         B    C
//       /  \  / \
//      D   E  F  G
//Traversal = D,E,B,F,G,C,A
//used to delete the tree and to get the postfix expression of an expression tree
const postOrderTraversal = (root) => {
    if(root === null) return null;
    let result = [];
    let current = root;
    const traverse = (node) => {
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
        result.push(node.data);
    }
    traverse(root);
    return result;
}
//or
const postOrder = (root) => {
    if(root === null) return;
    postOrder(root.left);
    postOrder(root.right);
    console.log(root.data);
}
  

// 3) INORDER TRAVERSAL (Left, Root, Right)
// Traverse from the left subtree to the root then to the right subtree
//           A
//          /  \
//         B    C
//       /  \  / \
//      D   E  F  G
//Traversal = D,B,E,A,F,C,G
//used to get nodes in non-decreasing order, can be reversed to get in non-increasing order
const inOrderTraversal = (root) => {
    if(root === null) return null;
    let result = [];
    const traverse = (node) => {
        if(node.left) traverse(node.left);
        result.push(node.data);
        if(node.right) traverse(node.right);
    }
    traverse(root);
    return result;
}
//or
const inOrder = (root) => {
    if(root === null) return;
    inOrder(root.left);
    console.log(root.data);
    inOrder(root.right);
}