import LinkedListNode from "./linked-list-node";
import SinglyLinkedList from "./singly-linked-list.js"

describe('Given I create a new SinglyLinkedList', () => {
  describe('when it is initially created', () => {
    let singlyLinkedList;
    beforeAll(() => {
      singlyLinkedList = new SinglyLinkedList();
    });
    test('then head is null', () => {
      expect(singlyLinkedList.head).toBeNull();
    })
    test('then tail is null', () => {
      expect(singlyLinkedList.tail).toBeNull();
    })
    test('then length is 0', () => {
      expect(singlyLinkedList.length).toBe(0);
    })
  });

  describe('when a new value is pushed to the linked list', () => {
    let singlyLinkedList;

    beforeAll(() => {
      singlyLinkedList = new SinglyLinkedList();
      singlyLinkedList.push(42);
    });

    test('then head is defined', () => {
      expect(singlyLinkedList.head.value).toBe(42);
      expect(singlyLinkedList.head.next).toBeNull();
    })
    test('then tail is defined', () => {
      expect(singlyLinkedList.tail.value).toBe(42);
      expect(singlyLinkedList.tail.next).toBeNull();
    })
    test('then length is 1', () => {
      expect(singlyLinkedList.length).toBe(1);
    })
  });
})