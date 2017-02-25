'use strict';

function Maybe(x) {
  this.x = x;
  this.isActive = (x || x === 0);
}

Maybe.prototype.map = function(fn) {
  return (this.isActive && fn) ? fn(this.x) : null;
};

Maybe.prototype.ap = function(maybe) {
  return new Maybe(this.map(mbValue => (maybe.map(
    mbFunction => mbFunction(mbValue)
  ))));
};

const a = new Maybe(5);
const f1 = new Maybe(x => x * 2);
const f2 = new Maybe(x => ++x);
a.ap(f1).ap(f2).map(console.log);
