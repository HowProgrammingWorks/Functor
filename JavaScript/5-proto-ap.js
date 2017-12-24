'use strict';

function Maybe(x) {
  this.x = x;
}

Maybe.prototype.map = function(fn) {
  return (this.x && fn) ? fn(this.x) : null;
};

Maybe.prototype.ap = function(maybe) {
  return new Maybe(this.map(mbValue => (maybe.map(
    mbFunction => mbFunction(mbValue)
  ))));
};

// Usage

const a = new Maybe(5);
const f1 = new Maybe(x => x * 2);
const f2 = new Maybe(x => ++x);
a.ap(f1).ap(f2).map(console.log);
