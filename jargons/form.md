---
title: form
tags:
- genel
- programlama
- html
---

Kullanıcıların verileri doldurabileceği boş alanlar içeren biçimlendirilmiş yapılardır.

Html ile oluşturulmuş bir form  örneği:

```html
<form action="/signup.php" method="post">
  Ad: <input type="text" name="fname"><br>
  Soyad: <input type="text" name="lname"><br>
  <input type="submit" value="Submit">
</form>
```