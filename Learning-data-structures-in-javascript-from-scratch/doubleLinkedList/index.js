/* Double Linked List */
class Node {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(value) {
    const newNode = new Node(value, this.head);
    if (this.head) this.head.prev = newNode;
    else this.tail = newNode;

    this.head = newNode;
  }
}
