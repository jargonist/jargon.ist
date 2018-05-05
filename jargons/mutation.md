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

Mutation, programlama dillerinde ana kaynağı oluşturma aşamasından sonra uygulamanın herhangi bir anında
modifiye edilmesi anlamına gelir. [JavaScript](/javascript) özelinde bakacak olarak herhangi bir [array](/array)'e bir eleman eklemek mutation yaratır. Yine JavaScript özelinde [primitive](/primitive) tipler [immutable](/immutable) iken `Array` ve `Object` tipleri mutable'dır.

Mutation örneği:

```js
const obj = {
  user: 'user1',
  email: 'user1@example.com',
};

obj.country = 'TR'; // 'TR'

console.log(obj); // { user: 'user1', email: 'user1@example.com', country: 'TR' }
```
