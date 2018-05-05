---
title: type inference
sameWith:
- inference
tags:
- genel
- type sistemi
---

`type inference` bir programlama dilinde bir ifadenin veri tipinin [implicit](/implicit) olarak belirlenmesine denmektedir. Örnek olarak;

```go
package main

import "fmt"

func main() {
  value := 12
  fmt.Printf("%v", value)
}
```

[Go](/go) derleyicisi `value` değişkeninin tipinin `int` olduğunu `infer` etmektedir.
