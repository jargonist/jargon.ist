---
title: .gitignore

tags:
- genel
- github
---

Mac otomatik olarak ürettiği gizli DS_Store isimli klasör veya C++ derleyicileri tarafından üretilen .o uzantılı obj dosyaları gibi. Hangi dosyaların versiyon kontrolü altında tutulacağına ve hangilerinin göz ardı edileceğine Git otomatik olarak karar vermez, bu kararı sizin vermeniz gerekir. 

*Kullandığınız geliştirme araçlarına bağlı olarak hangi dosyaların göz ardı edilebileceği ile ilgili GitHub'ın yayınladığı [derlemeye](https://github.com/github/gitignore) göz atabilirsiniz.*

.gitignore dosyasında kuralları nasıl tanımlayabileceğimize bir göz atalım

```

# Proje içindeki .jpg uzantılı tüm dosya türlerinin izlenmemesini sağladık
*.jpg

# Belirli bir dosya
log.xml

# Belirli bir dizin  
logs/errors/

# Belirli bir uzantı  
*.csv

# records/logs altında bulunan xml dosyaları hariç   
!records/logs/*.xml   

```