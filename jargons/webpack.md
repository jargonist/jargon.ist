---
title: webpack
tags:
- javascript
---

Webpack bir modül paketleyisidir. Sizin kodunuzu ve o koddakı bağımlılıkları **bundle.js** adında tek bir Javascript dosyasına yazar/paketler (Aslında sadece Javascript bağımlılıklarınızı değil; css, fonts, images gibi bütün statik assetlerinizi paketleyebilir).

Webpack veya benzeri bir modül paketleyicisinin olmadığı bir ortamda, tarayıcı için Javascript yazarken bağımlılıklar şu tarz problemler yaratıyor:

- `<script>` ile eklediğiniz her bağımlılık için bir HTTP isteği yapılıyor.

- Javascript'de ***import/require*** gibi bir statement olmadığı için bağımlılıkları dış dünyaya global değişkenler olarak açıp (export) onları bu şekilde kullanmak zorunda kalıyoruz. (ES2015 ile ***import*** geldi ama çok yaygın değil.)

- Bağımlılıklarınızın bağımlılıklarını, onlardan önce eklemelisiniz. Örneğin **zaa.js** bağımlılığınızın **jQuery** bağımlılığı varsa jQuery'i ondan önce eklemelisiniz.

Bu şekilde birden fazla ve komplex bağımlılıklarınız olduğunda, bunları düzenlemesi, bağımlılık ekleyip/çıkarması tam bir işkence haline geliyor.
