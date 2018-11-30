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

  contains(value) {
    if (value === this.value) {
      return true;
    }

    if (value < this.value && this.left) {
      return this.left.contains(value);
    } else if (this.right > value && this.right) {
      return this.right.contains(value);
    }

    return false;
  }

  /* Depth First Traversal  - In Order*/
  depthFirstTraversal(fn) {
    fn(this.value);

    if (this.left) {
      this.left.depthFirstTraversal(fn);
    }

    if (this.right) {
      this.right.depthFirstTraversal(fn);
    }
  }

  /* Depth First Traversal  - Selecting the order */
  depthFirstTraversalSelect(fn, order) {
    if (order === 'pre-order') {
      fn(this.value);
    }

    if (this.left) {
      this.left.depthFirstTraversalSelect(fn, order);
    }

    if (order === 'in-order') {
      fn(this.value, order);
    }

    if (this.right) {
      this.right.depthFirstTraversalSelect(fn, order);
    }

    if (order === 'post-order') {
      fn(this.value, order);
    }
  }

  breadthFirstTraversal(fn) {
    const queue = [this];

    while (queue.length) {
      let temp = queue.shift();

      fn(temp);

      if (temp.left) queue.push(temp.left);
      if (temp.right) queue.push(temp.right);
    }
  }

  getMinVal() {
    if (this.left) return this.left.getMinVal();
    else return this.value;
  }

  getMaxVal() {
    if (this.right) return this.right.getMaxVal();
    else return this.value;
  }
}

const bst = new BST(10);
bst.insert(11);
bst.insert(9);
bst.insert(3);

console.log(bst.contains(3));
bst.depthFirstTraversalSelect(item => console.log(item), 'pre-order');
console.log('-------');
bst.depthFirstTraversalSelect(item => console.log(item), 'in-order');
console.log('-------');
bst.depthFirstTraversalSelect(item => console.log(item), 'post-order');
bst.breadthFirstTraversal(item => console.log(item.value));
