class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(item) {
    this.queue.push(item);
  }
  dequeue() {
    return this.queue.shift();
  }
}

class Stack {
  constructor() {
    this.q1 = new Queue();
    this.top = -1;
  }
  push(item) {
    this.q1.enqueue(item);
    this.top++;
  }
  pop() {
    let qTemp = new Queue();
    let result = null;
    for (let i = this.top; i > -1; i--) {
      if (i !== 0) {
        qTemp.enqueue(this.q1.dequeue());
      } else {
        result = this.q1.dequeue();
        this.q1 = qTemp;
        this.top--;
      }
    }
    return result;
  }
}
let stack2 = new Stack();

stack2.push(1)
stack2.push(2)
stack2.push(3)

console.log("POPPED VALUE: ", stack2.pop())
console.log("POPPED VALUE: ", stack2.pop())


