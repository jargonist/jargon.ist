---
title: environment variable
tags:
- genel
---

`environment variable` programlama dillerinden bağımsız olarak [process](/process)'lerin çalıştığı ortam için geçerli değişkenlerdir. Bu değişkenler tüm [shell](/shell)'lerde bir şekilde tanımlanabilmektedir. Örnek olarak `bash` ve `zsh`'ta `export ENV_VAR=value` şeklinde tanımlanırken, `fish`'te `set -x ENV_VAR value` şeklinde tanımlanır.

Bu değişkenler `shell script`'te `$ENV_VAR` şeklinde okunabilirken, [Node.js](nodejs)'te `process.env.ENV_VAR` şeklinde okunabilir.
