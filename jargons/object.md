---
title: object
tags:
- genel
- programlama
- veri yapısı
---

Nesne tabanlı ya da yönelimli programlama ([OOP](/oop)) yaklaşımında nesneler, sınıf ([class](/class)) adı verilen veri şablonlarından türetilen somut parçalardır.

```cs
// Ogrenci adında class (sınıf) oluşturuldu.
class Ogrenci {
	public string OgrNo;
	public string Ad;
	public string Soyad;
}

// Ogrenci sınıfından OgrNo, Ad ve Soyad alanlarına sahip bir nesne olşuturuldu.
Ogrenci ogr1 = new Ogrenci();
ogr1.OgrNo = "12345";
ogr1.Ad = "Ali";
ogr1.Soyad = "Veli";

// Ogrenci sınıfından aynı veri özelliklerine sahip bir nesne daha olşuturuldu.
Ogrenci ogr2 = new Ogrenci();
ogr2.OgrNo = "98765";
ogr2.Ad = "Ayşe";
ogr2.Soyad = "İpek";
```
