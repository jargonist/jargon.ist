---
title: idempotency
sameWith:
- idempotent
- idempotence
- safe methods
tags:
- restful
---

Idempotent methodlar, bir veya birden fazla çağırıldığında (kaç defa çağırıldığı fark etmeksizin) aynı sonucu veren methodlardır.

Daha iyi açıklama için eğer RESTful servis bakış açısından bakacak olursak, bir işlemin idempotent olması için, istemci sunucuya aynı isteği defalarca gönderse bile hepsinde aynı sonucu alması gerekir.

Örneğin POST methodu idempotent değildir çünkü aynı sorguyu birden fazla çağırırsanız sunucu tarafında yaptığınız sorgu sayısı kadar yeni kayıt oluşturulabilir.

PUT ve DELETE methodları idempotent olarak tanımlanırlar.

GET, HEAD, OPTIONS ve TRACE methodları güvenli methodlar olarak tanımlanırlar. Yani bu methodlar sunucuda veri değiştirmek için değil sadece veri çekmek için kullanılırlar. Bu methodlar için aynı istek defalarca çağırılsa bile aynı sonucu verir bu da onları idempotent yapar.
