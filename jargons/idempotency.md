---
title: idempotency
sameWith:
- idempotent
- idempotence
- safe methods
tags:
- restful
---

Idempotent method'lar, bir veya birden fazla çağırıldığında (kaç defa çağırıldığı fark etmeksizin) aynı sonucu veren method'lardır.

Daha iyi açıklama için eğer [RESTful](/rest) servis bakış açısından bakacak olursak, bir işlemin idempotent olması için, istemci ([client](/client)), sunucuya ([server](/server)) aynı isteği defalarca gönderse bile hepsinde aynı sonucu alması gerekir.

Örneğin POST method'u idempotent değildir; çünkü aynı sorguyu birden fazla çağırırsanız sunucu tarafında yaptığınız sorgu sayısı kadar yeni kayıt oluşturulabilir.

PUT ve DELETE method'ları idempotent olarak tanımlanırlar.

GET, HEAD, OPTIONS ve TRACE method'ları güvenli method'lar olarak tanımlanırlar. Yani bu method'lar sunucuda veri değiştirmek için değil sadece veri çekmek için kullanılırlar. Bu method'lar için aynı istek defalarca çağırılsa bile aynı sonucu verir bu da onları idempotent yapar.
