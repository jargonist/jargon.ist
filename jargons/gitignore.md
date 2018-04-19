---
title: gitignore
tags:
- genel
- git
- github
---

_.gitignore_ dosyası git reposundan hariç tutulacak dosyaların listesinin bulunduğu repo ana dizinde bulunan bir ayar dosyasıdır.

Örnek bir _.gitignore_ dosyası şu sekildedir;

```
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
