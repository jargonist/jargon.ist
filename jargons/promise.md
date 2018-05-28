---
title: promise
sameWith:
- promises
tags:
- javascript
---

Promise **nesnesi** eşzamansız olan ve ertelenen işlemlerde kullanılır. Bir Promise nesnesi henüz işlemin tamamlanmadığını ama sonradan tamamlanabileceğini gösterir.

Diyelim ki bir hamburgerciye gittiniz ve kasada siparişinizi verdiniz. Kasiyer de size siparişinizi hazırladıklarında haber vermek üzere bir elektronik alet teslim etti. Şu anda hamburger bizim için gelecekte elde edebileceğimiz bir değer. Elimizdeki aygıt da bu değere ulaşmamız için müessesenin bize verdiği sözün (işte promise) bir göstergesi. Aygıt bildirim alıncaya kadar bekleme (pending) durumundadır. Bildirim geldiğinde ise ya hamburgerimiz başarılı (resolved) bir şekilde hazırlanmıştır, ya da beklenenin dışına çıkarak başarısız (rejected) olmuştur. Başarılı durumda afiyetle yemeğimize yumuluruz tabii ki. Başarısız durum biraz daha nahoş olacaktır. Kasiyerle kavga ederek veya yeniden sipariş vererek hatalı durumu yönetmemiz (error handling) gerekir.

## Örnek Promise kullanımı:

```js
const sozVerdik = new Promise(function(resolve, reject){ // promise bir objedir o yüzden new öneki ile tanımladık
  if (herseyYolunda) {
    resolve('İşlem tamam!');
  } else {
    reject('Bir sıkıntı var...');
  }
})

sozVerdik.then(function(cevap){
  console.log(cevap) // 'İşlem tamam!' yazısını basar
}).catch(function(hata){
  console.log(hata) // 'Bir sıkıntı var...' yazısını basar
})
```
