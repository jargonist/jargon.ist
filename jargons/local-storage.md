---
title: local-storage
tags:
- javascript
- data
- storage
---

Local Storage, İngilizce'de yerel depo(lama) anlamına gelir. Tarayıcınızda belirlediğiniz datayı tutar. JavaScript'te localStorage:

```
localStorage
// ya da
window.localStorage
```

olarak çalıştırılır. Herhangi bir data var ise bize o datayı döner. 3 adet methodu vardır.

```
localStorage.setItem('key', 'value')
localStorage.getItem('key')
localStorage.removeItem('key')
```

Hepsi isimlerinden anlaşılacağı üzere sırasıyla localStorage için yeni data oluşturmak istediğimizde setItem, oluşturduğumuz datayı çekmek için getItem, oluşturduğumuz datayı silmek için removeItem işlemlerini yaparak ilerleriz.

Yaptığımız işlemlerin kontrolü için `Chrome Developer Tools > Application` Storage başlığı altından Local Storage'e, Mozilla için `Web Developer > Storage Inspector` ve Explorer için `Developer Tools > Debugger` tıklayarak ne tanımlamışız kontrol edebiliriz.
