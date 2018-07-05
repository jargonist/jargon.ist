---
title: amd
tags:
- javascript
- modules
---

**Asenkron Modül Tanımlaması** _(Asynchronous Module Definition)_ ifadesinin kısaltmasıdır. Tarayıcıların ihtiyaç yönetimini [dependency management](/dependency-management) yapabilmesi için geliştirilmiş bir yöntemdir.

```js
require(['x.js', 'y.js', 'z.js'], function(x, y, z) {
  // x, y, z yüklendi.
});
```

Yeni teknolojilerle birlikte ihtiyaç azalmıştır. Alternatif olarak [CommonJS](/commonjs) incelenebilir.
