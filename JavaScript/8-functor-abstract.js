'use strict'

let Functor = fmap => (function next(x) {
  let cell = fn => next(fmap(fn, x));
  cell.finish = f => f(x);
  return cell;
});

let fmap = (fn, x) => x !== undefined && x !== null ? fn(x) : x;

let Maybe  = Functor(fmap);
let FArray = Functor((f, arr) => arr.map(f));
let Either = Functor((f, x) => x instanceof Error ? x : f(x));
let Tree   = Functor(
  (f, { elem, left, right }) => ({
    elem : fmap(f, elem),
    left : fmap(tree => tree(f), left),
    right: fmap(tree => tree(f), right),
  })
);

// Maybe
console.log('Just 4:');
Maybe(4)(x => x * 2)(x => console.log(x));

console.log('Nothing:');
Maybe(null)(x => x * 2)(x => console.log(x));

// FArray
FArray([])(x => x * 2)(x => console.log(x));

console.log('[1]:');
FArray([1])(x => x * 2)(x => console.log(x));

console.log('[1, 2, 3, 4, 5]:');
FArray([1, 2, 3, 4, 5])(x => x * 2)(x => console.log(x));

// Either
let check = x => Either(x >= 0 && x <= 1 ? x : new Error('Invalid range'));
let trans = x => x * 255;

console.log('No error:');
check(0.25)(trans)(x => x * 2 - 256).finish(x => console.log(x));

console.log('With error:');
check(-0.1)(trans)(x => x * 2 - 256).finish(x => console.log(x));

console.log('Error but still can act');

// Tree
console.log('Empty tree:');
console.log(Tree({})(x => x * 2)(x => console.log(x)));

console.log('One tree:');
Tree({ elem: 5 })(x => x * 2)(x => console.log(x));

console.log('Two level tree:');
let left = Tree({ elem: 3 });
let right = Tree({ elem: 8 });
Tree({ elem: 5, left, right })(x => x * 2)(x => console.log(x));

