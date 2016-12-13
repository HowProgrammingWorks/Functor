'use strict';

const mapNull = (fn, x) => x ? fn(x) : null;

function maybe(x) {
  const map = fn => maybe(mapNull(fn, x));
  map.ap = fnA => fnA(fn => mapNull(fn, x));
  map.chain = fnM => fnM(x);
  return map;
}

maybe(5)(x => x * 2)(x => ++x)(console.log);
maybe(5)(x => x * 2).ap(maybe(x => ++x))(console.log);
maybe(5).chain(x => maybe(x * 2))(x => ++x)(console.log);
