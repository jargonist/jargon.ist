---
title: remote (git)
tags:
- git
---

remote, [clone](/clone)lanan [repository](/repository)nin kaynak repository ile senkronize kalmasına yardımcı bir [git](7git) komutudur. Başlangıçta kaynak belirtilmediyse komut `origin` repositorysini yazdırır, bu repositorylere tanımlanan standart isimdir.

```bash
git remote -v
origin  https://github.com/KULLANICI_ADIN/SENIN_REPON.git (fetch)
origin  https://github.com/KULLANICI_ADIN/SENIN_REPON.git (push)
```

Senkronize kalmak istediğiniz repository'ye `upstream` denir.

```
// Projeye upstream ekler.
git remote add upstreamhttps://github.com/ORJINAL_SAHIBI/ORJINAL_REPO.git
```

```
// Projeye upstream eklendiği doğrulandı.
git remote -v
origin    https://github.com/YOUR_USERNAME/YOUR_FORK.git (fetch)
origin    https://github.com/YOUR_USERNAME/YOUR_FORK.git (push)
upstream  https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (fetch)
upstream  https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (push)
```