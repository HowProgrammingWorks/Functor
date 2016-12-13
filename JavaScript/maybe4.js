'use strict';

function maybe(x) {
  let map = fn => (x && fn) ? fn(x) : null;

  map.ap = map2 => (
    maybe(
      map(
        mbValue => (
          maybe(map2)(
            mbFunction => mbFunction(mbValue)
          )
        )
      )
    )
  );

  return map;
}

maybe(5).ap(x => ++x)(console.log);
maybe(5).ap(x => x * 2).ap(x => ++x)(console.log);

/*
let a = maybe(7);
let f1 = maybe(x => x * 2);
let f2 = maybe(x => ++x);
a.ap(f1).ap(f2)(console.log);
*/