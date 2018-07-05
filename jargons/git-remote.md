---
title: remote (git)
tags:
- git
---

remote, [clone](/clone)'lanan [repository](/repository)'nin kaynak repository ile senkronize kalmasına yardımcı bir [git](/git) komutudur. Başlangıçta kaynak belirtilmediyse komut `origin` repository'sini yazdırır, bu repository'lere tanımlanan standart isimdir.

```bash
git remote -v
origin  https://github.com/KULLANICI_ADIN/SENIN_REPON.git (fetch)
origin  https://github.com/KULLANICI_ADIN/SENIN_REPON.git (push)
```

Senkronize kalmak istediğiniz repository'ye genellikle `upstream` denir.

```bash
# Projeye upstream ekler.
git remote add upstream https://github.com/ORJINAL_REPO_SAHIBI/ORJINAL_REPO.git
```

```bash
# Projeye upstream eklendiği doğrulandı.
git remote -v
origin    https://github.com/KULLANICI_ADIN/SENIN_REPON.git (fetch)
origin    https://github.com/KULLANICI_ADIN/SENIN_REPON.git (push)
upstream  https://github.com/ORJINAL_REPO_SAHIBI/ORJINAL_REPO.git (fetch)
upstream  https://github.com/ORJINAL_REPO_SAHIBI/ORJINAL_REPO.git (push)
```
