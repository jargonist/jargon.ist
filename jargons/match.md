---
title: match
tags:
- genel
- programlama
- javascript
---

Bilgisayar bilimlerinde çeşitli amaçlar için kullanılan eşleştirme problemlerinin genel ismidir. Genellikle bir arz ile bir talebin eşleştirilmesi şeklinde olur.

```js
// sadece harfleri eşleştirmek (match) için oluşturduğumuz düzenli ifade (regular expression)
const regex = /[a-zA-z]{1}/g;

const string = 'J1591ArG0832oN';

console.log(string.match(regex)); // [ 'J', 'A', 'r', 'G', 'o', 'N' ]
```
