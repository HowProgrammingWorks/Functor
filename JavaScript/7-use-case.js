'use strict';

const maybe = x => {
  const map = fn => maybe(x ? fn(x) : null);
  map.ap = functor => functor(f => x && f ? f(x) : null);
  return map;
};

// Usage

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

const coords = maybe(config.coords);
const velocity = maybe(config.velocity);

coords.ap(velocity(addVelocity))(console.log);
