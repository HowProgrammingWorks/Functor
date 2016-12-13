'use strict';

let Maybe = x => fn => (x && fn) ? Maybe(fn(x)) : Maybe(null);

Maybe(5)(x => x * 2)(console.log);
Maybe(null)(x => x * 2)(console.log);
