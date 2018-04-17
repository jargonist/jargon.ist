---
title: commonjs
tags:
- javascript
- modules
---

[AMD](/amd)'e bir alternatiftir ve [Node.js](/nodejs)'in mevcut modül sistemidir.

AMD'de

```js
require(['x.js', 'y.js', 'z.js'], function(x, y, z) {
  // x, y, z yüklendi.
});
```

... şeklinde olan kod CommonJS ile

```js
const x = require('x.js');
const y = require('y.js');
const z = require('z.js');

// x, y, z yüklendi.
```

... şeklinde tanımlanır.

[ECMAScript 6](/ecmascript) ile bu yöntemin yerini [import](/import) almıştır.
