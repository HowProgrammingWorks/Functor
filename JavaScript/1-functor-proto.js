'use strict';

function Maybe(x) {
  this.x = x;
  this.isActive = (x || x === 0);
}

Maybe.prototype.map = function(fn) {
  if (fn && this.isActive)
    return new Maybe(fn(this.x));
  else
    return new Maybe(null);
};

new Maybe(5).map(x => x * 2).map(console.log);
new Maybe(null).map(x => x * 2).map(console.log);
new Maybe(0).map(x => ++x).map(console.log);
