---
title: diff
tags:
- genel
- git
---

`diff` bilgisayar bilimlerinde genel olarak iki kaynak arasındaki farkı bulmaya denir. Bu iki kaynak birbiri ile karşılaştırılabilen herhangi iki tür olabilir.

Örneğin diff [git](/git) için mevcut çalışma alanındaki değişiklikleri gösteren bir komuttur.

```
git diff
```

```diff
diff --git a/jargons/git.md b/jargons/git.md
index af4ce9d..de50a6f 100644
--- a/jargons/git.md
+++ b/jargons/git.md
@@ -5,7 +5,7 @@ tags:
 - git
 ---

-git, bir versiyon kontrol sistemidir. Sürüm kontrolü, bir ya da daha fazla dosya üzerinde yapılan değişiklikleri kaydeden ve daha sonra belirli bir sürüme geri dönebilmenizi sağlayan bir sistemdir.
+git, bir versiyon kontrol sistemidir. Sürüm kontrolü, bir ya da daha fazla dosya üzerinde yapılan değişiklikleri kaydeden ve daha sonra ise belirli bir sürüme geri dönebilmenizi sağlayan bir sistemdir.
```
