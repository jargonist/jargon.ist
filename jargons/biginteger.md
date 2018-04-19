---
title: biginteger
tags:
- genel
- veri yapısı
---

Integer veri tipinin hafızasında tutabileceği belli bir byte kapasitesi vardır. Biginteger kütüphanesi, gerekli durumlarda bir değişkendeki byte sınırını kaldırarak,
istediğimiz veriyi o değişkende saklamamıza yardımcı olur.

Örneğin C# ile;

```C#
// using System.Numerics;
// diyerek numeric kutuphanesini koda dahil ettikten sonra
BigInteger result = BigInteger.pow(2,900);

Console.WriteLine(result);
```

diyerek, integer veri tipinin saklayamayacağı büyülükte bir veri oluşturabiliriz.
