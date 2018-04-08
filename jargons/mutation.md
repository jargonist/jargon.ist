---
title: mutation
sameWith:
- mutate
- mutable
- mutability
- mutate etmek
tags:
- javascript
- haskell
- ocaml
- fonksiyonel programlama
---

Mutation programlama dillerinde ana kaynağı oluşturma aşamasından sonra uygulamanın herhangi bir anında
modifiye etmek anlamına gelir. JavaScript özelinde bakacak olarak herhangi bir array'a bir eleman push'lamak
mutation yaratır. Yine JavaScript özelinde [primitive](/primitive) tipler [immutable](/immutable)
iken `Array` ve `Object` tipleri mutable'dır.

Mutation örneği;

```js
const obj = {
  user: 'user1',
  email: 'user1@example.com',
};

obj.country = 'TR'; // Burada mutation yarattık.
```
