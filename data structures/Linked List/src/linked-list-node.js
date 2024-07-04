/**
 * 
 * @param {*} value 
 */
const LinkedListNode = function (value = "") {
  this.value = value;
  this.next = null;

  this.push = (value) => {
    const newNode = new LinkedListNode(value);
    let runningNode = this;

    while (runningNode.next !== null) {
      runningNode = runningNode.next;
    }
    runningNode.next = newNode;
  };
}

export default LinkedListNode;