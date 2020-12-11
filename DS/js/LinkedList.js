class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    if (!value) throw new Error("No Value provided!");
    this.linkedList = null;
  }

  addNode(value) {
    let lastNode = this.linkedList;
    while (lastNode.next) {
      lastNode = lastNode.next;
    }
    lastNode.next = {
      value,
      next: null,
    };
  }

  size() {
    if(!this.linkedList) return 0
    let size = 1
    let lastNode = this.linkedList;
    while (lastNode.next) {
      lastNode = lastNode.next;
      size ++;
    }
    return size
  }

  clear() {
    this.linkedList = null;
  }
}

let linkedList = new LinkedList(6);
linkedList.addNode(10);
linkedList.addNode(11);
linkedList.addNode(12);
linkedList.addNode(3);
// console.log(JSON.stringify(linkedList, 4));
console.log(linkedList.size())
linkedList.clear();
console.log(linkedList.size());
linkedList.addNode(12);
linkedList.addNode(3);
console.log(linkedList.size());

