class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return;
  }

  prepend(value) {
    this.head = new Node(value, this.head);
    this.length++;
    return;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    let previousNode = this.getAt(index - 1);
    previousNode.next = new Node(value, previousNode.next);
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

  printList() {
    const array = [];
    let currentNode = this.head;

    while (currentNode) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }

  reverse() {
    if (!this.head.next) return this.head;

    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(6);
myLinkedList.prepend(11);
myLinkedList.insert(1, 22);
myLinkedList.remove(1);
console.log(myLinkedList.printList());
myLinkedList.reverse();
console.log(myLinkedList.printList());
