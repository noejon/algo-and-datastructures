const MaxHeap = function () {
  const heap = [];

  /**
   * * Gets the left child index of a parent element
   * The left child is always added at 2*index + 1 
   * @param {number} index  
   * @returns the left child of an element in the heap or undefined  
   */
  const getLeftChildIndex = (index) => 2 * index + 1;

  /**
   * * Gets the right child index of a parent element
   * The right child is always added at 2*index + 2 
   * @param {number} index  
   * @returns the right child of an element in the heap or undefined  
   */
  const getRightChildIndex = (index) => 2 * index + 2;

  /**
   * Returns the index of the parent of an element or undefined
   * Calculation is based on the the children location: 
   * - left = 2 * index + 1 
   * - right = 2 * index + 2
   * That makes the equation for the parent: 
   * - parent = floor((index - 1) / 2)
   * @param {number} index 
   * @returns the parent element or undefined
   */
  const getParentIndex = (index) => {
    if (index === 0) return;
    return Math.floor((index - 1) / 2);
  }

  const bubbleUp = () => {
    let index = heap.length - 1;
    let currentParentIndex = getParentIndex(index);

    while (currentParentIndex !== undefined && heap[currentParentIndex] < heap[index]) {
      [heap[index], heap[currentParentIndex]] = [heap[currentParentIndex], heap[index]];
      index = getParentIndex(index);
      currentParentIndex = getParentIndex(index);
    }
  }

  const bubbleDown = () => {
    let parentIndex = 0;
    let leftChildIndex = getLeftChildIndex(parentIndex);
    let rightChildIndex = getRightChildIndex(parentIndex);

    while ((heap[leftChildIndex] !== undefined && heap[parentIndex] < heap[leftChildIndex])
      || (heap[rightChildIndex] !== undefined && heap[parentIndex] < heap[rightChildIndex])) {
      if (heap[leftChildIndex] === undefined) {
        // Swapping right child with parent
        [heap[rightChildIndex], heap[parentIndex]] = [heap[parentIndex], heap[rightChildIndex]]
        parentIndex = rightChildIndex;
      } else if (heap[rightChildIndex] === undefined) {
        // Swapping left child with parent
        [heap[leftChildIndex], heap[parentIndex]] = [heap[parentIndex], heap[leftChildIndex]]
        parentIndex = leftChildIndex;
      } else {
        // Swapping the child with the lowest value with parent
        const swapChildIndex = heap[leftChildIndex] < heap[rightChildIndex] ? rightChildIndex : leftChildIndex;
        [heap[swapChildIndex], heap[parentIndex]] = [heap[parentIndex], heap[swapChildIndex]]
        parentIndex = swapChildIndex;
      }
      leftChildIndex = getLeftChildIndex(parentIndex);
      rightChildIndex = getRightChildIndex(parentIndex);
    }
  }

  this.peek = () => heap[0];

  this.add = (number) => {
    heap[heap.length] = number;
    bubbleUp();
  }

  this.remove = () => {
    if (heap.length === 0) return;
    // First we swap the first and last element of the heap and reduce the length by one
    [heap[0], heap[heap.length - 1]] = [heap[heap.length - 1], heap[0]];
    heap.length--;
    bubbleDown();
  }

  this.toString = () => {
    let string = '';
    for (let i = 0; i < heap.length; i++) {
      string += `${heap[i]}, `;
    }
    string = `[${string.slice(0, -2)}]`;
    return string;
  }
};

export default MaxHeap;