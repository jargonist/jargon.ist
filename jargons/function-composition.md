---
title: function composition
sameWith:
- compose
tags:
- javascript
- haskell
- ocaml
- fonksiyonel programlama
---

Fonksiyonların iç içe birbirini çağırmasına ve süreç esnasında bir önceki fonksiyonun sonucunun bir sonraki fonksiyonda argüman ([argument](/argument)) olarak kullanılmasına `function composition` denir.

<!-- prettier-ignore -->
```js
// Function Composer
const compose = (...fns) => operand => fns.reduce((acc, fn) => fn(acc), operand);

// Helper functions
const add2 = x => x + 2;
const substract7 = x => x - 7;
const multiply4 = x => x * 4;
const divide3 = x => x / 3;
const toInt = x => parseInt(x, 10);
const toAbs = x => Math.abs(x);

// Pipeline
const pipeline = compose(
  add2,
  multiply4,
  divide3,
  substract7,
  toInt,
  toAbs,
);

// Get results for minus ten
console.log(pipeline(-10));

// Output: 17
```
