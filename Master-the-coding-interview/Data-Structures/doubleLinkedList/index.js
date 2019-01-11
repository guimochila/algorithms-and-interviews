class Node {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoubleLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  printList() {
    const array = [];
    let currentNode = this.head;

    while (currentNode) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }

  append(value) {
    const newNode = new Node(value, this.tail, null);
    if (this.tail) this.tail.next = newNode;
    else this.head = newNode;

    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value, null, this.head);

    if (this.head) this.head.prev = newNode;
    else this.tail = newNode;

    this.head = newNode;
  }

  getAt(index) {
    let node = this.head;
    let counter = 0;

    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    let previousNode = this.getAt(index - 1);
    previousNode.next = new Node(value, previousNode.prev, previousNode.next);
  }

  remove(index) {
    if (index > this.length) {
      return null;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let previousNode = this.getAt(index - 1);
    let currentNode = previousNode.next;
    previousNode.next = currentNode.next;
    this.length--;
    return;
  }
}

const myDoubleLL = new DoubleLinkedList(1);

myDoubleLL.append(10);
myDoubleLL.prepend(11);
myDoubleLL.insert(1, 22);
myDoubleLL.remove(1);

console.log(myDoubleLL.printList());
console.log(myDoubleLL);
