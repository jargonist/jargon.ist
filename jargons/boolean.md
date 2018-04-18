---
title: boolean
tags:
- programlama
- matematik
- genel
---

Matematik ve Bilgisayar bilimlerinde sadece doğru veya yanlış olabilecek değişken tipine denir. Bu değişkenler sadece **0 ve 1** veya **True ve False** değerlerini alır. Karşılıkları **Doğru ve Yanlış**'tır.

```js
Boolean(10 > 9)(
  // true değerine eşittir

  10 > 9,
)(
  // true değerine eşittir

  10 > 15,
); // false değerine eşittir

// Bir değere sahip olmayan(Matematiksel olarak boş bir değere sahip olan veya henüz hiç değeri belirlenmemiş) değişkenler false değerini alır.

var x = 0;

Boolean(x); // x = false

//veya

var x = '';

Boolean(x); // x = false

//veya

var x;

Boolean(x); // x = false
```
