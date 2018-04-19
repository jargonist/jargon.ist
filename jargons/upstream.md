---
title: upstream
tags:
- genel
- git
- github
---

Upstream forkladığınız git reposunun orijinal depoda yapılan değişiklikleri senkronize etmenizi sağlar.

Komut satırı şu sekildedir;

```
git remote -v 

git remote add upstream ORJİNAL REPO URL'Sİ

git remote -v 

git fetch upstream

git merge upstream/master

git push origin master
```
