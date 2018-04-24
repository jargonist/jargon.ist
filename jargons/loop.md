---
title: loop
sameWith:
- iteration
tags:
- genel
---

Loop, kendini tekrar eden kod parçacığıdır. Örneğin bir [array](/array) içindeki her eleman için çalışacaktır ya da kullanıcı işlemi durdurana kadar çalışmaya devam edecektir.

```php
$array = array(1, 2, 3, 4, 5, 6);

foreach($array as $item) {
  echo $item + 1;
}
```

Yukarıdaki örnekte ise çıktı sırasıyla `2, 3, 4, 5, 6, 7` olacaktır. array içindeki elemanlar tamamlandığında işlem tamamlanmış olacaktır.

Ayrca, [recursion](/recursion) jargonu da incelenebilir.
