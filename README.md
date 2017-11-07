# Zelda Lists #

Starring Link...ed lists!

## Installation ##

```shell
> npm install zelda-lists
```

## Usage ##

Short story: you can convert any iterable into a Linked List.  For ex:

```javascript
const zelda = require('zelda-lists');

const node = zelda(["foo", "bar"]);

// A node is created for each value
console.log(node.value);      // "foo"
console.log(node.next.value); // "bar"

// The list terminates w/ a null
console.log(node.next.next);  // null
```

This also works for infinite iterables:

```javascript
const zelda = require('zelda-lists');

// Returns an infinite iterable
function *gen() {
  for(let i = 0;; ++i) {
    yield i;
  }
}

const node = zelda(gen());

// Feel free to continue w/ this line of testing until you're convinced...
console.log(node.value);                // 0
console.log(node.next.value);           // 1
console.log(node.next.next.value);      // 2
console.log(node.next.next.next.value); // 3
```
