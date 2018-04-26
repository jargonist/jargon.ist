---
title: dotenv
tags:
- genel
- programlama
---

`dotenv` birçok dilin paket yöneticisinde bulunan, [environment variable](/environment-variable)'ları `.env` dosyasından almaya yarayan bir kütüphanedir. Örnek bir `.env` dosyası şu şekildedir;

```bash
ENV_VAR_1=value1
ENV_VAR_2=value2
```

[npm](/npm)'de bulunan `dotenv` kutuphanesi bu dosyada yazan degerleri `process.env` objesine atar. Uygulamanın herhangi bir noktasında da örnek olarak `ENV_VAR_1` değişkenine `process.env.ENV_VAR_1` şeklinde erişilebilir.

`dotenv` ayrıca [twelve factor](/twelve-factor) metodolojisinin 3. maddesine uymayı sağlamaktadır.
