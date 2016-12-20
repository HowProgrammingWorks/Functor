'use strict';

global.api = {};

api.fp = {};

api.fp.mapNull = (fn, x) => x ? fn(x) : null;

api.fp.maybe = x => {
  const map = fn => api.fp.maybe(api.fp.mapNull(fn, x));
  map.ap = fnA => fnA(fn => api.fp.mapNull(fn, x));
  map.chain = fnM => fnM(x);
  return map;
};

api.fp.maybe(5)(x => x * 2)(x => ++x)(console.log);
api.fp.maybe(5)(x => x * 2).ap(api.fp.maybe(x => ++x))(console.log);
api.fp.maybe(5).chain(x => api.fp.maybe(x * 2))(x => ++x)(console.log);

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

const coords = api.fp.maybe(config.coords);
const velocity = api.fp.maybe(config.velocity);
coords.ap(velocity(addVelocity))(console.log);
