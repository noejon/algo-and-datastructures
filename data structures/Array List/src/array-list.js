

const ArrayList = function (capacity = 10) {
  // Those elements are not really private as they can be accessed.
  // For the purpose of this exercise we consider those private
  // And prototype extension as public 
  this.elements = new Array(capacity);
  this.capacity = capacity;
  this.size = 0;

  const getResizedArray = function (currentArray, size, capacity) {
    const resizedArray = new Array(capacity);
    for (let i = 0; i < size; i++) {
      resizedArray[i] = currentArray[i];
    }
    return resizedArray;
  }

  this.grow = function () {
    this.capacity = this.capacity * 2;
    this.elements = getResizedArray(this.elements, this.size, this.capacity)
  };

  this.shrink = function () {
    this.capacity = Math.floor(this.capacity / 2);
    this.elements = getResizedArray(this.elements, this.size, this.capacity)
  };
}

ArrayList.prototype.getSize = function () {
  const _this = this;
  return (function () { return _this.size; })();
}

ArrayList.prototype.add = function (element) {
  const _this = this;
  (function () {
    // First we check if we need to grow the capacity of the ArrayList
    if (_this.size === _this.capacity) {
      _this.grow()
    }
    _this.elements[_this.size] = element;
    _this.size++;
  })();
};

ArrayList.prototype.get = function (index) {
  const _this = this;
  return (function () {
    if (index >= _this.size) {
      return;
    }
    return _this.elements[index];
  })();
};

ArrayList.prototype.remove = function (element) {
  const _this = this;
  (function () {
    let elementFound = false;
    let i = 0;
    while (!elementFound && i < _this.size) {
      // Let's assume we don't get an object here, as we'd need to implement a deepEqual here
      // which is out of scope
      if (_this.elements[i] === element) {
        elementFound = true;
        _this.size--;
        let j = i;
        while (j < _this.size) {
          [_this.elements[j]] = [_this.elements[j + 1]];
          j++;
        }
        _this.elements[_this.size] = undefined;
      }
      i++;
    }

    if (_this.size < _this.capacity / 3) {
      _this.shrink();
    }
  })()
};
ArrayList.prototype.insertAt = function (index, element) {
  const _this = this;
  (function () {
    if (_this.size < index) {
      throw new Error(`Provided index(${index}) is out of range. Max index is ${_this.size}`);
    }
    // first we need to grow the capacity if the ArrayList needs to grow
    if (_this.size === _this.capacity) {
      _this.grow();
    }

    let i = _this.size;
    _this.elements[_this.size] = element;

    while (i > index) {
      [_this.elements[i - 1], _this.elements[i]] = [_this.elements[i], _this.elements[i - 1]];
      i--;
    }
    _this.size++;
  })();
};


ArrayList.prototype.removeAt = function (index) {
  const _this = this;
  (function () {
    if (_this.size - 1 < index) {
      throw new Error(`Index ${index} is out of bounds. Max value is ${_this.size - 1}`);
    }
    _this.elements[index] = undefined;

    for (let i = index; i < _this.size; i++) {
      [_this.elements[i], _this.elements[i + 1]] = [_this.elements[i + 1], _this.elements[i]];
    }
    _this.size--;

    // Decrease the capacity if necessary
    if (_this.size < _this.capacity / 3) {
      _this.shrink();
    }
  })();
};

ArrayList.prototype.clear = function () {
  const _this = this;
  (function () {
    _this.capacity = 1;
    _this.elements = new Array(_this.capacity);
  })();
};

ArrayList.prototype.isEmpty = function () {
  const _this = this;
  return (function () {
    return _this.size === 0
  })();
};

ArrayList.prototype.toString = function () {
  const _this = this;
  return (function () {
    let stringifiedList = '';
    for (let i = 0; i < _this.size; i++) {
      stringifiedList = `${stringifiedList}${_this.elements[i]}, `;
    }
    if (stringifiedList !== '') {
      stringifiedList = `[${stringifiedList.slice(0, -2)}]`;
    }
    return stringifiedList;
  })();
};


export default ArrayList;