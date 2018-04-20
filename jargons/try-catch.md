---
title: try-catch
tags:
- hata yakalama
---

Uygulama çalışma esnasında oluşan hataları yakalamaya yarar.

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
