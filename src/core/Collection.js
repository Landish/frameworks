class Collection {
  constructor(data = []) {
    this.data = data;
    this.count = data.length;
  }

  /***
   * Check if Collection has give item.
   *
   * @param item
   * @returns {boolean}
   */
  has(item) {
    return this.data.indexOf(item) > -1;
  }

  /**
   * Add unique item to Collection.
   *
   * @param item
   * @returns {Collection}
   */
  add(item) {
    if (!this.has(item)) {
      this.count = this.count + 1;
      this.data.push(item);
    }
    return this;
  }

  /***
   * Remove item from Collection.
   *
   * @param item
   * @returns {Collection}
   */
  remove(item) {
    if (this.has(item)) {
      this.data.splice(this.data.indexOf(item), 1);
      this.count = this.count - 1;
    }

    return this;
  }

  /***
   * Remove first item from Collection.
   *
   * @returns {Collection}
   */
  removeFirst() {
    if (this.count > 0) {
      this.data.shift();
      this.count = this.count - 1;
    }

    return this;
  }

  /***
   * Return total size of Collection items.
   *
   * @returns {*}
   */
  size() {
    return this.count;
  }

  /**
   * Return all elements from Collection.
   *
   * @returns {Array|*}
   */
  all() {
    return this.data;
  }
}

export default Collection;
