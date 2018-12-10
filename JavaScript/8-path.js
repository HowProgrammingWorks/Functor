'use strict';

const fp = {};

fp.path = data => (
  path => (
    fp.maybe(path)(path => (
      path.split('.').reduce(
        (prev, key) => (prev[key] || {}),
        (data || {})
      )
    ))
  )
);

fp.maybe = x => fn => fp.maybe(x && fn ? fn(x) : null);

// Usage

const fs = require('fs');

const config = {
  server: {
    host: {
      ip: '10.0.0.1',
      port: 3000
    },
    ssl: {
      key: {
        filename: './7-path.js'
      }
    }
  }
};

// Imperative style

if (
  config &&
  config.server &&
  config.server.ssl &&
  config.server.ssl.key &&
  config.server.ssl.key.filename
) {
  const fileName = config.server.ssl.key.filename;
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (data) console.log();
  });
}

// Functional style

fp.path(config)('server.ssl.key.filename')(
  file => fs.readFile(file, 'utf8', (err, data) => {
    fp.maybe(data)(console.log);
  })
);
