---
title: argument
sameWith:
- parameter
- parametre
tags:
- genel
---

Argument, bir fonksiyona gönderilebilen ve fonksiyon tarafından işlenebilen değerdir. ``parameter`` ya da ``parametre`` olarak da kullanılır. 

```php
//Parametre (argument) kullanan fonksiyon
function arraylari_bolelim($argument) {
  foreach($argument as $arr){
    echo $arr + 1;
  }
}

$sayi_array = array(1,2,3,4,5,6); // parametre
arraylari_bolelim($sayi_array);
```
Yukarıdaki örnekte ise çıktı sırasıyla ``2,3,4,5,6,7`` olacaktır. array olarak gönderdiğimiz argument içindeki elemanlar fonksiyon tarafından işlenecektir.

Burada referans olarak kullandığımız [array](/array) jargonunu da kontrol etmek isteyebilirsiniz.
