---
title: instance
tags:
- genel
- programlama
- veri yapısı
---

Nesne tabanlı ya da yönelimli programlama ([OOP](/oop)) yaklaşımında, bir nesnenin ([object](/object)) aynı özellikleri barındıran bir örneği veya kopyasını temsil eder. Daha çok 'instance almak' ifadesiyle anılan bu durum, nesnenin aynı özelliklerini barındıran bir ya da birden fazla örneğinin alınarak kullanılması işlemidir.

```cs
// Personel adında bir class (sınıf) tipinde bir object (nesne) oluşturuldu.
class Personel {
	public string Ad;
	public string Soyad;
	public string TC;
}

// Personel sınıfından Ad, Soyad ve TC alanlarına sahip bir 'instance alındı'!!!
Personel p = new Personel();
p.Ad = "Ali";
p.Soyad = "Veli";
p.TC = "12345678901";
```
