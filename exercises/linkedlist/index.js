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
    const last = this.getLast();
    if(last){
      //if there are existing nodes
      last.next = new Node(data);
    } else {
      //if the last node is empty
      this.head = new Node(data);
    }
  }

  getAt(idx){
    let counter = 0;
    let node = this.head;
    while(node){
      if(counter===idx){
        return node;
      }
      node = node.next; 
      counter++;    
    }
    return null;
  }

  removeAt(idx){
    if(!this.head){
      return;
    }
    if(idx===0){
      this.head=this.head.next;
      return;
    }
    let prev = this.getAt(idx-1);
    if(prev && prev.next){
      prev.next = prev.next.next;
    }
    return;
  }

  insertAt(data,idx){
    if(!this.head){
      this.head = new Node(data);
      return;
    }
    if(idx === 0){
      this.head = new Node(data,this.head);
      return;
    }

    const prev = this.getAt(idx-1) || this.getLast();
    const node = new Node(data,prev.next);
    prev.next = node;
  }

  /**
   * @param fn: function being passed in  
   */
  forEach(fn){
    let node = this.head;
    let idx = 0;
    while(node){
      fn(node,idx);
      node=node.next;
      idx++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
