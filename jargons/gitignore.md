---
title: gitignore
tags:
- genel
- git
- github
---

_.gitignore_ dosyası [git](/git) [repository](/repository)'sinden hariç tutulacak dosyaların listesinin bulunduğu, repository'nin ana dizininde bulunan bir ayar dosyasıdır.

Örnek bir _.gitignore_ dosyası şu sekildedir:

```bash
# Belirli bir dosyayı es geçmek için
log.xml

# Belirli bir dizini es geçmek için
logs/errors/

# Belirli bir uzantılı dosyaları es geçmek için
*.csv

# log dosyalarını es geç ama error.log dosyaları hariç.
*.log
!errors.log
```

Yaygın kullanılan `.gitignore` içeriklerine ulaşmak için [gitignore.io](https://www.gitignore.io/) adresi incelenebilir.
