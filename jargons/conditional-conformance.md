---
title: Conditional Conformance
tags:
- swift
---

Türkçesi, şartlı uyumluluk olarak geçebilir. Ancak türkçesi ile google'da bilgi bulmak pek mümkün değil.
Apple'ın Swift 4.1 ile duyurduğu bir özelliktir.

Generic bir type'ın bir protokole uyması için, onun tüm alt öğelerinin de bu protokole uyması gerektiği durumdur.

Swift özelinde bir örnek vermek gerekirse;

```swift
extension Array: Equatable where Element: Equatable {
  static func ==(lhs: Array<Element>, rhs: Array<Element>) -> Bool { ... }
}
```

Daha detaylı incelemek için proposal incelenebilir;

[Conditinal Conformance](https://github.com/apple/swift-evolution/blob/master/proposals/0143-conditional-conformances.md)
