'use strict';

function maybe(x) {
  return function(fn) {
    if (x && fn) {
      return maybe(fn(x));
    } else {
      return maybe(null);
    }
  };
}

// Usage

maybe(5)()(console.log);
maybe(5)(x => ++x)(console.log);
maybe(5)(x => x * 2)(console.log);
maybe(null)(x => x * 2)(console.log);
maybe(5)(x => x * 2)(x => ++x)(console.log);
