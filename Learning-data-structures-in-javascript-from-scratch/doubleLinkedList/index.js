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

  addToTail(value) {
    const newNode = new Node(value, null, this.tail);
    if (this.tail) this.tail.next = newNode;
    else this.head = newNode;

    this.tail = newNode;
  }

  removeHead() {
    if (!this.head) return null;

    const value = this.head.value;
    this.head = this.head.next;

    if (this.head) this.head.prev = null;
    else this.tail = null;

    return value;
  }

  removeTail() {
    if (!this.tail) return null;

    const value = this.tail.value;
    this.tail = this.tail.prev;

    if (this.tail) this.tail.next = null;
    else this.head = null;

    return value;
  }

  // Recursion
  search(value, node = this.head) {
    if (!this.head) {
      return null;
    }

    if (node.value === value) {
      return node.value;
    }

    if (node.next) return this.search(value, node.next);

    return null;
  }

  // While loop
  searchWhile(value) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode.value;
      }

      currentNode = currentNode.next;
    }

    return null;
  }
}
