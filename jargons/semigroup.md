---
title: semigroup
tags:
- fonksiyonel programlama
- matematik
- soyut cebir
---

Semigroup, üzerinde [associative](/associative) [binary operation](/binary-operation) bulunduran bir [set](/set)'ten meydana gelen yapıdır. Tipik olarak bu binary operation `concat` olarak isimlendirilir.

Örnek olarak; `a`, `b` ve `c` aşağıdaki `concat` işlemini gerçekleştirdiğinde bu bir Semigrouptur.

```js
a.concat(b).concat(c) === a.concat(b.concat(c)); // true (associativity)
```
