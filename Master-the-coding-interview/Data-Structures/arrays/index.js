/* 
  Building an array
*/

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  // O(1)
  get(index) {
    return this.data[index];
  }
  // O(1)
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  // O(1)
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
  // O(n)
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }
}

const newArr = new MyArray();
newArr.push('a');
newArr.push('b');
newArr.delete(1);
console.log(newArr);
