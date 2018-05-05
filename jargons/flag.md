---
title: flag
tags:
- genel
- programlama
- javascript
---

Bir bayrak (flag), belirli bir operasyona veya yere dikkat çekmeyi amaçlayan her şey için genelleştirilmiş bir terimdir. Bu bayrağın hangi biçime sahip olması gerektiğine veya ne tür bir veriye sahip olması gerektiğine dair bir standart yoktur.

[JavaScript](/javascript) düzenli ifadelerinde ([regular expressions](/regular-expressions)) bayrakları (flag) inceleyecek olursak;

* `g` (global): Evrensel eşleşme. İlk eşleşmeden sonra durmayıp, tüm diğer eşleşmeleri de bulma,
* `i` (ignore case): Büyük-küçük harfleri görmezden gelme durumu,
* `m` (multiline): Birden çok satırda arama yapma durumu,
* `u` [unicode](/unicode),
* `y` [sticky](/sticky),

anlamlarına gelmektedir.

```js
const regex1 = new RegExp('[A-z]+', 'g');
const regex2 = /aranan/m;
```

gibi tanımlanabilirler.
