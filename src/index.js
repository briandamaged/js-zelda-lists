
const { injectLazyGetter } = require('lazy-getter');

// Converts iterable into a singly-linked list
function single(iterable) {
  const iter = iterable[Symbol.iterator]();

  function createItem(x) {
    if(x.done) {
      return null;
    }

    const node = {value: x.value};
    injectLazyGetter(node, "next", function() {
      return createItem(iter.next());
    });

    return node;
  }

  return createItem(iter.next());
}

module.exports = exports = single;
