---
title: functor
sameWith:
- mappable
tags:
- javascript
- haskell
- ocaml
- fonksiyonel programlama
---

Tuttuğu veri üzerinde `map` işlemi yapılabilen yapılara `functor` ismi verilir. JavaScript açısından bakarsak `[Array](/array)` bir functor'dır. **Map**, fonksiyonel programlamada her bir eleman için bir fonksiyonun çalışıp, veri tipinin şekli bozulmadan bu elemanlar topluluğundan yeni bir değerler bütünü elde etmek anlamına gelir. Bu işlem veri kaynağını [mutate](/mutation) etmez, map'lenmiş yeni bir veri tipi daha elde edilir. Örnek olarak `Array.map`'e bakılabilir;

```js
const a = [1, 2, 3];
const b = a.map(x => x * 2);

console.log(b); // output: [2, 4, 6]
```

Dikkat edilmesi gereken herhangi bir veri tipinin functor olabileceğidir. Aşagıdaki örnek de bir functor'dır.

```js
class Thing {
  static of(...args) {
    return new Thing(...args);
  }

  static get [Symbol.species]() {
    return this;
  }

  constructor(...args) {
    this.data = args;
  }

  map(fn) {
    return Thing.of(...this.data.map(fn));
  }
}

// Kullanım
const thing = Thing.of(1, 2, 3);
thing.map(x => console.log(x * 2));
// Output:
// 2
// 4
// 6
```
