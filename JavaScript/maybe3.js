function Maybe(x) {
  this.x = x;
}

Maybe.prototype.map = function(fn) {
  if (this.x && fn) {
    return new Maybe(fn(this.x));
  } else {
    return new Maybe(null);
  }
}

Maybe.prototype.ap = function(maybe) {
  if (maybe) {
    return maybe.map(this.x);
  } else {
    return new Maybe(null);
  }
}

let a = new Maybe(5);
let b = new Maybe(x => x * 2);
let c = b.ap(a).map(console.log);
