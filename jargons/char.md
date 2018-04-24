---
title: char
sameWith:
- character
tags:
- genel
- programlama
- c
---

`Character` sınıfı, kaynak programda kullanılan bütün harf, rakam ve diğer simgelerin kümesidir. O kümenin her bir öğesini [char](/char) diye adlandırıyoruz. [Java](/k/java) dili, karekterleri [Unicode](/unicode) diye adlandırılan ve uzunluğu 2 [byte](/byte) (16 [bit](/bit)) olan sistemle belirler. Bu nedenle 1 byte (8 bit)'lık sistemlerde olduğu gibi yalnızca İngiliz alfabesini değil, Türkçe, Arapça, Çince, Japonca, Rusça, İbranice vb. bütün dillerin alfabelerindeki harfleri içine alır.

`char` ise ilkel ([primitive](/primitive)) bir veri tipidir. Character sınıfı char veri tipini sarmalar. Character sınıfının char tipinden bir bileşeni (veri alanı) vardır. char veri tipinden bir değişken, belli bir anda bir tek karekter tutabilir. Karekterler tek tırnak (' ') içinde yazılır. Karekter bildirimi, genel değişken bildirimi kuralına uyar:

```c
char karakter = 'K';
printf("Karakter: %c\n", karakter); // K

char karakterAscii = 75;
printf("Karakter: %c\n", karakterAscii); // K, karakterin ascii değerini girerek de aynı sonucu elde edebiliriz.

char karakterDizisi[10] = "Jargon";
printf("Dizi: %s", karakterDizisi); // Jargon
printf("Karakter dizisinin 1. karakteri: %c", karakterDizisi[0]); // J
```
