'use strict';

const fp = {};

fp.mapNull = (fn, x) => (x ? fn(x) : null);

fp.maybe = x => {
  const map = fn => fp.maybe(fp.mapNull(fn, x));
  map.ap = fnA => fnA(fn => fp.mapNull(fn, x));
  map.chain = fnM => fnM(x);
  return map;
};

fp.maybe(5)(x => x * 2)(x => ++x)(console.log);
fp.maybe(5)(x => x * 2).ap(fp.maybe(x => ++x))(console.log);
fp.maybe(5).chain(x => fp.maybe(x * 2))(x => ++x)(console.log);

const config = {
  coords: {
    x: 0,
    y: 5,
  },
  velocity: {
    x: 1,
    y: 1,
  },
};

const addVelocity = velocity => coords => {
  coords.x += velocity.x;
  coords.y += velocity.y;
  return coords;
};

const coords = fp.maybe(config.coords);
const velocity = fp.maybe(config.velocity);
coords.ap(velocity(addVelocity))(console.log);
