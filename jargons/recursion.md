---
title: recursion
sameWith:
- recursive
tags:
- genel
---

Bir problemin çözümünü elde etmek için kendini tekrarlayan metodu tanımlama şeklidir. [Bu](/recursion) sayfa [recursion](/recursion)'a örnek gösterilebilir.

```js
function fibonacci(x) {
  if (x <= 1) {
    return 1;
  };
  
  // Burada recursive olarak fibonacci fonksiyonunu tekrar çağırıyoruz.
  return fibonacci(x - 1) + fibonacci(x - 2);
}

const result = fibonacci(8);
console.log(result); // Output: 34
```
