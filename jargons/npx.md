---
title: npx
tags:
- javascript
- genel
---

npx _(Node Package Executer)_, [NPM](/npm) ile birlikte gelen bir paket çalıştırma aracıdır.

Örneğin;

```bash
create-react-app my-app
```
komutunu çalıştırabilmesi için bunu ilk önce

```bash
npm i -g create-react-app
```
npm komutuyla 'create-react-app' i globale kurmamız gerekmektedir. Fakat 'npx' in en önemli özelliği, ilk önce bunun dosya yolumuzda olup olmadığını kontrol eder. Eğer bu paket daha önce kurulmamışsa, sizin için bu pakedin en son sürümünü kullanarak, yüklemeye gerek kalmadan komutu çalıştırabilir. Yani

```bash
npx create-react-app my-app
```
komutu ile direkt bir React uygulaması oluşturabilirsiniz.
