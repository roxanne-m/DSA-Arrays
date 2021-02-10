// 1.) Implement an Array class from scratch.

const Memory = require('../Memory/memory');

class Array {
  constructor() {
    this.length = 0; // set initial length of array to zero
    this._capacity = 0; // set initial capacity to zero
    this.ptr = Memory.allocate(this.length); // pointer that points to 0 blocks of memory
  }

  //Adding a value:  Resize the array to make space for the new item using the _resize method
  push(value) {
    // conditional if statement that checks if length is greater than current capacity, if so, increase size
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    // set the value at a certain memory address
    Memory.set(this.ptr + this.length, value);
    this.length++;
  }

  // Resize function: copies each item of data to a new box every time you resize the array. O(n)
  _resize(size) {
    // set variable to represent old pointer
    const oldPtr = this.ptr;
    // set this.ptr to allocate method from memory to reserve more memory space
    this.ptr = Memory.allocate(size);

    // conditional if statement checking if out of memory
    if (this.ptr === null) {
      throw new Error('Out of memory.');
    }
    // Copy this.ptr, oldPtr, and length from old box to new box using copy method from memory
    Memory.copy(this.ptr, oldPtr, this.length);
    // Free up oldPtr using free method from memory
    Memory.free(oldPtr);
    // Set this._capacity to new size
    this._capacity = size;
  }

  // Retrieving values
  get(index) {
    // conditional statement checking if index is less than 0 or greater than current length, there is an index error
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    // If not, return memory get method passing in the current pointer and returns the value
    return Memory.get(this.ptr + index);
  }

// Popping values O(1)
pop(){
    // conditional statement check if length is zero then there is an error
    if(this.length === 0){
        throw new Error('Index error');
    }
    const value = Memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
}

// Inserting values
insert(index, value){
    // conditional statement checking if index is less than 0 or greater than current length, there is an index error
    if(index < 0 || index >= this.length){
        throw new Error('Index error');
    }
    //  conditional statement checking if length is greater than or equal to capacity, need to resize array
    if(this.length >= this._capacity){
        this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    Memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    Memory.set(this.ptr + index, value);
    this.length++;
}

}

Array.SIZE_RATIO = 3;
