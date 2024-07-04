import LinkedListNode from "./linked-list-node.js"

describe('Given I create a LinkedListNode', () => {
  describe('when no value is provided', () => {
    test('then the default value is an empty string', () => {
      const linkedListNode = new LinkedListNode();
      expect(linkedListNode.value).toBe('');
    })
  });
  describe('when a value is provided', () => {
    test('then the node value is set the provided value', () => {
      const linkedListNode = new LinkedListNode(42);
      expect(linkedListNode.value).toBe(42);
    })
  })

  test('then next is null', () => {
    const linkedListNode = new LinkedListNode(42);
    expect(linkedListNode.next).toBeNull();
  })

  describe('when the push method is called', () => {
    test('then it creates a new node with the provided value and assigns it to next', () => {
      const linkedListNode = new LinkedListNode(42);
      linkedListNode.push(1998);
      expect(linkedListNode.next.value).toBe(1998);
      expect(linkedListNode.next.next).toBeNull();
    })
  })
})