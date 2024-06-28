# Array List

See [dynamic array](https://en.wikipedia.org/wiki/Dynamic_array) in Wikipedia.

An array list is a dynamic array that can grow and shrink in size. Unlike fixed-size arrays, it allows for the addition and removal of elements without knowing the number of elements in advance.

## Array List Methods

Here’s a brief description of the methods an array list typically has

### Public methods

- add(element): Adds an element to the end of the list.
- remove(element): Removes the first element that matches a found element.
- insertAt(index, element): Adds the element at the given index;
- removeAt(index): Removes the element at the specified index.
- get(index): Returns the element at the specified index.
- isEmpty(): Checks if the list is empty.
- clear(): Removes all elements from the list.
- toString(): Stringifies the content and returns it;
- getSize(): returns the size of the current elements

### Exposed properties

- size
- capacity
- elements

### Private methods

- grow(): Will double the capacity of the array;
- shrink(): Will divide the capacity by two

### Adding a new element

When a new element is added to the Arraylist while the list is full, it first needs to double the capacity of the list.

### Removing an element

When an element is removed, if the size of the ArrayList is less than a third of the capacity, divide the capacity by two.

### Inserting at

We'll only allow insertingAt up to the Size. Otherwise an error is thrown.

## Implementation

I wanted to get familiar with `prototypes` and closures again so decided to use prototypes for the public methods.
Private methods are implemented in the constructor directly (although those functions are actually accessible elsewhere).

## How to test the array list

- Make sure that you have node installed
- In a terminal run;

```zsh
cd data\ structures/Array\ List
node main.js
```

This will run the main.ts file. That file has some method calls to check that they work. Modify `main.js` if you want to test the ArrayList in another way.
