'use strict';

function Maybe(x) {
  this.x = x;
}

Maybe.prototype.map = function(fn) {
  return (this.x && fn) ? new Maybe(fn(this.x)) : new Maybe(null);
};

new Maybe(5).map(x => x * 2).map(console.log);
new Maybe(null).map(x => x * 2).map(console.log);
