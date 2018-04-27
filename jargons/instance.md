---
title: instance
tags:
- genel
- programlama
- veri yapısı
---

Nesne tabanlı ya da yönelimli programlama ([oop](/oop)) yaklaşımında, bir nesnenin ([object](/object)) aynı özellikleri barındıran bir örneği veya kopyasını temsil eder. Daha çok 'instance almak' ifadesiyle anılan bu durum, nesnenin aynı özelliklerini barındıran bir ya da birden fazla örneğinin alınarak kullanılması işlemidir.

```C#
// Personel adında bir class(sınıf) tipinde bir object(nesne) oluşturuldu.
class Personel
	{
		public string Adi;
		public string Soyad;
		public string TC;
	}
// Personel sınıfından Adi, Soyadi ve TC alanlarına sahip bir 'instance alındı'!!!
Personel p = new Personel();
p.Adi = "Ali";
p.Soyadi = "Veli";
p.TC = "12345678901";
```
