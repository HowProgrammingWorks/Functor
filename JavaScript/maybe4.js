'use strict';

function Maybe(x) {
  let fn = function(fn) {
    if (x && fn) {
      return Maybe(fn(x));
    } else {
      return Maybe(null);
    }
  }

  fn.ap = maybe => maybe.map(x);

  return fn;
}

Maybe(5)(x => x * 2)(console.log);
Maybe(null)(x => x * 2)(console.log);

Maybe(x => x * 2).ap(Maybe(5))(console.log);
