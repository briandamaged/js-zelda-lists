

function single(iterable) {
  const iter = iterable[Symbol.iterator]();

  function createItem(x) {
    if(x.done) {
      return null;
    }

    return {
      value: x.value,
      get next() {
        if(typeof(this.__next) === 'undefined') {
          this.__next = createItem(iter.next());
        }

        return this.__next;
      }
    }
  }

  return createItem(iter.next());
}


module.exports = exports = single;
