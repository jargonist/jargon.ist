---
title: pure function
tags:
- javascript
- haskell
- ocaml
- fonksiyonel programlama
---

Verilen argümanlar ([argument](/argument)) için **her zaman** aynı çıktıyı veren fonksiyonlara denir. Herhangi bir [side effect](/side-effect) oluşturmaz.

```js
function add(x, y) {
  return x + y;
}
```

Yukarıdaki fonksiyon verilen `x` ve `y` argümanları için **her zaman** aynı sonucu döndürecektir.
