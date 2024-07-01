import SinglyLinkedList from "./src/singly-linked-list.js";

(() => {
  console.log('Starting the "test" suite');

  const mySinglyLinkedList = new SinglyLinkedList();

  // Pushing the first element to the list should set the head, tail and length of the linked list
  mySinglyLinkedList.push(42);
  console.log('Checking that ', mySinglyLinkedList.head.value)

  console.log('Concluding the "test" suite');
})();