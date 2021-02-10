// 1.) Implement an Array class from scratch.

const Memory = require('../Memory/memory');

class Array{
    constructor(){
        this.length = 0;    // set initial length of array to zero
        this._capacity = 0;     // set initial capacity to zero
        this.ptr = Memory.allocate(this.length);    // pointer that points to 0 blocks of memory
    }
}