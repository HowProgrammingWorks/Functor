'use strict';

function Path(data) {
  return path => (
    Maybe(path)(path => (
      path.split('.').reduce(
        (prev, key) => (prev[key] || {}),
        (data || {})
      )
    ))
  );
}

function Maybe(x) {
  return fn => (x && fn) ? Maybe(fn(x)) : Maybe(null);
}

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
  config.server.ssl.filename
) {
  let fileName = config.server.ssl.filename;
  fs.readFile(fileName, (err, data) => {
    if (data) {
      console.log();
    }
  });
}

// Functional style:

Path(config)('server.ssl.key.filename')(
  file => fs.readFile(file, (err, data) => {
    Maybe(data)(console.log);
  })
);
