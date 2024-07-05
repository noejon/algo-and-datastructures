import MaxHeap from "./max-heap"

describe('Given I create a max heap', () => {
  describe('when initially created', () => {
    test('then the heap empty', () => {
      const heap = new MaxHeap();
      expect(heap.peek()).toBeUndefined();
    });

    test('then calling .add sets the root element to the value passed to .add', () => {
      const heap = new MaxHeap();
      heap.add(1);
      expect(heap.peek()).toBe(1);
    });
  });

  describe('when the heap is populated with a few element {1, 3, 5, 6, 8, 9}', () => {
    let heap;
    beforeEach(() => {
      heap = new MaxHeap();
      heap.add(3);
      heap.add(5);
      heap.add(6);
      heap.add(8);
      heap.add(9);
      heap.add(1);
    })

    test('then the heap should be [9, 8, 5, 3, 6, 1]', () => {
      expect(heap.toString()).toBe('[9, 8, 5, 3, 6, 1]');
    })
    test('then the resulting heap min should be 1', () => {
      expect(heap.peek()).toBe(9);
    });

    test('then calling remove removes 1 and the resulting heap is [8, 6, 5, 3, 1]', () => {
      heap.remove();
      expect(heap.toString()).toBe('[8, 6, 5, 3, 1]');
      expect(heap.peek()).toBe(8);
    })
  })

  describe('when a heap is created from an array', () => {
    test('then the resulting heap should maintain its heap properties', () => {
      let heap = new MaxHeap();
      heap.heapify([1, 6, 5, 3, 8, 10, 9]);
      expect(heap.toString()).toBe("[10, 8, 9, 3, 6, 5, 1]")
    })
  })
});