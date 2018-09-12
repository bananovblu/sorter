class Sorter {
  constructor() {
    this.sortArray = [];
    this.compare_func = function (left, right) {
      return left - right;
    }
  }

  add(element) {
    this.sortArray.push(element);
  }

  at(index) {
    if(index >= this.sortArray.length){
      return -1;
    }

    return this.sortArray[index];
  }

  get length() {
    return this.sortArray.length;
  }

  toArray() {
    return this.sortArray;
  }

  sort(indices) {
      indices.sort((a, b) => a - b);
      let tArray = [];

      for(let i = 0; i < indices.length; i++){
        tArray.push(this.sortArray[indices[i]]);
      }

      tArray.sort(this.compare_func);

      for(let i = 0; i < indices.length; i++){
          this.sortArray[indices[i]] = tArray[i];
      }

      return this.sortArray;
  }

  setComparator(compareFunction) {
    this.compare_func = compareFunction;
  }
}

module.exports = Sorter;