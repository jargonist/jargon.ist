---
title: higher-order function
sameWith:
- hof
tags:
- javascript
- haskell
- ocaml
- fonksiyonel programlama
---

Argüman olarak fonksiyon alan ve / veya bir fonksiyon return eden fonksiyonlara `higher-order function` denir.

```js
// filterWords bir HOF'tur.
const filterWords = fn => str =>
  str
    .split(' ')
    .filter(fn)
    .join(' ');

// Kullanım
const filterByLength = filterWords(x => x.length > 2);
console.log(filterByLength('bu uzun bir cümle')); // output: uzun bir cümle
```
