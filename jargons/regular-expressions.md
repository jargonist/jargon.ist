---
title: regular expressions
sameWith:
- regex
- regexp
tags:
- programlama
- genel
- javascript
---

Türkçe olarak `düzenli ifadeler` anlamına gelmektedir. Tek bir [programlama](/k/programlama) diline özel değildir. Tüm programlama dillerinin bir parçasıdır. [JavaScript](/k/javascript) dilinde düzenli ifadeler aynı zamanda bir obje ([object](/object)) dir.

Düzenli ifadeler metin ([string](/string)) üzerinde belirli bir desene ([pattern](/pattern)) sahip karakter kombinasyonlarını eşleştirmek ([match](/match)) etmek için kullanılır.

Düzenli ifadelerin yapısı genellikle bir string deseni ve bu desenin nasıl eşleştireleceğini belirten bir bayrak ([flag](/flag)) den oluşur. `/pattern/flags`

Oluşturma yapısına örnek olarak:

```js
const regex = /ab+c/;
```

JavaScript kullanıyorsak aşağıdaki gibi de tanımlanabilir.

```js
const regex = new RegExp('[0-9]', 'g');
```

Düzenli ifadeler bazı özel karakterlere sahiptir. Bunları belirli başlıklar altında inceleyecek olursak:

* Karakter Sınıfları - [Character](/char) [Class](/class)es
* Karakter Dizileri - [Character Set](/character-set)s
* Değişim - Alteration
* Sınırlar - Boundaries
* Gruplama ve geriye dönük referanslar - Grouping and back references
* Niceleyiciler - Quantifiers
* Koşullar - Assertions

Karakter Sınıfları:

<!-- prettier-ignore -->
| Karakter | Eşleşmeler - Matches |
| --- | --- |
| `.`  | Herhangi bir karakter ile eşleşir. |
| `\d` | Tek bir [digit](/digit) karakter ile eşleşir. Eşdeğeri `[0-9]`. |
| `\D` | Digit **olmayan** tek bir karakter ile eşleşir. Eşdeğeri `[^0-9]`. |
| `\w` | [Alphanumeric](/alphanumeric) bir kelimede tek bir karakter ile eşleşir. Bunlara `_` de dahildir. Eşdeğeri `[A-Za-z0-9_]`. |
| `\W` | Alphanumeric **olmayan** bir karakter ile eşleşir. Eşdeğeri `[^A-Za-z0-9_]`. |
| `\s` | Tek bir boşluk karakteri ile eşleşir. Örneğin: space ( ) , tab (`\t`), [form](/form) feed (`\f`), line feed (`\n`) ve unicode spaces (`U+0020`). |
| `\S` | Boşluk olmayan bir karakter ile eşleşir. |

Karakter Dizileri:

* `[abcd]` karakter dizisi {`a`, `b`, `c`, `d`} karakterlerinden herhangi biri ile eşleşecektir. Aynı zamanda `[a-d]` şeklinde de yazılabilir.

* `[^abcd]` karakter dizisi {`a`, `b`, `c`, `d`} **olmayan** herhangi bir karakter ile eşleşecektir. Aynı zamanda `[^a-d]` şeklinde de yazılabilir.

Değişim:

`|` sembolü düzenli ifadelerde iki şeyden birisi ile eşleşmek için kullanılmaktadır. Örneğin: `a|b`, `a` veya `b` ile eşleşecektir.

Sınırlar:

<!-- prettier-ignore -->
| Karakter | Eşleşmeler - Matches |
| --- | --- |
| `^`  | String'in **başı** ile eşleşir. Eğer multiline flag'ı aktif ise aynı zamanda line break (`\n`) karakterinden hemen **sonrası** ile de eşleşir. |
| `$`  | String'in **sonu** ile eşleşir. Eğer multiline flag'ı aktif ise aynı zamanda line break (`\n`) karakterinin hemen **öncesi** ile de eşleşir. |
| `\b` | Bir harf ve boşluk arasındaki sıfır genişlikli bir sözcük sınırı. |
| `\B` | İki harf arasında veya iki boşluk arasında sıfır genişlikli bir sözcük olmayan sınırla eşleşir. |

Gruplama ve geriye dönük referanslar:

* `(a)` {`a`} ile eşleşir ve bu eşleşmeyi **hatırlar**. Bunlara yakalama grupları (capturing groups) denir.

* `(?:a)` {`a`} ile eşleşir ancak bu eşleşmeyi **hatırlamaz**. Bunlara yakalamayan gruplar (non-capturing groups) denir.

* `\n` n pozitif bir değer olmak üzere, n. eşleşmesinin değerine dönük bir referanstır.

Niceleyiciler:

* `*` Kendinden önceki karakterden **en az `0`** tane veya daha fazla olması durumunda eşleşme gerçekleştirir. Örneğin: `a*` a karakterinden 0 tane veya daha fazla olmasını beklemektedir.

* `+` Kendinden önceki karakterden **en az `1`** tane veya daha fazla olması durumunda eşleşme gerçekleştirir. Örneğin: `a+` a karakterinden **en az 1** tane veya daha fazla olmasını beklemektedir.

* `?` Kendinden önceki karakterden `0` veya `1` tane olması durumunda eşleşme gerçekleştirir. Örneğin: `a?` a karakterinden 0 veya 1 tane olmasını beklemektedir.

* `{n}` n pozitif bir sayı olmak üzere. Kendinden önceki karakterden tam olarak `n` tane olması durumunda eşleşme gerçekleştirir. Örneğin: `a{5}` a karakterinden 5 tane olmasını beklemektedir.

* `{n,}` n pozitif bir sayı olmak üzere. Kendinden önceki karakterden **en az `n`** tane olması durumunda eşleşme gerçekleştirir. Örneğin: `a{5,}` a karakterinden **en az 5** tane olmasını beklemektedir.

* `{n,m}` n ve m pozitif birer sayı olmak üzere. Kendinden önceki karakterden **en az `n`** ve **en fazla `m`** tane olması durumunda eşleşme gerçekleştirir. Örneğin: `a{5,10}` a karakterinden **en az 5** ve **en fazla 10** tane olmasını beklemektedir.

Koşullar:

* `a(?=b)` a dan hemen sonra b **geliyor** ise eşleşme gerçekleştirir.

* `a(?!b)` a dan hemen sonra b **gelmiyor** ise eşleşme gerçekleştirir.

Örnek 1:

<!-- prettier-ignore -->
```js
// içinde yazım sırası önem arzeder şekilde `jargon` kelimesi bulunan string'leri arayalım.
const regex = /.*j.*a.*r.*g.*o.*n.*/;

const string1 = "asdasjsdaqwdasrasdasgasdasdaoasdasdn",
      string2 = "x3asd11qzğo1maasds1",
      string3 = "jargon",
      string4 = "Jargon";

console.log(
  regex.test(string1) + " " +
  regex.test(string2) + " " +
  regex.test(string3) + " " +
  regex.test(string4)
); // true false true false
```

İlk string'e bakacak olursak "asdas`j`sd`a`qwdas`r`asdas`g`asdasda`o`asdasd`n`" içerisinde `jargon` barındırmakta. Sonuç: `true`

İkinci string `jargon` barındırmıyor. Sonuç: `false`

Üçüncü string'in kendisi zaten `jargon`. Sonuç: `true`

Dördüncü string `jargon` barındırıyor fakat `J` harfi büyük. Sonuç: `false`

Örnek 2:

<!-- prettier-ignore -->
```js
// herhangi bir karakterden yine aynı karaktere kadar olan kısımın arasında kalan karakterleri match edelim.
const regex1 = /(.).*\1/;

const string1 = "wxyz",
      string2 = "avyTxyzT",
      string3 = "wXy123sazX",
      string4 = "WxyWz12wqd";

console.log("Eşleşen:", string1.match(regex1)); // null
console.log("Eşleşen:", string2.match(regex1)[0]); // yTxy
console.log("Eşleşen:", string3.match(regex1)[0]); // Xy123sazX
console.log("Eşleşen:", string4.match(regex1)[0]); // WxyW

// belirli bir karakter dizisi elemanlarından herhangi biri ile başlayan ve yine aynı karakter ile biten stringleri bulalım.
const regex2 = /^([JARGON]).*\1$/;

const string5 = "JaskjdhqwonaslnasJ", // J ile başlayıp J ile bitiyor
      string6 = "xhasd8jsaklahdasjzX8", // x ile başlayıp 8 ile bitiyor
      string7 = "GXy123sazG", // G ile başlayıp G ile bitiyor
      string8 = "AxyWz12wqN", // A ile başlayıp N ile bitiyor
      string9 = "RR"; // R ile başlayıp R ile bitiyor

console.log(regex2.test(string5)); // true
console.log(regex2.test(string6)); // false
console.log(regex2.test(string7)); // true
console.log(regex2.test(string8)); // false
console.log(regex2.test(string9)); // true
```
