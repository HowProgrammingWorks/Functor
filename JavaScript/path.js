'use strict';

global.api = {};

api.fp = {};

api.fp.path = data => (
  path => (
    api.fp.maybe(path)(path => (
      path.split('.').reduce(
        (prev, key) => (prev[key] || {}),
        (data || {})
      )
    ))
  )
);

api.fp.maybe = x => fn => api.fp.maybe(x && fn ? fn(x) : null);

// Usage example:

const fs = require('fs');

let config = {
  server: {
    host: {
      ip: '10.0.0.1',
      port: 3000
    },
    ssl: {
      key: {
        filename: './path.js'
      }
    }
  }
};

// Imperative style:

if (
  config &&
  config.server &&
  config.server.ssl &&
  config.server.ssl.key &&
  config.server.ssl.key.filename
) {
  let fileName = config.server.ssl.key.filename;
  fs.readFile(fileName, (err, data) => {
    if (data) {
      console.log();
    }
  });
}

// Functional style:

api.fp.path(config)('server.ssl.key.filename')(
  file => fs.readFile(file, (err, data) => {
    api.fp.maybe(data)(console.log);
  })
);
