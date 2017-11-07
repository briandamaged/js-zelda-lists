

function single(iterable) {
  const iter = iterable[Symbol.iterator]();

  function createItem(x) {
    if(x.done) {
      return null;
    }

    return {
      value: x.value,
      get next() {
        const n = createItem(iter.next());
        delete this.next;
        this.next = n;
        return n;
      }
    }
  }

  return createItem(iter.next());
}


module.exports = exports = single;
