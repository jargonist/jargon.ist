---
title: shorthand
tags:
- syntax
---

Sözdiziminin ([syntax](/syntax)) desteklediği durumda kodun daha kısa yazılmasına denir.

```js
var value = 5;
var newValue = 0;

if(value > 3){
    var newValue = 0;
}else{
    var newValue = 1;
}
```

Yukarıdaki örnekte değer ataması için yapılan kontrol, aşağıdaki örnekte sözdiziminin desteklediği `shorthand-if` ile yapılmıştır. 

```js
var newValue = value > 3 ? 0 : 1;
```
