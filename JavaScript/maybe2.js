function Maybe(x) {
  return function(fn) {
    if (x && fn) {
      return Maybe(fn(x));
    } else {
      return Maybe(null);
    }
  };
}

Maybe(5)(x => x * 2)(console.log);
Maybe(null)(x => x * 2)(console.log);
