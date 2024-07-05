import MinHeap from "./min-heap"

describe('Given I create a min heap', () => {
  describe('when initially created', () => {
    test('then the heap empty', () => {
      const minHeap = new MinHeap();
      expect(minHeap.peek()).toBeUndefined();
    });

    test('then calling .add sets the root element to the value passed to .add', () => {
      const minHeap = new MinHeap();
      minHeap.add(1);
      expect(minHeap.peek()).toBe(1);
    });
  });

  describe('when the heap is populated with a few element {1, 3, 5, 6, 8, 9}', () => {
    let heap;
    beforeEach(() => {
      heap = new MinHeap();
      heap.add(3);
      heap.add(5);
      heap.add(6);
      heap.add(8);
      heap.add(9);
      heap.add(1);
    })

    test('then the heap should be [1, 5, 3, 8, 9, 6]', () => {
      expect(heap.toString()).toBe('[1, 5, 3, 8, 9, 6]');
    })
    test('then the resulting heap min should be 1', () => {
      expect(heap.peek()).toBe(1);
    });

    test('then calling remove removes 1 and the resulting heap is [3, 5, 6, 8, 9]', () => {
      heap.remove();
      expect(heap.toString()).toBe('[3, 5, 6, 8, 9]');
      expect(heap.peek()).toBe(3);
    })
  });

  describe('when a heap is created from an array', () => {
    test('then the resulting heap should maintain its heap properties', () => {
      let heap = new MinHeap();
      heap.heapify([1, 6, 5, 3, 8, 10, 9]);
      expect(heap.toString()).toBe("[1, 3, 5, 6, 8, 10, 9]")
    })
  })
});