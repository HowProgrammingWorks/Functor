'use strict';

const util = require('util');

function Collector() {
}

util.inherits(Collector, Function);

const collect = (expected) => {
  const collector = (key, value) => {
    if (collector.finished) return collector;
    collector.count++;
    collector.data[key] = value;
    if (value instanceof Error) {
      collector.callback(value, collector.data);
      return collector;
    }
    if (collector.expected === collector.count) {
      collector.callback(null, collector.data);
    }
    return collector;
  };

  const fields = {
    count: 0,
    expected,
    data: {},
    callback: null,
    finished: false
  };

  Object.setPrototypeOf(collector, Collector.prototype);
  return Object.assign(collector, fields);
};

Collector.prototype.done = function(callback) {
  this.callback = callback;
  return this;
};

// Usage

const dc = collect(3).done((err, data) => {
  console.log('Done callback ');
  console.dir({ err, data });
});

dc('key1', 'value1');
dc('key2', 'value2');
dc('key3', 'value3');
