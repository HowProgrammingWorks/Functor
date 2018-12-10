'use strict';

const maybe = x => {
  const map = fn => maybe(x ? fn(x) : null);
  const ap = functor => functor.map(f => x && f ? f(x) : null);
  const chain = f => f(x);
  return Object.assign(map, { map, ap, chain });
};

// Usage

const twice = x => x * 2;
const inc = x => ++x;

maybe(5)(twice)(inc)(console.log);
maybe(5).map(twice).map(inc).map(console.log);
maybe(5)(twice).ap(maybe(inc))(console.log);
maybe(5)(twice).ap(maybe())(console.log);
maybe(5).chain(x => maybe(x * 2))(inc)(console.log);
maybe(5).chain(x => maybe(x * 2)).map(inc)(console.log);
