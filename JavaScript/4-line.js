'use strict';

const maybe = x => fn => maybe(x && fn ? fn(x) : null);

// Usage

maybe(5)()(console.log);
maybe(5)(x => ++x)(console.log);
maybe(5)(x => x * 2)(console.log);
maybe(null)(x => x * 2)(console.log);
maybe(5)(x => x * 2)(x => ++x)(console.log);
