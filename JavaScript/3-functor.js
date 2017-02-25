'use strict';

function maybe(x) {
  const isActive = (x || x === 0);
  return function(fn) {
    return maybe((fn && isActive) ? fn(x) : null);
  };
}

maybe(5)(x => x * 2)(console.log);
maybe(null)(x => x * 2)(console.log);
maybe(0)(x => ++x)(console.log);
