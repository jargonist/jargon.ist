---
title: leaky abstraction
tags:
- programlama
- genel
---

Kullanılması beklenen [abstraction](/abstraction) katmanının yetersiz kalması ve bu sebeple tekrardan daha alt seviyedeki implementasyonun kullanılması durumudur. Yaygın örneklerinden biri ORM'lerdir.

ORM'ler ilişkisel veritabanlarına veri yazıp, veri okumayı kolaylaştırmaktadır. Ancak tüm SQL sorguları ORM kütüphanesinin desteğiyle ifade edilemeyebilir, program içinde ham SQL sorgularının yazılmasını gerektirebilir. Bu durumda yeterli soyutlama sağlanamamış olur. Bu leaky abstraction'a bir örnektir.
