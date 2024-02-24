class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    console.log(newNode);
    return newNode;
  }
  pop() {
    var current = this.head;
    if (!this.head) {
      console.log("Linked List is empty. Nothing to Pop!!");
      return;
    }
    var count = 0;
    var prev;
    while (current.next) {
      prev = current;
      current = current.next;
      count++;
    }
    var lastNode = current;
    this.tail = prev;
    prev.next = null;
    console.log(`this is the removed node :${lastNode}`);
    this.print();
  }
  shift() {
    if (!this.head) {
      console.log("Linked List is empty");
      return;
    }
    this.head = this.head.next;
    this.print();
  }
  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.push();
      return;
    }
    var current = this.head;
    this.head = newNode;
    newNode.next = current;
    this.length++;
    this.print();
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      console.log("Invalid Index");
      return;
    }
    var current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    console.log(current.val);
    return current;
  }
  set(index, val) {
    if (index < 0 || index > this.length) {
      console.log("Invalid Index");
      return;
    }
    if (index === this.length) {
      this.push(val);
      this.print();
      return;
    }
    var settingNode = this.get(index);
    settingNode.val = val;
    this.print();
  }
  remove(index) {
    if (index < 0 || index >= this.length) {
      console.log("Invalid Index");
      return;
    }
    var removeNode = this.get(index);
    var prev;
    var current = this.head;
    for (let i = 0; i < index; i++) {
      prev = current;
      current = current.next;
    }
    prev.next=removeNode.next;
    this.print();
  }

//   reverse() {
//     if (!this.head) {
//         console.log("Linked List is empty");
//         return;
//     }

//     var current = this.head;
//     this.head = this.tail;
//     this.tail = current;
//     var next;
//     var prev = null;

//     while (current) {
//         next = current.next;
//         current.next = prev;
//         prev = current;
//         current = next;
//     }

//     // Update the tail to null since the original tail becomes the new head
//     this.tail.next = null;

//     this.print();
// }


  delete() {
    this.length = 0;
    this.head = null;
    this.tail = null;
    this.print();
  }
  print() {
    var arr = [];
    if (!this.head) {
      console.log("LinkedList is Empty!!");
    }
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);

    return arr;
  }
}

var list = new SinglyLinkedList();
list.push(23);
list.push(34);
list.push(45);
list.print();
// list.shift();
list.unshift(67);
list.get(3);
// list.pop();
// list.delete();
// list.pop();
list.set(4, 90);
list.remove(4);
// list.reverse();