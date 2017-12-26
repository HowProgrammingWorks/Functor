'use strict';

function Counter() {}

const counter = initial => {
  const f = val => {
    f.count += val;
    Object.keys(f.events)
      .map(key => parseInt(key))
      .filter(n => n <= f.count)
      .forEach(n => {
        f.events[n].forEach(callback => callback(f.count));
        delete f.events[n];
      });
    return f;
  };
  const fields = { count: 0, events: {} };
  Object.setPrototypeOf(f, Counter.prototype);
  Object.assign(f, fields);
  return f(initial);
};

Counter.prototype.on = function(n, callback) {
  const event = this.events[n];
  if (event) event.push(callback);
  else this.events[n] = [callback];
  return this(0);
};

// Usage

const c = counter(10);
c.on(5, val => console.log('Counter > 5, value:', val));
c.on(5, val => console.log('Counter > 5, value:', val));
c.on(25, val => console.log('Counter > 25, value:', val));
c(5);
setTimeout(() => c(15), 100);
