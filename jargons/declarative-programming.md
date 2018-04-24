---
title: declarative programming
sameWith:
- declarative
tags:
- genel
---

`declarative programming` [imperative programming](/imperative-programming)'in zıttı bir şekilde, yazılımcının tüm sürecin nasıl işleyeceğini tek tek yazmadığı, onun yerine neye ulaşılmak istendiğini tanımladığı programlama paradigmasıdır. Örnek vermek gerekirse [React](/reactjs), declarative bir [UI](/ui) [framework](/framework)'üdür.

Bir [container](/container) içindeki butona tıklandığında, bu container'daki `div`'e `class` ekleyen, tekrar tıklandığında ise kaldıran bir [JavaScript](/javascript) kodu [imperative](/imperative-programming) olarak şu şekilde yazılabilir:

```js
const className = 'is-open';
const container = document.getElementById('#container');

const div = document.createElement('div');
div.innerHTML = 'Hello world';

const button = document.createElement('button');
button.onClick = () => {
  if (div.classList.contains(className)) {
    div.classList.remove(className);
    return;
  }

  div.classList.add(className);
};
button.innerHTML = 'Aç / Kapa';

container.appendChild(button);
container.appendChild(div);
```

Aynı kod ise [React](/reactjs) ile `declarative` olarak ise şu şekilde yazılabilir:

```jsx
class Foo extends PureComponent {
  state = {
    isOpen: false,
  };

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  return() {
    const { isOpen } = this.state;

    return (
      <div className="container">
        <button onClick={this.handleClick}>Aç / Kapa</button>
        <div className={isOpen ? 'is-open' : ''}>Hello world</div>
      </div>
    );
  }
}
```
