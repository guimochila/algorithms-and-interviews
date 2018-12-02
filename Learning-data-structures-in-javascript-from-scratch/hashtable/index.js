/* Hash Node */
class HashNode {
  constructor(key, value, next = null) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

class HashTable {
  constructor(size) {
    this.buckets = Array(size);
    this.numberOfBuckets = this.buckets.length;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }

    return total % this.numberOfBuckets;
  }

  insert(key, value) {
    const index = this.hash(key);

    if (!this.buckets[index]) {
      this.buckets[index] = new HashNode(key, value);
    } else if (this.buckets[index].key === key) {
      this.buckets[index].value = value;
    } else {
      let currentNode = this.buckets[index];

      while (currentNode.next) {
        if (currentNode.next.key === key) {
          currentNode.next.value = value;
          return;
        }
        currentNode = currentNode.next;
      }

      currentNode.next = new HashNode(key, value);
    }
  }

  get(key) {
    const index = this.hash(key);
    let currentNode = this.buckets[index];

    while (currentNode) {
      if (currentNode.key === key) {
        return currentNode.value;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  retrieveAll() {
    let result = [];

    for (let i = 0; i < this.numberOfBuckets; i++) {
      let currentNode = this.buckets[i];
      while (currentNode) {
        result.push(currentNode);
        currentNode = currentNode.next;
      }
    }

    return result;
  }
}

const ht = new HashTable(30);
ht.insert('Engineer', 'Javascript');
ht.insert('Engineer', 'React');
ht.insert('Developer', 'Google');
console.log(ht.get('Developer'));
console.log(ht.retrieveAll());
