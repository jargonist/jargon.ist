---
title: boolean
sameWith:
- bool
tags:
- programlama
- matematik
- genel
---

Matematik ve bilgisayar bilimlerinde sadece doğru veya yanlış olabilecek değişken tipine denir. Bu değişkenler sadece **0 ve 1** veya **True ve False** değerlerini alır. Karşılıkları **Doğru ve Yanlış**'tır.

```js
Boolean(10 > 9); // true değerine eşittir
Boolean(10 > 15); // false değerine eşittir
```

Bir değere sahip olmayan (matematiksel olarak boş bir değere sahip olan veya henüz hiç değeri belirlenmemiş) değişkenler `false` değerini alır.

```js
var x = 0;

Boolean(x); // x = false

// veya

var y = '';

Boolean(y); // y = false

// veya

var z;

Boolean(z); // z = false
```
