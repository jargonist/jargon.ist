---
title: imperative programming
sameWith:
- imperative
tags:
- genel
---

`imperative programming` kalıbı uygulamanın [state](/state)'ini degistirmek için emirsel bir şekilde kod yazmaya denir. Bu tarz programlamada geliştirici programa ne yapacağını adım adım, tek tek belirtmektedir. Bu terimin zıttı olarak görülen [declarative programming](/declarative-programming)'de ise geliştirici bir işlem sonucu tanımlar, ama bu işlem sonucuna programın nasıl ulaşacağını tanimlamaz.

Bir container içindeki butona tıklandığında, bu container'daki `div`'e `class` ekleyen, tekrar tıklandığında ise kaldıran bir JavaScript kodu imperative olarak şu şekilde yazılabilir;

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

Aynı kod ise [React](/reactjs) ile [declarative](/declarative-programming) olarak ise şu şekilde yazılabilir;

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
