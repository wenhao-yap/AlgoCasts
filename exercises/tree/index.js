// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data){
    this.data = data;
    this.children = [];
  }

  add(data){
    this.children.push(new Node(data));
  }

  remove(data){
    this.children = this.children.filter(node=>{
      return node.data === node;
    });
  }
}

class Tree {
  constructor(){
    this.root = null;
  }

  traverseBF(fn){
    const arr = [this.root];
    while(arr.length){
      const node = arr.shift(); //remove the first node in the array
      arr.push(...node.children); //push all the node children(s) into the array
      fn(node); //call the function on the removed node
    }
  }

  traverseDF(fn){
    const arr = [this.root];
    while(arr.length){
      const node = arr.shift();
      //add current node children at the front so that it will be checked before the other nodes of same level
      arr.unshift(...node.children);
      fn(node);
    }
  }
}

module.exports = { Tree, Node };
