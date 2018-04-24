---
title: biginteger
tags:
- genel
- veri yapısı
---

[Integer](/integer) veri tipinin hafızasında tutabileceği belli bir [byte](/byte) kapasitesi vardır. Biginteger kütüphanesi, gerekli durumlarda bir değişkendeki byte sınırını kaldırarak,
istediğimiz veriyi o değişkende saklamamıza yardımcı olur.

Örneğin C# ile;

```cs
// using System.Numerics;
// diyerek numeric kutuphanesini koda dahil ettikten sonra
BigInteger result = BigInteger.pow(2,900);

Console.WriteLine(result);
```

diyerek, integer veri tipinin saklayamayacağı büyüklükte bir veri oluşturabiliriz.
