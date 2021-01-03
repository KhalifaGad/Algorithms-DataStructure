class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinaryTree {
  constructor(arr) {
    this.tree = this.add2Tree(arr);
  }
  add2Tree(arr) {
    for (let i = 0; i < arr.length; i++) {
      this.addNode(arr[i]);
    }
  }
  addNode(el) {
    if (!this.root) {
      this.root = new Node(el);
    } else {
      let currentNode = this.root;
      let previous = currentNode;
      while (currentNode) {
        previous = currentNode;
        if (el <= currentNode.value) {
          currentNode = currentNode.left;
        } else if (el > currentNode.value) {
          currentNode = currentNode.right;
        }
      }
      if (el < previous.value) {
        previous.left = new Node(el);
      } else {
        previous.right = new Node(el);
      }
    }
  }
}

let testTree = new BinaryTree([5]);

testTree.addNode(2);
testTree.addNode(6);
testTree.addNode(3);
console.log(JSON.stringify(testTree));
testTree.addNode(4);

console.log(JSON.stringify(testTree));
