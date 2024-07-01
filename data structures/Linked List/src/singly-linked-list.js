import LinkedListNode from "./linked-list-node.js";

const SinglyLinkedList = function () {
  this.head = null;

  // The above attribute is probably enough for a linked list. The following two attributes 
  // are going to be useful for implementing Queue and Stack
  this.tail = null;
  this.length = 0;

  /**
   * Adds a new LinkedListNode to the list. That node has the value provided as input.
   * @param {*} value: value of the new element added to the linked list
   */
  this.push = (value) => {
    if (!this.head) {
      this.head = new LinkedListNode(value);
      this.tail = this.head
    } else {
      this.head.push(value);
    }
    this.length++;
  }
};

export default SinglyLinkedList;