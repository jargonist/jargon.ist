---
title: variable shadowing
tags:
- programlama
- genel
---

Bir kapsamdaki değişkenin, daha üst kapsamdaki değişken ile aynı isimde olabilmesi durumuna denir.

```php
<?php

$name = 'Foo'; // Bir alt kapsamda shadow edilecek olan değişken

{
    $name = 'Bar'; // Bir üst kapsamdaki $name değişkenini maskeler
    echo $name . PHP_EOL;
}

echo $name . PHP_EOL;
```

Programın çıktısı şu şekilde olacaktır:

```
Bar
Foo
```
