# Binary trees

## Complete Binary Trees

A complete binary tree is a binary tree with a few specific attributes:

- Every level, except the last, of the tree is fully filled
- The last level of the tree is filled from left to right

```js
        1
      /   \
     2     3
    / \   / 
   4   5 6
```

This makes the tree as compact as possible, making insertions and deletions more efficient. How is it more efficient?

### Balanced height

- A complete binary tree has a minimal height for the number of nodes it contains. For `n` nodes, the height `h` is `O(log(n))`
- Operations depending on the height of the tree, such as insertion, deletion and search can be performed in `O(log(n))`

### Compact storage with predictable access patterns

- The complete binary tree structure allows for efficient storage in an array.
- The array representation means that the tree nodes are stored in contiguous memory locations, leading to faster memory access. Here is how the predictable structure of a binary tree can be accessed with easy math:
  - Parent: Stored at index `i`
  - Left child: Stored at index `2i + 1`
  - Right child: Stored at index `2i + 2`

### Metrics

### Time complexity

- Insertion:
  - runs at `O(1)` average time if we just add a node to the next available position
  - runs at `O(log(n))` if we maintain some balance or structure (see [heap](../Heap/README.md))
- Deletion: deleting an item will incur some cost as the tree will need to be rebalanced. Runs at `O(log(n))`
- Search: `O(n)` in the worst case since we don't keep an order
- Traversal: `O(n)` for visiting all nodes
- Height of the tree: `O(log(n))` coming from the binaryness and the completeness of the tree.

### Space complexity

- Storage: `O(n)` where `n` is the amount of nodes in the binary tree
