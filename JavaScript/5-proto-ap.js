'use strict';

function Maybe(x) {
  this.x = x;
}

Maybe.prototype.map = function(fn) {
  const res = (this.x && fn) ? fn(this.x) : null;
  return res instanceof Maybe ? res : new Maybe(res);
};

Maybe.prototype.ap = function(functor) {
  return this.map(val => functor.map(f => f(val)));
};

// Usage

const a = new Maybe(5);
const f1 = new Maybe(x => x * 2);
const f2 = new Maybe(x => ++x);

a.ap(f1).ap(f2).map(console.log);

