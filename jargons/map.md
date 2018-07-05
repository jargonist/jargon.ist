---
title: map
tags:
- javascript
- haskell
- fonksiyonel programlama
---

**map**, fonksiyonel programlamada her bir eleman için bir fonksiyonun çalışıp, veri tipinin şekli bozulmadan bu elemanlar topluluğundan yeni bir değerler bütünü elde etmek anlamına gelir. Bu işlem veri kaynağını [mutate](/mutation) etmez, map'lenmiş yeni bir veri tipi daha elde edilir. Örnek olarak `Array.map`'e bakılabilir;

```js
const a = [1, 2, 3];
const b = a.map(x => x * 2);

console.log(a); // [1, 2, 3]
console.log(b); // [2, 4, 6]
```
