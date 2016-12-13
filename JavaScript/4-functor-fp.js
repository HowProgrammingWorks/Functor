'use strict';

global.api = {};
api.fp = {};

api.fp.maybe = x => fn => api.fp.maybe(x && fn ? fn(x) : null);

api.fp.maybe(5)(x => ++x)(console.log);
api.fp.maybe(5)(x => x * 2)(x => ++x)(console.log);

api.fp.maybe(5)(null)(console.log);
api.fp.maybe(null)(x => x * 2)(console.log);
