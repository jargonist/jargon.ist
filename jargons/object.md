---
title: object
tags:
- c#
- oop
- class
- instance
---

Nesne tabanlı ya da yönelimli programlama([oop](/oop)) yaklaşımında nesneler, Sınıf([class](/class)) adı verilen veri şablonlarından türetilen somut parçalardır.

```C#
// Ogrenci adında class(sınıf) oluşturuldu.
class Ogrenci
	{
		public string OgrNo;
		public string Adi;
		public string Soyad;
	}
// Ogrenci sınıfından OgrNo, Adi ve Soyadi alanlarına sahip bir nesne olşuturuldu.
Ogrenci ogr1 = new Ogrenci();
ogr1.OgrNo = "12345";
ogr1.Adi = "Ali";
ogr1.Soyadi = "Veli";
// Ogrenci sınıfından aynı veri özelliklerine sahip bir nesne daha olşuturuldu.
Ogrenci ogr2 = new Ogrenci();
ogr2.OgrNo = "98765";
ogr2.Adi = "Ayşe";
ogr2.Soyadi = "İpek";
```
