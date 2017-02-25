'use strict';

global.api = {};
api.fp = {};

api.fp.maybe = (x) => {
  const isActive = (x || x === 0);
  return fn => api.fp.maybe((fn && isActive) ? fn(x) : null);
};

api.fp.maybe(5, true)(x => ++x)(console.log);
api.fp.maybe(5, true)(x => x * 2)(x => ++x)(console.log);

api.fp.maybe(5)(null)(console.log);
api.fp.maybe(null)(x => x * 2)(console.log);

api.fp.maybe(0)(x => ++x)(console.log);
