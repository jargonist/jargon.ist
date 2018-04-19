---
title: webpack
tags:
- javascript
---

Webpack bir modül paketleyicisidir. Sizin kodunuzu ve o koddakı bağımlılıkları **bundle.js** adında tek bir Javascript dosyasına yazar/paketler (Aslında sadece Javascript bağımlılıklarınızı değil; css, fontlar, resimler gibi bütün statik assetlerinizi paketleyebilir).

Webpack veya benzeri bir modül paketleyicisinin olmadığı bir ortamda, tarayıcı için Javascript yazarken bağımlılıklar şu tarz problemler yaratıyor:

- `<script>` ile eklediğimiz her bağımlılık için bir HTTP isteği yapılıyor.

- Javascript'de ***import/require*** gibi bir statement olmadığı için bağımlılıkları dış dünyaya global değişkenler olarak açıp (export) onları bu şekilde kullanmak zorunda kalıyoruz. (ES2015 ile ***import*** geldi ama çok yaygın değil.)

- Bağımlılıklarımızın bağımlılıklarını, onlardan önce eklemek zorunda kalıyoruz. Örneğin **zaa.js** bağımlılığımızın **jQuery** bağımlılığı varsa jQuery'i ondan önce ekleyip, bu şekilde bağımlılıkların sırasını her zaman göz önünde bulundurmak durumunda kalıyoruz.

Bu şekilde birden fazla ve komplex bağımlılıklarımız olduğunda, bunları düzenlemesi, bağımlılık ekleyip/çıkarması tam bir işkence haline geliyor.
