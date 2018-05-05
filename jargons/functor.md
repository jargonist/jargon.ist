---
title: functor
sameWith:
- mappable
tags:
- javascript
- haskell
- fonksiyonel programlama
---

Tuttuğu veri üzerinde [map](/map) işlemi yapılabilen yapılara `functor` ismi verilir. [JavaScript](/javascript) açısından bakarsak [Array](/array) bir functor örneğidir. Dikkat edilmesi gereken nokta, [map](/map) kuralını sağlayan herhangi bir veri tipinin functor olabileceğidir. Aşagıdaki örnek de bir functor'dır.

```js
class Thing {
  static of(...args) {
    return new Thing(...args);
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

**Dikkat:** Her map isminde metodu bulunan veri tipi bir functor değildir! Bu map metodu ayni zamanda [map](/map) özelliklerini de sağlamalıdır.
