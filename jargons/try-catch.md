---
title: try-catch
tags:
- programlama
---

Uygulamada, çalışma esnasında ([runtime](/runtime)) oluşan hataları yönetmeye yarayan kod bloklarıdır. Dilden dile kullanım şekilleri değişebilir veya bazı dillerde hiç bulunmayabilir.

```C#
try
{
    //try bloğu arasına hata olması beklenen kodlar eklenir.
    //code
}
catch (Exception ex)
{
    //Oluşan hatalar catch bloğu içinde yakalanır.
    // code
}
finally {
    //finally bloğunda oluşan hatalara göre uygulamanın çalışmasını sürdürmesi için gerekli işlemler yapılır.
    //code
}
```
