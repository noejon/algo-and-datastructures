# Heaps: Min-Heap and Max-Heap

## What is a min-heap?

A min heap is a [complete binary tree](../Binary%20Tree/README.md#complete-binary-trees) where each node is less than or equal to its children. The smallest element is at the root.

So the properties of a min-heap are as follow:

> - All levels are fully filled except possibly the last, which is filled from left to right (property of a binary tree)
> - For every node `i`, the value of `i` is less than or equal to the values of its children (property specific to a min-heap)

### Operations on a min-heap

#### Min-heap: Insertion

##### Min-heap: Insertion Process

- Insert the new element at the end of the tree. This maintains the completeness of the tree.
- Compare the element with it's parent and swap if necessary, continuing until the heap property is restored or the element is at the root level. This maintains the heap property.

##### Min-heap: Insertion Time complexity

> Placing the new node at the end of the tree/array runs in `O(1)`.
> The swapping process happens in the worst case on the full height of the tree. That gives us a runtime of `O(log(n))`

##### Min-heap: Insertion Example

Given the following min-heap `[1, 3, 6, 5, 9, 8]` we want to insert `4`

```js
        1
      /   \
     3     6
    / \   / 
   5   9 8
```

After inserting `4`, the array looks like `[1, 3, 6, 5, 9, 8, 4]`

```js
        1
      /   \
     3     6
    / \   / \
   5   9 8   4
```

We now bubble `4` up, swapping it with `6`, the resulting array is `[1, 3, 4, 5, 9, 8, 6]`

```js
        1
      /   \
     3     4
    / \   / \
   5   9 8   6
```

This binary tree is now complete

#### Min-Heap Deletion

##### Min-Heap Deletion Process

##### Min-Heap Deletion Time Complexity

##### Min-Heap Deletion Example

#### Peek

##### Min-Heap Peek Process

Return the value of the root element i.e. the first element of the array representing the complete binary tree.

##### Min-Heap Peek Time Complexity

`O(1)` as accessing the minimum element in the array is always equivalent to accessing the root of the array `array[0]` and this is done in constant-time.

#### Heapify

##### Min-Heap Heapify Process

##### Min-Heap Heapify Time Complexity
