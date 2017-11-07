
const {expect} = require('chai');

const {src} = require('../spec-helper');

const single = src.require('.');


describe('single', function() {
  context('given a finite iterable', function() {

    function *gen() {
      yield "a";
      yield 2;
      yield "C!";
    }

    it('produces a node for each item in the iterable', function() {
      const ll = single(gen());

      expect(ll.value).to.equal("a");
      expect(ll.next.value).to.equal(2);
      expect(ll.next.next.value).to.equal("C!");
    });

    it('terminates with a null', function() {
      const ll = single(gen());
      expect(ll.next.next.next).to.equal(null);
    });

  });


  context('given an infinite iterable', function() {
    function *gen() {
      for(let i = 0;; ++i) {
        yield i;
      }
    }

    it('lazily produces nodes', function() {
      const ll = single(gen());

      expect(ll.value).to.equal(0);
      expect(ll.next.value).to.equal(1);
      expect(ll.next.next.value).to.equal(2);
      expect(ll.next.next.next.value).to.equal(3);
    });
  });

});
