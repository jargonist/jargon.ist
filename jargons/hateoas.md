---
title: hateoas
tags:
- restful
---

HATEOAS, **Hypermedia as the Engine of Application State**'in kısaltmasıdır. [RESTful](/rest) mimarisini diğer ağ uygulamaları mimarisinden ayıran önemli bir özelliktir.

HATEOAS destekleyen bir sistemde, bir [REST](/rest) isteğinin sonucunda, yaptığınız işlem ile bağlantılı olarak yapabileceğiniz diğer işlemlerin linkleri de gönderilir. Böylece istemci ([client](/client)), sistem hakkında hiçbir bilgisi olmadığı halde bu linkleri takip ederek kolayca sistem ile etkileşime geçebilir. Bir web sitesinde kullanıcının aradığı sayfaya sitedeki bağlantıları tıklayarak ulaşması gibi düşünebilirsiniz.

Daha detaylı anlamak için aşağıdaki örneği ele alalım;

Aşağıdaki [JSON](/json) nesnesi, HATEOAS destekleyen bir sunucuya yapılan HTTP GET işleminin sonucu olabilir.

`GET /hesap/12345`

```json
{
  "hesapNumarası": 12345,
  "name": "jargonist",
  "bakiye": "200.00",
  "link": [
    {
      "rel": "self",
      "href": "/hesap/12345",
      "method": "GET"
    },
    {
      "rel": "transfer",
      "href": "/hesap/12345/transfer",
      "method": "POST"
    }
  ]
}
```

Yukarıda, müşteri numarası bilinen bir hesabın detayını almak için sunucuya sorgu yaptığımızda, sunucu ([server](/server)) hesap detaylarıyla birlikte bu hesapla ilgili yapabileceğimiz işlemlerin detaylarını ve linklerini de verdiğini görüyoruz. Bu mimari sayesinde, bir REST istemci, sadece başlangıç noktası bilinen bir [API](/api) üzerinde, sunucudan sağlanan linkler sayesinde dinamik olarak uygun olan işlemleri keşfedip erişim sağlayabilir.
