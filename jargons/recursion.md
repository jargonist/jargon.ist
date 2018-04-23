---
title: recursion
sameWith:
- recursive
tags:
- genel
- iteration
---

Bir problemin çözümünü elde etmek için kendini tekrarlayan metodu tanımlama şeklidir.

```js
function fibonacci(x) {
    if(x==0)
    return 1;
    else if(x==1)
    return 1;
    else return (fibonacci(x-1)+fibonacci(x-2));
  }

  let y = fibonacci(8);
  document.write(y);
```
