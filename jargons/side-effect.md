---
title: side effect
tags:
- javascript
- haskell
- ocaml
- fonksiyonel programlama
---

Side effect terimi kendi kapsamının dışında bulunan herhangi bir [state](/state)'i değiştiren fonksiyonlar için kullanılır.
Eğer bir fonksiyon döndürdüğü değerden bağımsız olarak içinde çağırdığı başka bir fonksiyon sayesinde de [state](/state) güncellemesi yapıyorsa yine side effect yaratır.

Kendisine verilen argümanı güncelleme, dosyaya yazı yazma gibi işlemleri gerçekleştiren fonksiyonlar side effect'e sahiptir.

Örnek olarak;

```js
const arr = [1, 2, 3];

function pushFn(arg1) {
  arg1.push(4);

  return arg1;
}
```

Yukarıdaki fonksiyon side effect yaratmaktadır. Kendi kapsamı dışındaki `arr` değişkenini [mutate](/mutation) etmektedir.
