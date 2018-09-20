class Sorter {
  constructor() {
    this.array = new Array();
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
    let sortIndices = false;
    for (let i = 0; i < indices.length-1; i++) {
      for (let j = i + 1; j < indices.length; j++) {
        if (indices[i] > indices[j]) {
          let temp = indices[i];
          indices[i] = indices[j];
          indices[j] = temp;
        }
      }
    }
    if (this.compareFunction !== undefined) { 
      let testFunction = this.compareFunction(1, 0);
      let isReverse = false;
      if (testFunction === -1) {
        isReverse = true;
      }
      for (let i = 0; i < indices.length - 1; i++) {
        for (let j = i + 1; j < indices.length; j++) {
          if ((this.compareFunction(this.array[indices[i]], this.array[indices[j]]) > 0 && !isReverse) ||
              (this.compareFunction(this.array[indices[i]], this.array[indices[j]]) > 0 && isReverse)) {
            let temp = this.array[indices[j]];
            this.array[indices[j]] = this.array[indices[i]];
            this.array[indices[i]] = temp;
          }else{
            continue;
          }
        }
      }
    } else {
      for (let i = 0; i < indices.length-1; i++) {
        for (let j = i + 1; j < indices.length; j++) {
          if (this.array[indices[i]] <= this.array[indices[j]]) {
            continue;
          }else{
            let temp = this.array[indices[j]];
            this.array[indices[j]] = this.array[indices[i]];
            this.array[indices[i]] = temp;
          }
        }
      }
    }
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;