import ArrayList from './src/array-list.js';

(() => {
  console.log('Starting test run for the methods created')

  // Initialising with default capacity of 10
  console.log('Initialising an ArrayList without passing size')

  const testArrayList = new ArrayList();

  console.log('Checking if the initial size is 0:', testArrayList.getSize())
  console.log('Checking if isEmpty is true:', testArrayList.isEmpty())

  // Adding an element
  for (let i = 1; i <= 10; i++) {
    testArrayList.add(i);
    console.log(`element should be added at index ${i - 1}`, testArrayList.elements);
  }

  console.log('Checking if isEmpty is false:', testArrayList.isEmpty())

  testArrayList.add(11);
  console.log(`element should be added at index 11 and the size of the array should be 20`, testArrayList.elements);
  console.log('Checking if the size is 11:', testArrayList.getSize())

  // testing to string
  console.log('Calling to string on the array', testArrayList.toString())

  // Removing an element at random in the middle
  testArrayList.remove(6);
  console.log(`element 6 should be removed`, testArrayList.toString());

  // Removing the last element
  testArrayList.remove(11);
  console.log(`element 11 should be removed`, testArrayList.toString());

  // Removing all the elements
  console.log('Capacity before mass removals', testArrayList.capacity);
  console.log('Should the capacity be affected?', testArrayList.size - 1 < testArrayList.capacity / 3);
  testArrayList.remove(1);
  console.log(`element 1 should be removed`, testArrayList.toString());
  console.log('Capacity after removing 1:', testArrayList.capacity);
  console.log('Should the capacity be affected?', testArrayList.size - 1 < testArrayList.capacity / 3);
  testArrayList.remove(2);
  console.log(`element 2 should be removed`, testArrayList.toString());
  console.log('Capacity after removing 2:', testArrayList.capacity);
  console.log('Should the capacity be affected?', testArrayList.size - 1 < testArrayList.capacity / 3);
  testArrayList.remove(3);
  console.log(`element 3 should be removed`, testArrayList.toString());
  console.log('Capacity after removing 3:', testArrayList.capacity);
  console.log('Should the capacity be affected?', testArrayList.size - 1 < testArrayList.capacity / 3);
  testArrayList.remove(4);
  console.log(`element 4 should be removed`, testArrayList.toString());
  console.log('Capacity after removing 4:', testArrayList.capacity);
  console.log('Should the capacity be affected?', testArrayList.size - 1 < testArrayList.capacity / 3);
  testArrayList.remove(5);
  console.log(`element 5 should be removed`, testArrayList.toString());
  console.log('Capacity after removing 5:', testArrayList.capacity);
  console.log('Should the capacity be affected?', testArrayList.size - 1 < testArrayList.capacity / 3);
  testArrayList.remove(7);
  console.log(`element 7 should be removed`, testArrayList.toString());
  console.log('Capacity after removing 7:', testArrayList.capacity);
  console.log('Should the capacity be affected?', testArrayList.size - 1 < testArrayList.capacity / 3);
  testArrayList.remove(8);
  console.log(`element 8 should be removed`, testArrayList.toString());
  console.log('Capacity after removing 7:', testArrayList.capacity);
  console.log('Should the capacity be affected?', testArrayList.size - 1 < testArrayList.capacity / 3);
  testArrayList.remove(9);
  console.log(`element 9 should be removed`, testArrayList.toString());
  console.log('Capacity after removing 7:', testArrayList.capacity);
  console.log('Should the capacity be affected?', testArrayList.size - 1 < testArrayList.capacity / 3);
  testArrayList.remove(10);
  console.log(`element 10 should be removed`, testArrayList.toString());
  console.log('Capacity after removing 7:', testArrayList.capacity);

  console.log('isEmpty should be true', testArrayList.isEmpty())

  // Testing get when the array is empty
  console.log("getting at index 0 should return undefined", testArrayList.get(0));

  // Testing that adding now that the size of the array is 1 is still working
  testArrayList.add(42);
  console.log(`element 42 should be added`, testArrayList.toString());
  console.log(`capacity should be 1`, testArrayList.capacity);
  testArrayList.add(42);
  console.log(`element 42 should be added`, testArrayList.toString());
  console.log(`capacity should be 2`, testArrayList.capacity);

  // Testing get when a value is present
  console.log("getting at index 0 and 1 should both return 42", testArrayList.get(0), testArrayList.get(1),);

  // Testing insertAt

  // If the index is bigger than the current size an error is thrown
  try {
    testArrayList.insertAt(3, 1998);
  } catch (error) {
    console.log("error was thrown as expected", error.message);
  }

  // If the index is equal to size it just appends the value similarly to add
  testArrayList.insertAt(2, 1998);
  console.log('Added 1998 at the last index', testArrayList.toString())
  console.log('Capacity should have doubled to 4', testArrayList.capacity)

  // If the index is less than size the value is inserted at the right location and the rest of the array list is shifted 
  testArrayList.insertAt(1, 2018);
  console.log('Added 2018 between the 42s', testArrayList.toString())

  // Testing function removeAt
  // If the index is bigger than the current size - 1 an error is thrown
  try {
    testArrayList.removeAt(4);
  } catch (error) {
    console.log("error was thrown as expected", error.message);
  }

  // Removing the first 42
  testArrayList.removeAt(0);
  console.log('Start of the ArrayList should be 2018', testArrayList.toString());

  // Removing all array in items to test the shrinkage
  console.log("capacity before removals", testArrayList.capacity);
  testArrayList.removeAt(2);
  console.log("capacity after removing 1998", testArrayList.capacity);
  testArrayList.removeAt(1);
  console.log("capacity after removing 42", testArrayList.capacity);
  console.log("capacity after removals should be 2", testArrayList.capacity);

  // Testing clear
  testArrayList.clear()
  console.log('clearing all the elements in the array', testArrayList.toString());
  console.log("capacity after removals should be 1", testArrayList.capacity);
  console.log("capacity after removals should be 1", testArrayList.elements);

  console.log('Test finished')
})();
