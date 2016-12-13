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
