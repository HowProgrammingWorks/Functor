'use strict';

function Maybe(x) {
  this.x = x;
}

Maybe.prototype.map = function(fn) {
  return new Maybe(this.x && fn ? fn(this.x) : null);
};

// Usage

new Maybe(5).map().map(console.log);
new Maybe(5).map(x => x * 2).map(console.log);
new Maybe(null).map(x => x * 2).map(console.log);
