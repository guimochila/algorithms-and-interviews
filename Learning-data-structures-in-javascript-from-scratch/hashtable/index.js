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
}

const ht = new HashTable(30);
console.log(ht);
