const Memory = require('./memory');

class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0; //how many items you can hold without needing to resize
    this.ptr = Memory.allocate(this.length);
  }

// Push method: resizes the array, then increases the length, and set a single memory address.
// If the length is greater than the capacity, then you resize according to the SIZE_RATIO
// Meaning, each time you go over the capacity, you triple the size of memory which is allocated
// Best case scenario: Don't need to resize, this is a O(1) operation.
// Worst case scenario: Need to resize, this is a O(n) operation.
  push(value) {
    if (this.length >= this._capacity) {
      //resize array so there is space for the new item using the _resize method
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    // set the memory at this.ptr + length to be equal to the value
    Memory.set(this.ptr + this.length, value);
    this.length++;
  }



//  Have to copy each item of data to a new box each time you resize the array. 
// Resize operation has a worst, best, and average case of O(n).
// This copies any existing values from the old to new memory and frees the old chunk of memory.
  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = Memory.allocate(size);
    if (this.ptr === null) {
      throw new Error('Out of memory');
    }
    Memory.copy(this.ptr, oldPtr, this.length);
    Memory.free(oldPtr);
    this._capacity = size;
  }



// Retrieving values
// Adds an index offset and gets the value stored at a memory address.
//  Both are O(1) operations
  get(index){
      if(index < 0 || index >= this.length){
          throw new Error('Index error');
      }
      return Memory.get(this.ptr + index);
  }


//   Popping values
// To pop a value from then end of an array you just pop it off and leave an extra space which will be filled at the next push.
// This is an O(1) operation because it involves just some pointer arithmetic & memory access.
pop(){
    if(this.length === 0){
        throw new Error('Index error');
    }
    const value = Memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
}


// Inserting Values
// Best case: you are inserting the value at the back of the array (same as pushing), performance is O(1).
// Worst case: You are inserting the value at the start of the array. Requires every value to be shifted 1 memory address later, 
// that's n copies, so it is O(n).
// Average case: You are inserting the value into the middle of the array. Need to shift 1/2 of the values along.
// That's n/2 copies, so it is O(n).
insert(index, value){
    if(index < 0 || index >= this.length){
        throw new Error('Index error');
    }
    if(this.length >= this._capacity){
        this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    Memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    Memory.set(this.ptr + index, value);
    this.length++;
}


// Removing Values
// This copies the values backwards to fill the space where you removed the value rather than forwards to make space for a new value.
// Best case: O(1)
// Average and Worst case: O(n)
remove(index){
    if(index < 0 || index >= this.length){
        throw new Error('Index error');
    }
    Memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
    this.length--;
}
}
