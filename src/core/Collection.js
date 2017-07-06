class Collection {
  constructor(data = []) {
    this.data = data;
    this.count = data.length;
  }

  has(item) {
    return this.data.indexOf(item) > -1;
  }

  add(item) {
    if (!this.has(item)) {
      this.count = this.count + 1;
      this.data.push(item);
    }
    return this;
  }

  remove(item) {
    if (this.has(item)) {
      this.data.splice(this.data.indexOf(item), 1);
      this.count = this.count - 1;
    }
  }

  removeFirst() {
    this.data.shift();
    this.count = this.count - 1;
  }

  size() {
    return this.count;
  }
}

export default Collection;
