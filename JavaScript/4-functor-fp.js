'use strict';

const maybe = x => fn => maybe(x && fn ? fn(x) : null);

maybe(5)(x => ++x)(console.log);
maybe(5)(x => x * 2)(x => ++x)(console.log);

maybe(5)(null)(console.log);
maybe(null)(x => x * 2)(console.log);
