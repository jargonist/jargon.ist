---
title: xhr
sameWith:
- xmlhttprequest
tags:
- javascript
- http
---

**XMLHttpRequest** ifadesinin kısaltmasıdir. [AJAX](/ajax) işlemlerinin temelini oluşturur. 

> **Not**
>
> Genel olarak, [`fetch`](/fetch) uygulama programlama arayüzünün kullanılabildiği yerlerde
> (*hemen hemen her zaman*) [`fetch`](/fetch) kullanmayı `XMLHTTPRequest` kullanmaya tercih
> etmek yerinde olur.
>
> `XMLHTTPRequest`in [`fetch`](/fetch)’e göre farklarından biri: istemin ilerlemesini 
> görüntüleme fırsatı vermesi; diğer bir farkı da istemi sonlandırmaya ([`abort`](abort))
> olanak sağlamasıdır.
>
> Gerek ilerleme raporu sunmak, gerekse istemi sonlandırmak [`fetch`](/fetch) uygulama programlama
> arayüzünün şu anki sürümünde mümkün değildir.

## Referanslar ve Ek Okuma

* [That’s so Fetch (*Jake Archibald*) (*İngilizce*)](https://jakearchibald.com/2015/thats-so-fetch/)
* [`XMLHttpRequest` (*MDN*) (*İngilizce*)](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
* [`fetch` API (*MDN*) (*İngilizce*)]](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

[`fetch`](/fetch) komutunun gelişi ile [deprecated](/deprecated) olmuş sayılabilir.
