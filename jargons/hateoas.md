---
title: hateoas
tags:
- restful
---

HATEOAS, **Hypermedia As The Engine Of Application State**'in kısaltmasıdır. RESTful mimarisini diğer ağ uygulamaları mimarisinden ayıran önemli bir özelliktir.

HATEOAS destekleyen bir sistemde, bir REST isteğinin sonucunda, yaptığınız işlem ile bağlantılı olarak yapabileceğiniz diğer işlemlerin linkleri de gönderilir. Böylece istemci (client), sistem hakkında hiç bir bilgisi olmadığı halde bu linkleri takip ederek kolayca sistem ile etkileşime geçebilir. Bir web sitesinde kullanıcının aradığı sayfaya sitedeki bağlantıları tıklayarak ulaşması gibi düşünebilirsiniz.

Daha detaylı anlamak için aşağıdaki örneği ele alalım;

Aşağıdaki JSON nesnesi, HATEOAS destekleyen bir sunucuya yapılan HTTP GET işleminin sonucu olabilir.
<br /><br />
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

Yukarıda, müşteri numarasi bilinen bir hesabın detayını almak için sunucuya sorgu yaptığımızda, sunucu hesap detaylarıyla birlikte bu hesap ile ilgili yapabileceğimiz işlemlerin detayını ve linklerini de verdiğini görüyoruz. Bu mimari sayesinde, bir REST istemci, sadece başlangıç noktası bilinen bir API üzerinde, sunucudan sağlanan linkler sayesinde dinamik olarak uygun olan işlemleri keşfedip erişim sağlayabilir.
