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

Aşağıdaki kurallardan **en az birini** karşılayan fonksiyonlar `higher-order function` olarak adlandırılır.

* Argüman olarak bir veya birden fazla fonksiyon alır.
* Geriye bir fonksiyon return eder.

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
