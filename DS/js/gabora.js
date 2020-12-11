function linkedList() {
  let head = null;
  let length = 0;

  let Node = function (el) {
    this.el = el;
    this.next = null;
  };

  this.size = function () {
    return length;
  };

  this.head = function () {
    return head;
  };

  this.add = function (el) {
    let node = new Node(el);

    if (head === null) {
      head = node;
    } else {
      let currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next; // shofly elly ba3do
      }

      currentNode.next = node;
    }
    length++;
  };

  this.remove = function (el) {
    let currentNode = head;
    let previousNode;
    if (currentNode.el === el) {
      head = currentNode.next;
    } else {
      while (currentNode.el !== el) {
        previousNode = currentNode;
        currentNode = currentNode.next; // shofly elly ba3do
      }
      previousNode.next = currentNode.next;
    }
    length--;
  };
}
let try1 = new linkedList();
try1.add(5);
try1.add("gabr");
try1.add("khalifa");
try1.remove(5);
console.log(try1.size());
console.log(try1.head());
