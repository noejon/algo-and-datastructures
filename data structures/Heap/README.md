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
- Bubble up: Compare the element with it's parent and swap if necessary, continuing until the heap property is restored or the element is at the root level. This maintains the heap property.

##### Min-heap: Insertion Time complexity

> Placing the new node at the end of the tree/array runs in `O(1)`.
> The bubble up process happens in the worst case on the full height of the tree. That gives us a runtime of `O(log(n))`

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

The common deletion operation of a min-heap deletes the element at the root of the heap. For a min-heap, the min element is deleted.

##### Min-Heap Deletion Process

- Swap the first (element to remove) and last element of the heap
- Delete the last element of the array
- Bubble down: Compare the element with its children and swap with the smaller child, until the heap property is satisfied or if the element becomes a leaf.

##### Min-Heap Deletion Time Complexity

> Swapping the root node with the last node is done in constant time
> Removing the last element of the array is also done in constant time
> The bubble down process happens in the worst case on the full height of the tree. That gives us a runtime of `O(log(n))`

##### Min-Heap Deletion Example

Given the following min-heap `[1, 3, 6, 5, 9, 8]` we want to remove an item

```js
        1
      /   \
     3     6
    / \   / 
   5   9 8
```

First first and last elements are swapped

```js
        8
      /   \
     3     6
    / \   / 
   5   9 1
```

Then the last element is removed from the array

```js
        8
      /   \
     3     6
    / \   
   5   9 
```

Finally the bubble down process is started

```js
        8             3             3
      /   \         /   \         /   \
     3     6  =>   8     6  =>   5     6
    / \           / \           / \
   5   9         5   9         8   9
```

#### Peek

##### Min-Heap Peek Process

Return the value of the root element i.e. the first element of the array representing the complete binary tree.

##### Min-Heap Peek Time Complexity

> `O(1)` as accessing the minimum element in the array is always equivalent to accessing the root of the array `array[0]` and this is done in constant-time.

#### Heapify

Different methods can be used to heapify an array:

- Creating a new empty heap and add each element of the initial array through the heap `add` method.
- Using a bottom up method, starting from the last parent a calling bubble down on each node.

##### On creating a new heap

Creating a new heap is not really efficient, neither in space, as we'll need to create a new heap which will hold `O(n)` space. Nor in terms of complexity, as we'll have to loop through each item in the array (`O(n)`) and call the add method on it (`O(log(n))`). This has an overall complexity of `O(n log(n))`.
To avoid the creating a new heap, we could us a top down method using the bubble up method on the array in place. That would reduce the space to `O(1)` but the complexity will remain `O(n log(n))` as we'll still have to iterate through all the elements in the array.

Can we do better?

- In terms of space, we could change the array in place rather than creating a new array for the heap to have a space of `O(1)`
- In terms of complexity let's see how the bottom up approach fares

##### Bottom up approach

Deeper elements in the tree require fewer comparisons and swaps as they are closer to the leaves. A a given depth `d` there will only be 2<sup>d</sup> elements at a maximum depth of `log(n)`. This means that the overall complexity for this method is `O(n)` which is better than the top-down approach

##### Min-Heap Heapify Process

Using the bottom up approach the process is as follows:

- Find the last non leaf node:
  - That would be the node at `floor(n/2) - 1` (or `floor(n-2/2)`)
- Start iterating from that node, all the way back to the root level
- Apply the bubble down method on each subtree. Each subtree will then satisfy the heap property

##### Min-Heap Heapify Time Complexity

> As explained in the [Bottom up approach section](#bottom-up-approach), the complexity will be `O(n)`
