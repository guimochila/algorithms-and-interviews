class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value <= this.value && !this.left) {
      this.left = new BST(value);
    } else if (value <= this.value && this.left) {
      this.left.insert(value);
    } else if (value > this.value && !this.right) {
      this.right = new BST(value);
    } else if (value > this.value && this.right) {
      this.right.insert(value);
    }
  }
}

const bst = new BST(10);
bst.insert(11);
bst.insert(9);
bst.insert(3);

console.log(bst);
