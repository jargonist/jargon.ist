---
title: iteration
sameWith:
- loop
tags:
- genel
---

Iteration, terim olarak `tekrarlanma` olsa da aslında programlama içerisinde belirli sayıda tekrarlama durumlarını tanımlar. Yapılacak işlemin kaç kere tekrarlanacağı önceden bellidir. Iteration oluşturmak aslında [loop](/loop) oluşturmaktır.

```php
for ($i = 1; $i <= 10; $i++) {
    echo $i;
}
```
Yukarıdaki örnekte ise çıktı sırasıyla ``1,2,3,4,5,6,7,8,9,10`` olacaktır. `$i` değişkeni 10 değerine ulaştığında kod çalışmayı durduracaktır.

Ayrca [recursion](/recursion) jargonu da incelenebilir
