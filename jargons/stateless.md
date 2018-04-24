---
title: stateless
sameWith:
- statelessness
tags:
- restful
---

Stateless, [RESTful](/rest) sistemlerde durum bilgisinin sunucu ([server](/server)) tarafında değil de istemci ([client](/client)) tarafında yönetilmesi gerektiğini belirten bir kısıtlamadır. Sunucu, yaptığınız her sorguda sanki ilk defa sorgu yapıyormuşsunuz gibi davranır ve yaptığınız önceki sorgularla ilgili bir şey hatırlamaz.

[REST](/rest) uygulamalarda, her sorgu sunucu tarafından anlaşılmak için yeterli bütün bilgiyi bulundurmak zorundadır. Geleneksel web sitelerindeki gibi oturum [session](/session) bilgisini sunucu tarafında oluşturup yönetmek bu kuralı ihlal ettiği için, bütün oturum durumu tamamen istemci tarafından yönetilmelidir.

Eğer istemci, yetkilendirme [authentication](/authentication) gerektiren bir kaynağa erişmek isterse, bütün sorgular kimlik doğrulama ve yetkilendirme için gerekli bilgileri bulundurmak zorundadır.
