---
title: local-storage
tags:
- javascript
- data
- storage
---

Local Storage, local İngilizce'de yerel storage ise depolama ve saklama anlamına gelir. Tarayıcınızda set ettiğiniz datayı tutar. Javascript'te localStorage:

```
localStorage
```

olarak çalıştırılır. Herhangi bir data var ise bize o datayı döner. 3 adet methodu vardır.

```
localStorage.setItem('key', 'value') //
localStorage.getItem('key')
localStorage.removeItem('key')
```

Hepsi isimlerinden anlaşılacağı üzere sırasıyla datayı set etmek için setItem, set ettiğimiz datayı çekmek için getItem, set ettiğimiz datayı silmek için removeItem işlemlerini yaparak ilerleriz.

Yaptığımız işlemlerin kontrolü için Developer Tools'tan Application sekmesine tıklayıp Storage fieldı altından Local Storage'e tıklayarak localStorage olarak ne tanımlamışız kontrol edebiliriz.
