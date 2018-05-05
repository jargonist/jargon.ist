---
title: magical
sameWith:
- magic
tags:
- genel
---

`magic` veya `magical` terimi programlamada kompleks bir işlemi gerçekleştiren bir kodun bu kompleksliği saklayıp, basit bir arayüz ile sunmasına denmektedir. Örnek olarak;

```js
user.findByEmail('test@example.com');
```

Yukarıdaki metodu `findByX` olarak düşünürsek ve `x`'i de veritabanında `user` tablosundaki herhangi bir field olarak planlarsak, `findByEmail` bir `magic` metoddur. Arkaplanda `findByEmail` metotundan `Email` kısmı alınıp [camelCase](/camelcase)'e döndürülüp daha sonra veritabanında email alanında arama yapılmaktadır. `x` yerine veritabanındaki tablodaki herhangi bir field da gelebilmektedir.
