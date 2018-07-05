---
title: IIFE
tags:
- javascript
---

IIFE (Immediately Invoked Function Expression) tanımlandığı anda çalışan bir [JavaScript](/k/javascript) işlevidir. 

```js
  (function() { 
    return 'User Name'
  })();
  // Çıktı: "User Name"
```

IIFE'nin bir değişkene atanması kendisini değil, sonucunu saklar.
```js
  var result = (function() { 
    var user = 'User Name'
    return user;
  })();

  result // Çıktı: "User Name"
```