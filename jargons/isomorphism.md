---
title: isomorphism
tags:
- fonksiyonel programlama
- matematik
- soyut cebir
---

Isomorphism, bir değer ya da değerler kümesinden "biçimi koruyarak" başka bir değer ya da değerler kümesine geçiştir.

Örnek olarak ``map`` işlemi bir isomorphismdir:

```javascript
// 3 elemanlı bir Array
var myArray = [1, 2, 3];

// Result yine 3 elemanlı bir Array olduğu için bu işlem bir isomorphismdir
var result = myArray.map(item => item * 2); // [2, 4, 6];
```

Eğer 2 değer ya da değerler kümesi arasında isomorphism ilişkisi var ise bu değerler *isomorphic*tır.
```
// Bu Arrayler arasında 'map' işlemi uygulayarak birisinden diğerini elde edebileceğimiz için bu 2 Array isomorphictir.
var array1 = [1, 2, 3];
var array2 = [4, 5, 6];

// Aşağıdaki örnekler ise isomorphic değildir
var array1 = [1, 2, 3];
var array2 = [4, 5];
```
