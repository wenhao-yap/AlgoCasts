// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

//undefined connotation that property is not set
//null connotation that property is set to nothing
class Node {
  constructor(data,next=null){
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  insertFirst(data){
    let currNode = new Node(data,this.head);
    this.head = currNode;
  }

  size(){
    let counter = 0;
    let node = this.head;

    while(node){
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst(){
    return this.head;
  }

  getLast(){
    let node = this.head;
    while(node && node.next != null){
      node = node.next;     
    }   
    return node;
  }

  clear(){
    this.head = null;
  }

  removeFirst(){
    if(!this.head){
      return;
    }
    this.head = this.head.next;
  }

  removeLast(){
    if(!this.head){
      return;
    }

    if(!this.head.next){
      this.head = null;
      return;
    }

    let prev = this.head;
    let node = this.head.next;

    while(node.next){
      prev = node;
      node = node.next;     
    }
    prev.next = null;
  }

  insertLast(data){
    let last = this.getLast();
    if(last){
      //if there are existing nodes
      last.next = new Node(data);
    } else {
      //if the last node is empty
      last = new Node(data);
    }
  }
}

module.exports = { Node, LinkedList };
